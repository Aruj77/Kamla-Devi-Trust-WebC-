'use client';

import React from 'react';
import { Landmark, Award, HeartHandshake, CheckCircle2, ShieldCheck, Heart, Users2, Sparkles } from 'lucide-react';
import { TRUST_DATA } from '@/data/trustData';
import { ImageWithFallback } from './ImageWithFallback';
import { useLanguage } from '@/context/LanguageContext';

export const About: React.FC = () => {
  const { lang } = useLanguage();

  return (
    <section id="about" className="py-14 sm:py-20 bg-ivory-50 relative overflow-hidden">
      {/* Decorative Aura */}
      <div className="absolute top-0 right-10 w-80 h-80 rounded-full bg-amber-200/20 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
          <div className="h-8 inline-flex items-center justify-center gap-1.5 px-3.5 rounded-full text-xs font-semibold bg-amber-100 text-saffron-900 border border-amber-300 mb-3 leading-none shadow-2xs">
            <Landmark className="w-3.5 h-3.5 text-saffron-700 shrink-0" />
            <span className="leading-none">{lang === 'hi' ? 'संस्था परिचय एवं विधिक अधिदेश' : 'Profile & Legal Mandate'}</span>
          </div>

          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-sacred-brown">
            {lang === 'hi' ? 'कमला देवी पब्लिक सेवा मन्दिर ट्रस्ट' : 'About Kamla Devi Trust'}
          </h2>

          <p className="mt-2.5 text-xs sm:text-sm text-sacred-brown/80 max-w-xl mx-auto">
            {lang === 'hi'
              ? 'पावन शुक्रताल तीर्थ की तपोभूमि से संचालित — निष्काम मानव सेवा, संस्कार, शिक्षा एवं स्वास्थ्य की पावन धारा'
              : 'Rooted in sacred Shukratal pilgrimage — dedicated to selfless humanitarian service, education, healthcare, and cow protection'}
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start mb-12">
          {/* Left Column: Story & Principles */}
          <div className="lg:col-span-7 space-y-4 text-sacred-brown/90 leading-relaxed text-xs sm:text-sm">
            <div className="bg-white p-5 sm:p-7 rounded-2xl border border-amber-200/90 shadow-2xs">
              <h3 className="font-heading text-lg sm:text-xl font-bold text-sacred-brown mb-3.5 flex items-center gap-2">
                <HeartHandshake className="w-5 h-5 text-saffron-600 shrink-0" />
                <span>{lang === 'hi' ? 'संस्था का ध्येय एवं पावन संकल्प' : 'Our Mission & Sacred Vow'}</span>
              </h3>
              <p className="mb-3.5">
                {lang === 'hi' ? TRUST_DATA.about.paragraph1Hindi : TRUST_DATA.about.paragraph1English}
              </p>
              <p className="mb-3.5">
                {lang === 'hi' ? TRUST_DATA.about.paragraph2Hindi : TRUST_DATA.about.paragraph2English}
              </p>
              <p className="text-sacred-brown font-medium bg-amber-50/90 p-4 rounded-xl border-l-4 border-saffron-600 text-xs sm:text-sm shadow-2xs">
                {lang === 'hi' ? TRUST_DATA.about.paragraph3Hindi : TRUST_DATA.about.paragraph3English}
              </p>
            </div>

            {/* Guiding Principles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="bg-white p-4 rounded-xl border border-amber-200/90 shadow-2xs flex items-start gap-3 hover:shadow-xs transition-shadow">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sacred-brown text-xs sm:text-sm">
                    {lang === 'hi' ? 'शाश्वत ट्रस्ट नाम' : 'Permanent Identity'}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-sacred-brown/80 mt-0.5">
                    {lang === 'hi'
                      ? 'ट्रस्ट द्वारा स्थापित सभी स्कूल, चिकित्सालय व आश्रम सदैव ट्रस्ट के अधिकृत नाम से ही संचालित रहेंगे।'
                      : 'All schools, clinics, and ashrams operate permanently under the trust’s official registered name.'}
                  </p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-amber-200/90 shadow-2xs flex items-start gap-3 hover:shadow-xs transition-shadow">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sacred-brown text-xs sm:text-sm">
                    {lang === 'hi' ? 'सर्वसमावेशी कल्याण' : 'Universal Compassion'}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-sacred-brown/80 mt-0.5">
                    {lang === 'hi'
                      ? 'बिना किसी जाति, पंथ अथवा वर्ग के भेदभाव के केवल दीन-दुखियों एवं मानवता के उत्थान हेतु संकल्पबद्ध।'
                      : 'Serving every needy individual with pure dedication without any bias or discrimination.'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Showcase + Statutory Credentials Card */}
          <div className="lg:col-span-5 space-y-5">
            {/* Pilgrimage Image Card */}
            <div className="rounded-2xl overflow-hidden border border-amber-300 shadow-sm bg-white">
              <ImageWithFallback
                src="/images/activities/shukratal-vatvriksh.webp"
                alt={lang === 'hi' ? 'अमर वटवृक्ष एवं शुक्रताल तीर्थ धाम' : 'Akshay Banyan Tree, Shukratal'}
                aspectRatio="aspect-[16/10]"
                categoryTag={lang === 'hi' ? 'तपोभूमि शुक्रताल' : 'Sacred Shukratal'}
                title={lang === 'hi' ? '5100+ वर्ष प्राचीन अक्षय वटवृक्ष' : '5100+ Years Sacred Banyan Tree'}
              />
              <div className="p-3.5 bg-gradient-to-r from-amber-50 to-orange-50 border-t border-amber-200 text-center">
                <p className="text-xs font-bold text-saffron-900">
                  {lang === 'hi'
                    ? 'श्रीमद्भागवत की उद्गम स्थली • शुकदेव आश्रम, शुक्रताल (मुजफ्फरनगर)'
                    : 'Birthplace of Shrimad Bhagavata • Shukdev Ashram, Shukratal'}
                </p>
              </div>
            </div>

            {/* Official Credentials Card */}
            <div className="bg-gradient-to-br from-amber-100/70 via-orange-50/50 to-amber-100/40 p-5 rounded-2xl border border-amber-300 shadow-2xs">
              <div className="flex items-center gap-2.5 mb-3.5 pb-2.5 border-b border-amber-200/80">
                <div className="w-8 h-8 rounded-lg bg-saffron-600 text-white flex items-center justify-center shadow-xs shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm sm:text-base text-sacred-brown leading-tight">
                    {lang === 'hi' ? 'आधिकारिक विधिक अभिलेख' : 'Statutory Credentials'}
                  </h4>
                  <p className="text-[10px] text-saffron-800 font-semibold">
                    {lang === 'hi' ? 'पंजीकरण व न्यास विवरण' : 'Registration & Legal Status'}
                  </p>
                </div>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex items-start justify-between gap-2 py-1 border-b border-amber-200/50">
                  <span className="text-sacred-warmGray shrink-0">{lang === 'hi' ? 'पंजीकरण:' : 'Registration:'}</span>
                  <span className="font-semibold text-sacred-brown text-right">
                    {lang === 'hi' ? 'भारतीय ट्रस्ट अधिनियम 1882 (धारा 3)' : 'Indian Trusts Act 1882 (Sec 3)'}
                  </span>
                </div>

                <div className="flex items-start justify-between gap-2 py-1 border-b border-amber-200/50">
                  <span className="text-sacred-warmGray shrink-0">{lang === 'hi' ? 'पंजीकरण कार्यालय:' : 'Sub-Registrar:'}</span>
                  <span className="font-semibold text-sacred-brown text-right">
                    {lang === 'hi' ? 'उपनिबंधक, जानसठ (मुजफ्फरनगर)' : 'Sub-Registrar, Jansath (UP)'}
                  </span>
                </div>

                <div className="flex items-start justify-between gap-2 py-1 border-b border-amber-200/50">
                  <span className="text-sacred-warmGray shrink-0">{lang === 'hi' ? 'प्रधान कार्यालय:' : 'Head Office:'}</span>
                  <span className="font-semibold text-sacred-brown text-right">
                    {lang === 'hi' ? 'ग्राम शुक्रताल, जानसठ (मुजफ्फरनगर)' : 'Shukratal, Jansath (UP)'}
                  </span>
                </div>

                <div className="flex items-start justify-between gap-2 py-1 border-b border-amber-200/50">
                  <span className="text-sacred-warmGray shrink-0">{lang === 'hi' ? 'शाखा कार्यालय:' : 'Branch Office:'}</span>
                  <span className="font-semibold text-amber-900 text-right">
                    {lang === 'hi' ? 'केनरा बैंक के सामने, स्योहारा रोड, नूरपुर' : 'Opp. Canara Bank, Seohara Rd, Noorpur'}
                  </span>
                </div>

                <div className="flex items-start justify-between gap-2 py-1 border-b border-amber-200/50">
                  <span className="text-sacred-warmGray shrink-0">{lang === 'hi' ? 'वृद्ध आश्रम:' : 'Old Age Home:'}</span>
                  <span className="font-semibold text-orange-900 text-right">
                    {lang === 'hi' ? 'ग्राम दरबड़ा, तहसील चांदपुर' : 'Village Darbada, Chandpur'}
                  </span>
                </div>

                <div className="flex items-start justify-between gap-2 py-1 border-b border-amber-200/50">
                  <span className="text-sacred-warmGray shrink-0">{lang === 'hi' ? 'कार्यक्षेत्र:' : 'Scope:'}</span>
                  <span className="font-semibold text-saffron-800 text-right">
                    {lang === 'hi' ? 'संपूर्ण भारत वर्ष (एवं आवश्यकतानुसार बाहर भी)' : 'All India & Global'}
                  </span>
                </div>

                <div className="flex items-start justify-between gap-2 py-1">
                  <span className="text-sacred-warmGray shrink-0">{lang === 'hi' ? 'संस्था प्रकृति:' : 'Nature:'}</span>
                  <span className="font-semibold text-emerald-800 text-right">
                    {lang === 'hi' ? '100% गैर-लाभकारी (Non-Profit)' : '100% Non-Profit Trust'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Statistics Counter Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto">
          <div className="bg-white p-4 rounded-2xl border border-amber-200 shadow-2xs flex items-center gap-3.5 hover:shadow-xs transition-all hover:-translate-y-0.5">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-saffron-700 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="font-heading text-lg sm:text-xl font-bold text-sacred-brown">500+</div>
              <div className="text-[11px] text-sacred-warmGray font-medium">
                {lang === 'hi' ? 'गोवंश सेवा व आश्रय' : 'Cows Protected'}
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-amber-200 shadow-2xs flex items-center gap-3.5 hover:shadow-xs transition-all hover:-translate-y-0.5">
            <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-700 flex items-center justify-center shrink-0">
              <Heart className="w-5 h-5" />
            </div>
            <div>
              <div className="font-heading text-lg sm:text-xl font-bold text-sacred-brown">365 दिन</div>
              <div className="text-[11px] text-sacred-warmGray font-medium">
                {lang === 'hi' ? 'निःशुल्क अन्नक्षेत्र लंगर' : 'Daily Free Food'}
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-amber-200 shadow-2xs flex items-center gap-3.5 hover:shadow-xs transition-all hover:-translate-y-0.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
              <Users2 className="w-5 h-5" />
            </div>
            <div>
              <div className="font-heading text-lg sm:text-xl font-bold text-sacred-brown">12 न्यासी</div>
              <div className="text-[11px] text-sacred-warmGray font-medium">
                {lang === 'hi' ? 'समर्पित संचालक मंडल' : 'Honorary Trustees'}
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-amber-200 shadow-2xs flex items-center gap-3.5 hover:shadow-xs transition-all hover:-translate-y-0.5">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="font-heading text-lg sm:text-xl font-bold text-sacred-brown">100%</div>
              <div className="text-[11px] text-sacred-warmGray font-medium">
                {lang === 'hi' ? 'पारदर्शी व विधिक न्यास' : 'Transparent & Legal'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
