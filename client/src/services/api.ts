import { User, Product, Review, Order } from '../types';

const API_BASE = '/api';

export const api = {
  // Auth
  async getCurrentUser(): Promise<User | null> {
    try {
      const res = await fetch(`${API_BASE}/me`, { credentials: 'include' });
      if (!res.ok) return null;
      const data = await res.json();
      return data.user || null;
    } catch {
      return null;
    }
  },

  async login(username: string, password: string, secure = false): Promise<{ success: boolean; user?: User; error?: string }> {
    try {
      const endpoint = secure ? `${API_BASE}/login-secure` : `${API_BASE}/login`;
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
        credentials: 'include'
      });
      const data = await res.json();
      if (!res.ok) {
        return { success: false, error: data.error || 'Authentication failed' };
      }
      return { success: true, user: data.user };
    } catch (err: any) {
      return { success: false, error: err.message || 'Network error' };
    }
  },

  async register(username: string, email: string, password: string): Promise<{ success: boolean; user?: User; error?: string }> {
    try {
      const res = await fetch(`${API_BASE}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password }),
        credentials: 'include'
      });
      const data = await res.json();
      if (!res.ok) {
        return { success: false, error: data.error || 'Registration failed' };
      }
      return { success: true, user: data.user };
    } catch (err: any) {
      return { success: false, error: err.message || 'Network error' };
    }
  },

  async logout(): Promise<void> {
    try {
      await fetch(`${API_BASE}/logout`, { method: 'POST', credentials: 'include' });
    } catch {}
  },

  // Products
  async getProducts(): Promise<Product[]> {
    try {
      const res = await fetch(`${API_BASE}/products`);
      if (!res.ok) return [];
      const data = await res.json();
      return data.products || [];
    } catch {
      return [];
    }
  },

  async getProduct(id: number | string): Promise<{ product: Product | null; reviews: Review[] }> {
    try {
      const res = await fetch(`${API_BASE}/products/${id}`);
      if (!res.ok) return { product: null, reviews: [] };
      return await res.json();
    } catch {
      return { product: null, reviews: [] };
    }
  },

  async searchProducts(query: string): Promise<{ query: string; products: Product[]; rawQuery: string }> {
    try {
      const res = await fetch(`${API_BASE}/search?q=${encodeURIComponent(query)}`);
      if (!res.ok) return { query, products: [], rawQuery: query };
      return await res.json();
    } catch {
      return { query, products: [], rawQuery: query };
    }
  },

  async addReview(productId: number | string, body: string, rating = 5): Promise<{ success: boolean; review?: Review; error?: string }> {
    try {
      const res = await fetch(`${API_BASE}/products/${productId}/review`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ body, rating }),
        credentials: 'include'
      });
      const data = await res.json();
      if (!res.ok) return { success: false, error: data.error || 'Failed to submit review' };
      return { success: true, review: data.review };
    } catch (err: any) {
      return { success: false, error: err.message };
    }
  },

  // Orders
  async getOrders(): Promise<Order[]> {
    try {
      const res = await fetch(`${API_BASE}/orders`, { credentials: 'include' });
      if (!res.ok) return [];
      const data = await res.json();
      return data.orders || [];
    } catch {
      return [];
    }
  },

  async getOrder(id: number | string, secure = false): Promise<{ order: Order | null; error?: string }> {
    try {
      const endpoint = secure ? `${API_BASE}/orders-secure/${id}` : `${API_BASE}/orders/${id}`;
      const res = await fetch(endpoint, { credentials: 'include' });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        return { order: null, error: data.error || 'Order not accessible' };
      }
      const data = await res.json();
      return { order: data.order };
    } catch (err: any) {
      return { order: null, error: err.message };
    }
  },

  async checkout(payload: { items: { productId: number; quantity: number }[]; address: string; customTotal?: number }): Promise<{ success: boolean; orderId?: number; error?: string }> {
    try {
      const res = await fetch(`${API_BASE}/checkout`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        credentials: 'include'
      });
      const data = await res.json();
      if (!res.ok) return { success: false, error: data.error || 'Checkout failed' };
      return { success: true, orderId: data.orderId };
    } catch (err: any) {
      return { success: false, error: err.message };
    }
  },

  // Profile
  async updateEmail(email: string, csrfToken?: string): Promise<{ success: boolean; user?: User; error?: string }> {
    try {
      const endpoint = csrfToken ? `${API_BASE}/profile/email-secure` : `${API_BASE}/profile/email`;
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, csrfToken }),
        credentials: 'include'
      });
      const data = await res.json();
      if (!res.ok) return { success: false, error: data.error || 'Update failed' };
      return { success: true, user: data.user };
    } catch (err: any) {
      return { success: false, error: err.message };
    }
  },

  async uploadAvatar(formData: FormData): Promise<{ success: boolean; filename?: string; url?: string; error?: string }> {
    try {
      const res = await fetch(`${API_BASE}/profile/upload`, {
        method: 'POST',
        body: formData,
        credentials: 'include'
      });
      const data = await res.json();
      if (!res.ok) return { success: false, error: data.error || 'Upload failed' };
      return { success: true, filename: data.filename, url: data.url };
    } catch (err: any) {
      return { success: false, error: err.message };
    }
  },

  // Admin
  async getAdminData(secure = false): Promise<{ success: boolean; users?: User[]; orders?: Order[]; products?: Product[]; stats?: any; error?: string }> {
    try {
      const endpoint = secure ? `${API_BASE}/admin-secure` : `${API_BASE}/admin`;
      const res = await fetch(endpoint, { credentials: 'include' });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        return { success: false, error: data.error || 'Admin access forbidden' };
      }
      const data = await res.json();
      return { success: true, ...data };
    } catch (err: any) {
      return { success: false, error: err.message };
    }
  }
};
