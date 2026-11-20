'use client';

import React, { useState, useEffect } from 'react';

interface MemberAvatarProps {
  src: string;
  alt: string;
  initials: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  isPresident?: boolean;
}

export const MemberAvatar: React.FC<MemberAvatarProps> = ({
  src,
  alt,
  initials,
  size = 'md',
  isPresident = false,
}) => {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [hasError, setHasError] = useState(false);
  const [attempt, setAttempt] = useState(0);

  // Dimension classes based on size
  const sizeClasses = {
    sm: 'w-16 h-16 text-xl',
    md: 'w-24 h-24 text-2xl',
    lg: 'w-32 h-32 sm:w-36 sm:h-36 text-3xl',
    xl: 'w-36 h-36 sm:w-40 sm:h-40 text-4xl',
  }[size];

  // If src changes, reset state
  useEffect(() => {
    setCurrentSrc(src);
    setHasError(false);
    setAttempt(0);
  }, [src]);

  const handleError = () => {
    // If .jpg fails, try .png (and vice-versa) before showing initial avatar
    if (attempt === 0) {
      if (currentSrc.endsWith('.jpg')) {
        setAttempt(1);
        setCurrentSrc(currentSrc.replace('.jpg', '.png'));
        return;
      } else if (currentSrc.endsWith('.png')) {
        setAttempt(1);
        setCurrentSrc(currentSrc.replace('.png', '.jpg'));
        return;
      }
    }
    setHasError(true);
  };

  return (
    <div
      className={`relative rounded-full select-none overflow-hidden flex items-center justify-center transition-transform duration-200 ${sizeClasses} ${
        isPresident
          ? 'ring-4 ring-saffron-600 ring-offset-4 ring-offset-ivory-50 shadow-md'
          : 'ring-2 ring-saffron-400 ring-offset-2 ring-offset-ivory-50 shadow-xs'
      }`}
    >
      {!hasError ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={currentSrc}
          alt={alt}
          loading="lazy"
          onError={handleError}
          className="w-full h-full object-cover object-top"
        />
      ) : (
        /* Fallback Hindi-Initial Avatar only when image truly fails to load */
        <div
          className={`w-full h-full flex flex-col items-center justify-center bg-gradient-to-br ${
            isPresident
              ? 'from-saffron-600 via-saffron-700 to-sacred-brown text-white'
              : 'from-amber-100 via-orange-100 to-amber-200 text-saffron-900 border-2 border-dashed border-saffron-300'
          }`}
          title={`${alt} (प्रतीकात्मक अवतार)`}
        >
          <span
            className={`font-heading font-bold select-none ${
              isPresident ? 'text-white drop-shadow' : 'text-saffron-800'
            }`}
          >
            {initials}
          </span>
          <span className="sr-only">{alt}</span>
        </div>
      )}
    </div>
  );
};

export default MemberAvatar;
