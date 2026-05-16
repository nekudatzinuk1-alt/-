export type QuestionOption = {
  id: string;
  label: string;
  subLabel?: string;
};

export type Question =
  | {
      id: string;
      type: 'single-select';
      title: string;
      subtitle?: string;
      options: QuestionOption[];
    }
  | {
      id: string;
      type: 'contact-form';
      title: string;
      subtitle?: string;
    };

export type WizardType = 'new-mortgage' | 'refinance' | 'equity-loan';

export type ContactInfo = {
  fullName: string;
  phone: string;
  email: string;
};

export type Advisor = {
  id: string;
  name: string;
  initials: string;
  initialsColor: string;
  specialty: string;
  rating: number;
  reviewsCount: number;
  experience: string;
  matchScore: number;
  whatsappNumber?: string;
};

export type WizardSummary = {
  wizardType: 'new-mortgage' | 'refinance' | 'equity-loan';
  answers: Record<string, string>;
  contactInfo: {
    fullName: string;
    phone: string;
    email: string;
  };
};
