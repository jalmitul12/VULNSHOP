import React from 'react';
import { ArrowRight, AlertCircle } from 'lucide-react';

interface NotFoundPageProps {
  onNavigate: (path: string) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center space-y-6">
      <div className="relative">
        <span className="text-8xl sm:text-9xl font-mono font-extrabold text-surface-border select-none">
          404
        </span>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-mono text-xs text-lime-primary px-3 py-1 rounded-full bg-surface border border-surface-border">
            NODE NOT FOUND
          </span>
        </div>
      </div>

      <div className="space-y-2 max-w-md">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tighter text-text-primary">
          THIS PAGE<br />
          <span className="text-text-secondary">DIDN'T MAKE THE CUT.</span>
        </h1>
        <p className="text-xs text-text-muted leading-relaxed font-mono">
          The requested route or hardware identifier does not exist in the active VulnShop catalog.
        </p>
      </div>

      <button
        onClick={() => onNavigate('/')}
        className="px-6 py-3 rounded-xl bg-lime-primary text-bg font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:bg-lime-secondary transition-all hover:scale-105"
      >
        <span>Back to VulnShop Storefront</span>
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
};
