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
    <section id="transparency" className="py-14 sm:py-16 bg-ivory-100 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          {/* Section Badge - Fixed Height & Centered */}
          <div className="h-8 inline-flex items-center justify-center gap-1.5 px-3.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200 mb-3 shadow-2xs leading-none">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
            <span className="leading-none">{lang === 'hi' ? 'सत्यनिष्ठा एवं प्रामाणिकता' : 'Integrity & Accountability'}</span>
          </div>

          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-sacred-brown">
            {lang === 'hi' ? 'पारदर्शिता एवं सुशासन' : 'Transparency & Governance'}
          </h2>

          <p className="mt-2 text-xs sm:text-sm text-sacred-brown/80">
            {lang === 'hi'
              ? 'दाता के प्रत्येक अंश का शत-प्रतिशत सदुपयोग सुनिश्चित करने वाली विधिक एवं नैतिक नियमावली'
              : 'Strict statutory and ethical governance ensuring 100% purposeful utilization of donations'}
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 max-w-4xl mx-auto">
          {TRUST_DATA.transparency.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-5 sm:p-6 border border-amber-200/90 shadow-2xs hover:shadow-xs transition-all duration-200 flex flex-col justify-between group hover:-translate-y-0.5"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-50 to-orange-100 border border-amber-200 flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                    {getTransparencyIcon(item.iconName)}
                  </div>
                  {/* Rule Badge - Fixed Height & Centered */}
                  <span className="h-6 inline-flex items-center justify-center px-2.5 rounded-full text-[11px] font-bold bg-ivory-50 text-saffron-800 border border-amber-200 leading-none">
                    <span className="leading-none">{lang === 'hi' ? `नियम ०${item.id}` : `Rule 0${item.id}`}</span>
                  </span>
                </div>

                <h3 className="font-heading text-base sm:text-lg font-bold text-sacred-brown mb-1 group-hover:text-saffron-700 transition-colors">
                  {lang === 'hi' ? item.titleHindi : item.titleEnglish}
                </h3>

                <p className="text-xs font-semibold text-saffron-800 mb-2">
                  {lang === 'hi' ? item.summaryHindi : item.summaryEnglish}
                </p>

                <p className="text-sacred-brown/85 text-xs sm:text-sm leading-relaxed">
                  {lang === 'hi' ? item.detailHindi : item.detailEnglish}
                </p>
              </div>

              {/* Bottom Rule Compliance Tag */}
              <div className="mt-4 pt-3 border-t border-amber-100 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700 leading-none">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span className="leading-none">{lang === 'hi' ? 'विधिक विलेख एवं ट्रस्ट संविधान द्वारा अनिवार्य' : 'Mandated by Trust Deed Constitution'}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Legal Declaration Box */}
        <div className="mt-8 max-w-3xl mx-auto bg-gradient-to-r from-amber-100/80 via-orange-50/50 to-amber-100/80 p-4 rounded-2xl border border-amber-300 text-center shadow-2xs">
          <p className="text-xs sm:text-sm font-semibold text-sacred-brown leading-relaxed">
            {lang === 'hi'
              ? 'कमला देवी पब्लिक सेवा मन्दिर ट्रस्ट के समस्त बैंक खाते केवल राष्ट्रीयकृत बैंक में संचालित हैं। ट्रस्ट का कोई भी व्यक्तिगत खाता नहीं है। दान केवल अधिकृत ट्रस्ट के खाते में ही स्वीकार किया जाता है।'
              : 'All bank operations of Kamla Devi Public Seva Mandir Trust are conducted through nationalized bank accounts. Donations are strictly accepted only in the official trust name.'}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Transparency;
