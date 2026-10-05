import React, { useEffect, useState, useRef } from 'react';
import { Search, X, ArrowRight, Laptop, Headphones, Smartphone, Monitor, Keyboard, Zap, Shield, ShoppingBag } from 'lucide-react';
import { Product } from '../types';
import { api } from '../services/api';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (id: number) => void;
  onNavigate: (path: string) => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onSelectProduct,
  onNavigate,
}) => {
  const [query, setQuery] = useState('');
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    api.getProducts().then(setProducts);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setSelectedIndex(0);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Open triggered from parent or global handler
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!query.trim()) {
      setFilteredProducts(products);
      return;
    }
    const q = query.toLowerCase();
    const matches = products.filter(
      p =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
    );
    setFilteredProducts(matches);
    setSelectedIndex(0);
  }, [query, products]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => (prev + 1) % (filteredProducts.length + 3));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (prev - 1 + (filteredProducts.length + 3)) % (filteredProducts.length + 3));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (selectedIndex < filteredProducts.length) {
        const p = filteredProducts[selectedIndex];
        if (p) {
          onSelectProduct(p.id);
          onClose();
        }
      } else if (selectedIndex === filteredProducts.length) {
        onNavigate('/products');
        onClose();
      } else if (selectedIndex === filteredProducts.length + 1) {
        onNavigate('/orders');
        onClose();
      } else if (selectedIndex === filteredProducts.length + 2) {
        onNavigate('/security');
        onClose();
      }
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'laptops': return <Laptop className="w-4 h-4 text-lime-primary" />;
      case 'smartphones': return <Smartphone className="w-4 h-4 text-blue-electric" />;
      case 'audio': return <Headphones className="w-4 h-4 text-violet-cool" />;
      case 'monitors': return <Monitor className="w-4 h-4 text-lime-primary" />;
      default: return <Keyboard className="w-4 h-4 text-text-secondary" />;
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-bg/80 backdrop-blur-md animate-fade-in">
      <div
        className="relative w-full max-w-2xl bg-surface border border-surface-border rounded-2xl shadow-2xl overflow-hidden animate-scale-up"
        onClick={e => e.stopPropagation()}
      >
        {/* Top Search Input */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-surface-border bg-surface-elevated">
          <Search className="w-5 h-5 text-lime-primary" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search products, categories, commands..."
            className="w-full bg-transparent text-text-primary placeholder:text-text-muted focus:outline-none text-base"
          />
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 text-[10px] font-mono text-text-muted bg-surface rounded border border-surface-border">
              ESC
            </span>
            <button
              onClick={onClose}
              className="p-1 text-text-secondary hover:text-text-primary rounded-lg transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Search Results */}
        <div className="max-h-[60vh] overflow-y-auto p-3 space-y-1">
          <div className="px-3 py-1.5 text-[10px] font-mono text-text-muted uppercase tracking-wider">
            {query ? `Matching Products (${filteredProducts.length})` : 'Featured Products'}
          </div>

          {filteredProducts.length > 0 ? (
            filteredProducts.map((p, idx) => (
              <div
                key={p.id}
                onClick={() => {
                  onSelectProduct(p.id);
                  onClose();
                }}
                className={`flex items-center justify-between px-3 py-2.5 rounded-xl cursor-pointer transition-all ${
                  selectedIndex === idx
                    ? 'bg-surface-elevated border border-lime-primary/30 text-text-primary pl-4'
                    : 'text-text-secondary hover:bg-surface-elevated/60 hover:text-text-primary'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-surface border border-surface-border">
                    {getCategoryIcon(p.category)}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-text-primary flex items-center gap-2">
                      {p.name}
                      <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-surface-elevated text-lime-primary border border-surface-border">
                        {p.category}
                      </span>
                    </div>
                    <div className="text-xs text-text-muted line-clamp-1">{p.description}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-sm text-lime-primary font-medium">
                    ₹{p.price.toLocaleString('en-IN')}
                  </span>
                  <ArrowRight className="w-4 h-4 text-text-muted" />
                </div>
              </div>
            ))
          ) : (
            <div className="py-8 text-center text-text-muted text-sm">
              Nothing matched <span className="text-lime-primary">"{query}"</span>. Try searching for "laptop" or "audio".
            </div>
          )}

          <div className="pt-3 pb-1 border-t border-surface-border/50 px-3 text-[10px] font-mono text-text-muted uppercase tracking-wider">
            Quick Navigation
          </div>

          <div
            onClick={() => {
              onNavigate('/products');
              onClose();
            }}
            className={`flex items-center justify-between px-3 py-2 rounded-xl cursor-pointer transition-all ${
              selectedIndex === filteredProducts.length
                ? 'bg-surface-elevated border border-lime-primary/30 text-text-primary'
                : 'text-text-secondary hover:bg-surface-elevated/60 hover:text-text-primary'
            }`}
          >
            <div className="flex items-center gap-3 text-sm">
              <ShoppingBag className="w-4 h-4 text-lime-primary" />
              <span>Browse Complete Storefront</span>
            </div>
            <span className="text-xs font-mono text-text-muted">/products</span>
          </div>

          <div
            onClick={() => {
              onNavigate('/orders');
              onClose();
            }}
            className={`flex items-center justify-between px-3 py-2 rounded-xl cursor-pointer transition-all ${
              selectedIndex === filteredProducts.length + 1
                ? 'bg-surface-elevated border border-lime-primary/30 text-text-primary'
                : 'text-text-secondary hover:bg-surface-elevated/60 hover:text-text-primary'
            }`}
          >
            <div className="flex items-center gap-3 text-sm">
              <Zap className="w-4 h-4 text-blue-electric" />
              <span>Your Orders & History</span>
            </div>
            <span className="text-xs font-mono text-text-muted">/orders</span>
          </div>

          <div
            onClick={() => {
              onNavigate('/security');
              onClose();
            }}
            className={`flex items-center justify-between px-3 py-2 rounded-xl cursor-pointer transition-all ${
              selectedIndex === filteredProducts.length + 2
                ? 'bg-surface-elevated border border-lime-primary/30 text-text-primary'
                : 'text-text-secondary hover:bg-surface-elevated/60 hover:text-text-primary'
            }`}
          >
            <div className="flex items-center gap-3 text-sm">
              <Shield className="w-4 h-4 text-violet-cool" />
              <span>Practical 7 Vulnerability Notes</span>
            </div>
            <span className="text-xs font-mono text-text-muted">/security</span>
          </div>
        </div>

        {/* Footer Hint */}
        <div className="px-5 py-2.5 bg-surface-elevated/50 border-t border-surface-border flex items-center justify-between text-[11px] font-mono text-text-muted">
          <span>Navigate with <kbd className="px-1 bg-surface border border-surface-border rounded">↑</kbd> <kbd className="px-1 bg-surface border border-surface-border rounded">↓</kbd></span>
          <span>Select <kbd className="px-1 bg-surface border border-surface-border rounded">ENTER</kbd></span>
        </div>
      </div>
    </div>
  );
};
