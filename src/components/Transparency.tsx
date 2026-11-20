'use client';

import React from 'react';
import { ShieldCheck, Award, FileSpreadsheet, Scale, Landmark, Check } from 'lucide-react';
import { TRUST_DATA, TransparencyRule } from '@/data/trustData';
import { useLanguage } from '@/context/LanguageContext';

export const Transparency: React.FC = () => {
  const { lang } = useLanguage();

  const getTransparencyIcon = (iconName: TransparencyRule['iconName']) => {
    switch (iconName) {
      case 'award':
        return <Award className="w-5 h-5 text-saffron-600" />;
      case 'fileSpreadsheet':
        return <FileSpreadsheet className="w-5 h-5 text-amber-600" />;
      case 'scale':
        return <Scale className="w-5 h-5 text-emerald-600" />;
      case 'landmark':
        return <Landmark className="w-5 h-5 text-saffron-700" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-saffron-600" />;
    }
  };

  return (
    <section id="transparency" className="py-16 sm:py-24 bg-ivory-50 relative overflow-hidden">
      {/* Decorative Aura Blobs */}
      <div className="absolute top-12 right-10 w-80 h-80 rounded-full bg-gradient-to-br from-emerald-300/20 to-amber-300/15 blur-3xl pointer-events-none animate-float-slow" />
      <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-amber-400/15 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-6xl">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14" data-reveal="fade-in">
          <div className="min-h-[36px] inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold glass-badge text-emerald-950 mb-3 shadow-xs leading-none">
            <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
            <span className="leading-none">{lang === 'hi' ? 'सत्यनिष्ठा एवं प्रामाणिकता' : 'Integrity & Accountability'}</span>
          </div>

          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-bold text-sacred-brown leading-tight">
            {lang === 'hi' ? 'पारदर्शिता एवं सुशासन' : 'Transparency & Governance'}
          </h2>

          <p className="mt-3 text-xs sm:text-sm md:text-base text-sacred-brown/85 leading-relaxed">
            {lang === 'hi'
              ? 'दाता के प्रत्येक अंश का शत-प्रतिशत सदुपयोग सुनिश्चित करने वाली विधिक एवं नैतिक नियमावली'
              : 'Strict statutory and ethical governance ensuring 100% purposeful utilization of donations'}
          </p>
        </div>

        {/* 4 Pillars Grid with Glassmorphism */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
          {TRUST_DATA.transparency.map((item) => (
            <div
              key={item.id}
              data-reveal="zoom-in"
              className="glass-panel rounded-3xl p-6 sm:p-7 border border-white/85 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-3.5">
                  <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-100 border border-amber-200/90 flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                    {getTransparencyIcon(item.iconName)}
                  </div>
                  {/* Rule Badge */}
                  <span className="min-h-[28px] inline-flex items-center justify-center px-3 rounded-full text-xs font-bold glass-badge text-saffron-900 border border-amber-300 leading-none shadow-2xs">
                    <span>{lang === 'hi' ? `नियम ०${item.id}` : `Rule 0${item.id}`}</span>
                  </span>
                </div>

                <h3 className="font-heading text-base sm:text-lg font-bold text-sacred-brown mb-1.5 group-hover:text-saffron-700 transition-colors leading-snug">
                  {lang === 'hi' ? item.titleHindi : item.titleEnglish}
                </h3>

                <p className="text-xs font-semibold text-saffron-800 mb-2.5">
                  {lang === 'hi' ? item.summaryHindi : item.summaryEnglish}
                </p>

                <p className="text-sacred-brown/85 text-xs sm:text-sm leading-relaxed">
                  {lang === 'hi' ? item.detailHindi : item.detailEnglish}
                </p>
              </div>

              {/* Bottom Rule Compliance Tag */}
              <div className="mt-5 pt-3.5 border-t border-amber-100/80 flex items-center gap-2 text-xs font-semibold text-emerald-800 leading-none">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{lang === 'hi' ? 'विधिक विलेख एवं ट्रस्ट संविधान द्वारा अनिवार्य' : 'Mandated by Trust Deed Constitution'}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Legal Declaration Box in Frosted Warm Glass */}
        <div className="max-w-3xl mx-auto glass-panel-warm p-5 sm:p-6 rounded-3xl border border-amber-300 text-center shadow-md" data-reveal="fade-in">
          <p className="text-xs sm:text-sm font-semibold text-sacred-brown leading-relaxed">
            {lang === 'hi'
              ? '«कमला देवी पब्लिक सेवा मन्दिर ट्रस्ट के समस्त बैंक खाते केवल भारतीय स्टेट बैंक (SBI) अथवा अन्य राष्ट्रीयकृत बैंकों में ही संचालित हैं। किसी भी पदाधिकारी अथवा सदस्य को व्यक्तिगत रूप से नकद दान स्वीकार करने का कोई अधिकार नहीं है।»'
              : 'All bank accounts of Kamla Devi Public Seva Mandir Trust are operated strictly in nationalized banks (such as SBI). No office bearer is authorized to collect personal cash donations.'}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Transparency;
