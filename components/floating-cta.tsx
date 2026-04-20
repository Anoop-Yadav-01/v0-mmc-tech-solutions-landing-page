'use client';

import { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { Button } from './ui/button';

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const whatsappUrl = 'https://wa.me/919654480864';

  useEffect(() => {
    let ticking = false;

    const updateVisibility = () => {
      const shouldShow = window.scrollY > 300;
      setIsVisible((current) => (current === shouldShow ? current : shouldShow));
      ticking = false;
    };

    const toggleVisibility = () => {
      if (ticking) {
        return;
      }

      ticking = true;
      window.requestAnimationFrame(updateVisibility);
    };

    toggleVisibility();
    window.addEventListener('scroll', toggleVisibility, { passive: true });

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const handleClick = () => {
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      className={`fixed bottom-5 right-5 z-40 transition-all duration-300 sm:bottom-6 sm:right-6 ${
        isVisible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-16 opacity-0'
      }`}
    >
      <Button
        onClick={handleClick}
        className="h-12 rounded-full border border-white/10 bg-primary px-5 text-primary-foreground shadow-[0_18px_45px_rgba(24,212,255,0.24)] hover:bg-primary/90"
      >
        <MessageCircle className="w-4 h-4" />
        Chat On WhatsApp
      </Button>
    </div>
  );
}
