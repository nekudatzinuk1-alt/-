'use client';

import { useState } from 'react';

export default function Home() {
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

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
      specialty: 'משכנתאות ראשונות',
      region: 'תל אביב',
      rating: 4.9,
      reviews: 247,
      image: '👨‍💼',
      description: 'מומחה בעיסקאות ראשונות עם חוויה של 15 שנים',
      price: '₪500-800',
    },
    {
      id: 2,
      name: 'שרה לוי',
      specialty: 'מיסוג משכנתאות',
      region: 'ירושלים',
      rating: 4.8,
      reviews: 189,
      image: '👩‍💼',
      description: 'מיסוג וחידושי תנאים לשיעורים נמוכים',
      price: '₪400-650',
    },
    {
      id: 3,
      name: 'יוחנן ברנס',
      specialty: 'השקעות נדלן',
      region: 'רמת גן',
      rating: 4.7,
      reviews: 156,
      image: '👨‍💼',
      description: 'יועץ השקעות עם תיק פעיל של 50+ נכסים',
      price: '₪600-900',
    },
    {
      id: 4,
      name: 'רחל אברהם',
      specialty: 'ייעוץ כלל',
      region: 'חיפה',
      rating: 4.9,
      reviews: 203,
      image: '👩‍💼',
      description: 'ייעוץ כולל להשגת תנאים מיטביים',
      price: '₪450-700',
    },
    {
      id: 5,
      name: 'משה הראל',
      specialty: 'משכנתאות ראשונות',
      region: 'באר שבע',
      rating: 4.6,
      reviews: 134,
      image: '👨‍💼',
      description: 'מתמחה בהלוואות לאזורי פריפריה',
      price: '₪400-600',
    },
    {
      id: 6,
      name: 'ליאה גבע',
      specialty: 'מיסוג משכנתאות',
      region: 'תל אביב',
      rating: 4.8,
      reviews: 198,
      image: '👩‍💼',
      description: 'מייעצת בכירה עם רשת מעבנקים',
      price: '₪550-850',
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: 'אלי משפחתון',
      role: 'קונה דירה ראשונה',
      text: 'דוד עזר לנו להשיג משכנתא במחיר נהדר! התהליך היה חלק וקל. תודה רבה!',
      rating: 5,
      image: '👨‍💼',
    },
    {
      id: 2,
      name: 'מרים סיבוני',
      role: 'רוכלת שיניים',
      text: 'שרה פרצה את האפשרויות שלי לא למיסוג. חסכנו ₪50,000 בשנה!',
      rating: 5,
      image: '👩‍💼',
    },
    {
      id: 3,
      name: 'רפאל כדמון',
      role: 'מהנדס תוכנה',
      text: 'יוחנן הציע לנו השקעה במושכלת בנדלן. הרווחנו משמעותית תוך שנתיים.',
      rating: 5,
      image: '👨‍💼',
    },
  ];

  const filteredAdvisors = advisors.filter((advisor) => {
    const regionMatch = !selectedRegion || advisor.region === selectedRegion;
    const specialtyMatch = !selectedSpecialty || advisor.specialty === selectedSpecialty;
    const searchMatch =
      !searchQuery ||
      advisor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      advisor.specialty.toLowerCase().includes(searchQuery.toLowerCase());
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
    <div className="w-full min-h-screen bg-gradient-to-b from-[#0D1B2A] to-[#0A0F1A]">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#0D1B2A]/95 backdrop-blur-md border-b border-[#C8963E]/20">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
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
      <section className="py-24 px-6 text-center relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-40 h-40 bg-[#C8963E] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-60 h-60 bg-[#C8963E] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <h1 className="text-7xl font-bold text-white mb-6 leading-tight">
            הדרך החכמה למצוא
            <span className="block text-[#C8963E] mt-2"> יועץ משכנתאות</span>
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            פלטפורמה פרמיום לבחירת יועצי משכנתאות מומחים. השוו, בחרו וחסכו בתנאים הטובים ביותר
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <div className="flex items-center gap-3 bg-[#112233]/60 px-6 py-3 rounded-lg backdrop-blur border border-[#C8963E]/30">
              <span className="text-2xl">⭐</span>
              <div className="text-right">
                <div className="font-semibold text-white">+2,500</div>
                <div className="text-xs text-gray-400">ביקורות מאומתות</div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-[#112233]/60 px-6 py-3 rounded-lg backdrop-blur border border-[#C8963E]/30">
              <span className="text-2xl">👥</span>
              <div className="text-right">
                <div className="font-semibold text-white">150+</div>
                <div className="text-xs text-gray-400">יועצים מובחרים</div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-[#112233]/60 px-6 py-3 rounded-lg backdrop-blur border border-[#C8963E]/30">
              <span className="text-2xl">💰</span>
              <div className="text-right">
                <div className="font-semibold text-white">₪45,000</div>
                <div className="text-xs text-gray-400">חסכון ממוצע</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section id="search" className="py-16 px-6 bg-gradient-to-b from-transparent to-[#112233]/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            חפשו וסננו יועצים
          </h2>

          <div className="bg-[#112233]/40 rounded-2xl backdrop-blur border border-[#C8963E]/30 p-8 shadow-2xl">
            {/* Search Bar */}
            <div className="mb-8">
              <input
                type="text"
                placeholder="חפשו לפי שם או תחום התמחות..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 bg-[#0D1B2A] border border-[#C8963E]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8963E] text-right text-white placeholder-gray-500"
              />
            </div>

            {/* Filters */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-gray-200 font-semibold mb-3">אזור:</label>
                <select
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                  className="w-full px-4 py-3 bg-[#0D1B2A] border border-[#C8963E]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8963E] text-right text-white"
                >
                  <option value="">כל האזורים</option>
                  {regions.map((region) => (
                    <option key={region} value={region}>
                      {region}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-gray-200 font-semibold mb-3">תחום התמחות:</label>
                <select
                  value={selectedSpecialty}
                  onChange={(e) => setSelectedSpecialty(e.target.value)}
                  className="w-full px-4 py-3 bg-[#0D1B2A] border border-[#C8963E]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8963E] text-right text-white"
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
            <div className="text-center text-gray-300">
              נמצאו <span className="font-bold text-[#C8963E]">{filteredAdvisors.length}</span> יועצים
            </div>
          </div>
        </div>
      </section>

      {/* Advisors Grid */}
      <section className="py-16 px-6 bg-gradient-to-b from-[#112233]/30 to-transparent">
        <div className="max-w-6xl mx-auto">
          {filteredAdvisors.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAdvisors.map((advisor) => (
                <div
                  key={advisor.id}
                  className="group bg-gradient-to-b from-[#112233]/60 to-[#0A0F1A]/60 backdrop-blur border border-[#C8963E]/20 rounded-xl shadow-2xl hover:border-[#C8963E]/50 hover:shadow-2xl hover:shadow-[#C8963E]/10 transition-all duration-300 overflow-hidden"
                >
                  {/* Card Header with Image */}
                  <div className="bg-gradient-to-r from-[#1A2F45] to-[#0D1B2A] p-8 text-center border-b border-[#C8963E]/20">
                    <div className="text-6xl mb-3 group-hover:scale-110 transition-transform duration-300">{advisor.image}</div>
                    <h3 className="text-2xl font-bold text-white">{advisor.name}</h3>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <div className="mb-4">
                      <span className="inline-block bg-[#C8963E]/20 text-[#C8963E] px-4 py-2 rounded-full text-sm font-semibold border border-[#C8963E]/40">
                        {advisor.specialty}
                      </span>
                    </div>

                    <div className="text-gray-300 text-sm mb-5 leading-relaxed">{advisor.description}</div>

                    <div className="mb-5 pb-5 border-b border-[#C8963E]/20 space-y-2">
                      <div className="text-sm text-gray-400">📍 {advisor.region}</div>
                      <div className="text-sm font-semibold text-[#C8963E]">💰 {advisor.price}</div>
                    </div>

                    {/* Rating */}
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-2">
                        {renderStars(advisor.rating)}
                        <span className="font-bold text-white">{advisor.rating}</span>
                      </div>
                      <div className="text-xs text-gray-500">{advisor.reviews} ביקורות</div>
                    </div>

                    {/* Action Button */}
                    <button className="w-full bg-[#C8963E] text-[#0D1B2A] py-3 rounded-lg hover:bg-[#D4A857] font-semibold transition shadow-lg shadow-[#C8963E]/30 hover:shadow-[#C8963E]/50">
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

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-6 bg-[#112233]/40">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">
            מה אומרים לקוחותינו
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-gradient-to-b from-[#1A2F45]/40 to-[#0D1B2A]/40 backdrop-blur rounded-xl shadow-xl p-8 border border-[#C8963E]/20 hover:border-[#C8963E]/50 transition-all duration-300"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-2xl text-[#C8963E]">
                      ★
                    </span>
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-200 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="border-t border-[#C8963E]/20 pt-4 flex items-center gap-3">
                  <div className="text-3xl">{testimonial.image}</div>
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

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-[#1A2F45] to-[#0D1B2A] relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-5 right-10 w-72 h-72 bg-[#C8963E] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl font-bold text-white mb-6">
            מוכנים למצוא את היועץ המושלם?
          </h2>
          <p className="text-lg text-gray-300 mb-10">
            בקשו ייעוץ חינם כיום וקבלו הצעות מהיועצים הטובים ביותר בתחום שלכם
          </p>
          <button className="bg-[#C8963E] text-[#0D1B2A] px-10 py-4 rounded-lg font-bold text-lg hover:bg-[#D4A857] transition shadow-2xl shadow-[#C8963E]/40">
            התחילו עכשיו
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A0F1A] border-t border-[#C8963E]/20 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="font-bold text-lg text-[#C8963E] mb-4">יועץ בקליק</h3>
              <p className="text-gray-400">
                פלטפורמה פרמיום להשוואת יועצי משכנתאות בישראל
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">קישורים</h4>
              <ul className="text-gray-400 space-y-2">
                <li>
                  <a href="#" className="hover:text-[#C8963E] transition">
                    על אודותינו
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#C8963E] transition">
                    צרו קשר
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#C8963E] transition">
                    תנאי השימוש
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">קטגוריות</h4>
              <ul className="text-gray-400 space-y-2">
                <li>
                  <a href="#" className="hover:text-[#C8963E] transition">
                    משכנתאות ראשונות
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#C8963E] transition">
                    מיסוג משכנתאות
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#C8963E] transition">
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
              </div>
            </div>
          </div>

          <div className="border-t border-[#C8963E]/20 pt-8 text-center text-gray-500">
            <p>&copy; 2026 יועץ בקליק. כל הזכויות שמורות.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
