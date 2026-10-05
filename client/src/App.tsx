import React, { useState, useEffect } from 'react';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CommandPalette } from './components/CommandPalette';
import { MiniCartDrawer } from './components/MiniCartDrawer';
import { CustomCursor } from './components/CustomCursor';
import { InitialLoader } from './components/InitialLoader';

import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { SearchPage } from './pages/SearchPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { ProfilePage } from './pages/ProfilePage';
import { ProfileUploadPage } from './pages/ProfileUploadPage';
import { OrdersPage } from './pages/OrdersPage';
import { OrderDetailPage } from './pages/OrderDetailPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { AdminPage } from './pages/AdminPage';
import { SecurityPage } from './pages/SecurityPage';
import { NotFoundPage } from './pages/NotFoundPage';

export const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [loaderComplete, setLoaderComplete] = useState(false);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const selectProduct = (id: number) => {
    navigate(`/product/${id}`);
  };

  const selectOrder = (id: number) => {
    navigate(`/order/${id}`);
  };

  // Render active page based on currentPath
  const renderPage = () => {
    // Exact routes
    if (currentPath === '/' || currentPath === '') {
      return <HomePage onNavigate={navigate} onSelectProduct={selectProduct} />;
    }
    if (currentPath === '/products') {
      return <ProductsPage onNavigate={navigate} onSelectProduct={selectProduct} />;
    }
    if (currentPath.startsWith('/search')) {
      return <SearchPage onNavigate={navigate} onSelectProduct={selectProduct} />;
    }
    if (currentPath === '/login') {
      return <LoginPage onNavigate={navigate} />;
    }
    if (currentPath === '/register') {
      return <RegisterPage onNavigate={navigate} />;
    }
    if (currentPath === '/profile') {
      return <ProfilePage onNavigate={navigate} />;
    }
    if (currentPath === '/profile/upload') {
      return <ProfileUploadPage onNavigate={navigate} />;
    }
    if (currentPath === '/orders') {
      return <OrdersPage onNavigate={navigate} onSelectOrder={selectOrder} />;
    }
    if (currentPath === '/checkout') {
      return <CheckoutPage onNavigate={navigate} onSelectOrder={selectOrder} />;
    }
    if (currentPath === '/admin') {
      return <AdminPage onNavigate={navigate} />;
    }
    if (currentPath === '/security') {
      return <SecurityPage onNavigate={navigate} />;
    }

    // Dynamic routes
    const productMatch = currentPath.match(/^\/product\/(\d+)/);
    if (productMatch) {
      const id = parseInt(productMatch[1], 10);
      return <ProductDetailPage productId={id} onNavigate={navigate} />;
    }

    const orderMatch = currentPath.match(/^\/order\/(\d+)/);
    if (orderMatch) {
      const id = parseInt(orderMatch[1], 10);
      return <OrderDetailPage orderId={id} onNavigate={navigate} onSelectOrder={selectOrder} />;
    }

    return <NotFoundPage onNavigate={navigate} />;
  };

  return (
    <AuthProvider>
      <CartProvider>
        <div className="min-h-screen flex flex-col bg-bg text-text-primary selection:bg-lime-primary selection:text-bg">
          {/* Custom Desktop Cursor */}
          <CustomCursor />

          {/* First visit animated loader */}
          {!loaderComplete && (
            <InitialLoader onComplete={() => setLoaderComplete(true)} />
          )}

          {/* Main Top Header */}
          <Header
            onOpenSearch={() => setIsSearchOpen(true)}
            onNavigate={navigate}
            currentPath={currentPath}
          />

          {/* Page Routing Content */}
          <main className="flex-1">
            {renderPage()}
          </main>

          {/* Global Search Modal / Command Palette */}
          <CommandPalette
            isOpen={isSearchOpen}
            onClose={() => setIsSearchOpen(false)}
            onSelectProduct={selectProduct}
            onNavigate={navigate}
          />

          {/* Slide-out Shopping Bag Drawer */}
          <MiniCartDrawer onNavigate={navigate} />

          {/* Footer */}
          <Footer onNavigate={navigate} />
        </div>
      </CartProvider>
    </AuthProvider>
  );
};
