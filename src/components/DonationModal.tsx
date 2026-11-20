'use client';

import React, { useEffect, useCallback } from 'react';
import { X, Heart } from 'lucide-react';
import { DonationCard } from './DonationCard';
import { useLanguage } from '@/context/LanguageContext';
import { TRUST_DATA } from '@/data/trustData';

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DonationModal: React.FC<DonationModalProps> = ({ isOpen, onClose }) => {
  const { lang } = useLanguage();

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto bg-black/60 backdrop-blur-xs animate-in fade-in duration-150"
      role="dialog"
      aria-modal="true"
      aria-labelledby="donation-modal-title"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 -z-10"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Card: Constrained max-height so it NEVER overflows */}
      <div className="relative w-full max-w-lg max-h-[92vh] flex flex-col bg-white rounded-2xl shadow-2xl border border-amber-300 overflow-hidden my-auto">
        {/* Sleek Compact Modal Header */}
        <div className="bg-gradient-to-r from-saffron-700 via-saffron-600 to-sacred-gold px-4 py-3 text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
              <Heart className="w-3.5 h-3.5 fill-white text-white" />
            </div>
            <div>
              <h2 id="donation-modal-title" className="font-heading font-bold text-sm sm:text-base leading-tight">
                {lang === 'hi' ? TRUST_DATA.nameHindi : TRUST_DATA.nameEnglish}
              </h2>
              <p className="text-[10px] sm:text-[11px] text-amber-100">
                {lang === 'hi' ? 'ऑनलाइन पुण्य दान (UPI QR / Direct Pay)' : 'Online Charitable Contribution'}
              </p>
            </div>
          </div>

          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            className="w-7 h-7 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label={lang === 'hi' ? 'दान खिड़की बंद करें' : 'Close donation dialog'}
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Modal Content */}
        <div className="overflow-y-auto overscroll-contain">
          <DonationCard isModal={true} onSuccessClose={onClose} />
        </div>
      </div>
    </div>
  );
};

export default DonationModal;
