import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Check if device supports touch
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouch(true);
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Check target element
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const viewElem = target.closest('[data-cursor="view"]');
      const exploreElem = target.closest('[data-cursor="explore"]');
      const clickableElem = target.closest('button, a, input, textarea, select, [role="button"]');

      if (viewElem) {
        setIsHovered(true);
        setCursorText('VIEW');
      } else if (exploreElem) {
        setIsHovered(true);
        setCursorText('EXPLORE');
      } else if (clickableElem) {
        setIsHovered(true);
        setCursorText('');
      } else {
        setIsHovered(false);
        setCursorText('');
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible]);

  if (isTouch || !isVisible) return null;

  return (
    <div
      className="fixed pointer-events-none z-50 transition-transform duration-75 ease-out -translate-x-1/2 -translate-y-1/2"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <div
        className={`flex items-center justify-center rounded-full transition-all duration-200 ${
          cursorText
            ? 'w-16 h-16 bg-lime-primary text-bg font-mono text-[10px] font-bold tracking-widest'
            : isHovered
            ? 'w-8 h-8 bg-lime-primary/20 border border-lime-primary backdrop-blur-sm'
            : 'w-2.5 h-2.5 bg-lime-primary shadow-[0_0_8px_rgba(183,255,106,0.6)]'
        }`}
      >
        {cursorText}
      </div>
    </div>
  );
};
