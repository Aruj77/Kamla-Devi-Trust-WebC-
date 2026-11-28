'use client';

import React, { useState, useId } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import {
  Copy,
  Check,
  Smartphone,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  QrCode,
  Building2,
  CheckCircle2,
} from 'lucide-react';
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
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [modalTab, setModalTab] = useState<'upi' | 'bank'>('upi');
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

  const handleCopyText = async (text: string, fieldKey: string) => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        textArea.remove();
      }
      setCopiedField(fieldKey);
      setTimeout(() => setCopiedField(null), 2500);
    } catch {
      setCopiedField(fieldKey);
      setTimeout(() => setCopiedField(null), 2500);
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
    <div className={`w-full ${isModal ? 'max-w-2xl mx-auto' : 'max-w-5xl mx-auto'}`}>
      <div className="glass-panel-warm rounded-3xl border-2 border-amber-300/90 shadow-2xl overflow-hidden">
        {/* Header - Shown on Page */}
        {!isModal && (
          <div className="bg-gradient-to-r from-saffron-700 via-saffron-600 to-amber-700 px-6 sm:px-10 py-6 sm:py-8 text-white text-center relative overflow-hidden">
            {/* Sacred Background Mandala Glow */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_2px,transparent_2px)] [background-size:18px_18px] pointer-events-none" />

            <div className="relative z-10">
              <div className="min-h-[32px] inline-flex items-center justify-center gap-2 px-4 py-1 rounded-full text-xs font-bold bg-white/20 backdrop-blur-md text-amber-100 mb-3 leading-none border border-white/30 shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-amber-200 shrink-0" />
                <span className="leading-none">{lang === 'hi' ? 'पुण्य अर्पण • परोपकार सेवा' : 'Sacred Charitable Contribution'}</span>
              </div>

              <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
                {lang === 'hi' ? TRUST_DATA.nameHindi : TRUST_DATA.nameEnglish}
              </h3>

              <p className="mt-2 text-amber-100 text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
                {lang === 'hi' ? TRUST_DATA.donation.noteHindi : TRUST_DATA.donation.noteEnglish}
              </p>
            </div>
          </div>
        )}

        {/* Card Body with Generous Padding */}
        <div className={isModal ? 'p-5 sm:p-8' : 'p-6 sm:p-10'}>
          {/* STEP 1: AMOUNT SELECTION */}
          <div className="mb-8">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3.5">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-saffron-600 text-white text-xs font-bold flex items-center justify-center shrink-0">
                  १
                </span>
                <span className="text-sm sm:text-base font-bold text-sacred-brown">
                  {lang === 'hi' ? 'सहयोग राशि चुनें (₹):' : 'Select Contribution Amount (₹):'}
                </span>
              </div>

              {effectiveAmount > 0 && (
                <div className="min-h-[32px] inline-flex items-center justify-center gap-1.5 text-xs sm:text-sm font-bold text-saffron-900 bg-amber-100 px-4 py-1 rounded-full border border-amber-300 shadow-2xs">
                  <span>{lang === 'hi' ? 'चयनित राशि:' : 'Selected:'}</span>
                  <span className="text-saffron-700 font-extrabold text-sm sm:text-base">₹{effectiveAmount}</span>
                </div>
              )}
            </div>

            {/* Quick Amount Buttons */}
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2.5 sm:gap-3">
              {amounts.map((amt) => {
                const isSelected = !isCustom && selectedAmount === amt;
                return (
                  <button
                    key={amt}
                    type="button"
                    onClick={() => handleSelectAmount(amt)}
                    className={`min-h-[46px] sm:min-h-[50px] inline-flex items-center justify-center px-3 rounded-2xl font-bold text-sm sm:text-base transition-all duration-200 border leading-none text-center cursor-pointer ${
                      isSelected
                        ? 'bg-gradient-to-r from-saffron-600 to-saffron-700 text-white border-saffron-700 shadow-md scale-[1.03] ring-2 ring-saffron-400/50'
                        : 'glass-badge text-sacred-brown hover:border-saffron-400 hover:bg-white shadow-2xs hover:shadow-xs'
                    }`}
                  >
                    <span className="leading-none">₹{amt}</span>
                  </button>
                );
              })}
              <button
                type="button"
                onClick={handleCustomSelect}
                className={`min-h-[46px] sm:min-h-[50px] inline-flex items-center justify-center px-3 rounded-2xl font-bold text-sm sm:text-base transition-all duration-200 border leading-none text-center cursor-pointer ${
                  isCustom
                    ? 'bg-gradient-to-r from-saffron-600 to-saffron-700 text-white border-saffron-700 shadow-md scale-[1.03] ring-2 ring-saffron-400/50'
                    : 'glass-badge text-sacred-brown hover:border-saffron-400 hover:bg-white shadow-2xs hover:shadow-xs'
                }`}
              >
                <span className="leading-none">{lang === 'hi' ? 'अन्य राशि' : 'Custom'}</span>
              </button>
            </div>

            {/* Custom Amount Field */}
            {isCustom && (
              <div className="mt-4 relative animate-in fade-in duration-200">
                <label htmlFor={customInputId} className="sr-only">
                  {lang === 'hi' ? 'इच्छानुसार राशि' : 'Custom Amount'}
                </label>
                <div className="relative max-w-md mx-auto sm:mx-0">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg font-bold text-saffron-700">
                    ₹
                  </span>
                  <input
                    id={customInputId}
                    type="number"
                    min="1"
                    autoFocus
                    placeholder={lang === 'hi' ? 'अपनी इच्छानुसार राशि दर्ज करें (उदा. 5100)' : 'Enter amount in ₹'}
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    className="w-full pl-9 pr-4 py-3 text-base sm:text-lg font-bold rounded-2xl border-2 border-saffron-400 focus:outline-none focus:ring-4 focus:ring-saffron-400/30 bg-white text-sacred-brown shadow-sm"
                  />
                </div>
              </div>
            )}
          </div>

          {/* MODAL VIEW: TAB SWITCHER */}
          {isModal && (
            <div className="flex rounded-2xl bg-amber-100/80 p-1 mb-6 border border-amber-200">
              <button
                type="button"
                onClick={() => setModalTab('upi')}
                className={`flex-1 py-2.5 px-3 rounded-xl font-bold text-xs sm:text-sm inline-flex items-center justify-center gap-2 transition-all leading-none ${
                  modalTab === 'upi'
                    ? 'bg-white text-saffron-800 shadow-xs'
                    : 'text-sacred-brown hover:text-saffron-700'
                }`}
              >
                <QrCode className="w-4 h-4 text-saffron-600" />
                <span>{lang === 'hi' ? 'UPI QR व ऐप' : 'UPI QR & Apps'}</span>
              </button>
              <button
                type="button"
                onClick={() => setModalTab('bank')}
                className={`flex-1 py-2.5 px-3 rounded-xl font-bold text-xs sm:text-sm inline-flex items-center justify-center gap-2 transition-all leading-none ${
                  modalTab === 'bank'
                    ? 'bg-white text-saffron-800 shadow-xs'
                    : 'text-sacred-brown hover:text-saffron-700'
                }`}
              >
                <Building2 className="w-4 h-4 text-amber-700" />
                <span>{lang === 'hi' ? 'बैंक खाता (NEFT/RTGS)' : 'Bank Transfer'}</span>
              </button>
            </div>
          )}

          {/* STEP 2: PAYMENT METHODS GRID */}
          <div className={isModal ? '' : 'grid grid-cols-1 lg:grid-cols-2 gap-7 sm:gap-8 items-stretch'}>
            {/* BOX 1: UPI QR CODE & APPS */}
            {(!isModal || modalTab === 'upi') && (
              <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/90 shadow-md flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-amber-200/80">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-xl bg-saffron-100 text-saffron-700 flex items-center justify-center shrink-0 border border-amber-200">
                        <QrCode className="w-4 h-4" />
                      </div>
                      <h4 className="font-heading text-base sm:text-lg font-bold text-sacred-brown">
                        {lang === 'hi' ? 'स्कैन करें एवं तुरंत भुगतान' : 'Scan & Instant UPI Pay'}
                      </h4>
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 leading-none">
                      {lang === 'hi' ? 'तत्काल पावती' : 'Instant Confirmation'}
                    </span>
                  </div>

                  {/* QR Code Centerpiece Pedestal */}
                  <div className="flex flex-col items-center justify-center my-2">
                    <div className="p-4 sm:p-5 bg-white rounded-3xl shadow-lg border-2 border-amber-200 inline-block relative group">
                      <QRCodeSVG
                        value={dynamicUpiUri}
                        size={isModal ? 150 : 175}
                        level="M"
                        includeMargin={false}
                      />
                    </div>

                    {/* QR Dynamic Amount Indicator */}
                    <div className="mt-3">
                      <span className="min-h-[30px] inline-flex items-center justify-center text-xs font-bold text-saffron-950 glass-badge px-4 py-1 rounded-full leading-none shadow-2xs">
                        {lang === 'hi'
                          ? (effectiveAmount > 0 ? `₹${effectiveAmount} भुगतान हेतु स्कैन करें` : 'किसी भी UPI ऐप से स्कैन करें')
                          : (effectiveAmount > 0 ? `Scan to pay ₹${effectiveAmount}` : 'Scan with any UPI App')}
                      </span>
                    </div>

                    <p className="mt-2 text-xs text-sacred-warmGray font-medium text-center">
                      Google Pay • PhonePe • Paytm • BHIM • Amazon Pay
                    </p>
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  {/* Official UPI ID with One-Click Copy */}
                  <div className="bg-white p-3.5 rounded-2xl border border-amber-200/90 shadow-2xs">
                    <span className="text-[11px] font-bold text-sacred-warmGray uppercase tracking-wider block mb-1">
                      {lang === 'hi' ? 'आधिकारिक यूपीआई आईडी (UPI ID):' : 'Official UPI ID:'}
                    </span>
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono font-bold text-sacred-brown text-sm sm:text-base select-all">
                        {upiId}
                      </span>
                      <button
                        type="button"
                        onClick={() => handleCopyText(upiId, 'upi')}
                        className={`min-h-[34px] px-3.5 inline-flex items-center justify-center gap-1.5 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer ${
                          copiedField === 'upi'
                            ? 'bg-emerald-600 text-white shadow-xs'
                            : 'bg-saffron-600 hover:bg-saffron-700 text-white shadow-xs'
                        }`}
                        title={lang === 'hi' ? 'यूपीआई आईडी कॉपी करें' : 'Copy UPI ID'}
                      >
                        {copiedField === 'upi' ? (
                          <>
                            <Check className="w-3.5 h-3.5 shrink-0" />
                            <span>{lang === 'hi' ? 'कॉपी हो गया ✓' : 'Copied ✓'}</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5 shrink-0" />
                            <span>{lang === 'hi' ? 'कॉपी' : 'Copy'}</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Direct Mobile Pay CTA */}
                  <a
                    href={dynamicUpiUri}
                    className="min-h-[48px] w-full inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-saffron-600 via-saffron-700 to-saffron-800 hover:from-saffron-700 hover:to-saffron-900 text-white font-bold px-6 rounded-2xl shadow-md hover:shadow-lg transition-all text-center text-sm sm:text-base leading-none transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                  >
                    <Smartphone className="w-4 h-4 shrink-0" />
                    <span className="leading-none">{lang === 'hi' ? 'UPI ऐप से सीधे भुगतान करें' : 'Pay Directly via UPI App'}</span>
                  </a>
                </div>
              </div>
            )}

            {/* BOX 2: DIRECT BANK TRANSFER (NEFT / RTGS / IMPS) */}
            {(!isModal || modalTab === 'bank') && (
              <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/90 shadow-md flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-amber-200/80">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 border border-amber-200">
                        <Building2 className="w-4 h-4" />
                      </div>
                      <h4 className="font-heading text-base sm:text-lg font-bold text-sacred-brown">
                        {lang === 'hi' ? 'सीधा बैंक खाता ट्रांसफर (NEFT/RTGS)' : 'Direct Bank Transfer (NEFT/RTGS)'}
                      </h4>
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-bold text-amber-900 bg-amber-100 px-2.5 py-1 rounded-full border border-amber-300 leading-none">
                      {lang === 'hi' ? TRUST_DATA.donation.accountTypeHindi : TRUST_DATA.donation.accountTypeEnglish}
                    </span>
                  </div>

                  <p className="text-xs text-sacred-brown/85 leading-relaxed mb-4">
                    {lang === 'hi'
                      ? 'आप नेट बैंकिंग, मोबाइल बैंकिंग अथवा बैंक शाखा में जाकर सीधे ट्रस्ट के अधिकृत खाते में दान राशि ट्रांसफर कर सकते हैं:'
                      : 'You can transfer contributions directly via net banking, mobile banking, or bank branch using the statutory account details:'}
                  </p>

                  <div className="space-y-3">
                    {/* Account Holder Name */}
                    <div className="bg-white/90 p-3 rounded-2xl border border-amber-200/80">
                      <span className="text-[10px] uppercase tracking-wider font-bold text-sacred-warmGray block mb-0.5">
                        {lang === 'hi' ? 'खाताधारक का नाम (A/C Name):' : 'Account Name:'}
                      </span>
                      <p className="font-heading text-xs sm:text-sm font-bold text-sacred-brown">
                        {lang === 'hi' ? TRUST_DATA.donation.accountHolderHindi : TRUST_DATA.donation.accountHolderEnglish}
                      </p>
                    </div>

                    {/* Account Number with 1-Click Copy */}
                    <div className="bg-white p-3.5 rounded-2xl border border-amber-200/90 shadow-2xs">
                      <span className="text-[10px] uppercase tracking-wider font-bold text-sacred-warmGray block mb-1">
                        {lang === 'hi' ? 'खाता संख्या (Account Number):' : 'Account Number:'}
                      </span>
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-mono font-extrabold text-sacred-brown text-sm sm:text-base md:text-lg tracking-wider select-all">
                          {TRUST_DATA.donation.accountNumber}
                        </span>
                        <button
                          type="button"
                          onClick={() => handleCopyText(TRUST_DATA.donation.accountNumber, 'ac')}
                          className={`min-h-[34px] px-3.5 inline-flex items-center justify-center gap-1.5 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer ${
                            copiedField === 'ac'
                              ? 'bg-emerald-600 text-white shadow-xs'
                              : 'bg-amber-100 hover:bg-amber-200 text-saffron-900 border border-amber-300'
                          }`}
                          title={lang === 'hi' ? 'खाता संख्या कॉपी करें' : 'Copy Account Number'}
                        >
                          {copiedField === 'ac' ? (
                            <>
                              <Check className="w-3.5 h-3.5 shrink-0" />
                              <span>{lang === 'hi' ? 'कॉपी ✓' : 'Copied ✓'}</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5 shrink-0 text-saffron-700" />
                              <span>{lang === 'hi' ? 'कॉपी' : 'Copy'}</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>

                    {/* IFSC Code with 1-Click Copy */}
                    <div className="bg-white p-3.5 rounded-2xl border border-amber-200/90 shadow-2xs">
                      <span className="text-[10px] uppercase tracking-wider font-bold text-sacred-warmGray block mb-1">
                        {lang === 'hi' ? 'IFSC कोड (IFSC Code):' : 'IFSC Code:'}
                      </span>
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-mono font-extrabold text-saffron-900 text-sm sm:text-base md:text-lg tracking-wider select-all">
                          {TRUST_DATA.donation.ifscCode}
                        </span>
                        <button
                          type="button"
                          onClick={() => handleCopyText(TRUST_DATA.donation.ifscCode, 'ifsc')}
                          className={`min-h-[34px] px-3.5 inline-flex items-center justify-center gap-1.5 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer ${
                            copiedField === 'ifsc'
                              ? 'bg-emerald-600 text-white shadow-xs'
                              : 'bg-amber-100 hover:bg-amber-200 text-saffron-900 border border-amber-300'
                          }`}
                          title={lang === 'hi' ? 'IFSC कोड कॉपी करें' : 'Copy IFSC Code'}
                        >
                          {copiedField === 'ifsc' ? (
                            <>
                              <Check className="w-3.5 h-3.5 shrink-0" />
                              <span>{lang === 'hi' ? 'कॉपी ✓' : 'Copied ✓'}</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5 shrink-0 text-saffron-700" />
                              <span>{lang === 'hi' ? 'कॉपी' : 'Copy'}</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Bank Name & Branch */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      <div className="bg-white/90 p-3 rounded-2xl border border-amber-200/80">
                        <span className="text-[10px] uppercase tracking-wider font-bold text-sacred-warmGray block mb-0.5">
                          {lang === 'hi' ? 'बैंक:' : 'Bank:'}
                        </span>
                        <p className="text-xs sm:text-sm font-semibold text-sacred-brown">
                          {lang === 'hi' ? TRUST_DATA.donation.bankNameHindi : TRUST_DATA.donation.bankNameEnglish}
                        </p>
                      </div>

                      <div className="bg-white/90 p-3 rounded-2xl border border-amber-200/80">
                        <span className="text-[10px] uppercase tracking-wider font-bold text-sacred-warmGray block mb-0.5">
                          {lang === 'hi' ? 'शाखा:' : 'Branch:'}
                        </span>
                        <p className="text-xs sm:text-sm font-semibold text-sacred-brown">
                          {lang === 'hi' ? TRUST_DATA.donation.branchHindi : TRUST_DATA.donation.branchEnglish}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Statutory Trust Assurance */}
                <div className="p-3 bg-emerald-50/80 rounded-2xl border border-emerald-200/80 flex items-center gap-2 text-xs text-emerald-900 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>
                    {lang === 'hi'
                      ? '100% अधिकृत ट्रस्ट खाता • भारतीय ट्रस्ट अधिनियम 1882 के अधीन पंजीकृत'
                      : 'Statutory Trust Account • Registered under Indian Trusts Act 1882'}
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Security Footer */}
          <div className="mt-8 pt-5 border-t border-amber-200/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-sacred-warmGray text-center sm:text-left">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>
                {lang === 'hi'
                  ? 'सुरक्षित डिजिटल भुगतान • किसी भी पदाधिकारी को व्यक्तिगत नकद दान न दें।'
                  : 'Secured Digital Payment • Do not hand over personal cash to any individual.'}
              </span>
            </div>
            <span className="font-semibold text-saffron-800">
              {lang === 'hi' ? 'आयकर अधिनियम 1961 अनुपालित' : 'Income Tax Act 1961 Compliant'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationCard;
