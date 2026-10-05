import React from 'react';
import { Shield, ExternalLink, Terminal } from 'lucide-react';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="w-full border-t border-surface-border bg-surface-elevated/40 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-surface border border-surface-border flex items-center justify-center text-lime-primary font-mono font-bold text-xs">
                VS
              </div>
              <span className="font-mono text-sm tracking-widest font-bold text-text-primary">
                VULN<span className="text-lime-primary">SHOP</span>
              </span>
            </div>
            <p className="text-xs text-text-secondary max-w-md leading-relaxed">
              A high-precision technology commerce storefront created for authorized Ethical Hacking &amp; Vulnerability Assessment. The storefront embeds genuine application flaws inside a production-grade interface.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface border border-surface-border text-[11px] font-mono text-text-muted">
              <Terminal className="w-3.5 h-3.5 text-lime-primary" />
              <span>PROXY READY · BURP SUITE INTERCEPT ON 127.0.0.1</span>
            </div>
          </div>

          {/* Commerce Links */}
          <div className="space-y-3">
            <div className="text-[11px] font-mono uppercase tracking-widest text-text-muted">
              APPLICATION
            </div>
            <ul className="space-y-2 text-xs text-text-secondary font-medium">
              <li>
                <button onClick={() => onNavigate('/products')} className="hover:text-lime-primary transition-colors">
                  Storefront Catalog
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/search')} className="hover:text-lime-primary transition-colors">
                  Search &amp; Filters
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/orders')} className="hover:text-lime-primary transition-colors">
                  Order Tracking
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/profile')} className="hover:text-lime-primary transition-colors">
                  Profile &amp; Security
                </button>
              </li>
            </ul>
          </div>

          {/* Assessment & Academic Info */}
          <div className="space-y-3">
            <div className="text-[11px] font-mono uppercase tracking-widest text-text-muted">
              SECURITY LAB
            </div>
            <ul className="space-y-2 text-xs text-text-secondary font-medium">
              <li>
                <button onClick={() => onNavigate('/security')} className="hover:text-violet-cool transition-colors flex items-center gap-1">
                  <Shield className="w-3 h-3 text-violet-cool" />
                  <span>Practical 7 Guide</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/admin')} className="hover:text-lime-primary transition-colors">
                  Admin Console
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/profile/upload')} className="hover:text-lime-primary transition-colors">
                  Avatar Uploader
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/login')} className="hover:text-lime-primary transition-colors">
                  Authentication Portal
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 pt-8 border-t border-surface-border flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-text-muted">
          <div>
            Nirma University · 3CS204ME24 · Ethical Hacking Practical 7
          </div>
          <div className="flex items-center gap-4">
            <span className="text-lime-primary">● 10 OWASP Vectors Embedded</span>
            <span>Local Isolated Lab Target</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
