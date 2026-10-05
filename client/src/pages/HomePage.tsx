import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, CheckCircle2, Shield, ShoppingBag, Eye, Cpu, Zap, Activity } from 'lucide-react';
import { Hero3D } from '../components/Hero3D';
import { Product } from '../types';
import { api } from '../services/api';
import { useCart } from '../context/CartContext';

interface HomePageProps {
  onNavigate: (path: string) => void;
  onSelectProduct: (id: number) => void;
}

const productImageMap: Record<number, string> = {
  101: '/images/laptop.svg',
  102: '/images/phone.svg',
  103: '/images/headphones.svg',
  104: '/images/keyboard.svg',
  105: '/images/monitor.svg',
  106: '/images/mouse.svg',
};

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onSelectProduct }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [activeStep, setActiveStep] = useState(1);
  const { addItem } = useCart();

  useEffect(() => {
    api.getProducts().then(setProducts);
  }, []);

  const categories = ['ALL', 'LAPTOPS', 'SMARTPHONES', 'AUDIO', 'MONITORS', 'ACCESSORIES'];

  const filteredProducts = selectedCategory === 'ALL'
    ? products
    : products.filter(p => p.category.toUpperCase() === selectedCategory);

  const featuredProduct = products.find(p => p.id === 101) || products[0];

  return (
    <div className="relative w-full overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-ambient-glow pointer-events-none" />
      <div className="absolute top-[800px] right-0 w-[500px] h-[500px] bg-ambient-secondary pointer-events-none" />
      <div className="absolute inset-0 bg-grid-subtle pointer-events-none opacity-40" />

      {/* ========================================================================= */}
      {/* SECTION 01 — HERO (FULL SCREEN 90-100vh) */}
      {/* ========================================================================= */}
      <section className="relative min-h-[calc(100vh-4rem)] flex flex-col justify-between pt-8 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center flex-1 my-auto">
          {/* Left Column: Editorial Headline & Narrative */}
          <div className="lg:col-span-7 space-y-8 z-10">
            {/* Numbered Journey Badge */}
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-md bg-lime-primary/10 border border-lime-primary/20 text-lime-primary font-mono text-xs font-semibold">
                01 / LAUNCH
              </span>
              <span className="text-xs font-mono text-text-muted">HARDWARE ARCHITECTURE</span>
            </div>

            {/* Headline with word-by-word visual rhythm */}
            <div className="space-y-2">
              <span className="text-xs font-mono tracking-widest text-lime-primary uppercase block">
                COMMERCE INTELLIGENCE
              </span>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tighter text-text-primary leading-[1.05]">
                FIND BETTER.<br />
                <span className="text-gradient-lime">BUY WITH CLARITY.</span>
              </h1>
            </div>

            <p className="text-base sm:text-lg text-text-secondary max-w-xl font-normal leading-relaxed">
              VulnShop turns browsing, hardware selection, checkout and live order telemetry into one focused shopping experience.
            </p>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => onNavigate('/products')}
                className="px-7 py-3.5 rounded-xl bg-lime-primary text-bg font-bold text-sm flex items-center gap-2 hover:bg-lime-secondary transition-all hover:scale-[1.02] hover:shadow-[0_0_24px_rgba(183,255,106,0.35)]"
              >
                <span>Start shopping</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  const el = document.getElementById('story-section');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-3.5 rounded-xl bg-surface border border-surface-border text-text-primary font-medium text-sm hover:border-surface-borderHover hover:bg-surface-elevated transition-all"
              >
                Explore product story ↓
              </button>
            </div>
          </div>

          {/* Right Column: 3D Interactive Centerpiece */}
          <div className="lg:col-span-5 relative h-[380px] sm:h-[480px] lg:h-[560px] flex items-center justify-center">
            <div className="w-full h-full relative z-10" data-cursor="explore">
              <Hero3D />
            </div>

            {/* Floating 3D Hint Badge */}
            <div className="absolute bottom-2 right-2 z-20 px-3 py-1.5 rounded-full bg-surface/80 border border-surface-border backdrop-blur-md text-[10px] font-mono text-text-secondary flex items-center gap-2 pointer-events-none">
              <span className="w-1.5 h-1.5 rounded-full bg-lime-primary animate-ping" />
              <span>3D INTERACTIVE · DRAG TO ROTATE</span>
            </div>
          </div>
        </div>

        {/* Hero Bottom Telemetry Bar */}
        <div className="mt-8 pt-6 border-t border-surface-border/60 grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="p-3 rounded-xl bg-surface/50 border border-surface-border">
            <div className="text-[10px] font-mono text-text-muted">CATALOG NODE</div>
            <div className="text-xl font-bold font-mono text-text-primary mt-0.5">
              {products.length || 6} <span className="text-xs font-normal text-text-secondary">UNITS</span>
            </div>
          </div>
          <div className="p-3 rounded-xl bg-surface/50 border border-surface-border">
            <div className="text-[10px] font-mono text-text-muted">SECTOR COVERAGE</div>
            <div className="text-xl font-bold font-mono text-text-primary mt-0.5">
              5 <span className="text-xs font-normal text-text-secondary">CATEGORIES</span>
            </div>
          </div>
          <div className="p-3 rounded-xl bg-surface/50 border border-surface-border">
            <div className="text-[10px] font-mono text-text-muted">HARDWARE GRADE</div>
            <div className="text-xl font-bold font-mono text-lime-primary mt-0.5">
              PRO 14 <span className="text-xs font-normal text-text-secondary">TITANIUM</span>
            </div>
          </div>
          <div className="p-3 rounded-xl bg-surface/50 border border-surface-border">
            <div className="text-[10px] font-mono text-text-muted">LOCAL TARGET</div>
            <div className="text-xl font-bold font-mono text-blue-electric mt-0.5">
              127.0.0.1 <span className="text-xs font-normal text-text-secondary">PORT 3000</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 02 — PRODUCT STORY (EDITORIAL COMPOSITION) */}
      {/* ========================================================================= */}
      <section id="story-section" className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="space-y-4 mb-16">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-lime-primary font-bold">02 / PRODUCT STORY</span>
            <span className="h-px w-12 bg-surface-border" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tighter text-text-primary max-w-2xl leading-tight">
            GOOD PRODUCTS<br />
            <span className="text-text-secondary">DESERVE MORE THAN A GRID.</span>
          </h2>
          <p className="text-sm sm:text-base text-text-secondary max-w-xl">
            Instead of crowding your screen with repetitive tiles, we highlight engineered craftsmanship first.
          </p>
        </div>

        {/* Featured Big Showcase Card */}
        {featuredProduct && (
          <div className="relative rounded-3xl bg-surface border border-surface-border overflow-hidden p-8 sm:p-12 lg:p-16 hover:border-surface-borderHover transition-all">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime-primary/10 border border-lime-primary/20 text-lime-primary text-xs font-mono">
                  <span>FLAGSHIP HARDWARE</span>
                  <span>·</span>
                  <span>{featuredProduct.category}</span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary tracking-tight">
                    {featuredProduct.name}
                  </h3>
                  <div className="text-xl sm:text-2xl font-mono text-lime-primary font-bold">
                    POWER WITHOUT THE NOISE.
                  </div>
                </div>

                <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
                  {featuredProduct.description} Engineered with a precision titanium unibody, high-refresh display, and silent active thermal dispersion.
                </p>

                <div className="grid grid-cols-2 gap-4 py-2 border-y border-surface-border text-xs font-mono">
                  <div>
                    <span className="text-text-muted block">PRICE</span>
                    <strong className="text-text-primary text-base">₹{featuredProduct.price.toLocaleString('en-IN')}</strong>
                  </div>
                  <div>
                    <span className="text-text-muted block">AVAILABILITY</span>
                    <strong className="text-lime-primary text-base">● {featuredProduct.stock} IN STOCK</strong>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 pt-2">
                  <button
                    onClick={() => {
                      addItem(featuredProduct, 1);
                    }}
                    className="px-6 py-3 rounded-xl bg-lime-primary text-bg font-bold text-xs uppercase tracking-wider hover:bg-lime-secondary transition-all"
                  >
                    Add to Bag →
                  </button>
                  <button
                    onClick={() => onSelectProduct(featuredProduct.id)}
                    className="px-6 py-3 rounded-xl bg-surface-elevated border border-surface-border text-text-primary font-medium text-xs hover:border-lime-primary/40 transition-colors"
                  >
                    Inspect Full Specs
                  </button>
                </div>
              </div>

              {/* Large Stylized Hardware Visual Representation */}
              <div
                onClick={() => onSelectProduct(featuredProduct.id)}
                className="lg:col-span-6 relative h-72 sm:h-96 rounded-2xl bg-surface-elevated border border-surface-border flex flex-col items-center justify-center p-8 cursor-pointer group overflow-hidden"
                data-cursor="view"
              >
                <div className="absolute inset-0 bg-ambient-glow opacity-50 group-hover:opacity-80 transition-opacity" />
                <img
                  src={productImageMap[featuredProduct.id] || '/images/laptop.svg'}
                  alt={`${featuredProduct.name} product illustration`}
                  className="relative z-10 w-full h-full object-contain rounded-xl transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute z-20 left-0 right-0 bottom-5 text-center space-y-1 px-4">
                  <div className="text-lg font-bold text-text-primary group-hover:text-lime-primary transition-colors flex items-center justify-center gap-2">
                    <span>{featuredProduct.name}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <span className="text-xs font-mono text-text-muted block">
                    CLICK TO VIEW INTERACTIVE DETAIL
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* ========================================================================= */}
      {/* SECTION 03 — PRODUCT SIGNALS */}
      {/* ========================================================================= */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-surface-border/50">
        <div className="space-y-4 mb-16">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-lime-primary font-bold">03 / PRODUCT SIGNALS</span>
            <span className="h-px w-12 bg-surface-border" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tighter text-text-primary leading-tight">
            EVERY PRODUCT,<br />
            <span className="text-text-secondary">USEFUL SIGNALS.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-surface border border-surface-border space-y-3 hover:border-lime-primary/30 transition-all">
            <div className="flex items-center justify-between text-xs font-mono text-text-muted">
              <span>01</span>
              <span>PERFORMANCE</span>
            </div>
            <div className="text-3xl font-mono font-bold text-text-primary">
              M3 <span className="text-lime-primary text-xl">GRADE</span>
            </div>
            <p className="text-xs text-text-secondary">
              Silicon architecture benchmarked for intensive development and local assessment workloads.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-surface border border-surface-border space-y-3 hover:border-lime-primary/30 transition-all">
            <div className="flex items-center justify-between text-xs font-mono text-text-muted">
              <span>02</span>
              <span>PRICE TRANSPARENCY</span>
            </div>
            <div className="text-3xl font-mono font-bold text-lime-primary">
              ₹69,999
            </div>
            <p className="text-xs text-text-secondary">
              Clear pricing before checkout with direct itemized transparency and instant tax derivation.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-surface border border-surface-border space-y-3 hover:border-blue-electric/30 transition-all">
            <div className="flex items-center justify-between text-xs font-mono text-text-muted">
              <span>03</span>
              <span>DISPATCH TELEMETRY</span>
            </div>
            <div className="text-3xl font-mono font-bold text-blue-electric">
              TODAY
            </div>
            <p className="text-xs text-text-secondary">
              Direct dispatch from the local inventory node with step-by-step shipment state tracking.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-surface border border-surface-border space-y-3 hover:border-violet-cool/30 transition-all">
            <div className="flex items-center justify-between text-xs font-mono text-text-muted">
              <span>04</span>
              <span>COMMUNITY REVIEWS</span>
            </div>
            <div className="text-3xl font-mono font-bold text-violet-cool">
              4.8 <span className="text-base text-text-muted">/ 5.0</span>
            </div>
            <p className="text-xs text-text-secondary">
              Real community feedback and evaluation submitted by authenticated storefront users.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 04 — COMMERCE JOURNEY */}
      {/* ========================================================================= */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-surface-border/50">
        <div className="space-y-4 mb-16">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-lime-primary font-bold">04 / COMMERCE JOURNEY</span>
            <span className="h-px w-12 bg-surface-border" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tighter text-text-primary leading-tight">
            DISCOVER → DECIDE →<br />
            <span className="text-text-secondary">MAKE IT YOURS.</span>
          </h2>
          <p className="text-sm text-text-secondary max-w-lg">
            Every step is visible, from the initial hardware inspection to final order telemetry.
          </p>
        </div>

        {/* Interactive Step Sequence */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {[
            { step: 1, title: 'DISCOVER', desc: 'Browse the hardware catalog and compare key specifications.' },
            { step: 2, title: 'EXPLORE', desc: 'Inspect 3D materials, thermal design and verified community reviews.' },
            { step: 3, title: 'DECIDE', desc: 'Select quantity and configure instant delivery parameters.' },
            { step: 4, title: 'ORDER', desc: 'Seamlessly proceed through checkout with live receipt verification.' },
            { step: 5, title: 'TRACK', desc: 'Inspect order telemetry from payment to local lab delivery.' },
          ].map(item => (
            <div
              key={item.step}
              onClick={() => setActiveStep(item.step)}
              className={`p-5 rounded-2xl border cursor-pointer transition-all ${
                activeStep === item.step
                  ? 'bg-surface-elevated border-lime-primary/60 shadow-[0_0_20px_rgba(183,255,106,0.15)]'
                  : 'bg-surface border-surface-border hover:border-surface-borderHover'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className={`font-mono text-xs font-bold ${activeStep === item.step ? 'text-lime-primary' : 'text-text-muted'}`}>
                  0{item.step}
                </span>
                <span className={`w-2 h-2 rounded-full ${activeStep === item.step ? 'bg-lime-primary' : 'bg-surface-border'}`} />
              </div>
              <h4 className="text-sm font-bold text-text-primary tracking-wide">{item.title}</h4>
              <p className="text-xs text-text-secondary mt-1 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 05 — PRODUCT COLLECTION */}
      {/* ========================================================================= */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-surface-border/50">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-lime-primary font-bold">05 / CURATED CATALOG</span>
              <span className="h-px w-12 bg-surface-border" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tighter text-text-primary leading-tight">
              THE HARDWARE COLLECTION.
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all ${
                  selectedCategory === cat
                    ? 'bg-lime-primary text-bg font-bold shadow-sm'
                    : 'bg-surface border border-surface-border text-text-secondary hover:text-text-primary hover:border-surface-borderHover'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map(product => (
            <div
              key={product.id}
              className="group rounded-2xl bg-surface border border-surface-border hover:border-surface-borderHover transition-all flex flex-col justify-between overflow-hidden hover:shadow-2xl hover:-translate-y-1"
            >
              {/* Product Visual Area */}
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

                <div className="absolute z-20 top-3 left-3">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-surface border border-surface-border text-lime-primary">
                    {product.category}
                  </span>
                </div>

                <div className="absolute z-20 top-3 right-3 flex items-center gap-1.5 text-[10px] font-mono text-text-muted bg-surface/80 px-2 py-0.5 rounded border border-surface-border backdrop-blur-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime-primary" />
                  <span>{product.stock} left</span>
                </div>
              </div>

              {/* Card Body */}
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
                      className="p-2 text-text-secondary hover:text-text-primary rounded-lg transition-colors text-xs font-medium"
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
      </section>

      {/* ========================================================================= */}
      {/* SECTION 06 — SYSTEM PROOF & FINAL CALL TO ACTION */}
      {/* ========================================================================= */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-surface-border/50">
        <div className="rounded-3xl bg-surface border border-surface-border p-8 sm:p-12 lg:p-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-ambient-glow opacity-40 pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-lime-primary animate-pulse" />
                <span className="font-mono text-xs text-lime-primary uppercase tracking-widest">
                  VULNSHOP / LIVE ASSESSMENT
                </span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tighter text-text-primary leading-tight">
                Turn browsing into<br />
                <span className="text-gradient-lime">something measurable.</span>
              </h2>
              <p className="text-sm text-text-secondary max-w-xl">
                The entire shopping journey is fully functional. Explore the hardware collection, configure orders, inspect reviews, and test security scenarios.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <button
                onClick={() => onNavigate('/products')}
                className="py-4 px-6 rounded-xl bg-lime-primary text-bg font-bold text-xs uppercase tracking-wider hover:bg-lime-secondary transition-all text-center shadow-[0_0_24px_rgba(183,255,106,0.25)]"
              >
                Enter Storefront Catalog →
              </button>
              <button
                onClick={() => onNavigate('/security')}
                className="py-4 px-6 rounded-xl bg-surface-elevated border border-surface-border text-text-primary font-medium text-xs uppercase tracking-wider hover:border-violet-cool/50 hover:text-violet-cool transition-all text-center"
              >
                View Practical 7 Notes
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
