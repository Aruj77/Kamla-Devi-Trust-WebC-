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
      <div className={`glass-panel-warm rounded-3xl border-2 border-amber-300 shadow-xl overflow-hidden`}>
        {/* Header - Compact if Modal */}
        {!isModal && (
          <div className="bg-gradient-to-r from-saffron-700 via-saffron-600 to-sacred-gold px-6 py-5 sm:py-6 text-white text-center relative overflow-hidden">
            <div className="min-h-[28px] inline-flex items-center justify-center gap-1.5 px-3 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-md text-white mb-2 leading-none border border-white/30">
              <Sparkles className="w-3.5 h-3.5 text-amber-200 shrink-0" />
              <span className="leading-none">{lang === 'hi' ? 'पुण्य अर्पण एवं सहयोग' : 'Sacred Contribution'}</span>
            </div>
            <h3 className="font-heading text-xl sm:text-2xl font-bold leading-normal py-0.5">
              {lang === 'hi' ? TRUST_DATA.nameHindi : TRUST_DATA.nameEnglish}
            </h3>
            <p className="mt-1.5 text-amber-100 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
              {lang === 'hi' ? TRUST_DATA.donation.noteHindi : TRUST_DATA.donation.noteEnglish}
            </p>
          </div>
        )}

        <div className={isModal ? 'p-5 sm:p-6' : 'p-6 sm:p-8'}>
          {/* Amount Selection */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs sm:text-sm font-bold text-sacred-brown leading-none">
                {lang === 'hi' ? 'सहयोग राशि चुनें (₹):' : 'Select Amount (₹):'}
              </span>
              {effectiveAmount > 0 && (
                <span className="min-h-[28px] inline-flex items-center justify-center text-xs font-bold text-saffron-800 bg-amber-100/90 px-3 rounded-md border border-amber-300 leading-none shadow-2xs">
                  <span className="leading-none">₹{effectiveAmount}</span>
                </span>
              )}
            </div>

            {/* Quick Amount Buttons */}
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-2.5">
              {amounts.map((amt) => {
                const isSelected = !isCustom && selectedAmount === amt;
                return (
                  <button
                    key={amt}
                    type="button"
                    onClick={() => handleSelectAmount(amt)}
                    className={`min-h-[40px] inline-flex items-center justify-center px-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all border leading-none text-center ${
                      isSelected
                        ? 'bg-gradient-to-r from-saffron-600 to-saffron-700 text-white border-saffron-700 shadow-md scale-105'
                        : 'glass-badge text-sacred-brown hover:border-saffron-400 hover:bg-white shadow-2xs'
                    }`}
                  >
                    <span className="leading-none">₹{amt}</span>
                  </button>
                );
              })}
              <button
                type="button"
                onClick={handleCustomSelect}
                className={`min-h-[40px] inline-flex items-center justify-center px-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all border leading-none text-center ${
                  isCustom
                    ? 'bg-gradient-to-r from-saffron-600 to-saffron-700 text-white border-saffron-700 shadow-md scale-105'
                    : 'glass-badge text-sacred-brown hover:border-saffron-400 hover:bg-white shadow-2xs'
                }`}
              >
                <span className="leading-none">{lang === 'hi' ? 'अन्य' : 'Other'}</span>
              </button>
            </div>

            {isCustom && (
              <div className="mt-3 relative">
                <label htmlFor={customInputId} className="sr-only">
                  {lang === 'hi' ? 'इच्छानुसार राशि' : 'Custom Amount'}
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm font-bold text-sacred-brown">
                    ₹
                  </span>
                  <input
                    id={customInputId}
                    type="number"
                    min="1"
                    placeholder={lang === 'hi' ? 'अपनी इच्छानुसार राशि दर्ज करें' : 'Enter custom donation amount'}
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    className="w-full pl-8 pr-4 py-2.5 text-sm rounded-xl border border-saffron-300 focus:outline-none focus:ring-2 focus:ring-saffron-500 bg-white/90 text-sacred-brown font-semibold leading-normal shadow-inner"
                  />
                </div>
              </div>
            )}
          </div>

          {/* QR & Payment Area */}
          <div className={`grid ${isModal ? 'grid-cols-1 sm:grid-cols-2 gap-5' : 'grid-cols-1 sm:grid-cols-2 gap-6'} items-center`}>
            {/* QR Box in Frosted Pedestal */}
            <div className="flex flex-col items-center justify-center p-4 sm:p-5 glass-panel rounded-2xl border border-amber-200/90 text-center shadow-sm">
              <div className="p-3 bg-white rounded-2xl shadow-md border border-amber-200 inline-block mb-3">
                <QRCodeSVG
                  value={dynamicUpiUri}
                  size={isModal ? 130 : 160}
                  level="M"
                  includeMargin={false}
                />
              </div>

              {/* QR Amount Badge */}
              <span className="min-h-[28px] inline-flex items-center justify-center text-xs font-bold text-saffron-950 glass-badge px-3.5 rounded-full mb-1.5 leading-none shadow-2xs">
                <span className="leading-none">
                  {lang === 'hi'
                    ? (effectiveAmount > 0 ? `चयनित राशि: ₹${effectiveAmount}` : 'स्कैन करके दान करें')
                    : (effectiveAmount > 0 ? `Amount: ₹${effectiveAmount}` : 'Scan to Donate')}
                </span>
              </span>

              <p className="text-[11px] text-sacred-brown/80 font-medium leading-normal">
                PhonePe • Google Pay • Paytm • BHIM
              </p>
            </div>

            {/* UPI ID & Direct Pay Button */}
            <div className="flex flex-col gap-3">
              {/* UPI ID display & copy */}
              <div className="glass-panel p-3.5 rounded-2xl border border-amber-200/90">
                <span className="text-xs font-semibold text-sacred-warmGray block mb-1.5 leading-none">
                  {lang === 'hi' ? 'आधिकारिक यूपीआई आईडी:' : 'Official UPI ID:'}
                </span>
                <div className="flex items-center justify-between gap-2 bg-white px-3 py-2 rounded-xl border border-amber-200 shadow-inner">
                  <span className="font-mono font-bold text-sacred-brown text-xs sm:text-sm select-all break-all leading-normal">
                    {upiId}
                  </span>
                  {/* Copy Button */}
                  <button
                    type="button"
                    onClick={handleCopyUPI}
                    className={`min-h-[32px] px-3 inline-flex items-center justify-center gap-1.5 rounded-lg text-xs font-bold transition-all shrink-0 text-center leading-none ${
                      copied
                        ? 'bg-emerald-600 text-white'
                        : 'bg-saffron-600 hover:bg-saffron-700 text-white shadow-xs'
                    }`}
                    aria-label={lang === 'hi' ? 'यूपीआई आईडी कॉपी करें' : 'Copy UPI ID'}
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 shrink-0" />
                        <span className="leading-none">{lang === 'hi' ? 'कॉपी ✓' : 'Copied ✓'}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 shrink-0" />
                        <span className="leading-none">{lang === 'hi' ? 'कॉपी' : 'Copy'}</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Direct Mobile Pay */}
              <a
                href={dynamicUpiUri}
                className="min-h-[44px] w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-saffron-600 to-saffron-700 hover:from-saffron-700 hover:to-saffron-800 text-white font-bold px-5 rounded-xl shadow-md hover:shadow-lg transition-all text-center text-xs sm:text-sm leading-none transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Smartphone className="w-4 h-4 shrink-0" />
                <span className="leading-none">{lang === 'hi' ? 'UPI ऐप से सीधे दान करें' : 'Pay via UPI App'}</span>
              </a>

              {/* Bank Details */}
              <div className="text-xs text-sacred-brown/85 glass-panel p-3 rounded-xl border border-amber-200/80 space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-saffron-900 leading-none mb-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
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
          <div className="mt-4 pt-3.5 border-t border-amber-200/70 flex items-center justify-center gap-2 text-xs text-sacred-warmGray text-center leading-normal">
            <HeartHandshake className="w-4 h-4 text-saffron-600 shrink-0" />
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
