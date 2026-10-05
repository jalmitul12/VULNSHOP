import React from 'react';
import { ShoppingBag, Search, Shield, User as UserIcon, LogOut, ChevronRight, Laptop } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

interface HeaderProps {
  onOpenSearch: () => void;
  onNavigate: (path: string) => void;
  currentPath: string;
}

export const Header: React.FC<HeaderProps> = ({ onOpenSearch, onNavigate, currentPath }) => {
  const { user, logout } = useAuth();
  const { toggleCart, totalCount } = useCart();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-surface-border/60 bg-bg/80 backdrop-blur-xl transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Brand */}
        <div
          onClick={() => onNavigate('/')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-8 h-8 rounded-xl bg-surface-elevated border border-surface-border flex items-center justify-center text-lime-primary font-mono font-bold text-xs group-hover:border-lime-primary/50 transition-colors shadow-[0_0_12px_rgba(183,255,106,0.1)]">
            VS
          </div>
          <div className="flex flex-col">
            <span className="font-mono text-sm tracking-widest font-bold text-text-primary">
              VULN<span className="text-lime-primary">SHOP</span>
            </span>
            <span className="text-[9px] font-mono tracking-wider text-text-muted hidden sm:inline">
              HARDWARE / LAB
            </span>
          </div>
        </div>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center gap-1 bg-surface-elevated/60 p-1 rounded-full border border-surface-border">
          <button
            onClick={() => onNavigate('/products')}
            className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
              currentPath === '/products'
                ? 'bg-surface text-lime-primary shadow-sm border border-surface-border'
                : 'text-text-secondary hover:text-text-primary'
            }`}
          >
            Store
          </button>
          <button
            onClick={() => onNavigate('/search')}
            className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
              currentPath === '/search'
                ? 'bg-surface text-lime-primary shadow-sm border border-surface-border'
                : 'text-text-secondary hover:text-text-primary'
            }`}
          >
            Search
          </button>
          {user && (
            <>
              <button
                onClick={() => onNavigate('/orders')}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                  currentPath === '/orders' || currentPath.startsWith('/order/')
                    ? 'bg-surface text-lime-primary shadow-sm border border-surface-border'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                Orders
              </button>
              <button
                onClick={() => onNavigate('/profile')}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                  currentPath === '/profile' || currentPath === '/profile/upload'
                    ? 'bg-surface text-lime-primary shadow-sm border border-surface-border'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                Account
              </button>
            </>
          )}
          <button
            onClick={() => onNavigate('/admin')}
            className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
              currentPath === '/admin'
                ? 'bg-surface text-lime-primary shadow-sm border border-surface-border'
                : 'text-text-secondary hover:text-text-primary'
            }`}
          >
            Admin
          </button>
          <button
            onClick={() => onNavigate('/security')}
            className={`px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-1.5 transition-all ${
              currentPath === '/security'
                ? 'bg-surface text-violet-cool shadow-sm border border-surface-border'
                : 'text-text-muted hover:text-violet-cool'
            }`}
            title="Practical 7 Notes"
          >
            <Shield className="w-3.5 h-3.5" />
            <span>Security</span>
          </button>
        </nav>

        {/* Right Section: System Indicator, Search Button, Cart, Auth */}
        <div className="flex items-center gap-3">
          {/* Status Indicator */}
          <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-surface-border text-[11px] font-mono text-text-secondary">
            <span className="w-2 h-2 rounded-full bg-lime-primary animate-pulse" />
            <span>LOCAL NODE</span>
          </div>

          {/* Quick Search trigger button */}
          <button
            onClick={onOpenSearch}
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-surface border border-surface-border text-text-secondary hover:text-text-primary hover:border-surface-borderHover text-xs transition-colors"
            title="Open Search (Ctrl+K)"
          >
            <Search className="w-4 h-4 text-lime-primary" />
            <span className="hidden sm:inline">Search</span>
            <kbd className="hidden sm:inline text-[9px] font-mono px-1.5 py-0.5 rounded bg-surface-elevated text-text-muted border border-surface-border">
              ⌘K
            </kbd>
          </button>

          {/* Cart Trigger */}
          <button
            onClick={toggleCart}
            className="relative p-2 rounded-xl bg-surface border border-surface-border text-text-secondary hover:text-text-primary hover:border-lime-primary/40 transition-all group"
            title="Open Shopping Bag"
          >
            <ShoppingBag className="w-4 h-4 group-hover:text-lime-primary transition-colors" />
            {totalCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-lime-primary text-bg font-mono font-bold text-[10px] flex items-center justify-center shadow-[0_0_8px_rgba(183,255,106,0.6)] animate-scale-up">
                {totalCount}
              </span>
            )}
          </button>

          {/* User Sign In / Profile */}
          {user ? (
            <div className="flex items-center gap-2">
              <button
                onClick={() => onNavigate('/profile')}
                className="flex items-center gap-2 p-1.5 sm:px-3 sm:py-1.5 rounded-xl bg-surface-elevated border border-surface-border hover:border-surface-borderHover text-xs text-text-primary transition-colors"
              >
                <div className="w-5 h-5 rounded-full bg-lime-primary/20 text-lime-primary font-mono text-[10px] flex items-center justify-center font-bold">
                  {user.username[0].toUpperCase()}
                </div>
                <span className="hidden sm:inline font-medium">{user.username}</span>
                {user.role === 'admin' && (
                  <span className="text-[9px] font-mono px-1 rounded bg-violet-cool/20 text-violet-cool hidden md:inline">
                    ADMIN
                  </span>
                )}
              </button>
              <button
                onClick={logout}
                className="p-2 text-text-muted hover:text-text-primary rounded-xl transition-colors"
                title="Sign out"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <button
              onClick={() => onNavigate('/login')}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-lime-primary text-bg font-semibold text-xs transition-all hover:bg-lime-secondary hover:shadow-[0_0_16px_rgba(183,255,106,0.25)]"
            >
              <span>Sign in</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
