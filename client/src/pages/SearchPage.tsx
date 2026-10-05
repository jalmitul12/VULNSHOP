import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag, Eye, ShieldAlert, Sparkles, Terminal } from 'lucide-react';
import { Product } from '../types';
import { api } from '../services/api';
import { useCart } from '../context/CartContext';

interface SearchPageProps {
  onSelectProduct: (id: number) => void;
  onNavigate: (path: string) => void;
}

export const SearchPage: React.FC<SearchPageProps> = ({ onSelectProduct }) => {
  const [query, setQuery] = useState('');
  const [rawReflectedQuery, setRawReflectedQuery] = useState('');
  const [products, setProducts] = useState<Product[]>([]);
  const [unsafeRender, setUnsafeRender] = useState(true);
  const { addItem } = useCart();

  const performSearch = async (q: string) => {
    setRawReflectedQuery(q);
    const res = await api.searchProducts(q);
    setProducts(res.products);
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const initialQuery = params.get('q') || '';
    if (initialQuery) {
      setQuery(initialQuery);
      performSearch(initialQuery);
    } else {
      api.getProducts().then(setProducts);
    }
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    performSearch(query);
    const newUrl = query ? `/search?q=${encodeURIComponent(query)}` : '/search';
    window.history.pushState({}, '', newUrl);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* Page Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs text-lime-primary font-bold">DISCOVERY / SEARCH</span>
          <span className="h-px w-12 bg-surface-border" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tighter text-text-primary">
          SEARCH CATALOG.
        </h1>
        <p className="text-sm text-text-secondary max-w-xl">
          Search hardware models, specifications, and categories across the entire local inventory.
        </p>
      </div>

      {/* Search Input Box */}
      <form onSubmit={handleSearchSubmit} className="relative max-w-3xl">
        <div className="flex items-center gap-3 p-2 bg-surface border border-surface-border rounded-2xl focus-within:border-lime-primary/50 shadow-xl transition-all">
          <Search className="w-5 h-5 text-lime-primary ml-3" />
          <input
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search laptops, audio, accessories (e.g. AeroBook, Pulse)..."
            className="w-full bg-transparent text-text-primary text-sm placeholder:text-text-muted focus:outline-none py-2"
          />
          <button
            type="submit"
            className="px-6 py-2.5 rounded-xl bg-lime-primary text-bg font-bold text-xs uppercase tracking-wider hover:bg-lime-secondary transition-all shrink-0"
          >
            Search
          </button>
        </div>
      </form>

      {/* Query Reflection Display (Reflected XSS Demonstration Area) */}
      {rawReflectedQuery && (
        <div className="p-5 rounded-2xl bg-surface-elevated border border-surface-border space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="text-sm text-text-secondary">
              Showing query results for:{' '}
              {unsafeRender ? (
                // INTENTIONALLY VULNERABLE REFLECTION for Practical 7 Reflected XSS
                <span
                  className="font-semibold text-lime-primary"
                  dangerouslySetInnerHTML={{ __html: rawReflectedQuery }}
                />
              ) : (
                <span className="font-semibold text-lime-primary">{rawReflectedQuery}</span>
              )}
            </div>

            <div className="flex items-center gap-2 text-xs font-mono">
              <span className="text-text-muted">OWASP Mode:</span>
              <button
                type="button"
                onClick={() => setUnsafeRender(!unsafeRender)}
                className={`px-2.5 py-1 rounded-lg border text-[11px] transition-colors ${
                  unsafeRender
                    ? 'bg-amber-500/10 border-amber-500/30 text-amber-300'
                    : 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
                }`}
              >
                {unsafeRender ? '⚠️ Vulnerable (Raw Reflection)' : '🛡️ Protected (HTML Escaped)'}
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2 text-[11px] font-mono text-text-muted pt-2 border-t border-surface-border/50">
            <Terminal className="w-3.5 h-3.5 text-lime-primary" />
            <span>Burp Suite Target: <code>GET /search?q=&lt;payload&gt;</code></span>
          </div>
        </div>
      )}

      {/* Results Grid */}
      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(product => (
            <div
              key={product.id}
              className="group rounded-2xl bg-surface border border-surface-border hover:border-surface-borderHover transition-all flex flex-col justify-between overflow-hidden hover:shadow-2xl hover:-translate-y-1"
            >
              <div
                onClick={() => onSelectProduct(product.id)}
                className="relative h-48 bg-surface-elevated border-b border-surface-border flex items-center justify-center cursor-pointer overflow-hidden p-6"
                data-cursor="view"
              >
                <div className="absolute inset-0 bg-ambient-glow opacity-30 group-hover:opacity-70 transition-opacity" />
                <img
                  src={productImageMap[product.id] || '/images/laptop.svg'}
                  alt={`${product.name} product illustration`}
                  loading="lazy"
                  className="relative z-10 w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-surface border border-surface-border text-lime-primary">
                    {product.category}
                  </span>
                </div>
              </div>

              <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3
                    onClick={() => onSelectProduct(product.id)}
                    className="text-base font-bold text-text-primary group-hover:text-lime-primary transition-colors cursor-pointer"
                  >
                    {product.name}
                  </h3>
                  <p className="text-xs text-text-secondary mt-1 line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-surface-border flex items-center justify-between">
                  <div className="font-mono text-base font-bold text-text-primary">
                    ₹{product.price.toLocaleString('en-IN')}
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onSelectProduct(product.id)}
                      className="p-2 text-text-secondary hover:text-text-primary rounded-lg transition-colors text-xs font-medium bg-surface-elevated border border-surface-border"
                      title="Inspect details"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => addItem(product, 1)}
                      className="px-3.5 py-1.5 rounded-xl bg-lime-primary text-bg font-bold text-xs flex items-center gap-1.5 hover:bg-lime-secondary transition-all"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Add</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="py-20 text-center rounded-3xl bg-surface border border-surface-border space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-surface-elevated border border-surface-border mx-auto flex items-center justify-center text-text-muted">
            <Search className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold text-text-primary text-lg">NOTHING MATCHED.</h3>
            <p className="text-xs text-text-secondary mt-1">Try a broader query such as "laptop" or "audio".</p>
          </div>
        </div>
      )}
    </div>
  );
};
