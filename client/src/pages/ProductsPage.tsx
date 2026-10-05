import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag, Eye, SlidersHorizontal, ArrowUpDown } from 'lucide-react';
import { Product } from '../types';
import { api } from '../services/api';
import { useCart } from '../context/CartContext';

interface ProductsPageProps {
  onSelectProduct: (id: number) => void;
  onNavigate: (path: string) => void;
}


const productImageMap: Record<number, string> = {
  101: '/images/laptop.svg',
  102: '/images/phone.svg',
  103: '/images/headphones.svg',
  104: '/images/keyboard.svg',
  105: '/images/monitor.svg',
  106: '/images/mouse.svg',
};

export const ProductsPage: React.FC<ProductsPageProps> = ({ onSelectProduct }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'name'>('featured');
  const { addItem } = useCart();

  useEffect(() => {
    api.getProducts().then(setProducts);
  }, []);

  const categories = ['ALL', 'LAPTOPS', 'SMARTPHONES', 'AUDIO', 'MONITORS', 'ACCESSORIES'];

  let filtered = products.filter(p => {
    const matchCategory = selectedCategory === 'ALL' || p.category.toUpperCase() === selectedCategory;
    const matchQuery = !searchQuery ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchQuery;
  });

  if (sortBy === 'price-asc') {
    filtered = [...filtered].sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-desc') {
    filtered = [...filtered].sort((a, b) => b.price - a.price);
  } else if (sortBy === 'name') {
    filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name));
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs text-lime-primary font-bold">CATALOG / ACTIVE</span>
          <span className="h-px w-12 bg-surface-border" />
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tighter text-text-primary">
              STOREFRONT.
            </h1>
            <p className="text-sm text-text-secondary mt-1">
              Curated precision hardware devices available for assessment and acquisition.
            </p>
          </div>

          {/* Search bar & Sort dropdown */}
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <div className="relative">
              <Search className="w-4 h-4 text-text-muted absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Filter catalog..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full sm:w-64 pl-9 pr-4 py-2 bg-surface border border-surface-border rounded-xl text-xs text-text-primary placeholder:text-text-muted focus:outline-none focus:border-lime-primary/50"
              />
            </div>

            <div className="relative">
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value as any)}
                className="w-full sm:w-44 py-2 px-3 bg-surface border border-surface-border rounded-xl text-xs text-text-secondary focus:outline-none focus:border-lime-primary/50 cursor-pointer"
              >
                <option value="featured">Sort: Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="name">Name: A to Z</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap gap-2 pb-2 border-b border-surface-border/60">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-xs font-mono transition-all ${
              selectedCategory === cat
                ? 'bg-lime-primary text-bg font-bold shadow-sm'
                : 'bg-surface border border-surface-border text-text-secondary hover:text-text-primary hover:border-surface-borderHover'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(product => (
            <div
              key={product.id}
              className="group rounded-2xl bg-surface border border-surface-border hover:border-surface-borderHover transition-all flex flex-col justify-between overflow-hidden hover:shadow-2xl hover:-translate-y-1"
            >
              {/* Product Visual */}
              <div
                onClick={() => onSelectProduct(product.id)}
                className="relative h-52 bg-surface-elevated border-b border-surface-border flex items-center justify-center cursor-pointer overflow-hidden p-6"
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
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-surface border border-surface-border text-lime-primary font-medium">
                    {product.category}
                  </span>
                </div>

                <div className="absolute top-3 right-3 flex items-center gap-1.5 text-[10px] font-mono text-text-muted bg-surface/80 px-2 py-0.5 rounded border border-surface-border">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime-primary" />
                  <span>{product.stock} available</span>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3
                    onClick={() => onSelectProduct(product.id)}
                    className="text-lg font-bold text-text-primary group-hover:text-lime-primary transition-colors cursor-pointer"
                  >
                    {product.name}
                  </h3>
                  <p className="text-xs text-text-secondary mt-1.5 leading-relaxed line-clamp-2">
                    {product.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-surface-border flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-text-muted block">HARDWARE PRICE</span>
                    <div className="font-mono text-base font-bold text-text-primary">
                      ₹{product.price.toLocaleString('en-IN')}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onSelectProduct(product.id)}
                      className="p-2 text-text-secondary hover:text-text-primary rounded-lg transition-colors text-xs font-medium bg-surface-elevated border border-surface-border"
                      title="Inspect specs"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => addItem(product, 1)}
                      className="px-4 py-2 rounded-xl bg-lime-primary text-bg font-bold text-xs flex items-center gap-1.5 hover:bg-lime-secondary transition-all shadow-[0_0_12px_rgba(183,255,106,0.2)]"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Add to Bag</span>
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
            <p className="text-xs text-text-secondary mt-1">Try resetting the category filter or searching for another term.</p>
          </div>
          <button
            onClick={() => {
              setSelectedCategory('ALL');
              setSearchQuery('');
            }}
            className="px-4 py-2 rounded-xl bg-lime-primary text-bg font-semibold text-xs"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
};
