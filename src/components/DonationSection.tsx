'use client';

import React from 'react';
import { Heart, Sparkles, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { DonationCard } from './DonationCard';
import { useLanguage } from '@/context/LanguageContext';

export const DonationSection: React.FC = () => {
  const { lang } = useLanguage();

  return (
    <section id="donate" className="py-16 sm:py-24 bg-gradient-to-b from-ivory-100 via-amber-50/50 to-ivory-50 relative overflow-hidden">
      {/* Decorative Radiant Blobs for Glass Depth */}
      <div className="absolute top-10 left-10 w-96 h-96 rounded-full bg-gradient-to-br from-amber-300/30 via-saffron-300/20 to-transparent blur-3xl pointer-events-none animate-float-slow" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-gradient-to-tl from-saffron-300/25 via-amber-200/20 to-transparent blur-3xl pointer-events-none animate-float-reverse" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-6xl">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14" data-reveal="fade-in">
          <div className="min-h-[36px] inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold glass-badge text-saffron-950 mb-3 shadow-xs leading-none">
            <Heart className="w-4 h-4 text-saffron-600 fill-saffron-600 shrink-0" />
            <span className="leading-none">{lang === 'hi' ? 'पुण्य दान • परोपकार सेवा' : 'Charitable Contribution'}</span>
          </div>

          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-bold text-sacred-brown leading-tight">
            {lang === 'hi' ? (
              <>
                जनकल्याण हेतु आपका{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron-700 to-amber-700 underline decoration-amber-400 decoration-wavy decoration-2 underline-offset-8">
                  पावन सहयोग
                </span>
              </>
            ) : (
              <>
                Your Support for{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron-700 to-amber-700 underline decoration-amber-400 decoration-wavy decoration-2 underline-offset-8">
                  Universal Welfare
                </span>
              </>
            )}
          </h2>

          <p className="mt-3 text-xs sm:text-sm md:text-base text-sacred-brown/85 max-w-xl mx-auto leading-relaxed">
            {lang === 'hi'
              ? 'आपके द्वारा समर्पित किया गया प्रत्येक अंश निराश्रित वृद्धजनों के आश्रय, निर्धन बालकों की उच्च शिक्षा, निःशुल्क चिकित्सा एवं सनातन धर्म के संवर्धन में समर्पित होता है।'
              : 'Every contribution directly supports destitute elder care, free quality education for needy students, healthcare relief, and preserving our cultural values.'}
          </p>
        </div>

        {/* The Live Interactive Donation Card */}
        <div data-reveal="zoom-in">
          <DonationCard isModal={false} />
        </div>

        {/* 3 Pillars of Impact beneath Donation - Redesigned with Generous Padding & Visual Polish */}
        <div className="mt-12 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6" data-reveal="fade-in">
          {/* Card 1: 100% Transparency */}
          <div className="glass-panel p-6 sm:p-7 rounded-3xl border border-white/90 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-saffron-100 to-amber-100 text-saffron-700 flex items-center justify-center shrink-0 border border-amber-200 shadow-2xs group-hover:scale-105 transition-transform">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <span className="min-h-[24px] inline-flex items-center px-2.5 rounded-full text-[10px] font-bold uppercase tracking-wider text-saffron-900 bg-amber-100 border border-amber-300">
                  {lang === 'hi' ? '100% विधिक' : 'Statutory'}
                </span>
              </div>

              <h4 className="font-heading font-bold text-base sm:text-lg text-sacred-brown group-hover:text-saffron-700 transition-colors mb-2 leading-snug">
                {lang === 'hi' ? 'शत-प्रतिशत पारदर्शिता' : '100% Transparency'}
              </h4>

              <p className="text-xs sm:text-sm text-sacred-brown/85 leading-relaxed">
                {lang === 'hi'
                  ? 'चार्टर्ड अकाउंटेंट द्वारा वार्षिक ऑडिट, पारदर्शी बहीखाता एवं भारतीय ट्रस्ट अधिनियम 1882 तथा आयकर अधिनियम 1961 के तहत पूर्णतः अनुपालित।'
                  : 'Annual Chartered Accountant audit and full compliance with the Indian Trusts Act, 1882 and Income Tax Act, 1961.'}
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-amber-100/80 flex items-center gap-1.5 text-xs font-semibold text-emerald-800 leading-none">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{lang === 'hi' ? 'वार्षिक सीए ऑडिट रिपोर्ट' : 'Annual CA Audit Certified'}</span>
            </div>
          </div>

          {/* Card 2: Direct Impact */}
          <div className="glass-panel p-6 sm:p-7 rounded-3xl border border-white/90 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-100 to-orange-100 text-amber-800 flex items-center justify-center shrink-0 border border-amber-200 shadow-2xs group-hover:scale-105 transition-transform">
                  <Sparkles className="w-6 h-6" />
                </div>
                <span className="min-h-[24px] inline-flex items-center px-2.5 rounded-full text-[10px] font-bold uppercase tracking-wider text-amber-900 bg-amber-100 border border-amber-300">
                  {lang === 'hi' ? 'प्रत्यक्ष सेवा' : 'Direct Seva'}
                </span>
              </div>

              <h4 className="font-heading font-bold text-base sm:text-lg text-sacred-brown group-hover:text-saffron-700 transition-colors mb-2 leading-snug">
                {lang === 'hi' ? 'प्रत्यक्ष सेवा उपयोग' : 'Direct Impact'}
              </h4>

              <p className="text-xs sm:text-sm text-sacred-brown/85 leading-relaxed">
                {lang === 'hi'
                  ? 'निराश्रित गोवंश के चारे-पोषण, वृद्ध आश्रम में आश्रितों की सेवा, निर्धन बालकों की छात्रवृत्ति व निःशुल्क ग्रामीण स्वास्थ्य शिविरों में सीधा व्यय।'
                  : 'Direct deployment for cow protection, destitute elder shelter, scholarships for underprivileged youth, and free medical camps.'}
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-amber-100/80 flex items-center gap-1.5 text-xs font-semibold text-emerald-800 leading-none">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{lang === 'hi' ? '0% प्रशासनिक अपव्यय' : '0% Administrative Waste'}</span>
            </div>
          </div>

          {/* Card 3: Instant UPI Confirmation */}
          <div className="glass-panel p-6 sm:p-7 rounded-3xl border border-white/90 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-100 to-amber-100 text-emerald-800 flex items-center justify-center shrink-0 border border-emerald-200 shadow-2xs group-hover:scale-105 transition-transform">
                  <Zap className="w-6 h-6" />
                </div>
                <span className="min-h-[24px] inline-flex items-center px-2.5 rounded-full text-[10px] font-bold uppercase tracking-wider text-emerald-900 bg-emerald-100 border border-emerald-300">
                  {lang === 'hi' ? 'डिजिटल रसीद' : 'Digital Receipt'}
                </span>
              </div>

              <h4 className="font-heading font-bold text-base sm:text-lg text-sacred-brown group-hover:text-saffron-700 transition-colors mb-2 leading-snug">
                {lang === 'hi' ? 'तत्काल UPI रसीद' : 'Instant UPI Receipt'}
              </h4>

              <p className="text-xs sm:text-sm text-sacred-brown/85 leading-relaxed">
                {lang === 'hi'
                  ? 'डिजिटल बैंक एवं UPI ट्रांसफर की इलेक्ट्रॉनिक पावती सीधे आपके बैंक खाते व यूपीआई ऐप में संदर्भ संख्या (UTR/Ref No.) सहित तत्काल सुरक्षित।'
                  : 'Instant digital transaction confirmation and UTR reference directly secured in your mobile banking and UPI application.'}
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-amber-100/80 flex items-center gap-1.5 text-xs font-semibold text-emerald-800 leading-none">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{lang === 'hi' ? 'सुरक्षित एवं सत्यापित' : 'Secured & Bank Verified'}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationSection;
