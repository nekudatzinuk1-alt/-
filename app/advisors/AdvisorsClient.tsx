'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import Logo from '@/components/Logo';

const TYPE_TO_SPECIALTY: Record<string, string> = {
  'משכנתא-חדשה': 'משכנתאות ראשונות',
  'מחזור-משכנתא': 'מיסוג משכנתאות',
  'הלוואה-כנגד-נכס': 'השקעות נדלן',
};

export default function AdvisorsClient() {
  const searchParams = useSearchParams();
  const typeParam = searchParams.get('type') || '';
  const typeDisplay = typeParam ? typeParam.replace(/-/g, ' ') : '';
  const initialSpecialty = TYPE_TO_SPECIALTY[typeParam] || '';

  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState(initialSpecialty);
  const [searchQuery, setSearchQuery] = useState('');
  const [loanAmount, setLoanAmount] = useState(500000);
  const [loanTerm, setLoanTerm] = useState(20);
  const [interestRate, setInterestRate] = useState(5.5);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalAdvisorName, setModalAdvisorName] = useState<string | null>(null);
  const [formName, setFormName] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    setSelectedSpecialty(TYPE_TO_SPECIALTY[typeParam] || '');
  }, [typeParam]);

  const openModal = (advisorName?: string) => {
    setModalAdvisorName(advisorName ?? null);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsSubmitted(false);
    setFormName('');
    setFormPhone('');
    setFormMessage('');
    setModalAdvisorName(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      closeModal();
    }, 3000);
  };

  const regions = [
    'תל אביב',
    'ירושלים',
    'חיפה',
    'באר שבע',
    'רמת גן',
    'כל הארץ',
  ];

  const specialties = [
    'משכנתאות ראשונות',
    'מיסוג משכנתאות',
    'השקעות נדלן',
    'ייעוץ כלל',
  ];

  const advisors = [
    {
      id: 1,
      name: 'דוד כהן',
      initials: 'דכ',
      avatar: '#DC2626',
      specialties: ['משכנתאות ראשונות', 'ייעוץ כלל'],
      region: 'תל אביב',
      rating: 4.9,
      reviews: 247,
      experience: 15,
      transactions: 380,
      description: 'מומחה בעיסקאות ראשונות עם חוויה של 15 שנים',
      price: '₪500-800',
    },
    {
      id: 2,
      name: 'שרה לוי',
      initials: 'של',
      avatar: '#1E40AF',
      specialties: ['מיסוג משכנתאות', 'השקעות נדלן'],
      region: 'ירושלים',
      rating: 4.8,
      reviews: 189,
      experience: 12,
      transactions: 290,
      description: 'מיסוג וחידושי תנאים לשיעורים נמוכים',
      price: '₪400-650',
    },
    {
      id: 3,
      name: 'יוחנן ברנס',
      initials: 'יב',
      avatar: '#7C3AED',
      specialties: ['השקעות נדלן', 'ייעוץ כלל'],
      region: 'רמת גן',
      rating: 4.7,
      reviews: 156,
      experience: 18,
      transactions: 420,
      description: 'יועץ השקעות עם תיק פעיל של 50+ נכסים',
      price: '₪600-900',
    },
    {
      id: 4,
      name: 'רחל אברהם',
      initials: 'רא',
      avatar: '#059669',
      specialties: ['ייעוץ כלל', 'משכנתאות ראשונות'],
      region: 'חיפה',
      rating: 4.9,
      reviews: 203,
      experience: 14,
      transactions: 350,
      description: 'ייעוץ כולל להשגת תנאים מיטביים',
      price: '₪450-700',
    },
    {
      id: 5,
      name: 'משה הראל',
      initials: 'מה',
      avatar: '#D97706',
      specialties: ['משכנתאות ראשונות', 'מיסוג משכנתאות'],
      region: 'באר שבע',
      rating: 4.6,
      reviews: 134,
      experience: 11,
      transactions: 265,
      description: 'מתמחה בהלוואות לאזורי פריפריה',
      price: '₪400-600',
    },
    {
      id: 6,
      name: 'ליאה גבע',
      initials: 'לג',
      avatar: '#06B6D4',
      specialties: ['מיסוג משכנתאות', 'ייעוץ כלל'],
      region: 'תל אביב',
      rating: 4.8,
      reviews: 198,
      experience: 13,
      transactions: 310,
      description: 'מייעצת בכירה עם רשת מעבנקים',
      price: '₪550-850',
    },
  ];

  const calculateMonthlyPayment = () => {
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;
    const monthlyPayment =
      (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    return monthlyPayment.toFixed(0);
  };

  const formatPrice = (price: number) => {
    return price.toLocaleString('he-IL', { style: 'currency', currency: 'ILS', minimumFractionDigits: 0 });
  };

  const filteredAdvisors = advisors.filter((advisor) => {
    const regionMatch = !selectedRegion || advisor.region === selectedRegion;
    const specialtyMatch = !selectedSpecialty || advisor.specialties.includes(selectedSpecialty);
    const searchMatch =
      !searchQuery ||
      advisor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      advisor.specialties.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
    return regionMatch && specialtyMatch && searchMatch;
  });

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className={`text-lg ${i < Math.floor(rating) ? 'text-brand-gold' : 'text-brand-text-light'}`}
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  const heading = typeDisplay ? `יועצי ${typeDisplay}` : 'כל היועצים';

  return (
    <div className="w-full min-h-screen bg-brand-bg" dir="rtl">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/92 backdrop-blur-md border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between flex-row-reverse">
          <Logo variant="light" showTagline={true} size="md" />
          <ul className="flex gap-8 items-center">
            <li>
              <Link href="/advisors" className="text-brand-gold font-medium transition">
                יועצים
              </Link>
            </li>
            <li>
              <a href="#calculator" className="text-brand-text-muted hover:text-brand-gold font-medium transition">
                מחשבון
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

      {/* Header with back button + dynamic title */}
      <section className="py-12 px-6 bg-brand-surface">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-start mb-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-brand-text-muted hover:text-brand-gold transition-all duration-300 group"
            >
              <ArrowRight className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span className="font-semibold">חזרה לדף הבית</span>
            </Link>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-brand-text text-center">
            {heading}
          </h1>
          {typeDisplay && (
            <p className="text-center text-brand-text-muted mt-3 text-lg">
              היועצים המומלצים בתחום
            </p>
          )}
        </div>
      </section>

      {/* Search and Filter Section */}
      <section id="search" className="py-16 px-4 bg-brand-bg">
        <div className="w-full max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-brand-text mb-10 text-center">
            חפשו וסננו יועצים
          </h2>

          <div className="w-full bg-brand-surface rounded-2xl border border-brand-border p-8 shadow-sm transition-all duration-300 hover:border-brand-border-gold">
            {/* Search Bar */}
            <div className="w-full mb-8">
              <input
                type="text"
                placeholder="חפשו לפי שם או תחום התמחות..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 bg-white border border-brand-border rounded-lg focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 text-right text-brand-text placeholder:text-brand-text-light transition-all duration-300"
              />
            </div>

            {/* Filters */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 text-right">
              <div className="w-full text-right">
                <label className="block text-brand-text font-medium mb-3 text-right text-sm">אזור:</label>
                <select
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                  className="w-full px-4 py-3 bg-white border border-brand-border rounded-lg focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 text-right text-brand-text transition-all duration-300"
                >
                  <option value="">כל האזורים</option>
                  {regions.map((region) => (
                    <option key={region} value={region}>
                      {region}
                    </option>
                  ))}
                </select>
              </div>
              <div className="w-full text-right">
                <label className="block text-brand-text font-medium mb-3 text-right text-sm">תחום התמחות:</label>
                <select
                  value={selectedSpecialty}
                  onChange={(e) => setSelectedSpecialty(e.target.value)}
                  className="w-full px-4 py-3 bg-white border border-brand-border rounded-lg focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 text-right text-brand-text transition-all duration-300"
                >
                  <option value="">כל התחומים</option>
                  {specialties.map((specialty) => (
                    <option key={specialty} value={specialty}>
                      {specialty}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Results Count */}
            <div className="w-full text-center text-brand-text-muted">
              נמצאו <span className="font-bold text-brand-gold">{filteredAdvisors.length}</span> יועצים
            </div>
          </div>
        </div>
      </section>

      {/* Advisors Grid */}
      <section id="advisors" className="py-16 px-4 bg-brand-surface">
        <div className="max-w-6xl mx-auto px-4 text-center">
          {filteredAdvisors.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
              {filteredAdvisors.map((advisor) => (
                <div
                  key={advisor.id}
                  className="group flex flex-col items-center text-center w-full max-w-sm mx-auto min-w-0 p-6 bg-brand-surface border border-brand-border rounded-2xl shadow-sm overflow-hidden hover:border-brand-border-gold hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                  dir="rtl"
                >
                  {/* Card Header */}
                  <div className="w-full bg-brand-bg py-5 px-2 text-center border-b border-brand-border relative rounded-lg">
                    {/* Verification Badge */}
                    <div className="absolute top-3 left-3 flex items-center gap-1 bg-green-50 text-green-700 px-2 py-1 rounded-full text-xs font-semibold border border-green-200 flex-row-reverse">
                      <span>✓</span>
                      <span>מאומת</span>
                    </div>

                    {/* Avatar */}
                    <div className="flex justify-center w-full mb-4">
                      <div
                        className="w-20 h-20 rounded-full flex items-center justify-center text-white font-bold text-2xl group-hover:scale-110 transition-transform duration-300 shadow-md"
                        style={{ backgroundColor: advisor.avatar }}
                      >
                        {advisor.initials}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-brand-text text-center">{advisor.name}</h3>
                  </div>

                  {/* Card Content */}
                  <div className="w-full pt-5 text-right">
                    {/* Expertise Chips */}
                    <div className="mb-4 flex flex-wrap gap-2 justify-center">
                      {advisor.specialties.map((specialty, idx) => (
                        <span
                          key={idx}
                          className="inline-block bg-brand-gold-soft text-brand-gold-dark px-3 py-1 rounded-full text-xs font-semibold border border-brand-border-gold hover:bg-brand-gold/15 transition-all duration-300"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>

                    {/* Experience and Transactions */}
                    <div className="mb-4 bg-brand-bg rounded-lg p-3 space-y-2 border border-brand-border">
                      <div className="flex justify-between w-full px-2 items-center text-sm">
                        <span className="font-semibold text-brand-gold-dark text-sm">{advisor.experience} שנים</span>
                        <span className="text-brand-text-muted text-sm">📅 ניסיון:</span>
                      </div>
                      <div className="flex justify-between w-full px-2 items-center text-sm">
                        <span className="font-semibold text-brand-gold-dark text-sm">{advisor.transactions}+</span>
                        <span className="text-brand-text-muted text-sm">✅ עסקאות:</span>
                      </div>
                    </div>

                    <div className="text-brand-text-muted text-sm mb-5 leading-relaxed">{advisor.description}</div>

                    <div className="mb-5 pb-5 border-b border-brand-border space-y-2">
                      <div className="text-sm text-brand-text-muted">📍 {advisor.region}</div>
                      <div className="text-sm font-semibold text-brand-gold-dark">💰 {advisor.price}</div>
                    </div>

                    {/* Rating */}
                    <div className="mb-6 flex flex-col items-center">
                      <div className="flex items-center gap-2 mb-2 justify-center">
                        {renderStars(advisor.rating)}
                        <span className="font-bold text-brand-text">{advisor.rating}</span>
                      </div>
                      <div className="text-xs text-brand-text-light text-center">{advisor.reviews} ביקורות</div>
                    </div>

                    {/* Action Button */}
                    <button
                      onClick={() => openModal(advisor.name)}
                      className="w-full bg-brand-gold text-white py-3 rounded-lg hover:bg-brand-gold-dark hover:shadow-[0_6px_20px_rgba(200,150,62,0.35)] font-bold transition-all duration-300 shadow-[0_4px_14px_rgba(200,150,62,0.25)]"
                    >
                      בקשו ייעוץ חינם
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4 opacity-50">🔍</div>
              <h3 className="text-2xl font-bold text-brand-text mb-2">
                לא נמצאו יועצים המתאימים
              </h3>
              <p className="text-brand-text-muted">
                נסו לשנות את הסינונים או חפשו מחדש בתנאים שונים
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Mortgage Calculator Section */}
      <section id="calculator" className="py-20 px-6 bg-brand-bg">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-brand-text mb-4 text-center">
              🧮 מחשבון משכנתא
            </h2>
            <p className="text-brand-text-muted text-center">
              חישוב תשלום חודשי בזמן אמת
            </p>
          </div>

          <div className="bg-brand-surface rounded-2xl border border-brand-border p-10 shadow-sm transition-all duration-300 hover:border-brand-border-gold">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 text-right">
              {/* Loan Amount */}
              <div className="text-right">
                <label className="block text-brand-text font-medium mb-4 text-right text-sm">סכום הלוואה (₪)</label>
                <input
                  type="range"
                  min="100000"
                  max="2000000"
                  step="50000"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full h-2 bg-brand-bg rounded-lg appearance-none cursor-pointer accent-brand-gold"
                />
                <div className="text-right mt-3">
                  <input
                    type="number"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    className="w-full px-4 py-2 bg-white border border-brand-border rounded-lg focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 text-right text-brand-text transition-all duration-300"
                  />
                  <div className="text-brand-gold font-bold text-xl mt-2">
                    {formatPrice(loanAmount)}
                  </div>
                </div>
              </div>

              {/* Loan Term */}
              <div className="text-center">
                <label className="block text-brand-text font-medium mb-4 text-center text-sm">תקופה (שנים)</label>
                <input
                  type="range"
                  min="5"
                  max="30"
                  step="1"
                  value={loanTerm}
                  onChange={(e) => setLoanTerm(Number(e.target.value))}
                  className="w-full h-2 bg-brand-bg rounded-lg appearance-none cursor-pointer accent-brand-gold"
                />
                <div className="text-center mt-3">
                  <input
                    type="number"
                    value={loanTerm}
                    onChange={(e) => setLoanTerm(Number(e.target.value))}
                    className="w-full px-4 py-2 bg-white border border-brand-border rounded-lg focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 text-center text-brand-text transition-all duration-300"
                  />
                  <div className="text-brand-gold font-bold text-xl mt-2">
                    {loanTerm} שנים
                  </div>
                </div>
              </div>

              {/* Interest Rate */}
              <div className="text-center">
                <label className="block text-brand-text font-medium mb-4 text-center text-sm">ריבית (%)</label>
                <input
                  type="range"
                  min="2"
                  max="10"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full h-2 bg-brand-bg rounded-lg appearance-none cursor-pointer accent-brand-gold"
                />
                <div className="text-center mt-3">
                  <input
                    type="number"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    step="0.1"
                    className="w-full px-4 py-2 bg-white border border-brand-border rounded-lg focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 text-center text-brand-text transition-all duration-300"
                  />
                  <div className="text-brand-gold font-bold text-xl mt-2">
                    {interestRate}%
                  </div>
                </div>
              </div>
            </div>

            {/* Result */}
            <div className="bg-brand-gold-soft border border-brand-border-gold rounded-xl p-8 text-center">
              <p className="text-brand-text-muted mb-3 text-lg">תשלום חודשי משוער</p>
              <div className="text-5xl font-bold text-brand-gold mb-4">
                ₪{Number(calculateMonthlyPayment()).toLocaleString('he-IL')}
              </div>
              <p className="text-brand-text-muted text-sm">
                סכום כללי: <span className="font-semibold text-brand-text">{formatPrice(Number(calculateMonthlyPayment()) * loanTerm * 12)}</span>
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-brand-text-light text-sm">
              💡 זה חישוב משוער בלבד. פנו ליועץ לקבלת הצעה מדויקת
            </p>
          </div>
        </div>
      </section>

      {/* Consultation Request Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-md"
          onClick={closeModal}
          dir="rtl"
        >
          <div
            className="relative w-full max-w-md bg-brand-surface border border-brand-border-gold rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              aria-label="סגירה"
              className="absolute top-4 left-4 w-9 h-9 flex items-center justify-center rounded-full text-brand-text-muted hover:text-brand-gold hover:bg-brand-gold-soft transition-all duration-300 text-2xl leading-none"
            >
              ×
            </button>

            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="text-6xl mb-4">✅</div>
                <h3 className="text-2xl font-bold text-brand-gold-dark mb-3">תודה רבה!</h3>
                <p className="text-brand-text-muted leading-relaxed">
                  פנייתכם התקבלה בהצלחה.<br />
                  נחזור אליכם בהקדם האפשרי.
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-brand-text mb-2 text-right">בקשו ייעוץ חינם</h3>
                <p className="text-brand-text-muted mb-6 text-right text-sm">
                  {modalAdvisorName
                    ? `מילאו את הפרטים ו${modalAdvisorName} יחזור אליכם בהקדם`
                    : 'מילאו את הפרטים והיועץ יחזור אליכם בהקדם'}
                </p>

                <form onSubmit={handleSubmit} className="space-y-4 text-right">
                  <div>
                    <label className="block text-brand-text font-medium mb-2 text-sm">שם מלא</label>
                    <input
                      type="text"
                      required
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      className="w-full px-4 py-3 bg-white border border-brand-border rounded-lg focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 text-right text-brand-text placeholder:text-brand-text-light transition-all duration-300"
                      placeholder="ישראל ישראלי"
                    />
                  </div>

                  <div>
                    <label className="block text-brand-text font-medium mb-2 text-sm">טלפון</label>
                    <input
                      type="tel"
                      required
                      value={formPhone}
                      onChange={(e) => setFormPhone(e.target.value)}
                      className="w-full px-4 py-3 bg-white border border-brand-border rounded-lg focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 text-right text-brand-text placeholder:text-brand-text-light transition-all duration-300"
                      placeholder="050-0000000"
                    />
                  </div>

                  <div>
                    <label className="block text-brand-text font-medium mb-2 text-sm">הודעה חופשית</label>
                    <textarea
                      rows={4}
                      value={formMessage}
                      onChange={(e) => setFormMessage(e.target.value)}
                      className="w-full px-4 py-3 bg-white border border-brand-border rounded-lg focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 text-right text-brand-text placeholder:text-brand-text-light transition-all duration-300 resize-none"
                      placeholder="ספרו לנו על הצרכים שלכם..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-brand-gold text-white py-3 rounded-lg hover:bg-brand-gold-dark hover:shadow-[0_6px_20px_rgba(200,150,62,0.35)] font-bold transition-all duration-300 shadow-[0_4px_14px_rgba(200,150,62,0.25)] mt-2"
                  >
                    שלח פנייה
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}

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
