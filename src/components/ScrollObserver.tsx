'use client';

import { useEffect } from 'react';

export const ScrollObserver: React.FC = () => {
  useEffect(() => {
    // If IntersectionObserver is not supported, reveal all elements immediately
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      document.querySelectorAll('[data-reveal]').forEach((el) => {
        el.classList.add('is-revealed');
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            // Unobserve after reveal so animation runs once smoothly
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    const observeElements = () => {
      const elements = document.querySelectorAll('[data-reveal]:not(.is-revealed)');
      elements.forEach((el) => observer.observe(el));
    };

    // Initial pass
    observeElements();

    // Secondary pass for images or dynamic renders after 300ms
    const timer = setTimeout(observeElements, 300);

    // Mutation observer to handle any dynamic changes or hydration
    const mutationObserver = new MutationObserver(() => {
      observeElements();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      clearTimeout(timer);
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return null;
};

export default ScrollObserver;
