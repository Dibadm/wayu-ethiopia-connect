export function WayuMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      role="img"
      aria-label="Wayu Import/Export"
      className={className}
    >
      <defs>
        <linearGradient id="wayu-mark" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.95" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.55" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="38" height="38" rx="11" fill="url(#wayu-mark)" />
      <path
        d="M10 14l4.4 12h1.9L20 17.4 23.7 26h1.9L30 14"
        fill="none"
        stroke="white"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="20" cy="30.5" r="1.6" fill="white" />
    </svg>
  );
}
