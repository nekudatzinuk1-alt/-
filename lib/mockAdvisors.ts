import type { Advisor } from '@/components/wizard/types';

const SPECIALTY_BY_WIZARD: Record<string, string> = {
  'new-mortgage': 'מומחה למשכנתאות ראשונות',
  'refinance': 'מומחה למחזור משכנתאות וחיסכון בריבית',
  'equity-loan': 'מומחה להלוואות כנגד נכס',
};

export function getMatchedAdvisor(wizardType: string): Advisor {
  return {
    id: 'avi-moshe',
    name: 'אבי משה',
    initials: 'אמ',
    initialsColor: '#C8963E',
    specialty: SPECIALTY_BY_WIZARD[wizardType] || 'יועץ משכנתאות',
    rating: 5,
    reviewsCount: 0,
    experience: '5-10 שנות ניסיון',
    matchScore: 98,
    whatsappNumber: '972505349595',
  };
}
