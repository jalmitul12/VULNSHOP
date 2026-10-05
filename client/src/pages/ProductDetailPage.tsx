import React, { useState, useEffect } from 'react';
import { ArrowLeft, ShoppingBag, Star, Shield, Truck, RotateCcw, Cpu, Battery, CheckCircle2, MessageSquare, Send } from 'lucide-react';
import { Product, Review } from '../types';
import { api } from '../services/api';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

interface ProductDetailPageProps {
  productId: number;
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

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ productId, onNavigate }) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [quantity, setQuantity] = useState(1);
  const [newReviewText, setNewReviewText] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [submittingReview, setSubmittingReview] = useState(false);
  const [reviewError, setReviewError] = useState('');
  const [reviewSuccess, setReviewSuccess] = useState('');
  const [activeTab, setActiveTab] = useState<'overview' | 'specs' | 'reviews'>('overview');

  const { user } = useAuth();
  const { addItem } = useCart();

  useEffect(() => {
    api.getProduct(productId).then(data => {
      setProduct(data.product);
      setReviews(data.reviews || []);
    });
  }, [productId]);

  const handleReviewSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReviewText.trim()) return;

    setSubmittingReview(true);
    setReviewError('');
    setReviewSuccess('');

    const res = await api.addReview(productId, newReviewText, newRating);
    if (res.success && res.review) {
      setReviews(prev => [res.review!, ...prev]);
      setNewReviewText('');
      setReviewSuccess('Review published to storefront.');
    } else {
      setReviewError(res.error || 'Failed to post review');
    }
    setSubmittingReview(false);
  };

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-24 text-center space-y-4">
        <div className="text-xl font-bold text-text-primary">Loading hardware specifications...</div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Back Link */}
      <button
        onClick={() => onNavigate('/products')}
        className="flex items-center gap-2 text-xs font-mono text-text-secondary hover:text-lime-primary transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>BACK TO COLLECTION</span>
      </button>

      {/* Main Product Showcase Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Visual Hardware Inspection */}
        <div className="lg:col-span-7 space-y-6">
          <div
            className="relative h-96 sm:h-[480px] rounded-3xl bg-surface-elevated border border-surface-border flex flex-col items-center justify-center p-8 overflow-hidden group shadow-2xl"
            data-cursor="view"
          >
            <div className="absolute inset-0 bg-ambient-glow opacity-40 group-hover:opacity-80 transition-opacity" />

            <img
              src={productImageMap[product.id] || '/images/laptop.svg'}
              alt={`${product.name} product illustration`}
              className="relative z-10 w-full h-[72%] object-contain transition-transform duration-500 group-hover:scale-105"
            />

            <div className="relative z-10 text-center space-y-2 mt-2">
              <span className="px-3 py-1 rounded-full bg-lime-primary/10 border border-lime-primary/20 text-lime-primary font-mono text-xs">
                {product.category} · SPEC 2026
              </span>
              <div className="text-xl font-bold text-text-primary">{product.name}</div>
            </div>

            {/* Stock indicator badge */}
            <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface/80 border border-surface-border text-xs font-mono text-lime-primary">
              <span className="w-2 h-2 rounded-full bg-lime-primary animate-pulse" />
              <span>{product.stock} UNITS AVAILABLE</span>
            </div>
          </div>

          {/* Quick Hardware Feature Highlights */}
          <div className="grid grid-cols-3 gap-4 text-xs font-mono">
            <div className="p-4 rounded-2xl bg-surface border border-surface-border flex flex-col gap-1">
              <Cpu className="w-4 h-4 text-lime-primary" />
              <span className="text-text-muted">CHASSIS</span>
              <strong className="text-text-primary">Titanium Unibody</strong>
            </div>
            <div className="p-4 rounded-2xl bg-surface border border-surface-border flex flex-col gap-1">
              <Battery className="w-4 h-4 text-blue-electric" />
              <span className="text-text-muted">LATENCY</span>
              <strong className="text-text-primary">Ultra-Low 0.8ms</strong>
            </div>
            <div className="p-4 rounded-2xl bg-surface border border-surface-border flex flex-col gap-1">
              <Shield className="w-4 h-4 text-violet-cool" />
              <span className="text-text-muted">WARRANTY</span>
              <strong className="text-text-primary">3-Yr Lab Grade</strong>
            </div>
          </div>
        </div>

        {/* Right Column: Sticky Configuration & Checkout Box */}
        <div className="lg:col-span-5 space-y-8 sticky top-24">
          <div className="space-y-3">
            <span className="text-xs font-mono text-lime-primary uppercase tracking-widest block">
              {product.category} / HARDWARE / 0{product.id % 10}
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tighter text-text-primary">
              {product.name}
            </h1>
            <div className="text-2xl font-mono font-bold text-lime-primary">
              ₹{product.price.toLocaleString('en-IN')}
            </div>
          </div>

          <p className="text-sm text-text-secondary leading-relaxed">
            {product.description} Built to military-spec standards with high-efficiency architecture, exceptional thermal stability, and seamless OS integration.
          </p>

          <div className="space-y-4 p-6 rounded-2xl bg-surface border border-surface-border">
            {/* Quantity Selector */}
            <div className="flex items-center justify-between">
              <label className="text-xs font-mono text-text-secondary">QUANTITY</label>
              <div className="flex items-center bg-surface-elevated rounded-xl border border-surface-border p-1">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-1 text-text-secondary hover:text-text-primary rounded text-sm font-bold"
                >
                  -
                </button>
                <span className="font-mono text-sm px-3 text-text-primary font-bold">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-1 text-text-secondary hover:text-text-primary rounded text-sm font-bold"
                >
                  +
                </button>
              </div>
            </div>

            {/* Total subtotal */}
            <div className="flex items-center justify-between pt-3 border-t border-surface-border text-xs font-mono">
              <span className="text-text-muted">ESTIMATED TOTAL</span>
              <strong className="text-base text-text-primary font-bold">
                ₹{(product.price * quantity).toLocaleString('en-IN')}
              </strong>
            </div>

            {/* Add to Bag Button */}
            <button
              onClick={() => addItem(product, quantity)}
              className="w-full py-4 rounded-xl bg-lime-primary text-bg font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-lime-secondary transition-all shadow-[0_0_24px_rgba(183,255,106,0.3)] hover:scale-[1.01]"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Add to Bag →</span>
            </button>
          </div>

          {/* Delivery & Assurance guarantees */}
          <div className="space-y-2.5 text-xs text-text-secondary font-mono">
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-lime-primary" />
              <span>Instant local dispatch within authorized lab boundary</span>
            </div>
            <div className="flex items-center gap-2">
              <RotateCcw className="w-4 h-4 text-blue-electric" />
              <span>30-Day seamless hardware evaluation return policy</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs (Overview, Specs, Community Reviews) */}
      <div className="pt-8 border-t border-surface-border/60">
        <div className="flex items-center gap-4 border-b border-surface-border pb-4">
          <button
            onClick={() => setActiveTab('overview')}
            className={`text-sm font-mono tracking-wider transition-colors ${
              activeTab === 'overview' ? 'text-lime-primary font-bold' : 'text-text-secondary hover:text-text-primary'
            }`}
          >
            01 / HARDWARE OVERVIEW
          </button>
          <button
            onClick={() => setActiveTab('reviews')}
            className={`text-sm font-mono tracking-wider transition-colors flex items-center gap-1.5 ${
              activeTab === 'reviews' ? 'text-lime-primary font-bold' : 'text-text-secondary hover:text-text-primary'
            }`}
          >
            <span>02 / COMMUNITY REVIEWS</span>
            <span className="px-1.5 py-0.2 rounded-full bg-surface-elevated text-[10px] text-lime-primary border border-surface-border">
              {reviews.length}
            </span>
          </button>
        </div>

        {/* Tab 1: Overview */}
        {activeTab === 'overview' && (
          <div className="py-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="p-6 rounded-2xl bg-surface border border-surface-border space-y-2">
              <span className="font-mono text-xs text-lime-primary font-bold">PRECISION ARCHITECTURE</span>
              <p className="text-text-secondary leading-relaxed">
                Designed for consistent high-output workflows without thermal throttling or acoustic interference.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-surface border border-surface-border space-y-2">
              <span className="font-mono text-xs text-blue-electric font-bold">SUSTAINED INTEGRITY</span>
              <p className="text-text-secondary leading-relaxed">
                CNC-machined aluminum alloy and titanium structural ribs provide long-term drop resistance.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-surface border border-surface-border space-y-2">
              <span className="font-mono text-xs text-violet-cool font-bold">ETHICAL ASSESSMENT LAB</span>
              <p className="text-text-secondary leading-relaxed">
                Each product endpoint includes live API parameter hooks for Burp Suite request interception.
              </p>
            </div>
          </div>
        )}

        {/* Tab 2: Reviews (Stored XSS Target Area) */}
        {activeTab === 'reviews' && (
          <div className="py-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Reviews Feed */}
            <div className="lg:col-span-7 space-y-4">
              <div className="text-sm font-bold text-text-primary flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-lime-primary" />
                <span>Verified Buyer Reviews ({reviews.length})</span>
              </div>

              {reviews.length > 0 ? (
                reviews.map(rev => (
                  <div
                    key={rev.id}
                    className="p-5 rounded-2xl bg-surface border border-surface-border space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-xl bg-surface-elevated border border-surface-border flex items-center justify-center font-mono font-bold text-xs text-lime-primary">
                          {(rev.username || 'U')[0].toUpperCase()}
                        </div>
                        <div>
                          <div className="text-xs font-bold text-text-primary">{rev.username}</div>
                          <span className="text-[10px] font-mono text-text-muted">Verified Customer</span>
                        </div>
                      </div>
                      <div className="flex text-lime-primary text-xs">
                        {'★'.repeat(rev.rating || 5)}
                      </div>
                    </div>

                    {/* INTENTIONALLY VULNERABLE: Review body rendered directly for Stored XSS demonstration */}
                    <div
                      className="text-xs text-text-secondary leading-relaxed unsafe-review"
                      dangerouslySetInnerHTML={{ __html: rev.body }}
                    />
                  </div>
                ))
              ) : (
                <div className="p-8 text-center rounded-2xl bg-surface border border-surface-border text-xs text-text-secondary">
                  No reviews yet. Be the first to share your evaluation.
                </div>
              )}
            </div>

            {/* Leave a Review Form */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-surface border border-surface-border space-y-4">
              <div className="space-y-1">
                <span className="font-mono text-xs text-lime-primary font-bold uppercase">
                  LEAVE AN EVALUATION
                </span>
                <h3 className="text-base font-bold text-text-primary">Share your feedback</h3>
              </div>

              {user ? (
                <form onSubmit={handleReviewSubmit} className="space-y-4">
                  {reviewError && (
                    <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs">
                      {reviewError}
                    </div>
                  )}
                  {reviewSuccess && (
                    <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs">
                      {reviewSuccess}
                    </div>
                  )}

                  <div>
                    <label className="text-xs font-mono text-text-secondary block mb-1">RATING</label>
                    <select
                      value={newRating}
                      onChange={e => setNewRating(Number(e.target.value))}
                      className="w-full p-2.5 bg-surface-elevated border border-surface-border rounded-xl text-xs text-text-primary focus:outline-none focus:border-lime-primary/50"
                    >
                      <option value={5}>★★★★★ (5 Stars - Exceptional)</option>
                      <option value={4}>★★★★☆ (4 Stars - Great)</option>
                      <option value={3}>★★★☆☆ (3 Stars - Average)</option>
                      <option value={2}>★★☆☆☆ (2 Stars - Mediocre)</option>
                      <option value={1}>★☆☆☆☆ (1 Star - Poor)</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-text-secondary block mb-1">REVIEW CONTENT</label>
                    <textarea
                      rows={4}
                      value={newReviewText}
                      onChange={e => setNewReviewText(e.target.value)}
                      placeholder="What was your experience with this hardware? (Accepts formatted notes & test payloads)..."
                      className="w-full p-3 bg-surface-elevated border border-surface-border rounded-xl text-xs text-text-primary placeholder:text-text-muted focus:outline-none focus:border-lime-primary/50"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submittingReview}
                    className="w-full py-3 rounded-xl bg-lime-primary text-bg font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-lime-secondary transition-all disabled:opacity-50"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{submittingReview ? 'Posting...' : 'Submit Review →'}</span>
                  </button>

                  <div className="p-3 rounded-xl bg-surface-elevated border border-surface-border text-[11px] font-mono text-text-muted space-y-1">
                    <span className="text-amber-400 font-semibold block">⚠️ Practical 7 Stored XSS Target:</span>
                    <span>Submissions to <code>POST /product/:id/review</code> are saved and rendered unescaped.</span>
                  </div>
                </form>
              ) : (
                <div className="p-6 rounded-xl bg-surface-elevated border border-surface-border text-center space-y-3">
                  <p className="text-xs text-text-secondary">
                    Sign in to post a hardware evaluation and test stored review workflows.
                  </p>
                  <button
                    onClick={() => onNavigate('/login')}
                    className="px-4 py-2 rounded-xl bg-lime-primary text-bg font-bold text-xs"
                  >
                    Sign in to continue →
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
