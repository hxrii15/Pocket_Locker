export default function Logo({ compact = false }) {
  return (
    <div className={`flex items-center gap-3 ${compact ? '' : 'flex-col'}`}>
      <svg
        className={`${compact ? 'h-11 w-11' : 'h-24 w-24'} lock-logo`}
        viewBox="0 0 120 120"
        role="img"
        aria-label="Pocket Locker logo"
      >
        <defs>
          <linearGradient id="lockGradient" x1="0%" x2="100%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="#d8ffe8" />
            <stop offset="42%" stopColor="#00ff66" />
            <stop offset="100%" stopColor="#008f3f" />
          </linearGradient>
          <filter id="terminalGlow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <g className="lock-orbit" transformOrigin="60 60">
          <circle cx="60" cy="60" r="49" fill="none" stroke="rgba(0,255,102,0.3)" strokeWidth="2" />
          <path d="M60 11a49 49 0 0 1 47 35" fill="none" stroke="#00ff66" strokeLinecap="round" strokeWidth="5" />
          <path d="M60 109a49 49 0 0 1-47-35" fill="none" stroke="#00ff66" strokeLinecap="round" strokeWidth="5" opacity="0.72" />
          <circle cx="60" cy="11" r="4" fill="#d8ffe8" filter="url(#terminalGlow)" />
          <circle cx="60" cy="109" r="4" fill="#00ff66" filter="url(#terminalGlow)" />
        </g>
        <g className="lock-core" filter="url(#terminalGlow)">
          <rect className="lock-aura" x="38" y="54" width="44" height="36" rx="7" fill="none" stroke="#00ff66" strokeWidth="1.5" opacity="0.42" />
          <rect x="40" y="55" width="40" height="34" rx="7" fill="#030805" stroke="url(#lockGradient)" strokeWidth="3" />
          <path d="M48 55v-8c0-8 5-15 12-15s12 7 12 15v8" fill="none" stroke="url(#lockGradient)" strokeLinecap="round" strokeWidth="6" />
          <circle cx="60" cy="71" r="4.7" fill="#00ff66" />
          <path d="M60 75v7" stroke="#00ff66" strokeLinecap="round" strokeWidth="4" />
        </g>
      </svg>
      <div className={compact ? 'leading-none' : 'text-center'}>
        <p className="font-orbitron text-xl font-bold tracking-normal text-ecto">Pocket Locker</p>
        {!compact && <p className="text-sm font-semibold uppercase text-zinc-400">Encrypted Credential Terminal</p>}
      </div>
    </div>
  );
}
