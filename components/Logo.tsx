import Link from 'next/link';

type LogoProps = {
  variant?: 'light' | 'dark';
  showTagline?: boolean;
  size?: 'sm' | 'md' | 'lg';
};

export default function Logo({ variant = 'light', showTagline = true, size = 'md' }: LogoProps) {
  const houseColor = '#C8963E';
  const arrowColor = variant === 'light' ? '#0D1B2A' : '#FFFFFF';
  const titleColor = variant === 'light' ? '#1A1A1A' : '#FFFFFF';
  const taglineColor = variant === 'light' ? '#888888' : '#999999';

  const iconSize = size === 'sm' ? 36 : size === 'lg' ? 56 : 48;
  const titleSize = size === 'sm' ? 16 : size === 'lg' ? 24 : 20;
  const taglineSize = size === 'sm' ? 9 : size === 'lg' ? 12 : 11;

  return (
    <Link href="/" className="flex items-center gap-3 group" aria-label="יועץ בקליק - דף הבית">
      <svg
        width={iconSize}
        height={Math.round(iconSize * 0.92)}
        viewBox="0 0 48 44"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform group-hover:scale-105"
        aria-hidden="true"
      >
        <path
          d="M24 4 L42 18 L42 40 L6 40 L6 18 Z"
          fill="none"
          stroke={houseColor}
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <path
          d="M18 22 L24 28 L30 22 M24 28 L24 36"
          stroke={arrowColor}
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
      <div className="flex flex-col">
        <span
          className="font-bold leading-none tracking-tight"
          style={{ fontSize: `${titleSize}px`, color: titleColor }}
        >
          יועץ בקליק
        </span>
        {showTagline && (
          <span
            className="mt-1 tracking-widest"
            style={{ fontSize: `${taglineSize}px`, color: taglineColor }}
          >
            המומחים למשכנתאות
          </span>
        )}
      </div>
    </Link>
  );
}
