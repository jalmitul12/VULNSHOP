import React, { useEffect, useState } from 'react';

export const InitialLoader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const hasSeen = sessionStorage.getItem('vulnshop_seen_loader');
    if (hasSeen) {
      onComplete();
      return;
    }

    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsFading(true);
            setTimeout(() => {
              sessionStorage.setItem('vulnshop_seen_loader', 'true');
              onComplete();
            }, 300);
          }, 150);
          return 100;
        }
        return prev + 20;
      });
    }, 80);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-bg flex flex-col items-center justify-center transition-opacity duration-300 ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center gap-6">
        <div className="relative flex items-center justify-center w-16 h-16 rounded-2xl bg-surface-elevated border border-surface-border">
          <svg className="w-8 h-8 text-lime-primary" viewBox="0 0 100 100" fill="none">
            <path d="M30 30L50 70L70 30" stroke="currentColor" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-lime-primary animate-ping" />
        </div>

        <div className="text-center">
          <div className="font-mono text-sm tracking-[0.25em] text-text-primary font-semibold">
            VULN<span className="text-lime-primary">SHOP</span>
          </div>
          <div className="text-[10px] font-mono tracking-widest text-text-secondary mt-1">
            COMMERCE INTELLIGENCE
          </div>
        </div>

        <div className="w-48 h-0.5 bg-surface-border rounded-full overflow-hidden mt-2">
          <div
            className="h-full bg-lime-primary transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};
