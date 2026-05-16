'use client';

import Wizard from '@/components/wizard/Wizard';
import type { Question } from '@/components/wizard/types';

const questions: Question[] = [
  {
    id: 'amount',
    type: 'single-select',
    title: 'מה סכום ההלוואה המבוקש?',
    subtitle: 'הסכום שאתה מתכנן ללוות כנגד הנכס',
    options: [
      { id: 'lt-100', label: 'עד 100,000 ₪' },
      { id: '100-300', label: '100,000 – 300,000 ₪' },
      { id: '300-700', label: '300,000 – 700,000 ₪' },
      { id: 'gt-700', label: 'מעל 700,000 ₪' },
    ],
  },
  {
    id: 'purpose',
    type: 'single-select',
    title: 'מה מטרת ההלוואה?',
    options: [
      { id: 'renovation', label: 'שיפוץ ושדרוג הנכס' },
      { id: 'investment', label: 'השקעה', subLabel: 'עסק, נדל"ן נוסף' },
      { id: 'consolidation', label: 'איחוד הלוואות' },
      { id: 'family', label: 'הוצאות משפחתיות', subLabel: 'חתונה, לימודים' },
      { id: 'other', label: 'אחר' },
    ],
  },
  {
    id: 'property-type',
    type: 'single-select',
    title: 'מה סוג הנכס המשועבד?',
    options: [
      { id: 'primary', label: 'דירה למגורים', subLabel: 'בבעלותי' },
      { id: 'investment', label: 'נכס להשקעה' },
      { id: 'with-mortgage', label: 'דירה שעדיין יש עליה משכנתא' },
    ],
  },
  {
    id: 'property-value',
    type: 'single-select',
    title: 'מה שווי הנכס המוערך?',
    subtitle: 'הערכה כללית של שווי הנכס בשוק',
    options: [
      { id: 'lt-1.5m', label: 'עד 1,500,000 ₪' },
      { id: '1.5-3m', label: '1,500,000 – 3,000,000 ₪' },
      { id: '3-5m', label: '3,000,000 – 5,000,000 ₪' },
      { id: 'gt-5m', label: 'מעל 5,000,000 ₪' },
    ],
  },
  {
    id: 'contact',
    type: 'contact-form',
    title: 'נשארה שאלה אחת',
    subtitle: 'איך נוכל ליצור איתך קשר?',
  },
];

export default function EquityLoanWizardPage() {
  return (
    <Wizard
      title="מצא יועץ להלוואה כנגד נכס"
      questions={questions}
      wizardType="equity-loan"
    />
  );
}
