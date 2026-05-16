'use client';

import Wizard from '@/components/wizard/Wizard';
import type { Question } from '@/components/wizard/types';

const questions: Question[] = [
  {
    id: 'area',
    type: 'single-select',
    title: 'באיזה אזור הנכס שלך?',
    subtitle: 'נתאים לך יועצים מהאזור הרלוונטי',
    options: [
      { id: 'gush-dan', label: 'גוש דן', subLabel: 'תל אביב והסביבה' },
      { id: 'sharon', label: 'שרון' },
      { id: 'jerusalem', label: 'ירושלים והסביבה' },
      { id: 'haifa', label: 'חיפה והקריות' },
      { id: 'north', label: 'צפון' },
      { id: 'south', label: 'דרום' },
      { id: 'yos', label: 'יהודה ושומרון' },
    ],
  },
  {
    id: 'amount',
    type: 'single-select',
    title: 'מה גובה המשכנתא המבוקש?',
    subtitle: 'הסכום שאתה מתכנן לקחת מהבנק',
    options: [
      { id: 'lt-500', label: 'עד 500,000 ₪', subLabel: 'משכנתא קטנה' },
      { id: '500-1000', label: '500,000 – 1,000,000 ₪', subLabel: 'משכנתא בינונית' },
      { id: '1000-2000', label: '1,000,000 – 2,000,000 ₪', subLabel: 'משכנתא גדולה' },
      { id: 'gt-2000', label: 'מעל 2,000,000 ₪', subLabel: 'משכנתא יוקרה' },
    ],
  },
  {
    id: 'stage',
    type: 'single-select',
    title: 'באיזה שלב אתה בתהליך?',
    options: [
      { id: 'no-property', label: 'עוד לא מצאתי דירה', subLabel: 'אני בתחילת הדרך' },
      { id: 'marked-property', label: 'יש דירה מסומנת', subLabel: 'אבל עוד לא חתמתי' },
      { id: 'signed', label: 'חתמתי על חוזה', subLabel: 'צריך משכנתא דחוף' },
      { id: 'rejected', label: 'מסורב מהבנק', subLabel: 'אני צריך פתרון יצירתי' },
    ],
  },
  {
    id: 'deal-type',
    type: 'single-select',
    title: 'מה סוג העסקה?',
    options: [
      { id: 'first-home', label: 'דירה ראשונה' },
      { id: 'upgrade', label: 'משפרי דיור', subLabel: 'כבר יש לי דירה' },
      { id: 'investment', label: 'נכס להשקעה' },
      { id: 'mehir-lamishtaken', label: 'מחיר למשתכן', subLabel: 'דירה בהנחה' },
      { id: 'self-build', label: 'בנייה עצמית' },
    ],
  },
  {
    id: 'contact',
    type: 'contact-form',
    title: 'נשארה שאלה אחת',
    subtitle: 'איך נוכל ליצור איתך קשר?',
  },
];

export default function NewMortgageWizardPage() {
  return (
    <Wizard
      title="מצא יועץ למשכנתא חדשה"
      questions={questions}
      wizardType="new-mortgage"
    />
  );
}
