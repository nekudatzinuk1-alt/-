'use client';

import { useRouter } from 'next/navigation';
import { CheckCircle2, Clock, Lock, MessageCircle, Star } from 'lucide-react';
import type { Advisor } from './types';

type Props = {
  userName: string;
  advisor: Advisor;
  whatsappMessage: string;
};

export default function WizardResults({ userName, advisor, whatsappMessage }: Props) {
  const router = useRouter();

  const whatsappUrl = `https://wa.me/${advisor.whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  const handleOpenWhatsApp = () => {
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleLater = () => {
    router.push('/');
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-10">
      <div className="text-center mb-8">
        <div className="flex justify-center mb-5">
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center"
            style={{ background: 'rgba(34,197,94,0.12)' }}
          >
            <CheckCircle2 className="w-12 h-12 text-[#22C55E]" strokeWidth={2} />
          </div>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-brand-text leading-tight">
          {userName}, מצאנו לך יועץ מתאים!
        </h1>
        <p className="text-brand-text-muted mt-3 text-base md:text-lg">
          אבי משה ייצור איתך קשר בהקדם, או שתוכל לפנות אליו עכשיו דרך WhatsApp
        </p>
      </div>

      <div
        className="p-5 md:p-8 bg-brand-surface border border-brand-border-gold rounded-3xl shadow-[0_8px_32px_rgba(200,150,62,0.12)]"
      >
        <div className="flex justify-center mb-5">
          <div
            className="flex items-center justify-center text-white font-semibold"
            style={{
              width: '96px',
              height: '96px',
              borderRadius: '50%',
              backgroundColor: advisor.initialsColor,
              fontSize: '36px',
            }}
          >
            {advisor.initials}
          </div>
        </div>

        <h2 className="text-center text-brand-text text-[28px] font-semibold">
          {advisor.name}
        </h2>
        <p className="text-center mt-1 text-brand-text-muted text-base">
          {advisor.specialty}
        </p>

        <div className="flex items-center justify-center gap-1 mt-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={20}
              fill={i < advisor.rating ? '#C8963E' : 'none'}
              color="#C8963E"
            />
          ))}
        </div>

        <p className="text-center mt-2 text-sm text-brand-text-light">
          {advisor.experience}
        </p>

        <div className="flex flex-col items-center gap-2.5 mt-5">
          <span
            className="inline-flex items-center gap-1.5"
            style={{
              background: 'rgba(34,197,94,0.1)',
              border: '1px solid rgba(34,197,94,0.3)',
              color: '#15803D',
              padding: '8px 16px',
              borderRadius: '999px',
              fontSize: '13px',
            }}
          >
            <Clock size={14} />
            ייצור איתך קשר בתוך שעה
          </span>

          <span className="inline-flex items-center bg-brand-gold-soft border border-brand-border-gold text-brand-gold-dark px-4 py-2 rounded-full text-[13px]">
            התאמה {advisor.matchScore}% לצרכים שלך
          </span>
        </div>
      </div>

      <div className="mt-8 flex flex-col items-center gap-3">
        <button
          type="button"
          onClick={handleOpenWhatsApp}
          className="w-full md:w-auto inline-flex items-center justify-center gap-2 transition hover:opacity-90"
          style={{
            background: '#25D366',
            color: 'white',
            padding: '16px 32px',
            borderRadius: '12px',
            fontSize: '17px',
            fontWeight: 600,
          }}
        >
          <MessageCircle size={20} />
          פתח שיחת WhatsApp עם אבי
        </button>

        <button
          type="button"
          onClick={handleLater}
          className="text-brand-text-muted hover:text-brand-text transition px-6 py-3 text-sm bg-transparent border-0"
        >
          אני אחזור לזה מאוחר יותר
        </button>
      </div>

      <div className="mt-6 flex items-center justify-center gap-1.5">
        <Lock size={12} className="text-brand-text-light" />
        <p className="text-xs text-brand-text-light text-center">
          המידע שלך נשמר במערכת ואבי יקבל התראה מיידית
        </p>
      </div>
    </div>
  );
}
