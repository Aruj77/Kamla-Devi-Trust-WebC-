'use client';

import React from 'react';
import { Heart, Sparkles, CheckCircle2 } from 'lucide-react';
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
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12" data-reveal="fade-in">
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

        {/* 3 Pillars of Impact beneath Donation in Frosted Glass */}
        <div className="mt-10 max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4" data-reveal="fade-in">
          <div className="flex items-start gap-3 glass-panel p-4.5 rounded-2xl hover:shadow-md transition-shadow">
            <div className="w-8 h-8 rounded-xl bg-saffron-100 text-saffron-700 flex items-center justify-center shrink-0 mt-0.5 border border-amber-200">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <div>
              <h4 className="font-bold text-sacred-brown text-xs sm:text-sm leading-snug">
                {lang === 'hi' ? 'शत-प्रतिशत पारदर्शिता' : '100% Transparency'}
              </h4>
              <p className="text-[11px] sm:text-xs text-sacred-brown/80 mt-1 leading-relaxed">
                {lang === 'hi'
                  ? 'सीए द्वारा वार्षिक ऑडिट एवं आयकर अधिनियम 1961 के तहत पूर्णतः सुरक्षित।'
                  : 'Independent CA audit & full IT Act Section 11(5) compliance.'}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 glass-panel p-4.5 rounded-2xl hover:shadow-md transition-shadow">
            <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 mt-0.5 border border-amber-200">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h4 className="font-bold text-sacred-brown text-xs sm:text-sm leading-snug">
                {lang === 'hi' ? 'प्रत्यक्ष सेवा उपयोग' : 'Direct Impact'}
              </h4>
              <p className="text-[11px] sm:text-xs text-sacred-brown/80 mt-1 leading-relaxed">
                {lang === 'hi'
                  ? 'निराश्रित गोवंश, असहाय वृद्धजन व जरूरतमंद छात्रों की सेवा में सीधा व्यय।'
                  : 'Direct deployment for cow protection, destitute elder care & needy students.'}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 glass-panel p-4.5 rounded-2xl hover:shadow-md transition-shadow">
            <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-200">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <div>
              <h4 className="font-bold text-sacred-brown text-xs sm:text-sm leading-snug">
                {lang === 'hi' ? 'तत्काल UPI रसीद' : 'Instant UPI Receipt'}
              </h4>
              <p className="text-[11px] sm:text-xs text-sacred-brown/80 mt-1 leading-relaxed">
                {lang === 'hi'
                  ? 'डिजिटल बैंक ट्रांसफर की डिजिटल पावती सीधे आपके बैंक खाते में उपलब्ध।'
                  : 'Instant digital transaction acknowledgment in your banking app.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationSection;
