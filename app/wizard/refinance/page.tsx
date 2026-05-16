'use client';

import Wizard from '@/components/wizard/Wizard';
import type { Question } from '@/components/wizard/types';

const questions: Question[] = [
  {
    id: 'balance',
    type: 'single-select',
    title: 'מה יתרת המשכנתא הנוכחית?',
    subtitle: 'הסכום שעוד נותר לך לשלם לבנק',
    options: [
      { id: 'lt-300', label: 'עד 300,000 ₪' },
      { id: '300-700', label: '300,000 – 700,000 ₪' },
      { id: '700-1500', label: '700,000 – 1,500,000 ₪' },
      { id: 'gt-1500', label: 'מעל 1,500,000 ₪' },
    ],
  },
  {
    id: 'remaining',
    type: 'single-select',
    title: 'כמה זמן נשאר לסיים?',
    subtitle: 'מספר השנים שנותרו עד תום המשכנתא',
    options: [
      { id: 'lt-5', label: 'פחות מ-5 שנים' },
      { id: '5-10', label: '5-10 שנים' },
      { id: '10-20', label: '10-20 שנים' },
      { id: 'gt-20', label: 'מעל 20 שנים' },
    ],
  },
  {
    id: 'reason',
    type: 'single-select',
    title: 'מה הסיבה למחזור?',
    subtitle: 'נבין מה מטרת המחזור כדי להתאים יועץ מתאים',
    options: [
      { id: 'lower-payment', label: 'להוריד החזר חודשי' },
      { id: 'lower-rate', label: 'להוריד ריבית', subLabel: 'ירידה בשוק' },
      { id: 'shorter-term', label: 'לקצר את תקופת המשכנתא' },
      { id: 'extra-cash', label: 'לקחת כסף נוסף', subLabel: 'משכנתא משלימה' },
      { id: 'not-sure', label: 'לא בטוח, רוצה לבדוק' },
    ],
  },
  {
    id: 'bank',
    type: 'single-select',
    title: 'באיזה בנק המשכנתא הנוכחית?',
    options: [
      { id: 'hapoalim', label: 'בנק הפועלים' },
      { id: 'leumi', label: 'בנק לאומי' },
      { id: 'discount', label: 'בנק דיסקונט' },
      { id: 'mizrahi', label: 'בנק מזרחי טפחות' },
      { id: 'yahav', label: 'בנק יהב' },
      { id: 'beinleumi', label: 'בנק בינלאומי' },
      { id: 'other', label: 'אחר' },
    ],
  },
  {
    id: 'contact',
    type: 'contact-form',
    title: 'נשארה שאלה אחת',
    subtitle: 'איך נוכל ליצור איתך קשר?',
  },
];

export default function RefinanceWizardPage() {
  return (
    <Wizard
      title="מצא יועץ למחזור משכנתא"
      questions={questions}
      wizardType="refinance"
    />
  );
}
