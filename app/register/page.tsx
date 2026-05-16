'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Users, TrendingUp, Shield } from 'lucide-react';
import Logo from '@/components/Logo';

export default function RegisterPage() {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [region, setRegion] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [licenseNumber, setLicenseNumber] = useState('');
  const [yearsExperience, setYearsExperience] = useState('');
  const [description, setDescription] = useState('');
  const [photoName, setPhotoName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const regions = ['תל אביב', 'ירושלים', 'חיפה', 'השרון', 'דרום', 'צפון'];
  const specialties = [
    'משכנתא חדשה',
    'מחזור משכנתא',
    'הלוואה כנגד נכס',
    'יועץ כללי',
  ];

  const MAX_DESCRIPTION = 200;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div
      className="w-full min-h-screen bg-brand-bg"
      dir="rtl"
    >
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/92 backdrop-blur-md border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between flex-row-reverse">
          <Logo variant="light" showTagline={true} size="md" />
          <ul className="flex gap-8 items-center">
            <li>
              <Link
                href="/"
                className="text-brand-text-muted hover:text-brand-gold font-medium transition"
              >
                בית
              </Link>
            </li>
            <li>
              <Link
                href="/register"
                className="text-brand-gold font-semibold border-b-2 border-brand-gold pb-1 transition"
              >
                הצטרפו כיועץ
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Form Section */}
      <section className="relative py-16 px-6 overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-black text-brand-text mb-4">
              הצטרפו כ<span className="text-brand-gold">יועץ מוביל</span>
            </h1>
            <p className="text-lg md:text-xl text-brand-text-muted">
              מלאו את הפרטים ונחזור אליכם תוך 24 שעות
            </p>
          </div>

          {/* Hero / Benefits */}
          <div className="max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-brand-text text-center mb-8">
              הצטרפו ל-<span className="text-brand-gold">150+</span> יועצים מובילים
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-brand-surface border border-brand-border rounded-2xl p-6 text-center hover:border-brand-border-gold hover:shadow-md transition-all duration-300">
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 rounded-full bg-brand-gold-soft flex items-center justify-center">
                    <Users className="w-7 h-7 text-brand-gold" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-brand-text mb-2">קהל לקוחות מוכן</h3>
                <p className="text-sm text-brand-text-muted leading-relaxed">
                  גישה ל-2,500+ לקוחות פוטנציאליים
                </p>
              </div>

              <div className="bg-brand-surface border border-brand-border rounded-2xl p-6 text-center hover:border-brand-border-gold hover:shadow-md transition-all duration-300">
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 rounded-full bg-brand-gold-soft flex items-center justify-center">
                    <TrendingUp className="w-7 h-7 text-brand-gold" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-brand-text mb-2">הגדילו הכנסות</h3>
                <p className="text-sm text-brand-text-muted leading-relaxed">
                  יועצים מדווחים על 30% יותר לקוחות
                </p>
              </div>

              <div className="bg-brand-surface border border-brand-border rounded-2xl p-6 text-center hover:border-brand-border-gold hover:shadow-md transition-all duration-300">
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 rounded-full bg-brand-gold-soft flex items-center justify-center">
                    <Shield className="w-7 h-7 text-brand-gold" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-brand-text mb-2">פרופיל מאומת</h3>
                <p className="text-sm text-brand-text-muted leading-relaxed">
                  תג אמינות שמגביר סגירות
                </p>
              </div>
            </div>

            <p className="text-center mt-8 text-lg md:text-xl font-bold text-brand-gold-dark">
              הצטרפות חינמית ל-3 חודשים ראשונים
            </p>
          </div>

          {/* Form + Sidebar grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Card */}
          <div className="md:col-span-2 bg-brand-surface border border-brand-border rounded-2xl p-8 md:p-10 shadow-sm">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="text-7xl mb-6">✅</div>
                <h2 className="text-3xl font-bold text-brand-gold-dark mb-4">
                  קיבלנו את פרטיך!
                </h2>
                <p className="text-brand-text-muted text-lg leading-relaxed mb-8">
                  נחזור אליך תוך 24 שעות
                </p>
                <Link
                  href="/"
                  className="inline-block bg-brand-gold text-white py-3 px-8 rounded-lg font-bold transition-all duration-300 hover:bg-brand-gold-dark shadow-[0_4px_14px_rgba(200,150,62,0.25)] hover:shadow-[0_6px_20px_rgba(200,150,62,0.35)]"
                >
                  חזרה לעמוד הבית
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 text-right">
                {/* Full Name */}
                <div>
                  <label className="block text-brand-text font-medium mb-2 text-sm">
                    שם מלא
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="ישראל ישראלי"
                    className="w-full px-4 py-3 bg-white border border-brand-border rounded-lg focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 text-right text-brand-text placeholder:text-brand-text-light transition-all duration-300"
                  />
                </div>

                {/* Phone & Email — side by side on md+ */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-brand-text font-medium mb-2 text-sm">
                      טלפון
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="050-0000000"
                      className="w-full px-4 py-3 bg-white border border-brand-border rounded-lg focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 text-right text-brand-text placeholder:text-brand-text-light transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-brand-text font-medium mb-2 text-sm">
                      אימייל
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@example.com"
                      className="w-full px-4 py-3 bg-white border border-brand-border rounded-lg focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 text-right text-brand-text placeholder:text-brand-text-light transition-all duration-300"
                      dir="ltr"
                    />
                  </div>
                </div>

                {/* Region & Specialty */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-brand-text font-medium mb-2 text-sm">
                      אזור פעילות
                    </label>
                    <select
                      required
                      value={region}
                      onChange={(e) => setRegion(e.target.value)}
                      className="w-full px-4 py-3 bg-white border border-brand-border rounded-lg focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 text-right text-brand-text transition-all duration-300"
                    >
                      <option value="">בחרו אזור</option>
                      {regions.map((r) => (
                        <option key={r} value={r}>
                          {r}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-brand-text font-medium mb-2 text-sm">
                      התמחות
                    </label>
                    <select
                      required
                      value={specialty}
                      onChange={(e) => setSpecialty(e.target.value)}
                      className="w-full px-4 py-3 bg-white border border-brand-border rounded-lg focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 text-right text-brand-text transition-all duration-300"
                    >
                      <option value="">בחרו התמחות</option>
                      {specialties.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* License & Years */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-brand-text font-medium mb-2 text-sm">
                      מספר רישיון בנק ישראל
                    </label>
                    <input
                      type="text"
                      required
                      value={licenseNumber}
                      onChange={(e) => setLicenseNumber(e.target.value)}
                      placeholder="12345"
                      className="w-full px-4 py-3 bg-white border border-brand-border rounded-lg focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 text-right text-brand-text placeholder:text-brand-text-light transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-brand-text font-medium mb-2 text-sm">
                      שנות ניסיון
                    </label>
                    <input
                      type="number"
                      required
                      min="0"
                      max="60"
                      value={yearsExperience}
                      onChange={(e) => setYearsExperience(e.target.value)}
                      placeholder="10"
                      className="w-full px-4 py-3 bg-white border border-brand-border rounded-lg focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 text-right text-brand-text placeholder:text-brand-text-light transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label className="block text-brand-text font-medium mb-2 text-sm">
                    תיאור קצר
                  </label>
                  <textarea
                    rows={4}
                    maxLength={MAX_DESCRIPTION}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="ספרו על עצמכם ועל ההתמחות שלכם..."
                    className="w-full px-4 py-3 bg-white border border-brand-border rounded-lg focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 text-right text-brand-text placeholder:text-brand-text-light transition-all duration-300 resize-none"
                  />
                  <div className="text-left mt-1 text-xs text-brand-text-light">
                    {description.length}/{MAX_DESCRIPTION}
                  </div>
                </div>

                {/* Photo Upload */}
                <div>
                  <label className="block text-brand-text font-medium mb-2 text-sm">
                    העלאת תמונה
                  </label>
                  <label className="flex items-center justify-between gap-3 w-full px-4 py-3 bg-white border border-dashed border-brand-border-gold rounded-lg cursor-pointer hover:border-brand-gold transition-all duration-300">
                    <span className="text-brand-text-light text-sm truncate">
                      {photoName || 'לא נבחר קובץ'}
                    </span>
                    <span className="bg-brand-gold-soft text-brand-gold-dark px-4 py-1.5 rounded-md text-sm font-semibold border border-brand-border-gold shrink-0">
                      בחירת קובץ 📷
                    </span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) =>
                        setPhotoName(e.target.files?.[0]?.name ?? '')
                      }
                      className="hidden"
                    />
                  </label>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-brand-gold text-white py-4 rounded-xl text-lg font-bold transition-all duration-300 hover:bg-brand-gold-dark shadow-[0_6px_24px_rgba(200,150,62,0.3)] hover:shadow-[0_10px_32px_rgba(200,150,62,0.4)] hover:-translate-y-0.5 mt-4"
                >
                  שלח בקשת הצטרפות
                </button>

                <p className="text-center text-xs text-brand-text-light mt-2">
                  בלחיצה על הכפתור אתם מסכימים לתנאי השימוש שלנו
                </p>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <aside className="md:col-span-1 space-y-6">
            {/* Dynamic counter */}
            <div className="bg-brand-surface border border-brand-border-gold rounded-2xl p-6 text-center shadow-sm">
              <div className="text-5xl font-black text-brand-gold mb-2">
                47
              </div>
              <p className="text-brand-text font-semibold leading-snug">
                יועצים הצטרפו החודש
              </p>
            </div>

            {/* Urgency message */}
            <div className="bg-red-50 border border-red-200 rounded-2xl p-5 text-center">
              <p className="text-red-700 font-bold text-base leading-snug">
                ⚠️ נותרו 5 מקומות חינם בלבד החודש
              </p>
            </div>

            {/* Bank trust row */}
            <div className="bg-brand-surface border border-brand-border rounded-2xl p-5">
              <p className="text-brand-text-muted text-xs text-center mb-3 font-semibold">
                יועצים מובילים עובדים מול:
              </p>
              <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-brand-text text-sm">
                <span>פועלים</span>
                <span className="text-brand-text-light">|</span>
                <span>לאומי</span>
                <span className="text-brand-text-light">|</span>
                <span>מזרחי</span>
                <span className="text-brand-text-light">|</span>
                <span>דיסקונט</span>
                <span className="text-brand-text-light">|</span>
                <span>הפועלים משכנתאות</span>
              </div>
            </div>
          </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
