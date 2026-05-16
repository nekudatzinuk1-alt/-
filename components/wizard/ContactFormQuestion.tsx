'use client';

import { useState } from 'react';
import { Lock } from 'lucide-react';
import type { ContactInfo } from './types';

type Props = {
  title: string;
  subtitle?: string;
  value: ContactInfo | undefined;
  onChange: (info: ContactInfo, isValid: boolean) => void;
};

type FieldErrors = Partial<Record<keyof ContactInfo, string>>;

function validate(info: ContactInfo): FieldErrors {
  const errors: FieldErrors = {};
  if (info.fullName.trim().length < 2) {
    errors.fullName = 'אנא הזן שם מלא (לפחות 2 תווים)';
  }
  const phoneDigits = info.phone.replace(/\D/g, '');
  if (!/^0\d{9}$/.test(phoneDigits)) {
    errors.phone = 'מספר טלפון לא תקין (10 ספרות, מתחיל ב-0)';
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(info.email.trim())) {
    errors.email = 'כתובת אימייל לא תקינה';
  }
  return errors;
}

export default function ContactFormQuestion({ title, subtitle, value, onChange }: Props) {
  const [touched, setTouched] = useState<Partial<Record<keyof ContactInfo, boolean>>>({});

  const current: ContactInfo = value ?? { fullName: '', phone: '', email: '' };
  const errors = validate(current);

  const update = (field: keyof ContactInfo, val: string) => {
    const next = { ...current, [field]: val };
    const nextErrors = validate(next);
    onChange(next, Object.keys(nextErrors).length === 0);
  };

  const showError = (field: keyof ContactInfo) => touched[field] && errors[field];

  return (
    <div className="w-full">
      <h2 className="text-2xl md:text-3xl font-bold text-brand-text text-center mb-3 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-brand-text-muted text-center mb-8 text-base md:text-lg">{subtitle}</p>
      )}

      <div className="space-y-4">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-brand-text mb-2">
            שם מלא
          </label>
          <input
            id="fullName"
            type="text"
            inputMode="text"
            autoComplete="name"
            value={current.fullName}
            onChange={(e) => update('fullName', e.target.value)}
            onBlur={() => setTouched((t) => ({ ...t, fullName: true }))}
            placeholder="ישראל ישראלי"
            className="w-full text-brand-text placeholder:text-brand-text-light rounded-xl bg-white border border-brand-border px-4 py-3.5 focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition"
            dir="rtl"
          />
          {showError('fullName') && (
            <p className="text-red-500 text-xs mt-1.5">{errors.fullName}</p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-brand-text mb-2">
            טלפון
          </label>
          <input
            id="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={current.phone}
            onChange={(e) => update('phone', e.target.value)}
            onBlur={() => setTouched((t) => ({ ...t, phone: true }))}
            placeholder="050-0000000"
            className="w-full text-brand-text placeholder:text-brand-text-light rounded-xl bg-white border border-brand-border px-4 py-3.5 focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition"
            dir="ltr"
          />
          {showError('phone') && (
            <p className="text-red-500 text-xs mt-1.5">{errors.phone}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-brand-text mb-2">
            אימייל
          </label>
          <input
            id="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            value={current.email}
            onChange={(e) => update('email', e.target.value)}
            onBlur={() => setTouched((t) => ({ ...t, email: true }))}
            placeholder="name@example.com"
            className="w-full text-brand-text placeholder:text-brand-text-light rounded-xl bg-white border border-brand-border px-4 py-3.5 focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition"
            dir="ltr"
          />
          {showError('email') && (
            <p className="text-red-500 text-xs mt-1.5">{errors.email}</p>
          )}
        </div>

        <div className="flex items-start gap-2 pt-2 text-xs text-brand-text-light">
          <Lock className="w-3.5 h-3.5 mt-0.5 shrink-0 text-brand-gold" />
          <span>המידע שלך מוצפן ולא יישלח לאף יועץ עד שתאשר</span>
        </div>
      </div>
    </div>
  );
}
