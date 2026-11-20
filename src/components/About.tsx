'use client';

import React from 'react';
import { Landmark, Award, HeartHandshake, CheckCircle2 } from 'lucide-react';
import { TRUST_DATA } from '@/data/trustData';
import { useLanguage } from '@/context/LanguageContext';

export const About: React.FC = () => {
  const { lang } = useLanguage();

  return (
    <section id="about" className="py-14 sm:py-16 bg-ivory-50 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12">
          {/* Section Badge - Fixed Height & Perfectly Centered */}
          <div className="h-8 inline-flex items-center justify-center gap-1.5 px-3.5 rounded-full text-xs font-semibold bg-amber-100 text-saffron-900 border border-amber-200 mb-3 leading-none shadow-2xs">
            <Landmark className="w-3.5 h-3.5 text-saffron-700 shrink-0" />
            <span className="leading-none">{lang === 'hi' ? 'संस्था परिचय एवं अधिदेश' : 'Profile & Mandate'}</span>
          </div>

          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-sacred-brown">
            {lang === 'hi' ? 'हमारे बारे में' : 'About the Trust'}
          </h2>

          <p className="mt-2 text-xs sm:text-sm text-sacred-brown/80 max-w-xl mx-auto">
            {lang === 'hi'
              ? 'कमला देवी पब्लिक सेवा मन्दिर ट्रस्ट — निष्काम सेवा, संस्कार और सामाजिक समरसता की पावन धारा'
              : 'Kamla Devi Public Seva Mandir Trust — A sacred tradition of selfless service, values, and social welfare'}
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          {/* Left Column: Story & Principles */}
          <div className="lg:col-span-7 space-y-4 text-sacred-brown/90 leading-relaxed text-xs sm:text-sm">
            <div className="bg-white p-5 sm:p-6 rounded-2xl border border-amber-200/80 shadow-2xs">
              <h3 className="font-heading text-lg sm:text-xl font-bold text-sacred-brown mb-3 flex items-center gap-2">
                <HeartHandshake className="w-5 h-5 text-saffron-600 shrink-0" />
                <span>{lang === 'hi' ? 'संस्था का ध्येय एवं संकल्प' : 'Our Mission & Commitment'}</span>
              </h3>
              <p className="mb-3">
                {lang === 'hi' ? TRUST_DATA.about.paragraph1Hindi : TRUST_DATA.about.paragraph1English}
              </p>
              <p className="mb-3">
                {lang === 'hi' ? TRUST_DATA.about.paragraph2Hindi : TRUST_DATA.about.paragraph2English}
              </p>
              <p className="text-sacred-brown font-medium bg-amber-50/80 p-3.5 rounded-xl border-l-3 border-saffron-600 text-xs sm:text-sm">
                {lang === 'hi' ? TRUST_DATA.about.paragraph3Hindi : TRUST_DATA.about.paragraph3English}
              </p>
            </div>

            {/* Guiding Principles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="bg-white p-4 rounded-xl border border-amber-200/80 shadow-2xs flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sacred-brown text-xs sm:text-sm">
                    {lang === 'hi' ? 'शाश्वत ट्रस्ट नाम' : 'Permanent Trust Identity'}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-sacred-brown/80 mt-0.5">
                    {lang === 'hi'
                      ? 'ट्रस्ट द्वारा स्थापित सभी स्कूल, चिकित्सालय व आश्रम सदैव कमला देवी पब्लिक सेवा मन्दिर ट्रस्ट के नाम से ही संचालित रहेंगे।'
                      : 'All schools, clinics, and ashrams shall permanently operate under the trust’s official name.'}
                  </p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-amber-200/80 shadow-2xs flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sacred-brown text-xs sm:text-sm">
                    {lang === 'hi' ? 'सर्वसमावेशी कल्याण' : 'Universal Compassion'}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-sacred-brown/80 mt-0.5">
                    {lang === 'hi'
                      ? 'बिना किसी जाति, पंथ अथवा क्षेत्र के भेदभाव के केवल मानवता एवं दीन-दुखियों की सेवा हेतु समर्पित।'
                      : 'Serving humanity with zero discrimination based on caste, background, or region.'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Key Official Credentials Card */}
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-br from-amber-100/70 via-orange-50/50 to-amber-100/40 p-5 sm:p-6 rounded-2xl border border-amber-300 shadow-2xs relative">
              <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-amber-200/80">
                <div className="w-9 h-9 rounded-xl bg-saffron-600 text-white flex items-center justify-center shadow-xs shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-base text-sacred-brown leading-normal">
                    {lang === 'hi' ? 'आधिकारिक अभिलेख' : 'Statutory Credentials'}
                  </h4>
                  <p className="text-[10px] text-saffron-800 font-semibold">
                    {lang === 'hi' ? 'पंजीकरण एवं विधिक विवरण' : 'Registration & Legal Status'}
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="bg-white/90 p-3 rounded-xl border border-amber-200/80">
                  <span className="text-[10px] font-bold text-sacred-warmGray uppercase tracking-wider block mb-0.5">
                    {lang === 'hi' ? 'वैधानिक पंजीकरण (Registration)' : 'Statutory Registration'}
                  </span>
                  <p className="text-xs font-semibold text-sacred-brown leading-snug">
                    {lang === 'hi' ? TRUST_DATA.registrationFullHindi : TRUST_DATA.registrationFullEnglish}
                  </p>
                </div>

                <div className="bg-white/90 p-3 rounded-xl border border-amber-200/80">
                  <span className="text-[10px] font-bold text-sacred-warmGray uppercase tracking-wider block mb-0.5">
                    {lang === 'hi' ? 'संस्था का स्वभाव (Nature)' : 'Legal Nature'}
                  </span>
                  <p className="text-xs font-semibold text-sacred-brown leading-snug">
                    {lang === 'hi' ? TRUST_DATA.natureHindi : TRUST_DATA.natureEnglish}
                  </p>
                </div>

                <div className="bg-white/90 p-3 rounded-xl border border-amber-200/80">
                  <span className="text-[10px] font-bold text-sacred-warmGray uppercase tracking-wider block mb-0.5">
                    {lang === 'hi' ? 'कार्य क्षेत्र (Scope)' : 'Operational Jurisdiction'}
                  </span>
                  <p className="text-xs font-semibold text-sacred-brown leading-snug">
                    {lang === 'hi' ? TRUST_DATA.operationalScopeHindi : TRUST_DATA.operationalScopeEnglish}
                  </p>
                </div>

                <div className="bg-white/90 p-3 rounded-xl border border-amber-200/80">
                  <span className="text-[10px] font-bold text-sacred-warmGray uppercase tracking-wider block mb-0.5">
                    {lang === 'hi' ? 'न्यायिक क्षेत्राधिकार (Courts)' : 'Judicial Jurisdiction'}
                  </span>
                  <p className="text-xs font-semibold text-sacred-brown leading-snug">
                    {lang === 'hi' ? TRUST_DATA.jurisdictionHindi : TRUST_DATA.jurisdictionEnglish}
                  </p>
                </div>
              </div>

              {/* Bottom Quote Badge */}
              <div className="mt-4 pt-3 border-t border-amber-200/70 text-center">
                <span className="text-[11px] font-semibold text-saffron-900 italic">
                  «परोपकाराय फलन्ति वृक्षाः, परोपकाराय वहन्ति नद्यः»
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
