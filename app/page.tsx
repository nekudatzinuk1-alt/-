'use client';

import { useState } from 'react';
import { Home as HomeIcon, RefreshCw, Building2 } from 'lucide-react';

export default function Home() {
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('');
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

  const calculateMonthlyPayment = () => {
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;
    const monthlyPayment =
      (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    return monthlyPayment.toFixed(0);
  };

  const scrollToSearch = () => {
    const searchSection = document.getElementById('search');
    searchSection?.scrollIntoView({ behavior: 'smooth' });
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
            className={`text-lg ${i < Math.floor(rating) ? 'text-yellow-500' : 'text-gray-600'}`}
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-[#0D1B2A] to-[#0A0F1A]" dir="rtl">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#0D1B2A]/95 backdrop-blur-md border-b border-[#C8963E]/20">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between flex-row-reverse">
          <div className="flex items-center gap-3">
            <span className="text-2xl">💎</span>
            <span className="text-2xl font-bold text-[#C8963E]">יועץ בקליק</span>
            <span className="text-xs text-gray-500 mr-2">PREMIUM</span>
          </div>
          <ul className="flex gap-8 items-center">
            <li>
              <a href="#search" className="text-gray-300 hover:text-[#C8963E] font-medium transition">
                חפשו יועץ
              </a>
            </li>
            <li>
              <a href="#calculator" className="text-gray-300 hover:text-[#C8963E] font-medium transition">
                מחשבון
              </a>
            </li>
            <li>
              <a href="#testimonials" className="text-gray-300 hover:text-[#C8963E] font-medium transition">
                ביקורות
              </a>
            </li>
            <li>
              <button className="bg-[#C8963E] text-[#0D1B2A] px-6 py-2 rounded-lg hover:bg-[#D4A857] font-semibold transition shadow-lg shadow-[#C8963E]/20">
                הרשמה ליועצים
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen pt-2 pb-8 px-6 text-center relative overflow-hidden flex flex-col items-center md:pt-0 md:pb-0 md:justify-center">
        {/* Blurred background image layer */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-110 blur-2xl opacity-40"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #C8963E 0%, transparent 45%), radial-gradient(circle at 75% 75%, #1A4F8A 0%, transparent 45%), radial-gradient(circle at 50% 50%, #2A1F4A 0%, transparent 60%), linear-gradient(135deg, #0D1B2A, #112233)`
          }}
        ></div>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D1B2A]/85 via-[#0D1B2A]/75 to-[#0D1B2A]/95"></div>

        {/* Decorative blobs */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 right-20 w-40 h-40 bg-[#C8963E] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-60 h-60 bg-[#C8963E] rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10 animate-fadeIn w-full flex flex-col items-center">
          {/* Main heading — two lines */}
          <h1 className="text-center mb-6 leading-tight max-w-3xl mx-auto">
            <span className="block text-4xl md:text-8xl font-black text-white text-center">הדרך החכמה למצוא</span>
            <span className="block text-4xl md:text-8xl font-black text-[#C8963E] text-center mt-2">יועץ משכנתאות</span>
          </h1>

          {/* Tagline */}
          <p className="text-base md:text-2xl text-gray-300 text-center mt-4 mb-12 max-w-3xl mx-auto leading-relaxed">
            השווה, בחר וחסוך אלפי שקלים
          </p>

          {/* Specialty selection cards — vertical on mobile, horizontal row on md+ */}
          <div className="w-full px-4 flex flex-col items-center gap-4 mt-4 mb-6 md:flex-row md:gap-6 md:mt-8 md:mb-10 md:px-0">
            {[
              { label: 'משכנתא חדשה', Icon: HomeIcon, value: 'משכנתאות ראשונות' },
              { label: 'מחזור משכנתא', Icon: RefreshCw, value: 'מיסוג משכנתאות' },
              { label: 'הלוואה כנגד נכס', Icon: Building2, value: 'השקעות נדלן' },
            ].map((opt) => {
              const Icon = opt.Icon;
              return (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => {
                    setSelectedSpecialty(opt.value);
                    document.getElementById('advisors')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full py-6 px-5 flex items-center gap-3 rounded-xl bg-white/10 border border-white/20 hover:border-[#C8963E] hover:bg-[#C8963E]/20 transition-all duration-300 cursor-pointer md:w-64 md:h-52 md:py-8 md:px-4 md:flex-col md:justify-center md:items-center md:gap-4 md:rounded-2xl"
                >
                  <Icon className="text-[#C8963E] shrink-0 w-8 h-8 md:w-14 md:h-14" />
                  <span className="text-lg font-bold text-white md:text-xl md:text-center md:mt-2">{opt.label}</span>
                </button>
              );
            })}
          </div>

          {/* Statistics — each in its own centered column */}
          <div className="w-full px-4 flex flex-wrap justify-center items-center gap-4 max-w-3xl mx-auto text-center mt-12 md:mt-16 md:px-0 md:gap-8">
            <div className="flex flex-col items-center justify-center text-center">
              <div className="text-lg md:text-4xl font-black text-white text-center">+2,500</div>
              <div className="text-xs md:text-base text-gray-400 text-center mt-1">ביקורות מאומתות</div>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <div className="text-lg md:text-4xl font-black text-white text-center">150+</div>
              <div className="text-xs md:text-base text-gray-400 text-center mt-1">יועצים מובחרים</div>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <div className="text-lg md:text-4xl font-black text-white text-center">₪45,000</div>
              <div className="text-xs md:text-base text-gray-400 text-center mt-1">חסכון ממוצע</div>
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

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#C8963E]/40 to-transparent"></div>

      {/* Search and Filter Section */}
      <section id="search" className="py-20 bg-gradient-to-b from-transparent to-[#112233]/30">
        <div className="w-full max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            חפשו וסננו יועצים
          </h2>

          <div className="w-full bg-[#112233]/30 rounded-2xl backdrop-blur-xl border border-[#C8963E]/25 p-8 shadow-2xl transition-all duration-300 hover:border-[#C8963E]/50">
            {/* Search Bar */}
            <div className="w-full mb-8">
              <input
                type="text"
                placeholder="חפשו לפי שם או תחום התמחות..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 bg-[#0D1B2A] border border-[#C8963E]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8963E] text-right text-white placeholder-gray-500 transition-all duration-300"
              />
            </div>

            {/* Filters */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 text-right">
              <div className="w-full text-right">
                <label className="block text-gray-200 font-semibold mb-3 text-right">אזור:</label>
                <select
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                  className="w-full px-4 py-3 bg-[#0D1B2A] border border-[#C8963E]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8963E] text-right text-white transition-all duration-300"
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
                <label className="block text-gray-200 font-semibold mb-3 text-right">תחום התמחות:</label>
                <select
                  value={selectedSpecialty}
                  onChange={(e) => setSelectedSpecialty(e.target.value)}
                  className="w-full px-4 py-3 bg-[#0D1B2A] border border-[#C8963E]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8963E] text-right text-white transition-all duration-300"
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
            <div className="w-full text-center text-gray-300">
              נמצאו <span className="font-bold text-[#C8963E]">{filteredAdvisors.length}</span> יועצים
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#C8963E]/40 to-transparent"></div>

      {/* Advisors Grid */}
      <section id="advisors" className="py-20 px-4 bg-gradient-to-b from-[#112233]/30 to-transparent">
        <div className="max-w-6xl mx-auto px-4 text-center">
          {filteredAdvisors.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
              {filteredAdvisors.map((advisor) => (
                <div
                  key={advisor.id}
                  className="group flex flex-col items-center text-center w-full max-w-sm mx-auto min-w-0 p-6 bg-gradient-to-b from-[#112233]/60 to-[#0A0F1A]/60 backdrop-blur border border-[#C8963E]/20 border-t-2 border-t-transparent rounded-xl shadow-xl overflow-hidden hover:border-[#C8963E]/60 hover:border-t-2 hover:border-t-[#C8963E] hover:scale-105 hover:shadow-2xl transition-all duration-300 hover:shadow-[0_0_25px_rgba(200,150,62,0.35)]"
                  dir="rtl"
                >
                  {/* Card Header with Image */}
                  <div className="w-full bg-gradient-to-r from-[#1A2F45] to-[#0D1B2A] py-5 px-2 text-center border-b border-[#C8963E]/20 relative rounded-lg">
                    {/* Verification Badge */}
                    <div className="absolute top-3 left-3 flex items-center gap-1 bg-green-600/20 text-green-400 px-2 py-1 rounded-full text-xs font-semibold border border-green-500/40 flex-row-reverse">
                      <span>✓</span>
                      <span>מאומת</span>
                    </div>

                    {/* Avatar */}
                    <div className="flex justify-center w-full mb-4">
                      <div
                        className="w-20 h-20 rounded-full flex items-center justify-center text-white font-bold text-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg"
                        style={{ backgroundColor: advisor.avatar }}
                      >
                        {advisor.initials}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white text-center">{advisor.name}</h3>
                  </div>

                  {/* Card Content */}
                  <div className="w-full pt-5 text-right">
                    {/* Expertise Chips */}
                    <div className="mb-4 flex flex-wrap gap-2 justify-center">
                      {advisor.specialties.map((specialty, idx) => (
                        <span
                          key={idx}
                          className="inline-block bg-gradient-to-r from-[#C8963E]/30 to-[#D4A857]/30 text-[#C8963E] px-3 py-1 rounded-full text-xs font-semibold border border-[#C8963E]/40 hover:bg-[#C8963E]/40 transition-all duration-300"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>

                    {/* Experience and Transactions */}
                    <div className="mb-4 bg-[#0D1B2A]/40 rounded-lg p-3 space-y-2 border border-[#C8963E]/10">
                      <div className="flex justify-between w-full px-2 items-center text-sm">
                        <span className="font-semibold text-[#C8963E] text-sm">{advisor.experience} שנים</span>
                        <span className="text-gray-300 text-sm">📅 ניסיון:</span>
                      </div>
                      <div className="flex justify-between w-full px-2 items-center text-sm">
                        <span className="font-semibold text-[#C8963E] text-sm">{advisor.transactions}+</span>
                        <span className="text-gray-300 text-sm">✅ עסקאות:</span>
                      </div>
                    </div>

                    <div className="text-gray-300 text-sm mb-5 leading-relaxed">{advisor.description}</div>

                    <div className="mb-5 pb-5 border-b border-[#C8963E]/20 space-y-2">
                      <div className="text-sm text-gray-400">📍 {advisor.region}</div>
                      <div className="text-sm font-semibold text-[#C8963E]">💰 {advisor.price}</div>
                    </div>

                    {/* Rating */}
                    <div className="mb-6 flex flex-col items-center">
                      <div className="flex items-center gap-2 mb-2 justify-center">
                        {renderStars(advisor.rating)}
                        <span className="font-bold text-white">{advisor.rating}</span>
                      </div>
                      <div className="text-xs text-gray-500 text-center">{advisor.reviews} ביקורות</div>
                    </div>

                    {/* Action Button */}
                    <button
                      onClick={() => openModal(advisor.name)}
                      className="w-full bg-gradient-to-r from-[#C8963E] to-[#D4A857] text-[#0D1B2A] py-3 rounded-lg hover:shadow-lg hover:shadow-[#C8963E]/50 font-bold transition-all duration-300 hover:scale-105 shadow-md shadow-[#C8963E]/30"
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
              <h3 className="text-2xl font-bold text-white mb-2">
                לא נמצאו יועצים המתאימים
              </h3>
              <p className="text-gray-400">
                נסו לשנות את הסינונים או חפשו מחדש בתנאים שונים
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#C8963E]/40 to-transparent"></div>

      {/* Mortgage Calculator Section */}
      <section id="calculator" className="py-20 px-6 bg-[#112233]/40">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 text-center">
              🧮 מחשבון משכנתא
            </h2>
            <p className="text-gray-300 text-center">
              חישוב תשלום חודשי בזמן אמת
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#1A2F45]/60 to-[#0D1B2A]/60 backdrop-blur rounded-2xl border border-[#C8963E]/30 p-10 shadow-2xl transition-all duration-300 hover:border-[#C8963E]/50">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 text-right">
              {/* Loan Amount */}
              <div className="text-right">
                <label className="block text-gray-200 font-semibold mb-4 text-right">סכום הלוואה (₪)</label>
                <input
                  type="range"
                  min="100000"
                  max="2000000"
                  step="50000"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full h-2 bg-[#0D1B2A] rounded-lg appearance-none cursor-pointer accent-[#C8963E]"
                />
                <div className="text-right mt-3">
                  <input
                    type="number"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    className="w-full px-4 py-2 bg-[#0D1B2A] border border-[#C8963E]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8963E] text-right text-white transition-all duration-300"
                  />
                  <div className="text-[#C8963E] font-bold text-xl mt-2">
                    {formatPrice(loanAmount)}
                  </div>
                </div>
              </div>

              {/* Loan Term */}
              <div className="text-center">
                <label className="block text-gray-200 font-semibold mb-4 text-center">תקופה (שנים)</label>
                <input
                  type="range"
                  min="5"
                  max="30"
                  step="1"
                  value={loanTerm}
                  onChange={(e) => setLoanTerm(Number(e.target.value))}
                  className="w-full h-2 bg-[#0D1B2A] rounded-lg appearance-none cursor-pointer accent-[#C8963E]"
                />
                <div className="text-center mt-3">
                  <input
                    type="number"
                    value={loanTerm}
                    onChange={(e) => setLoanTerm(Number(e.target.value))}
                    className="w-full px-4 py-2 bg-[#0D1B2A] border border-[#C8963E]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8963E] text-center text-white transition-all duration-300"
                  />
                  <div className="text-[#C8963E] font-bold text-xl mt-2">
                    {loanTerm} שנים
                  </div>
                </div>
              </div>

              {/* Interest Rate */}
              <div className="text-center">
                <label className="block text-gray-200 font-semibold mb-4 text-center">ריבית (%)</label>
                <input
                  type="range"
                  min="2"
                  max="10"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full h-2 bg-[#0D1B2A] rounded-lg appearance-none cursor-pointer accent-[#C8963E]"
                />
                <div className="text-center mt-3">
                  <input
                    type="number"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    step="0.1"
                    className="w-full px-4 py-2 bg-[#0D1B2A] border border-[#C8963E]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8963E] text-center text-white transition-all duration-300"
                  />
                  <div className="text-[#C8963E] font-bold text-xl mt-2">
                    {interestRate}%
                  </div>
                </div>
              </div>
            </div>

            {/* Result */}
            <div className="bg-gradient-to-r from-[#C8963E]/20 to-[#D4A857]/20 border border-[#C8963E]/40 rounded-xl p-8 text-center">
              <p className="text-gray-300 mb-3 text-lg">תשלום חודשי משוער</p>
              <div className="text-5xl font-bold text-[#C8963E] mb-4">
                ₪{Number(calculateMonthlyPayment()).toLocaleString('he-IL')}
              </div>
              <p className="text-gray-400 text-sm">
                סכום כללי: <span className="font-semibold text-white">{formatPrice(Number(calculateMonthlyPayment()) * loanTerm * 12)}</span>
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-400 text-sm">
              💡 זה חישוב משוער בלבד. פנו ליועץ לקבלת הצעה מדויקת
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#C8963E]/40 to-transparent"></div>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-6 bg-[#112233]/40">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">
            מה אומרים לקוחותינו
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-gradient-to-b from-[#1A2F45]/40 to-[#0D1B2A]/40 backdrop-blur rounded-xl shadow-xl p-8 border border-[#C8963E]/20 hover:border-[#C8963E]/50 transition-all duration-300 hover:scale-105 w-full max-w-sm text-right"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4 justify-center">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-2xl text-[#C8963E]">
                      ★
                    </span>
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-200 mb-6 leading-relaxed italic text-right">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="border-t border-[#C8963E]/20 pt-4 flex items-center gap-3 justify-end flex-row-reverse">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm"
                    style={{ backgroundColor: testimonial.avatar }}
                  >
                    {testimonial.initials}
                  </div>
                  <div className="text-right">
                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#C8963E]/40 to-transparent"></div>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-[#1A2F45] to-[#0D1B2A] relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-5 right-10 w-72 h-72 bg-[#C8963E] rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl font-bold text-white mb-6 text-center">
            מוכנים למצוא את היועץ המושלם?
          </h2>
          <p className="text-lg text-gray-300 mb-10 text-center">
            בקשו ייעוץ חינם כיום וקבלו הצעות מהיועצים הטובים ביותר בתחום שלכם
          </p>
          <div className="relative inline-block">
            <span className="absolute -inset-1 rounded-2xl border-2 border-[#C8963E] animate-pulse pointer-events-none"></span>
            <button className="relative bg-gradient-to-r from-[#C8963E] to-[#D4A857] text-[#0D1B2A] py-4 px-10 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-[#C8963E]/50 transition-all duration-300 hover:scale-105 shadow-lg shadow-[#C8963E]/40">
              התחילו עכשיו
            </button>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#C8963E]/40 to-transparent"></div>

      {/* Footer */}
      <footer className="bg-[#0A0F1A] border-t border-[#C8963E]/20 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="font-bold text-lg text-[#C8963E] mb-4">יועץ בקליק</h3>
              <p className="text-gray-400 mb-4">
                פלטפורמה פרמיום להשוואת יועצי משכנתאות בישראל
              </p>
              {/* Social Media Icons */}
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-[#C8963E]/20 rounded-full flex items-center justify-center text-[#C8963E] hover:bg-[#C8963E]/40 transition-all duration-300">
                  f
                </a>
                <a href="#" className="w-10 h-10 bg-[#C8963E]/20 rounded-full flex items-center justify-center text-[#C8963E] hover:bg-[#C8963E]/40 transition-all duration-300">
                  𝕏
                </a>
                <a href="#" className="w-10 h-10 bg-[#C8963E]/20 rounded-full flex items-center justify-center text-[#C8963E] hover:bg-[#C8963E]/40 transition-all duration-300">
                  in
                </a>
                <a href="#" className="w-10 h-10 bg-[#C8963E]/20 rounded-full flex items-center justify-center text-[#C8963E] hover:bg-[#C8963E]/40 transition-all duration-300">
                  📧
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">קישורים</h4>
              <ul className="text-gray-400 space-y-2">
                <li>
                  <a href="#" className="hover:text-[#C8963E] transition-all duration-300">
                    על אודותינו
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#C8963E] transition-all duration-300">
                    צרו קשר
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#C8963E] transition-all duration-300">
                    תנאי השימוש
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">קטגוריות</h4>
              <ul className="text-gray-400 space-y-2">
                <li>
                  <a href="#" className="hover:text-[#C8963E] transition-all duration-300">
                    משכנתאות ראשונות
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#C8963E] transition-all duration-300">
                    מיסוג משכנתאות
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#C8963E] transition-all duration-300">
                    השקעות נדלן
                  </a>
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

          <div className="border-t border-[#C8963E]/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-500 text-sm">&copy; 2026 יועץ בקליק. כל הזכויות שמורות.</p>
              <div className="flex gap-6 mt-4 md:mt-0 text-sm text-gray-500">
                <a href="#" className="hover:text-[#C8963E] transition-all duration-300">מדיניות פרטיות</a>
                <a href="#" className="hover:text-[#C8963E] transition-all duration-300">תנאים וסכום</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Consultation Request Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fadeIn"
          onClick={closeModal}
          dir="rtl"
        >
          <div
            className="relative w-full max-w-md bg-gradient-to-b from-[#1A2F45] to-[#0D1B2A] border border-[#C8963E]/40 rounded-2xl shadow-2xl shadow-[#C8963E]/20 p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              aria-label="סגירה"
              className="absolute top-4 left-4 w-9 h-9 flex items-center justify-center rounded-full text-gray-400 hover:text-[#C8963E] hover:bg-[#C8963E]/10 transition-all duration-300 text-2xl leading-none"
            >
              ×
            </button>

            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="text-6xl mb-4">✅</div>
                <h3 className="text-2xl font-bold text-[#C8963E] mb-3">תודה רבה!</h3>
                <p className="text-gray-300 leading-relaxed">
                  פנייתכם התקבלה בהצלחה.<br />
                  נחזור אליכם בהקדם האפשרי.
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-white mb-2 text-right">בקשו ייעוץ חינם</h3>
                <p className="text-gray-400 mb-6 text-right text-sm">
                  {modalAdvisorName
                    ? `מילאו את הפרטים ו${modalAdvisorName} יחזור אליכם בהקדם`
                    : 'מילאו את הפרטים והיועץ יחזור אליכם בהקדם'}
                </p>

                <form onSubmit={handleSubmit} className="space-y-4 text-right">
                  <div>
                    <label className="block text-gray-200 font-semibold mb-2 text-sm">שם מלא</label>
                    <input
                      type="text"
                      required
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      className="w-full px-4 py-3 bg-[#0D1B2A] border border-[#C8963E]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8963E] text-right text-white placeholder-gray-500 transition-all duration-300"
                      placeholder="ישראל ישראלי"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-200 font-semibold mb-2 text-sm">טלפון</label>
                    <input
                      type="tel"
                      required
                      value={formPhone}
                      onChange={(e) => setFormPhone(e.target.value)}
                      className="w-full px-4 py-3 bg-[#0D1B2A] border border-[#C8963E]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8963E] text-right text-white placeholder-gray-500 transition-all duration-300"
                      placeholder="050-0000000"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-200 font-semibold mb-2 text-sm">הודעה חופשית</label>
                    <textarea
                      rows={4}
                      value={formMessage}
                      onChange={(e) => setFormMessage(e.target.value)}
                      className="w-full px-4 py-3 bg-[#0D1B2A] border border-[#C8963E]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8963E] text-right text-white placeholder-gray-500 transition-all duration-300 resize-none"
                      placeholder="ספרו לנו על הצרכים שלכם..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#C8963E] to-[#D4A857] text-[#0D1B2A] py-3 rounded-lg hover:shadow-lg hover:shadow-[#C8963E]/50 font-bold transition-all duration-300 hover:scale-105 shadow-md shadow-[#C8963E]/30 mt-2"
                  >
                    שלח פנייה
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
