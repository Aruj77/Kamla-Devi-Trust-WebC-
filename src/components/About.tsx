'use client';

import React from 'react';
import {
  Landmark,
  Award,
  HeartHandshake,
  CheckCircle2,
  ShieldCheck,
  Building2,
  MapPin,
  Scale,
  Sparkles,
  Users2,
  FileCheck2,
} from 'lucide-react';
import { TRUST_DATA } from '@/data/trustData';
import { ImageWithFallback } from './ImageWithFallback';
import { useLanguage } from '@/context/LanguageContext';

export const About: React.FC = () => {
  const { lang } = useLanguage();

  return (
    <section id="about" className="py-16 sm:py-24 bg-ivory-50 relative overflow-hidden">
      {/* Decorative Aura Blobs for Glassmorphism */}
      <div className="absolute top-12 left-10 w-80 h-80 rounded-full bg-gradient-to-br from-amber-300/25 to-saffron-300/15 blur-3xl pointer-events-none animate-float-slow" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-gradient-to-tl from-saffron-300/20 to-amber-200/25 blur-3xl pointer-events-none animate-float-reverse" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-6xl">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16" data-reveal="fade-in">
          <div className="min-h-[36px] inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold glass-badge text-saffron-950 mb-3 shadow-xs leading-none">
            <Landmark className="w-4 h-4 text-saffron-700 shrink-0" />
            <span className="leading-none">{lang === 'hi' ? 'संस्था परिचय एवं विधिक अधिदेश' : 'Profile & Statutory Mandate'}</span>
          </div>

          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-bold text-sacred-brown leading-tight">
            {lang === 'hi' ? 'कमला देवी पब्लिक सेवा मन्दिर ट्रस्ट' : 'About Kamla Devi Trust'}
          </h2>

          <p className="mt-3 text-xs sm:text-sm md:text-base text-sacred-brown/85 max-w-2xl mx-auto leading-relaxed">
            {lang === 'hi'
              ? 'पावन शुक्रताल तीर्थ की तपोभूमि से संचालित — निष्काम मानव सेवा, संस्कार, शिक्षा एवं स्वास्थ्य की अविरल धारा'
              : 'Rooted in sacred Shukratal pilgrimage — dedicated to selfless humanitarian service, education, healthcare, and cow protection'}
          </p>
        </div>

        {/* 1. TOP BALANCED 2-COLUMN SECTION: STORY & SACRED PILGRIMAGE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12 sm:mb-16">
          {/* Left Column: Story & Principles */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-5" data-reveal="fade-in">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/90 shadow-sm flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-100 to-saffron-100 text-saffron-700 flex items-center justify-center shadow-2xs border border-amber-200">
                    <HeartHandshake className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg sm:text-xl font-bold text-sacred-brown leading-snug">
                      {lang === 'hi' ? 'संस्था का ध्येय एवं पावन संकल्प' : 'Our Mission & Sacred Vow'}
                    </h3>
                    <p className="text-[11px] text-saffron-800 font-semibold">
                      {lang === 'hi' ? 'आजीवन अध्यक्ष श्री धीरज सिंह चौहान के मार्गदर्शन में' : 'Under Lifetime President Shri Dheeraj Singh Chauhan'}
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-sacred-brown/90 leading-relaxed mb-3.5">
                  {lang === 'hi' ? TRUST_DATA.about.paragraph1Hindi : TRUST_DATA.about.paragraph1English}
                </p>

                <p className="text-xs sm:text-sm text-sacred-brown/90 leading-relaxed mb-4">
                  {lang === 'hi' ? TRUST_DATA.about.paragraph2Hindi : TRUST_DATA.about.paragraph2English}
                </p>
              </div>

              {/* Highlighted Quote Callout */}
              <div className="glass-panel-warm p-4 sm:p-5 rounded-2xl border-l-4 border-saffron-600 shadow-2xs">
                <p className="text-xs sm:text-sm text-sacred-brown font-medium leading-relaxed italic">
                  "{lang === 'hi' ? TRUST_DATA.about.paragraph3Hindi : TRUST_DATA.about.paragraph3English}"
                </p>
              </div>
            </div>

            {/* 2 Guiding Principles Beneath in Glass Panels */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="glass-panel p-5 sm:p-6 rounded-2xl flex items-start gap-3 hover:shadow-md transition-shadow">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sacred-brown text-xs sm:text-sm">
                    {lang === 'hi' ? 'शाश्वत न्यास पहचान' : 'Permanent Identity'}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-sacred-brown/80 mt-1 leading-relaxed">
                    {lang === 'hi'
                      ? 'ट्रस्ट द्वारा स्थापित सभी स्कूल, चिकित्सालय व आश्रम सदैव अधिकृत पंजीकृत नाम से ही संचालित रहेंगे।'
                      : 'All schools, clinics, and ashrams operate permanently under the trust’s official registered name.'}
                  </p>
                </div>
              </div>

              <div className="glass-panel p-5 sm:p-6 rounded-2xl flex items-start gap-3 hover:shadow-md transition-shadow">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sacred-brown text-xs sm:text-sm">
                    {lang === 'hi' ? 'सर्वसमावेशी निष्काम सेवा' : 'Universal Compassion'}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-sacred-brown/80 mt-1 leading-relaxed">
                    {lang === 'hi'
                      ? 'बिना किसी जाति, वर्ग अथवा पंथ के भेदभाव के 100% निःस्वार्थ भाव से मानवता के कल्याण हेतु समर्पित।'
                      : 'Serving every needy individual with pure dedication without any bias or discrimination.'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Sacred Shukratal & Akshay Vatvriksh Photo Showcase */}
          <div className="lg:col-span-5 flex flex-col justify-between" data-reveal="zoom-in">
            <div className="glass-panel-warm p-3 sm:p-4 rounded-3xl shadow-lg border border-amber-300 flex-1 flex flex-col justify-between">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] bg-amber-50 shadow-inner group">
                <ImageWithFallback
                  src="/images/activities/shukratal-vatvriksh.webp"
                  alt={lang === 'hi' ? 'अमर वटवृक्ष एवं शुक्रताल तीर्थ धाम' : 'Akshay Banyan Tree, Shukratal'}
                  aspectRatio="w-full h-full"
                  className="w-full h-full object-cover"
                  categoryTag={lang === 'hi' ? 'तपोभूमि शुक्रताल' : 'Sacred Shukratal'}
                  title={lang === 'hi' ? '5100+ वर्ष प्राचीन अक्षय वटवृक्ष' : '5100+ Years Sacred Banyan Tree'}
                />

                {/* Glass Location Badge on Image */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="min-h-[38px] px-3.5 inline-flex items-center justify-center gap-1.5 rounded-full text-xs font-bold glass-badge text-saffron-950 shadow-md border border-amber-300 leading-none">
                    <MapPin className="w-3.5 h-3.5 text-saffron-700 shrink-0" />
                    <span>{lang === 'hi' ? 'शुकदेव आश्रम, शुक्रताल' : 'Shukdev Ashram, Shukratal'}</span>
                  </span>
                </div>
              </div>

              {/* Bottom Pilgrimage Description Card */}
              <div className="p-4 sm:p-5 mt-3 rounded-2xl glass-panel text-center">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-saffron-800 uppercase tracking-wider mb-1">
                  <Sparkles className="w-3.5 h-3.5 text-saffron-600" />
                  <span>{lang === 'hi' ? 'श्रीमद्भागवत की अमर उद्गम स्थली' : 'Cradle of Shrimad Bhagavata'}</span>
                </div>
                <p className="text-xs sm:text-sm font-semibold text-sacred-brown leading-snug">
                  {lang === 'hi'
                    ? '5100+ वर्ष प्राचीन अक्षय वटवृक्ष की छत्रछाया में महर्षि शुकदेव जी ने राजा परीक्षित को अमर कथा सुनाई थी।'
                    : 'The sacred banyan tree where Sage Shukdev delivered the timeless discourse to King Parikshit.'}
                </p>
                <div className="mt-2.5 pt-2.5 border-t border-amber-200/60 flex items-center justify-center gap-2 text-[11px] text-sacred-warmGray font-medium">
                  <Building2 className="w-3.5 h-3.5 text-saffron-700" />
                  <span>{lang === 'hi' ? 'ट्रस्ट का पंजीकृत प्रधान कार्यालय यहीं स्थित है' : 'Trust Registered Head Office is situated here'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. FULL-WIDTH STATUTORY CREDENTIALS CERTIFICATE CARD (BALANCED, ZERO EMPTY SPACE) */}
        <div className="max-w-6xl mx-auto mb-14 sm:mb-18" data-reveal="fade-in">
          <div className="relative glass-panel-warm p-6 sm:p-8 lg:p-10 rounded-3xl border-2 border-amber-300/90 shadow-xl overflow-hidden">
            {/* Subtle Watermark Emblem Background */}
            <div className="absolute right-4 -bottom-10 opacity-[0.06] pointer-events-none select-none">
              <Award className="w-72 h-72 text-saffron-900" />
            </div>

            {/* Certificate Header Banner */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-6 mb-6 border-b border-amber-200">
              <div className="flex items-center gap-3.5 text-center md:text-left">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-saffron-600 to-amber-700 text-white flex items-center justify-center shadow-md shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-bold text-sacred-brown leading-tight">
                    {lang === 'hi' ? 'आधिकारिक विधिक अधिदेश एवं न्यास पंजीयन विवरण' : 'Statutory Credentials & Legal Accreditation'}
                  </h3>
                  <p className="text-xs sm:text-sm text-saffron-800 font-semibold mt-0.5">
                    {lang === 'hi'
                      ? 'भारतीय ट्रस्ट अधिनियम 1882 की धारा 3 के अंतर्गत विधिवत पंजीकृत सार्वजनिक धर्मार्थ न्यास'
                      : 'Formally Registered Public Charitable Trust under Section 3, Indian Trusts Act, 1882'}
                  </p>
                </div>
              </div>

              {/* Verified Official Seal Pill */}
              <div className="shrink-0 min-h-[38px] px-4 py-1.5 rounded-full bg-emerald-100/90 border border-emerald-300 text-emerald-900 text-xs sm:text-sm font-bold inline-flex items-center gap-2 shadow-2xs">
                <FileCheck2 className="w-4 h-4 text-emerald-700" />
                <span>{lang === 'hi' ? 'सत्यापित शासकीय अभिलेख' : 'Verified Official Record'}</span>
              </div>
            </div>

            {/* 8 Statutory Credentials in a Balanced Responsive Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {/* 1. Registration Statute */}
              <div className="glass-panel p-4 rounded-2xl border border-white/80">
                <span className="text-[10px] uppercase tracking-wider font-bold text-saffron-800 block mb-1">
                  {lang === 'hi' ? 'पंजीयन अधिनियम' : 'Governing Statute'}
                </span>
                <p className="font-heading text-xs sm:text-sm font-bold text-sacred-brown">
                  {lang === 'hi' ? 'भारतीय ट्रस्ट अधिनियम 1882' : 'Indian Trusts Act, 1882'}
                </p>
                <p className="text-[11px] text-sacred-warmGray mt-0.5">
                  {lang === 'hi' ? 'धारा 3 के अधीन पंजीकृत' : 'Registered under Section 3'}
                </p>
              </div>

              {/* 2. Sub-Registrar Authority */}
              <div className="glass-panel p-4 rounded-2xl border border-white/80">
                <span className="text-[10px] uppercase tracking-wider font-bold text-saffron-800 block mb-1">
                  {lang === 'hi' ? 'निबंधन कार्यालय' : 'Sub-Registrar Office'}
                </span>
                <p className="font-heading text-xs sm:text-sm font-bold text-sacred-brown">
                  {lang === 'hi' ? 'कार्यालय उपनिबंधक, जानसठ' : 'Office of Sub-Registrar'}
                </p>
                <p className="text-[11px] text-sacred-warmGray mt-0.5">
                  {lang === 'hi' ? 'जिला मुजफ्फरनगर (उ.प्र.)' : 'Jansath, Muzaffarnagar (UP)'}
                </p>
              </div>

              {/* 3. Head Office */}
              <div className="glass-panel p-4 rounded-2xl border border-white/80">
                <span className="text-[10px] uppercase tracking-wider font-bold text-saffron-800 block mb-1">
                  {lang === 'hi' ? 'पंजीकृत प्रधान कार्यालय' : 'Registered Head Office'}
                </span>
                <p className="font-heading text-xs sm:text-sm font-bold text-sacred-brown">
                  {lang === 'hi' ? 'ग्राम शुक्रताल, जानसठ' : 'Village Shukratal, Jansath'}
                </p>
                <p className="text-[11px] text-sacred-warmGray mt-0.5">
                  {lang === 'hi' ? 'पिनकोड: 251316 (मुजफ्फरनगर)' : 'Pincode: 251316 (UP)'}
                </p>
              </div>

              {/* 4. Branch Office Noorpur */}
              <div className="glass-panel p-4 rounded-2xl border border-white/80">
                <span className="text-[10px] uppercase tracking-wider font-bold text-saffron-800 block mb-1">
                  {lang === 'hi' ? 'शाखा कार्यालय' : 'Branch Office'}
                </span>
                <p className="font-heading text-xs sm:text-sm font-bold text-sacred-brown">
                  {lang === 'hi' ? 'स्योहारा रोड, नूरपुर' : 'Seohara Road, Noorpur'}
                </p>
                <p className="text-[11px] text-sacred-warmGray mt-0.5">
                  {lang === 'hi' ? 'केनरा बैंक के सामने (उ.प्र.)' : 'Opposite Canara Bank (UP)'}
                </p>
              </div>

              {/* 5. Vriddh Ashram Chandpur */}
              <div className="glass-panel p-4 rounded-2xl border border-white/80">
                <span className="text-[10px] uppercase tracking-wider font-bold text-saffron-800 block mb-1">
                  {lang === 'hi' ? 'कमला देवी वृद्ध आश्रम' : 'Old Age Home'}
                </span>
                <p className="font-heading text-xs sm:text-sm font-bold text-sacred-brown">
                  {lang === 'hi' ? 'ग्राम दरबड़ा, तहसील चांदपुर' : 'Village Darbada, Chandpur'}
                </p>
                <p className="text-[11px] text-sacred-warmGray mt-0.5">
                  {lang === 'hi' ? 'निःशुल्क वृद्धजन आश्रय केंद्र' : 'Senior Citizens Shelter'}
                </p>
              </div>

              {/* 6. Legal Operational Scope */}
              <div className="glass-panel p-4 rounded-2xl border border-white/80">
                <span className="text-[10px] uppercase tracking-wider font-bold text-saffron-800 block mb-1">
                  {lang === 'hi' ? 'कार्यक्षेत्र (Jurisdiction)' : 'Operational Scope'}
                </span>
                <p className="font-heading text-xs sm:text-sm font-bold text-sacred-brown">
                  {lang === 'hi' ? 'संपूर्ण भारत वर्ष' : 'All-India Scope'}
                </p>
                <p className="text-[11px] text-sacred-warmGray mt-0.5">
                  {lang === 'hi' ? 'एवं आवश्यकतानुसार विदेश में भी' : 'Nationwide & International'}
                </p>
              </div>

              {/* 7. Non-Profit Trust Nature */}
              <div className="glass-panel p-4 rounded-2xl border border-white/80">
                <span className="text-[10px] uppercase tracking-wider font-bold text-saffron-800 block mb-1">
                  {lang === 'hi' ? 'संस्था प्रकृति' : 'Legal Nature'}
                </span>
                <p className="font-heading text-xs sm:text-sm font-bold text-emerald-800">
                  {lang === 'hi' ? '100% गैर-लाभकारी (Non-Profit)' : '100% Non-Profit Trust'}
                </p>
                <p className="text-[11px] text-sacred-warmGray mt-0.5">
                  {lang === 'hi' ? 'सार्वजनिक धर्मार्थ न्यास' : 'Public Charitable & Religious'}
                </p>
              </div>

              {/* 8. Financial Governance & Audit */}
              <div className="glass-panel p-4 rounded-2xl border border-white/80">
                <span className="text-[10px] uppercase tracking-wider font-bold text-saffron-800 block mb-1">
                  {lang === 'hi' ? 'वित्तीय सुशासन' : 'Financial Governance'}
                </span>
                <p className="font-heading text-xs sm:text-sm font-bold text-sacred-brown">
                  {lang === 'hi' ? 'वार्षिक चार्टर्ड अकाउंटेंट ऑडिट' : 'Annual Chartered Audit'}
                </p>
                <p className="text-[11px] text-sacred-warmGray mt-0.5">
                  {lang === 'hi' ? 'आयकर अधिनियम 1961 अनुपालित' : 'IT Act 1961 Compliant'}
                </p>
              </div>
            </div>

            {/* Verification Footer Banner */}
            <div className="mt-6 pt-4 border-t border-amber-200/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-sacred-warmGray">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="font-medium">
                  {lang === 'hi'
                    ? 'सभी विलेख एवं अभिलेख कार्यालय उपनिबंधक, जानसठ (मुजफ्फरनगर) में विधिवत पंजीकृत एवं सार्वजनिक निरीक्षण हेतु उपलब्ध हैं।'
                    : 'All deeds are registered at the Sub-Registrar Office, Jansath (Muzaffarnagar) and open to public review.'}
                </span>
              </div>
              <span className="shrink-0 font-bold text-saffron-800">
                {lang === 'hi' ? 'न्यास विलेख सं. 11/2024' : 'Trust Deed No. 11/2024'}
              </span>
            </div>
          </div>
        </div>

        {/* 3. IMPACT STATISTICS COUNTER ROW IN FROSTED GLASS */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto" data-reveal="fade-in">
          <div className="glass-panel p-4 rounded-2xl flex items-center gap-3.5 hover:shadow-md transition-all hover:-translate-y-0.5">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-saffron-100 to-amber-100 text-saffron-700 flex items-center justify-center shrink-0 border border-amber-200">
              <Landmark className="w-5 h-5" />
            </div>
            <div>
              <div className="font-heading text-lg sm:text-xl font-bold text-sacred-brown leading-tight">
                5100+ {lang === 'hi' ? 'वर्ष' : 'Yrs'}
              </div>
              <div className="text-[11px] text-sacred-warmGray font-medium">
                {lang === 'hi' ? 'प्राचीन शुक्रताल तीर्थ' : 'Holy Heritage'}
              </div>
            </div>
          </div>

          <div className="glass-panel p-4 rounded-2xl flex items-center gap-3.5 hover:shadow-md transition-all hover:-translate-y-0.5">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-100 to-amber-100 text-emerald-800 flex items-center justify-center shrink-0 border border-emerald-200">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <div className="font-heading text-lg sm:text-xl font-bold text-emerald-800 leading-tight">
                100%
              </div>
              <div className="text-[11px] text-sacred-warmGray font-medium">
                {lang === 'hi' ? 'मानसेवी व गैर-लाभकारी' : 'Non-Profit Seva'}
              </div>
            </div>
          </div>

          <div className="glass-panel p-4 rounded-2xl flex items-center gap-3.5 hover:shadow-md transition-all hover:-translate-y-0.5">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-100 to-orange-100 text-amber-800 flex items-center justify-center shrink-0 border border-amber-200">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="font-heading text-lg sm:text-xl font-bold text-sacred-brown leading-tight">
                7 {lang === 'hi' ? 'स्तंभ' : 'Pillars'}
              </div>
              <div className="text-[11px] text-sacred-warmGray font-medium">
                {lang === 'hi' ? 'विधिक सेवा अधिदेश' : 'Statutory Pillars'}
              </div>
            </div>
          </div>

          <div className="glass-panel p-4 rounded-2xl flex items-center gap-3.5 hover:shadow-md transition-all hover:-translate-y-0.5">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-100 to-amber-100 text-orange-800 flex items-center justify-center shrink-0 border border-orange-200">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <div className="font-heading text-lg sm:text-xl font-bold text-sacred-brown leading-tight">
                3 {lang === 'hi' ? 'केंद्र' : 'Centers'}
              </div>
              <div className="text-[11px] text-sacred-warmGray font-medium">
                {lang === 'hi' ? 'कार्यालय व आश्रम' : 'Offices & Ashram'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
