'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Home as HomeIcon, RefreshCw, Building2, Search, MessageCircle, CheckCircle } from 'lucide-react';
import Logo from '@/components/Logo';

export default function Home() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      q: 'כמה עולה הייעוץ?',
      a: 'כל יועץ קובע את התעריף שלו, המחירים מוצגים בפרופיל',
    },
    {
      q: 'האם היועצים מאומתים?',
      a: 'כל יועץ עובר אימות רישיון בנק ישראל לפני שמופיע באתר',
    },
    {
      q: 'כמה זמן לוקח למצוא יועץ?',
      a: 'רוב הלקוחות מוצאים יועץ תוך 24 שעות',
    },
    {
      q: 'האם השירות ללקוחות חינמי?',
      a: 'כן, החיפוש והפנייה ליועצים חינמיים לחלוטין',
    },
    {
      q: 'מה ההבדל בין יועץ רגיל לפרימיום?',
      a: 'יועצי פרימיום מופיעים ראשונים בחיפוש ועברו בדיקה מקיפה',
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: 'אלי משפחתון',
      initials: 'אם',
      avatar: '#F59E0B',
      role: 'קונה דירה ראשונה',
      text: 'דוד עזר לנו להשיג משכנתא במחיר נהדר! התהליך היה חלק וקל. תודה רבה!',
      rating: 5,
    },
    {
      id: 2,
      name: 'מרים סיבוני',
      initials: 'מס',
      avatar: '#EC4899',
      role: 'רוכלת שיניים',
      text: 'שרה פרצה את האפשרויות שלי לא למיסוג. חסכנו ₪50,000 בשנה!',
      rating: 5,
    },
    {
      id: 3,
      name: 'רפאל כדמון',
      initials: 'רכ',
      avatar: '#14B8A6',
      role: 'מהנדס תוכנה',
      text: 'יוחנן הציע לנו השקעה במושכלת בנדלן. הרווחנו משמעותית תוך שנתיים.',
      rating: 5,
    },
  ];

  return (
    <div className="w-full min-h-screen bg-brand-bg" dir="rtl">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/92 backdrop-blur-md border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between flex-row-reverse">
          <Logo variant="light" showTagline={true} size="md" />
          <ul className="flex gap-8 items-center">
            <li>
              <Link href="/advisors" className="text-brand-text-muted hover:text-brand-gold font-medium transition">
                יועצים
              </Link>
            </li>
            <li>
              <a href="#how-it-works" className="text-brand-text-muted hover:text-brand-gold font-medium transition">
                איך זה עובד
              </a>
            </li>
            <li>
              <a href="#testimonials" className="text-brand-text-muted hover:text-brand-gold font-medium transition">
                ביקורות
              </a>
            </li>
            <li>
              <Link
                href="/register"
                className="bg-brand-gold text-white px-6 py-2 rounded-lg hover:bg-brand-gold-dark font-semibold transition shadow-lg shadow-brand-gold/20 inline-block"
              >
                הצטרפו כיועץ
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen pt-2 pb-8 px-6 text-center relative overflow-hidden flex flex-col items-center md:pt-0 md:pb-0 md:justify-center bg-brand-bg">
        {/* Skyline backdrop */}
        <div className="absolute inset-x-0 bottom-0 h-3/5 pointer-events-none opacity-[0.18]">
          <svg viewBox="0 0 1600 500" preserveAspectRatio="xMidYMax slice" className="w-full h-full">
            <g fill="#C8963E">
              <rect x="20" y="280" width="60" height="220"/>
              <rect x="90" y="200" width="80" height="300"/>
              <rect x="180" y="320" width="50" height="180"/>
              <rect x="240" y="120" width="100" height="380"/>
              <rect x="285" y="80" width="10" height="40"/>
              <rect x="350" y="260" width="65" height="240"/>
              <rect x="425" y="180" width="90" height="320"/>
              <rect x="525" y="290" width="55" height="210"/>
              <rect x="590" y="60" width="120" height="440"/>
              <polygon points="640,60 660,60 650,20"/>
              <rect x="720" y="220" width="70" height="280"/>
              <rect x="800" y="160" width="85" height="340"/>
              <rect x="895" y="280" width="60" height="220"/>
              <rect x="965" y="100" width="95" height="400"/>
              <rect x="1070" y="240" width="70" height="260"/>
              <rect x="1150" y="180" width="85" height="320"/>
              <rect x="1245" y="290" width="55" height="210"/>
              <rect x="1310" y="150" width="90" height="350"/>
              <rect x="1410" y="270" width="60" height="230"/>
              <rect x="1480" y="210" width="100" height="290"/>
            </g>
            <g fill="#FAF8F3">
              <rect x="255" y="160" width="10" height="14"/><rect x="275" y="160" width="10" height="14"/><rect x="295" y="160" width="10" height="14"/><rect x="315" y="160" width="10" height="14"/>
              <rect x="255" y="200" width="10" height="14"/><rect x="275" y="200" width="10" height="14"/><rect x="295" y="200" width="10" height="14"/><rect x="315" y="200" width="10" height="14"/>
              <rect x="605" y="100" width="12" height="16"/><rect x="630" y="100" width="12" height="16"/><rect x="655" y="100" width="12" height="16"/><rect x="680" y="100" width="12" height="16"/>
              <rect x="605" y="140" width="12" height="16"/><rect x="630" y="140" width="12" height="16"/><rect x="655" y="140" width="12" height="16"/><rect x="680" y="140" width="12" height="16"/>
              <rect x="605" y="180" width="12" height="16"/><rect x="630" y="180" width="12" height="16"/><rect x="655" y="180" width="12" height="16"/><rect x="680" y="180" width="12" height="16"/>
              <rect x="980" y="140" width="10" height="14"/><rect x="1000" y="140" width="10" height="14"/><rect x="1020" y="140" width="10" height="14"/><rect x="1040" y="140" width="10" height="14"/>
            </g>
          </svg>
        </div>

        {/* Bottom fade into bg */}
        <div
          className="absolute inset-x-0 bottom-0 h-48 pointer-events-none"
          style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(250,248,243,0.6) 60%, #FAF8F3 100%)' }}
        ></div>

        <div className="max-w-4xl mx-auto relative z-10 animate-fadeIn w-full flex flex-col items-center">
          {/* Main heading — two lines */}
          <h1 className="text-center mb-6 leading-tight max-w-3xl mx-auto">
            <span className="block text-4xl md:text-8xl font-black text-brand-text text-center">הדרך החכמה למצוא</span>
            <span className="block text-4xl md:text-8xl font-black text-brand-gold text-center mt-2">יועץ משכנתאות</span>
          </h1>

          {/* Tagline */}
          <p className="text-base md:text-2xl text-brand-text-muted text-center mt-4 mb-12 max-w-3xl mx-auto leading-relaxed">
            השווה, בחר וחסוך אלפי שקלים
          </p>

          {/* Specialty selection cards — Link to /wizard with type */}
          <div className="flex flex-col gap-4 w-full px-4 mt-6 mb-6 md:flex-row md:gap-6 md:mt-8 md:mb-10 md:px-0">
            {[
              { label: 'משכנתא חדשה', Icon: HomeIcon, href: '/wizard/new-mortgage', popular: false },
              { label: 'מחזור משכנתא', Icon: RefreshCw, href: '/wizard/refinance', popular: true },
              { label: 'הלוואה כנגד נכס', Icon: Building2, href: '/wizard/equity-loan', popular: false },
            ].map((opt) => {
              const Icon = opt.Icon;
              return (
                <Link
                  key={opt.href}
                  href={opt.href}
                  className={`relative w-full h-28 flex items-center gap-4 px-6 rounded-2xl bg-brand-surface transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:shadow-lg md:w-64 md:h-52 md:py-8 md:px-4 md:flex-col md:justify-center md:items-center md:gap-4 ${
                    opt.popular
                      ? 'border-2 border-brand-gold shadow-[0_4px_16px_rgba(200,150,62,0.18)]'
                      : 'border border-brand-border hover:border-brand-border-gold'
                  }`}
                >
                  {opt.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-gold text-white text-[10px] px-3 py-1 rounded-full font-medium shadow-sm">
                      הכי פופולרי
                    </span>
                  )}
                  <span
                    className={`shrink-0 inline-flex items-center justify-center rounded-full w-12 h-12 md:w-16 md:h-16 ${
                      opt.popular ? 'bg-brand-gold' : 'bg-brand-gold-soft'
                    }`}
                  >
                    <Icon className={`w-6 h-6 md:w-8 md:h-8 ${opt.popular ? 'text-white' : 'text-brand-gold'}`} />
                  </span>
                  <span className="text-lg font-semibold text-brand-text md:text-xl md:text-center md:mt-2">
                    {opt.label}
                  </span>
                </Link>
              );
            })}
          </div>

          {/* Statistics */}
          <div className="w-full px-4 flex flex-wrap justify-center items-center gap-4 max-w-3xl mx-auto text-center mt-12 md:mt-16 md:px-0 md:gap-8 border-t border-brand-border pt-8">
            <div className="flex flex-col items-center justify-center text-center">
              <div className="text-lg md:text-4xl font-black text-brand-gold text-center">+2,500</div>
              <div className="text-xs md:text-sm text-brand-text-muted text-center mt-1">ביקורות מאומתות</div>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <div className="text-lg md:text-4xl font-black text-brand-gold text-center">150+</div>
              <div className="text-xs md:text-sm text-brand-text-muted text-center mt-1">יועצים מובחרים</div>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <div className="text-lg md:text-4xl font-black text-brand-gold text-center">₪45,000</div>
              <div className="text-xs md:text-sm text-brand-text-muted text-center mt-1">חסכון ממוצע</div>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fadeIn {
            animation: fadeIn 0.8s ease-out;
          }
        `}</style>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="w-full py-20 bg-brand-surface">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-brand-text mb-16 text-center">
            איך זה עובד
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto place-items-center">
            {[
              {
                num: 1,
                Icon: Search,
                title: 'חפשו יועץ',
                desc: 'סננו לפי אזור, התמחות וניסיון',
              },
              {
                num: 2,
                Icon: MessageCircle,
                title: 'שלחו פנייה',
                desc: 'צרו קשר עם היועץ המתאים לכם בלחיצה אחת',
              },
              {
                num: 3,
                Icon: CheckCircle,
                title: 'חסכו כסף',
                desc: 'קבלו ייעוץ מקצועי וחסכו אלפי שקלים',
              },
            ].map((step) => {
              const Icon = step.Icon;
              return (
                <div key={step.num} className="relative w-full max-w-xs">
                  <div className="bg-brand-bg rounded-2xl p-7 text-center h-full">
                    <div className="flex justify-center mb-4">
                      <div className="w-[52px] h-[52px] rounded-full bg-brand-gold flex items-center justify-center text-white font-bold text-xl shadow-md">
                        {step.num}
                      </div>
                    </div>
                    <div className="flex justify-center mb-3">
                      <Icon className="w-6 h-6 text-brand-gold" />
                    </div>
                    <h3 className="text-xl font-semibold text-brand-text mb-3">{step.title}</h3>
                    <p className="text-brand-text-muted text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="w-full py-20 bg-brand-bg">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-brand-text mb-16 text-center">
            מה אומרים לקוחותינו
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto place-items-center">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-brand-surface border border-brand-border rounded-2xl shadow-sm p-8 hover:border-brand-border-gold hover:shadow-md transition-all duration-300 w-full max-w-sm text-center"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4 justify-center">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-2xl text-brand-gold">
                      ★
                    </span>
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-brand-text mb-6 leading-relaxed italic text-center">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                {/* Author */}
                <div className="border-t border-brand-border pt-4 flex flex-col items-center gap-3">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm"
                    style={{ backgroundColor: testimonial.avatar }}
                  >
                    {testimonial.initials}
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold text-brand-text">{testimonial.name}</h4>
                    <p className="text-xs text-brand-text-muted">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 relative overflow-hidden bg-gradient-to-br from-white to-[#FAF6EB]">
        <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl font-bold text-brand-text mb-6 text-center">
            מוכנים למצוא את היועץ המושלם?
          </h2>
          <p className="text-lg text-brand-text-muted mb-10 text-center">
            בקשו ייעוץ חינם כיום וקבלו הצעות מהיועצים הטובים ביותר בתחום שלכם
          </p>
          <div className="relative inline-block">
            <Link
              href="/advisors"
              className="relative inline-block bg-brand-gold text-white py-4 px-12 rounded-2xl font-bold text-lg shadow-[0_6px_24px_rgba(200,150,62,0.35)] hover:bg-brand-gold-dark hover:-translate-y-0.5 hover:shadow-[0_10px_32px_rgba(200,150,62,0.45)] transition-all duration-300"
            >
              התחילו עכשיו
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="w-full py-20 bg-brand-bg">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-brand-text mb-12 text-center">
            שאלות נפוצות
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFAQ === idx;
              return (
                <div
                  key={idx}
                  className={`bg-brand-surface rounded-xl border transition-all duration-300 ${
                    isOpen ? 'border-brand-border-gold shadow-sm' : 'border-brand-border hover:border-brand-border-gold'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFAQ(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between gap-4 px-5 py-5 text-right"
                    aria-expanded={isOpen}
                  >
                    <span
                      className={`text-2xl font-light transition-transform duration-300 shrink-0 text-brand-gold ${
                        isOpen ? 'rotate-45' : ''
                      }`}
                    >
                      +
                    </span>
                    <span className="text-lg font-medium text-brand-text text-right flex-1">
                      {faq.q}
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-brand-text-muted leading-relaxed text-right">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-dark py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="mb-4">
                <Logo variant="dark" showTagline={true} size="md" />
              </div>
              <p className="text-gray-400 mb-4">
                פלטפורמה פרמיום להשוואת יועצי משכנתאות בישראל
              </p>
              {/* Social Media Icons */}
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-brand-gold hover:bg-brand-gold/20 transition-all duration-300">
                  f
                </a>
                <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-brand-gold hover:bg-brand-gold/20 transition-all duration-300">
                  𝕏
                </a>
                <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-brand-gold hover:bg-brand-gold/20 transition-all duration-300">
                  in
                </a>
                <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-brand-gold hover:bg-brand-gold/20 transition-all duration-300">
                  📧
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">קישורים</h4>
              <ul className="text-gray-500 space-y-2">
                <li>
                  <Link href="/advisors" className="hover:text-brand-gold transition-all duration-300">
                    יועצים
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-brand-gold transition-all duration-300">
                    על אודותינו
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-brand-gold transition-all duration-300">
                    צרו קשר
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-brand-gold transition-all duration-300">
                    תנאי השימוש
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">קטגוריות</h4>
              <ul className="text-gray-500 space-y-2">
                <li>
                  <Link href={`/advisors?type=${encodeURIComponent('משכנתא-חדשה')}`} className="hover:text-brand-gold transition-all duration-300">
                    משכנתא חדשה
                  </Link>
                </li>
                <li>
                  <Link href={`/advisors?type=${encodeURIComponent('מחזור-משכנתא')}`} className="hover:text-brand-gold transition-all duration-300">
                    מחזור משכנתא
                  </Link>
                </li>
                <li>
                  <Link href={`/advisors?type=${encodeURIComponent('הלוואה-כנגד-נכס')}`} className="hover:text-brand-gold transition-all duration-300">
                    הלוואה כנגד נכס
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">צרו קשר</h4>
              <div className="text-gray-400 text-sm space-y-2">
                <div>📧 info@yoetzbeklic.co.il</div>
                <div>📱 1-800-YOETZ</div>
                <div className="text-xs text-gray-500 mt-4">
                  זמינות: א-ה 09:00-18:00<br/>
                  ש-ב: 09:00-14:00
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-500 text-sm">&copy; 2026 יועץ בקליק. כל הזכויות שמורות.</p>
              <div className="flex gap-6 mt-4 md:mt-0 text-sm text-gray-500">
                <a href="#" className="hover:text-brand-gold transition-all duration-300">מדיניות פרטיות</a>
                <a href="#" className="hover:text-brand-gold transition-all duration-300">תנאים וסכום</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/972500000000"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="צרו קשר ב-WhatsApp"
        className="fixed bottom-6 left-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg transition-all hover:scale-110"
      >
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-7 h-7"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.464 3.488" />
        </svg>
      </a>
    </div>
  );
}
