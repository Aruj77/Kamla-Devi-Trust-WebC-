'use client';

import React, { useState, useId } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { Copy, Check, Smartphone, HeartHandshake, ShieldCheck, Sparkles } from 'lucide-react';
import { TRUST_DATA } from '@/data/trustData';
import { useLanguage } from '@/context/LanguageContext';

interface DonationCardProps {
  isModal?: boolean;
  onSuccessClose?: () => void;
}

export const DonationCard: React.FC<DonationCardProps> = ({ isModal = false }) => {
  const { lang } = useLanguage();
  const [selectedAmount, setSelectedAmount] = useState<number | null>(TRUST_DATA.donation.defaultAmount);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [isCustom, setIsCustom] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);
  const customInputId = useId();

  const amounts = TRUST_DATA.donation.suggestedAmounts;

  const effectiveAmount = isCustom
    ? parseInt(customAmount, 10) || 0
    : selectedAmount || 0;

  const upiId = TRUST_DATA.donation.upiId;
  const payeeName = encodeURIComponent(TRUST_DATA.donation.payeeName);
  const baseUpiUri = `upi://pay?pa=${upiId}&pn=${payeeName}&cu=INR`;
  const dynamicUpiUri = effectiveAmount > 0
    ? `${baseUpiUri}&am=${effectiveAmount}`
    : baseUpiUri;

  const handleCopyUPI = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(upiId);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = upiId;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        textArea.remove();
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleSelectAmount = (amt: number) => {
    setSelectedAmount(amt);
    setIsCustom(false);
    setCustomAmount('');
  };

  const handleCustomSelect = () => {
    setIsCustom(true);
    setSelectedAmount(null);
  };

  return (
    <div className={`w-full ${isModal ? 'max-w-lg mx-auto' : 'max-w-3xl mx-auto'}`}>
      <div className={`bg-white rounded-2xl border border-amber-200/90 shadow-sm overflow-hidden ${isModal ? '' : 'shadow-warm'}`}>
        {/* Header - Compact if Modal */}
        {!isModal && (
          <div className="bg-gradient-to-r from-saffron-700 via-saffron-600 to-sacred-gold px-5 py-4 sm:py-5 text-white text-center relative overflow-hidden">
            {/* Top Badge - Fixed Height & Centered */}
            <div className="h-6 inline-flex items-center justify-center gap-1.5 px-3 rounded-full text-[11px] font-semibold bg-white/20 backdrop-blur-sm text-white mb-2 leading-none">
              <Sparkles className="w-3 h-3 text-amber-200 shrink-0" />
              <span className="leading-none">{lang === 'hi' ? 'पुण्य अर्पण एवं सहयोग' : 'Sacred Contribution'}</span>
            </div>
            <h3 className="font-heading text-xl sm:text-2xl font-bold leading-normal py-0.5">
              {lang === 'hi' ? TRUST_DATA.nameHindi : TRUST_DATA.nameEnglish}
            </h3>
            <p className="mt-1 text-amber-100 text-xs sm:text-sm max-w-md mx-auto">
              {lang === 'hi' ? TRUST_DATA.donation.noteHindi : TRUST_DATA.donation.noteEnglish}
            </p>
          </div>
        )}

        <div className={isModal ? 'p-4 sm:p-5' : 'p-5 sm:p-7'}>
          {/* Amount Selection */}
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs sm:text-sm font-semibold text-sacred-brown leading-none">
                {lang === 'hi' ? 'सहयोग राशि चुनें (₹):' : 'Select Amount (₹):'}
              </span>
              {effectiveAmount > 0 && (
                <span className="h-6 inline-flex items-center justify-center text-xs font-bold text-saffron-700 bg-amber-50 px-2.5 rounded-md border border-amber-200 leading-none">
                  <span className="leading-none">₹{effectiveAmount}</span>
                </span>
              )}
            </div>

            {/* Quick Amount Buttons - Fixed Height & Centered */}
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-1.5 sm:gap-2">
              {amounts.map((amt) => {
                const isSelected = !isCustom && selectedAmount === amt;
                return (
                  <button
                    key={amt}
                    type="button"
                    onClick={() => handleSelectAmount(amt)}
                    className={`h-9 inline-flex items-center justify-center px-2 rounded-lg font-bold text-xs sm:text-sm transition-all border leading-none text-center ${
                      isSelected
                        ? 'bg-saffron-600 text-white border-saffron-700 shadow-sm'
                        : 'bg-ivory-50 text-sacred-brown border-amber-200 hover:border-saffron-400 hover:bg-amber-50'
                    }`}
                  >
                    <span className="leading-none">₹{amt}</span>
                  </button>
                );
              })}
              <button
                type="button"
                onClick={handleCustomSelect}
                className={`h-9 inline-flex items-center justify-center px-2 rounded-lg font-bold text-xs sm:text-sm transition-all border leading-none text-center ${
                  isCustom
                    ? 'bg-saffron-600 text-white border-saffron-700 shadow-sm'
                    : 'bg-ivory-50 text-sacred-brown border-amber-200 hover:border-saffron-400 hover:bg-amber-50'
                }`}
              >
                <span className="leading-none">{lang === 'hi' ? 'अन्य' : 'Other'}</span>
              </button>
            </div>

            {isCustom && (
              <div className="mt-2.5 relative">
                <label htmlFor={customInputId} className="sr-only">
                  {lang === 'hi' ? 'इच्छानुसार राशि' : 'Custom Amount'}
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm font-bold text-sacred-brown">
                    ₹
                  </span>
                  <input
                    id={customInputId}
                    type="number"
                    min="1"
                    placeholder={lang === 'hi' ? 'अपनी इच्छानुसार राशि दर्ज करें' : 'Enter custom donation amount'}
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    className="w-full pl-7 pr-3 py-2 text-sm rounded-lg border border-saffron-300 focus:outline-none focus:ring-2 focus:ring-saffron-500 bg-ivory-50 text-sacred-brown font-semibold leading-normal"
                  />
                </div>
              </div>
            )}
          </div>

          {/* QR & Payment Area */}
          <div className={`grid ${isModal ? 'grid-cols-1 sm:grid-cols-2 gap-4' : 'grid-cols-1 sm:grid-cols-2 gap-5'} items-center`}>
            {/* QR Box */}
            <div className="flex flex-col items-center justify-center p-3 sm:p-4 bg-gradient-to-b from-amber-50/80 to-orange-50/80 rounded-xl border border-amber-200/80 text-center">
              <div className="p-2 bg-white rounded-xl shadow-xs border border-amber-200 inline-block mb-2">
                <QRCodeSVG
                  value={dynamicUpiUri}
                  size={isModal ? 125 : 155}
                  level="M"
                  includeMargin={false}
                />
              </div>

              {/* QR Amount Badge - Fixed Height & Centered */}
              <span className="h-6 inline-flex items-center justify-center text-[11px] font-semibold text-saffron-900 bg-amber-100/90 px-3 rounded-full mb-1 leading-none">
                <span className="leading-none">
                  {lang === 'hi'
                    ? (effectiveAmount > 0 ? `चयनित राशि: ₹${effectiveAmount}` : 'स्कैन करके दान करें')
                    : (effectiveAmount > 0 ? `Amount: ₹${effectiveAmount}` : 'Scan to Donate')}
                </span>
              </span>

              <p className="text-[10px] text-sacred-brown/80 font-medium leading-normal">
                PhonePe • Google Pay • Paytm • BHIM
              </p>
            </div>

            {/* UPI ID & Direct Pay Button */}
            <div className="flex flex-col gap-2.5">
              {/* UPI ID display & copy */}
              <div className="bg-ivory-50 p-2.5 sm:p-3 rounded-xl border border-amber-200">
                <span className="text-[11px] font-semibold text-sacred-warmGray block mb-1 leading-none">
                  {lang === 'hi' ? 'आधिकारिक यूपीआई आईडी:' : 'Official UPI ID:'}
                </span>
                <div className="flex items-center justify-between gap-1.5 bg-white px-2.5 py-1.5 rounded-lg border border-amber-200">
                  <span className="font-mono font-bold text-sacred-brown text-xs sm:text-sm select-all break-all leading-normal">
                    {upiId}
                  </span>
                  {/* Copy Button - Fixed Height & Centered */}
                  <button
                    type="button"
                    onClick={handleCopyUPI}
                    className={`h-7.5 px-3 inline-flex items-center justify-center gap-1 rounded-md text-[11px] font-bold transition-all shrink-0 text-center leading-none ${
                      copied
                        ? 'bg-emerald-600 text-white'
                        : 'bg-saffron-600 hover:bg-saffron-700 text-white'
                    }`}
                    aria-label={lang === 'hi' ? 'यूपीआई आईडी कॉपी करें' : 'Copy UPI ID'}
                  >
                    {copied ? (
                      <>
                        <Check className="w-3 h-3 shrink-0" />
                        <span className="leading-none">{lang === 'hi' ? 'कॉपी ✓' : 'Copied ✓'}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3 shrink-0" />
                        <span className="leading-none">{lang === 'hi' ? 'कॉपी' : 'Copy'}</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Direct Mobile Pay - Fixed Height & Centered */}
              <a
                href={dynamicUpiUri}
                className="h-10 sm:h-11 w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-saffron-600 to-saffron-700 hover:from-saffron-700 hover:to-saffron-800 text-white font-bold px-4 rounded-xl shadow-xs transition-all text-center text-xs sm:text-sm leading-none"
              >
                <Smartphone className="w-4 h-4 shrink-0" />
                <span className="leading-none">{lang === 'hi' ? 'UPI ऐप से सीधे दान करें' : 'Pay via UPI App'}</span>
              </a>

              {/* Bank Details */}
              <div className="text-[11px] text-sacred-brown/85 bg-amber-50/70 p-2.5 rounded-xl border border-amber-100 space-y-0.5">
                <div className="flex items-center gap-1 font-semibold text-saffron-900 leading-none mb-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span className="leading-none">{lang === 'hi' ? 'सुरक्षित बैंक ट्रांसफर' : 'Verified Trust Bank Account'}</span>
                </div>
                <p className="truncate">
                  <strong>{lang === 'hi' ? 'खाता:' : 'A/C:'}</strong> {lang === 'hi' ? TRUST_DATA.donation.accountHolderHindi : TRUST_DATA.donation.accountHolderEnglish}
                </p>
                <p>
                  <strong>{lang === 'hi' ? 'बैंक:' : 'Bank:'}</strong> {lang === 'hi' ? TRUST_DATA.donation.bankNameHindi : TRUST_DATA.donation.bankNameEnglish}
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Trust Assurance */}
          <div className="mt-3.5 pt-2.5 border-t border-amber-100 flex items-center justify-center gap-1.5 text-[11px] text-sacred-warmGray text-center leading-normal">
            <HeartHandshake className="w-3.5 h-3.5 text-saffron-600 shrink-0" />
            <span>
              {lang === 'hi'
                ? 'दान की गई राशि केवल भारतीय ट्रस्ट अधिनियम के अंतर्गत जनसेवा कार्यों में उपयोग होती है।'
                : '100% of contributions are dedicated to registered public charitable causes.'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationCard;
