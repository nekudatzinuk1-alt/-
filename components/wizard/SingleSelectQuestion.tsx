'use client';

import { Check } from 'lucide-react';
import type { QuestionOption } from './types';

type Props = {
  title: string;
  subtitle?: string;
  options: QuestionOption[];
  selectedId: string | undefined;
  onSelect: (optionId: string) => void;
};

export default function SingleSelectQuestion({
  title,
  subtitle,
  options,
  selectedId,
  onSelect,
}: Props) {
  return (
    <div className="w-full">
      <h2 className="text-2xl md:text-3xl font-bold text-brand-text text-center mb-3 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-brand-text-muted text-center mb-8 text-base md:text-lg">
          {subtitle}
        </p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
        {options.map((option) => {
          const isSelected = selectedId === option.id;
          return (
            <button
              key={option.id}
              type="button"
              onClick={() => onSelect(option.id)}
              className={`relative text-right px-5 py-4 rounded-2xl transition-all duration-200 ${
                isSelected
                  ? 'bg-brand-gold-soft border-2 border-brand-gold'
                  : 'bg-brand-surface border border-brand-border hover:border-brand-border-gold hover:shadow-sm'
              }`}
              aria-pressed={isSelected}
            >
              {isSelected && (
                <span className="absolute top-3 left-3 w-6 h-6 rounded-full bg-brand-gold-soft flex items-center justify-center">
                  <Check className="w-[18px] h-[18px] text-brand-gold" strokeWidth={3} />
                </span>
              )}
              <div className="font-semibold text-base md:text-lg text-brand-text">
                {option.label}
              </div>
              {option.subLabel && (
                <div className="text-sm text-brand-text-muted mt-1">{option.subLabel}</div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
