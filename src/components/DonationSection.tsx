'use client';

import React from 'react';
import { Heart, Sparkles, CheckCircle2 } from 'lucide-react';
import { DonationCard } from './DonationCard';
import { useLanguage } from '@/context/LanguageContext';

export const DonationSection: React.FC = () => {
  const { lang } = useLanguage();

  return (
    <section id="donate" className="py-14 sm:py-16 bg-gradient-to-b from-ivory-100 via-amber-50/40 to-ivory-50 relative overflow-hidden">
      {/* Decorative background embellishments */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-full pointer-events-none opacity-30">
        <div className="absolute top-10 left-10 w-60 h-60 rounded-full bg-amber-300/20 blur-3xl" />
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-saffron-300/20 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          {/* Section Badge - Fixed Height & Centered */}
          <div className="h-8 inline-flex items-center justify-center gap-1.5 px-3.5 rounded-full text-xs font-semibold bg-saffron-100 text-saffron-800 border border-saffron-200 mb-3 shadow-2xs leading-none">
            <Heart className="w-3.5 h-3.5 text-saffron-600 fill-saffron-600 shrink-0" />
            <span className="leading-none">{lang === 'hi' ? 'पुण्य दान • परोपकार सेवा' : 'Charitable Contribution'}</span>
          </div>

          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-sacred-brown">
            {lang === 'hi' ? (
              <>
                जनकल्याण हेतु आपका{' '}
                <span className="text-saffron-700 underline decoration-amber-400 decoration-wavy decoration-2 underline-offset-6">
                  पावन सहयोग
                </span>
              </>
            ) : (
              <>
                Your Support for{' '}
                <span className="text-saffron-700 underline decoration-amber-400 decoration-wavy decoration-2 underline-offset-6">
                  Universal Welfare
                </span>
              </>
            )}
          </h2>

          <p className="mt-2 text-xs sm:text-sm text-sacred-brown/80 max-w-xl mx-auto">
            {lang === 'hi'
              ? 'आपके द्वारा समर्पित किया गया प्रत्येक अंश निराश्रित वृद्धजनों के आश्रय, निर्धन बालकों की उच्च शिक्षा, निःशुल्क चिकित्सा एवं सनातन धर्म के संवर्धन में समर्पित होता है।'
              : 'Every contribution directly supports destitute elder care, free quality education for needy students, healthcare relief, and preserving our cultural values.'}
          </p>
        </div>

        {/* The Live Interactive Donation Card */}
        <DonationCard isModal={false} />

        {/* 3 Pillars of Impact beneath Donation */}
        <div className="mt-8 max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4">
          <div className="flex items-start gap-2.5 bg-white/90 backdrop-blur-xs p-3.5 rounded-xl border border-amber-200/80 shadow-2xs">
            <div className="w-7 h-7 rounded-lg bg-saffron-100 text-saffron-700 flex items-center justify-center shrink-0 mt-0.5">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <div>
              <h4 className="font-bold text-sacred-brown text-xs sm:text-sm leading-snug">
                {lang === 'hi' ? 'शत-प्रतिशत पारदर्शिता' : '100% Transparency'}
              </h4>
              <p className="text-[11px] text-sacred-brown/80 mt-0.5 leading-snug">
                {lang === 'hi'
                  ? 'सीए द्वारा वार्षिक ऑडिट एवं आयकर अधिनियम 1961 के तहत पूर्णतः सुरक्षित।'
                  : 'Independent CA audit & full IT Act Section 11(5) compliance.'}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-2.5 bg-white/90 backdrop-blur-xs p-3.5 rounded-xl border border-amber-200/80 shadow-2xs">
            <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 mt-0.5">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h4 className="font-bold text-sacred-brown text-xs sm:text-sm leading-snug">
                {lang === 'hi' ? 'प्रत्यक्ष सेवा उपयोग' : 'Direct Impact'}
              </h4>
              <p className="text-[11px] text-sacred-brown/80 mt-0.5 leading-snug">
                {lang === 'hi'
                  ? 'शिक्षा, चिकित्सा, अन्न-क्षेत्र एवं असहाय वृद्धजन सेवा में सीधा विनियोग।'
                  : 'Immediate deployment in food relief, education, and elder shelter.'}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-2.5 bg-white/90 backdrop-blur-xs p-3.5 rounded-xl border border-amber-200/80 shadow-2xs">
            <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <div>
              <h4 className="font-bold text-sacred-brown text-xs sm:text-sm leading-snug">
                {lang === 'hi' ? 'तुरंत डिजिटल रसीद' : 'Direct Receipt'}
              </h4>
              <p className="text-[11px] text-sacred-brown/80 mt-0.5 leading-snug">
                {lang === 'hi'
                  ? 'UPI संदर्भ संख्या के साथ ट्रस्ट कार्यालय से पावती रसीद प्राप्त करें।'
                  : 'Receive formal trust receipt against your transaction reference.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationSection;
