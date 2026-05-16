'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { ChevronRight, Loader2 } from 'lucide-react';
import type { Question, WizardType, ContactInfo } from './types';
import SingleSelectQuestion from './SingleSelectQuestion';
import ContactFormQuestion from './ContactFormQuestion';
import WizardResults from './WizardResults';
import { getMatchedAdvisor } from '@/lib/mockAdvisors';

type Props = {
  title: string;
  questions: Question[];
  wizardType: WizardType;
};

type Phase = 'questions' | 'loading' | 'results';

const WIZARD_TYPE_LABELS: Record<WizardType, string> = {
  'new-mortgage': 'משכנתא חדשה',
  'refinance': 'מחזור משכנתא',
  'equity-loan': 'הלוואה כנגד נכס',
};

function buildWhatsAppMessage(
  wizardType: WizardType,
  answers: Record<string, string>,
  contactInfo: ContactInfo,
  questions: Question[]
): string {
  const answerLines: string[] = [];
  questions.forEach((q) => {
    if (q.type === 'single-select') {
      const selectedOptionId = answers[q.id];
      const selectedOption = q.options.find((o) => o.id === selectedOptionId);
      if (selectedOption) {
        answerLines.push(`• ${q.title}: ${selectedOption.label}`);
      }
    }
  });

  return `היי אבי, מצאתי אותך דרך יועץ בקליק!

שמי: ${contactInfo.fullName}
טלפון: ${contactInfo.phone}
אימייל: ${contactInfo.email}

מעוניין ב: ${WIZARD_TYPE_LABELS[wizardType]}

${answerLines.join('\n')}

אשמח לקבוע שיחה בהקדם.`;
}

export default function Wizard({ title, questions, wizardType }: Props) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [contact, setContact] = useState<ContactInfo | undefined>(undefined);
  const [contactValid, setContactValid] = useState(false);
  const [phase, setPhase] = useState<Phase>('questions');
  const [transitioning, setTransitioning] = useState(false);

  const total = questions.length;
  const current = questions[currentStep];
  const isLast = currentStep === total - 1;

  const progress = useMemo(
    () => Math.round(((currentStep + 1) / total) * 100),
    [currentStep, total]
  );

  const canContinue = (() => {
    if (current.type === 'single-select') {
      return Boolean(answers[current.id]);
    }
    return contactValid;
  })();

  const goToStep = (nextStep: number) => {
    setTransitioning(true);
    window.setTimeout(() => {
      setCurrentStep(nextStep);
      setTransitioning(false);
    }, 200);
  };

  const handleSelect = (optionId: string) => {
    if (current.type !== 'single-select') return;
    setAnswers((prev) => ({ ...prev, [current.id]: optionId }));
  };

  const handleContinue = () => {
    if (!canContinue) return;
    if (!isLast) {
      goToStep(currentStep + 1);
      return;
    }
    if (contact) {
      setAnswers((prev) => ({
        ...prev,
        fullName: contact.fullName,
        phone: contact.phone,
        email: contact.email,
      }));
    }
    setPhase('loading');
    window.setTimeout(() => {
      setPhase('results');
    }, 1500);
  };

  const handleBack = () => {
    if (currentStep === 0) return;
    goToStep(currentStep - 1);
  };

  if (phase === 'loading') {
    return (
      <main className="min-h-screen bg-brand-bg flex items-center justify-center px-4" dir="rtl">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-brand-gold animate-spin mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-brand-text mb-2">מנתחים את התשובות שלך...</h2>
          <p className="text-brand-text-muted">מאתרים את היועצים המתאימים ביותר עבורך</p>
        </div>
      </main>
    );
  }

  if (phase === 'results' && contact) {
    const advisor = getMatchedAdvisor(wizardType);
    const whatsappMessage = buildWhatsAppMessage(wizardType, answers, contact, questions);

    return (
      <main className="min-h-screen bg-brand-bg" dir="rtl">
        <WizardResults
          userName={contact.fullName.split(' ')[0]}
          advisor={advisor}
          whatsappMessage={whatsappMessage}
        />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-brand-bg flex flex-col" dir="rtl">
      <header className="w-full px-4 md:px-8 pt-6 pb-4">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between gap-4 mb-3">
            <span className="text-sm text-brand-text-light">
              שאלה {currentStep + 1} מתוך {total}
            </span>
            <Link
              href="/"
              className="text-sm text-brand-text-light hover:text-brand-gold transition"
            >
              סגור
            </Link>
          </div>

          <div className="h-1 w-full rounded-full overflow-hidden bg-brand-border">
            <div
              className="h-full bg-brand-gold transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="mt-4">
            {currentStep > 0 && (
              <button
                type="button"
                onClick={handleBack}
                className="inline-flex items-center gap-1 text-sm text-brand-text-muted hover:text-brand-gold transition border border-brand-border hover:border-brand-border-gold rounded-lg px-3 py-1.5"
              >
                <ChevronRight className="w-4 h-4" />
                חזרה
              </button>
            )}
          </div>

          <h1 className="sr-only">{title}</h1>
        </div>
      </header>

      <section className="flex-1 px-4 md:px-8 py-6">
        <div
          className={`max-w-2xl mx-auto transition-opacity duration-200 ${
            transitioning ? 'opacity-0' : 'opacity-100'
          }`}
        >
          {current.type === 'single-select' && (
            <SingleSelectQuestion
              title={current.title}
              subtitle={current.subtitle}
              options={current.options}
              selectedId={answers[current.id]}
              onSelect={handleSelect}
            />
          )}
          {current.type === 'contact-form' && (
            <ContactFormQuestion
              title={current.title}
              subtitle={current.subtitle}
              value={contact}
              onChange={(info, isValid) => {
                setContact(info);
                setContactValid(isValid);
              }}
            />
          )}
        </div>
      </section>

      <footer className="w-full px-4 md:px-8 pb-8 pt-4 sticky bottom-0 bg-gradient-to-t from-brand-bg via-brand-bg to-transparent">
        <div className="max-w-2xl mx-auto">
          <button
            type="button"
            disabled={!canContinue}
            onClick={handleContinue}
            className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-200 ${
              canContinue
                ? 'bg-brand-gold text-white hover:bg-brand-gold-dark shadow-[0_6px_24px_rgba(200,150,62,0.3)]'
                : 'bg-brand-gold/30 text-white/60 cursor-not-allowed'
            }`}
          >
            {isLast ? 'מצא לי יועץ' : 'המשך'}
          </button>

          <p className="text-center text-xs text-brand-text-light mt-4">
            🔒 המידע שלך מוצפן ולא יישלח לאף יועץ עד שתאשר
          </p>
        </div>
      </footer>
    </main>
  );
}
