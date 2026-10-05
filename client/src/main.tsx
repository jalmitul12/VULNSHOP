import React from 'react';
import ReactDOM from 'react-dom/client';
import Lenis from 'lenis';
import { App } from './App';
import './index.css';

// Initialize Lenis smooth scroll for cinematic viewport feel
try {
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
  });

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
} catch (e) {
  console.warn('Lenis smooth scroll initialized in fallback mode', e);
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
