'use client';

import React, { useState, useEffect } from 'react';
import { Image as ImageIcon, Sparkles } from 'lucide-react';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
  categoryTag?: string;
  title?: string;
  icon?: React.ReactNode;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  className = '',
  aspectRatio = 'aspect-[16/10]',
  categoryTag,
  title,
  icon,
}) => {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [hasError, setHasError] = useState(false);
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    setCurrentSrc(src);
    setHasError(false);
    setAttempt(0);
  }, [src]);

  const handleError = () => {
    // If the image fails, try alternate extensions before falling back to placeholder
    if (attempt === 0) {
      if (currentSrc.endsWith('.webp')) {
        setAttempt(1);
        setCurrentSrc(currentSrc.replace('.webp', '.webp'));
        return;
      } else if (currentSrc.endsWith('.webp')) {
        setAttempt(1);
        setCurrentSrc(currentSrc.replace('.webp', '.webp'));
        return;
      } else if (currentSrc.endsWith('.svg')) {
        setAttempt(1);
        setCurrentSrc(currentSrc.replace('.svg', '.webp'));
        return;
      }
    }
    setHasError(true);
  };

  return (
    <div
      className={`relative overflow-hidden bg-amber-50/50 ${aspectRatio} ${className}`}
    >
      {!hasError ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={currentSrc}
          alt={alt}
          loading="lazy"
          onError={handleError}
          className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
        />
      ) : (
        /* Fallback Placeholder (when image is not found or fails to load) */
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center bg-gradient-to-br from-amber-100/90 via-orange-100/70 to-amber-200/60 border border-dashed border-amber-300">
          {/* Subtle Sacred Mandala Background */}
          <div className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(#c2410c_1.5px,transparent_1.5px)] [background-size:12px_12px] pointer-events-none" />

          {categoryTag && (
            <span className="relative z-10 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-saffron-600/90 text-white shadow-2xs mb-2">
              <Sparkles className="w-2.5 h-2.5" />
              {categoryTag}
            </span>
          )}

          <div className="relative z-10 w-12 h-12 rounded-full bg-white/90 text-saffron-700 flex items-center justify-center shadow-xs mb-2 border border-amber-200">
            {icon || <ImageIcon className="w-6 h-6 text-saffron-600" />}
          </div>

          {title && (
            <p className="relative z-10 font-heading text-xs sm:text-sm font-bold text-sacred-brown line-clamp-1 max-w-[90%]">
              {title}
            </p>
          )}

          <span className="relative z-10 mt-1 text-[10px] text-sacred-brown/60 font-medium">
            फोटो अपलोड स्थान ({src.split('/').pop()})
          </span>
        </div>
      )}
    </div>
  );
};

export default ImageWithFallback;
