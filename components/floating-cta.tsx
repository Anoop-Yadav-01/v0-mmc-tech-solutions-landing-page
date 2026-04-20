'use client';

import { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { Button } from './ui/button';

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const handleClick = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/5551234567"
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed bottom-6 right-6 z-40 transition-all duration-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
        }`}
      >
        <div className="bg-gradient-primary hover:shadow-lg hover:shadow-primary/50 rounded-full p-4 transition-all animate-bounce">
          <MessageCircle className="w-6 h-6 text-foreground" />
        </div>
      </a>

      {/* Sticky CTA Button */}
      {isVisible && (
        <div className="fixed bottom-6 left-6 z-40 hidden sm:block">
          <Button
            onClick={handleClick}
            className="bg-gradient-primary hover:opacity-90 text-foreground font-semibold shadow-lg shadow-primary/50 rounded-full"
          >
            Book Consultation
          </Button>
        </div>
      )}
    </>
  );
}
