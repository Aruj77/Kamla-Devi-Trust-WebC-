'use client';

import React from 'react';
import {
  Heart,
  ShieldCheck,
  Sparkles,
  HeartPulse,
  Building2,
  BookOpen,
  CheckCircle2,
  ArrowRight,
  MapPin,
} from 'lucide-react';
import { TRUST_DATA } from '@/data/trustData';
import { Emblem } from './Emblem';
import { ImageWithFallback } from './ImageWithFallback';
import { useLanguage } from '@/context/LanguageContext';

interface HeroProps {
  onOpenDonateModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDonateModal }) => {
  const { lang } = useLanguage();

  return (
    <section
      id="home"
      className="relative min-h-[85vh] flex items-center justify-center bg-gradient-to-b from-ivory-50 via-amber-50/60 to-ivory-100 py-12 sm:py-16 lg:py-20 overflow-hidden"
    >
      {/* Sacred Indian Geometric Mandala Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035] bg-[radial-gradient(#c2410c_1.5px,transparent_1.5px)] [background-size:20px_20px]" />

      {/* Decorative Aura Blobs with Soft Animation */}
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-gradient-to-br from-amber-300/30 to-saffron-400/20 blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-gradient-to-tl from-saffron-400/25 to-amber-200/20 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* LEFT COLUMN: TITLE, BADGES & CONTENT (LEFT-ALIGNED) */}
          <div className="lg:col-span-7 text-left space-y-4 sm:space-y-5">
            {/* Registration Badge */}
            <div className="h-8 inline-flex items-center gap-1.5 px-3.5 rounded-full text-xs font-semibold bg-amber-100/90 text-saffron-900 border border-amber-300 shadow-2xs leading-none">
              <ShieldCheck className="w-3.5 h-3.5 text-saffron-700 shrink-0" />
              <span className="leading-none">
                {lang === 'hi' ? TRUST_DATA.registrationBadgeHindi : TRUST_DATA.registrationBadgeEnglish}
              </span>
              <span className="hidden sm:inline text-amber-500 leading-none">•</span>
              <span className="hidden sm:inline text-sacred-warmGray text-[11px] leading-none">
                {lang === 'hi' ? 'तहसील जानसठ, मुजफ्फरनगर' : 'Tehsil Jansath, Muzaffarnagar'}
              </span>
            </div>

            {/* Emblem with Trust Sub-title */}
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 rounded-full bg-white/95 shadow-xs border border-amber-300/80 shrink-0">
                <Emblem size={36} className="w-8 h-8 sm:w-9 sm:h-9" />
              </div>
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-saffron-800">
                {lang === 'hi'
                  ? 'पावन तपोभूमि शुक्रताल न्यास'
                  : 'Sacred Shukratal Pilgrimage Trust'}
              </span>
            </div>

            {/* Main Trust Heading (H1) - Left-aligned, Generous spacing, zero clipping */}
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-sacred-brown leading-[1.3] sm:leading-[1.35]">
              <span className="block pt-1 pb-0.5">
                {lang === 'hi' ? 'कमला देवी पब्लिक सेवा' : 'Kamla Devi Public Seva'}
              </span>
              <span className="block text-saffron-700 pt-1 pb-1">
                {lang === 'hi' ? 'मन्दिर ट्रस्ट' : 'Mandir Trust'}
              </span>
            </h1>

            {/* Heartfelt Mission Statement */}
            <p className="text-xs sm:text-sm md:text-base text-sacred-brown/85 font-normal leading-relaxed max-w-xl">
              {lang === 'hi'
                ? '«नर सेवा ही नारायण सेवा है» के पावन संकल्प के साथ गौ सेवा, निःशुल्क अन्नक्षेत्र, धर्म, शिक्षा, स्वास्थ्य एवं निराश्रित वृद्धजन कल्याण को समर्पित एक पंजीकृत धर्मार्थ ट्रस्ट।'
                : 'Guided by the sacred vow "Service to Humanity is Service to God", dedicated to cow protection, free food distribution, spiritual preservation, education, and elder welfare.'}
            </p>

            {/* 4 Service Chips */}
            <div className="flex flex-wrap gap-2 text-xs font-semibold text-sacred-brown pt-1">
              <span className="h-7 inline-flex items-center gap-1 px-3 bg-white/90 rounded-lg border border-amber-200 shadow-2xs leading-none">
                <span className="text-emerald-700">✓</span>
                <span>{lang === 'hi' ? 'गौ सेवा व गौशाला' : 'Cow Protection'}</span>
              </span>
              <span className="h-7 inline-flex items-center gap-1 px-3 bg-white/90 rounded-lg border border-amber-200 shadow-2xs leading-none">
                <span className="text-saffron-700">✓</span>
                <span>{lang === 'hi' ? 'प्रतिदिन अन्नदान लंगर' : 'Daily Free Food'}</span>
              </span>
              <span className="h-7 inline-flex items-center gap-1 px-3 bg-white/90 rounded-lg border border-amber-200 shadow-2xs leading-none">
                <span className="text-rose-700">✓</span>
                <span>{lang === 'hi' ? 'निःशुल्क चिकित्सा' : 'Free Healthcare'}</span>
              </span>
              <span className="h-7 inline-flex items-center gap-1 px-3 bg-white/90 rounded-lg border border-amber-200 shadow-2xs leading-none">
                <span className="text-amber-800">✓</span>
                <span>{lang === 'hi' ? 'शुक्रताल तीर्थ सेवा' : 'Pilgrimage Seva'}</span>
              </span>
            </div>

            {/* Action Buttons (CTAs) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                type="button"
                onClick={onOpenDonateModal}
                className="h-12 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-saffron-600 via-saffron-700 to-saffron-800 hover:from-saffron-700 hover:to-saffron-900 text-white font-bold text-sm sm:text-base px-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-saffron-500 text-center leading-none"
              >
                <Heart className="w-4 h-4 fill-white shrink-0" />
                <span className="leading-none">{lang === 'hi' ? 'पुण्य दान करें' : 'Donate Online'}</span>
              </button>

              <a
                href="#gallery"
                className="h-12 inline-flex items-center justify-center gap-2 bg-white hover:bg-amber-50/80 text-sacred-brown font-bold text-sm sm:text-base px-6 rounded-xl border border-amber-300 shadow-2xs hover:shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-saffron-500 text-center leading-none"
              >
                <Sparkles className="w-4 h-4 text-saffron-600 shrink-0" />
                <span className="leading-none">{lang === 'hi' ? 'सेवा दर्शन एवं चित्र' : 'Live Seva Gallery'}</span>
              </a>
            </div>

            {/* Trust Statutory Credibility Footnote */}
            <div className="pt-2 flex items-center gap-2 text-[11px] text-sacred-warmGray">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>
                {lang === 'hi'
                  ? '100% गैर-लाभकारी • पंजीकृत न्यास • आयकर अधिनियम 1961 के अधीन'
                  : '100% Non-Profit • Registered Trust • Under IT Act 1961'}
              </span>
            </div>
          </div>

          {/* RIGHT COLUMN: HERO IMAGE SHOWCASE */}
          <div className="lg:col-span-5">
            <div className="relative group">
              {/* Decorative Background Glow Behind Image */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-amber-400 via-saffron-500 to-amber-300 rounded-[28px] blur-md opacity-40 group-hover:opacity-70 transition duration-500" />

              {/* Main Image Frame */}
              <div className="relative rounded-3xl overflow-hidden bg-white shadow-xl border-2 border-amber-300/90 aspect-[4/3] sm:aspect-[16/12]">
                <ImageWithFallback
                  src="/images/hero/hero-trust.webp"
                  alt={lang === 'hi' ? 'कमला देवी ट्रस्ट - पावन गौशाला एवं तीर्थ दर्शन' : 'Kamla Devi Trust Hero'}
                  aspectRatio="aspect-[4/3] sm:aspect-[16/12]"
                  categoryTag={lang === 'hi' ? 'शुक्रताल पावन तीर्थ' : 'Shukratal Pilgrimage'}
                  title={lang === 'hi' ? 'कमला देवी पब्लिक सेवा मन्दिर ट्रस्ट' : 'Kamla Devi Public Seva Mandir Trust'}
                />

                {/* Top Badge Overlay */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="h-6.5 inline-flex items-center gap-1 px-3 rounded-full text-xs font-bold bg-white/95 text-saffron-900 shadow-xs backdrop-blur-xs leading-none border border-amber-200">
                    <MapPin className="w-3 h-3 text-saffron-600 shrink-0" />
                    <span>{lang === 'hi' ? 'ग्राम शुक्रताल, मुजफ्फरनगर' : 'Shukratal, UP'}</span>
                  </span>
                </div>

                {/* Bottom Frosted Glass Card Overlay */}
                <div className="absolute inset-x-3 bottom-3 z-10 p-3.5 sm:p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-amber-200/90 shadow-md flex items-center justify-between gap-3">
                  <div>
                    <div className="text-[10px] text-emerald-700 font-bold uppercase tracking-wider flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>{lang === 'hi' ? 'सत्यापित सेवा प्रकल्प' : 'Verified Seva'}</span>
                    </div>
                    <div className="font-heading text-xs sm:text-sm font-bold text-sacred-brown">
                      {lang === 'hi' ? 'गौ सेवा एवं अन्नक्षेत्र' : 'Cow Shelter & Food Drives'}
                    </div>
                    <div className="text-[10px] text-sacred-warmGray">
                      {lang === 'hi' ? 'तहसील जानसठ, जिला मुजफ्फरनगर' : 'Jansath, Muzaffarnagar'}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={onOpenDonateModal}
                    className="shrink-0 h-8 px-3.5 rounded-lg bg-saffron-600 hover:bg-saffron-700 text-white font-bold text-xs inline-flex items-center gap-1 shadow-xs transition-colors leading-none"
                  >
                    <span>{lang === 'hi' ? 'दान दें' : 'Donate'}</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Feature Pillars Row Beneath */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-12 sm:mt-14 text-left">
          <div className="bg-white/85 backdrop-blur-xs p-3.5 rounded-2xl border border-amber-200/90 shadow-2xs flex items-start gap-2.5 hover:shadow-xs transition-shadow">
            <div className="w-8 h-8 rounded-lg bg-saffron-100 text-saffron-700 flex items-center justify-center shrink-0 mt-0.5">
              <Building2 className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[10px] text-sacred-warmGray font-medium">
                {lang === 'hi' ? 'पवित्र तीर्थ स्थल' : 'Holy Pilgrimage'}
              </div>
              <div className="text-xs font-bold text-sacred-brown">
                {lang === 'hi' ? 'शुक्रताल, मुजफ्फरनगर' : 'Shukratal, UP'}
              </div>
            </div>
          </div>

          <div className="bg-white/85 backdrop-blur-xs p-3.5 rounded-2xl border border-amber-200/90 shadow-2xs flex items-start gap-2.5 hover:shadow-xs transition-shadow">
            <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 mt-0.5">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[10px] text-sacred-warmGray font-medium">
                {lang === 'hi' ? 'शिक्षा एवं शोध' : 'Education Aid'}
              </div>
              <div className="text-xs font-bold text-sacred-brown">
                {lang === 'hi' ? 'छात्रवृत्ति व स्कूल' : 'Scholarships & Schools'}
              </div>
            </div>
          </div>

          <div className="bg-white/85 backdrop-blur-xs p-3.5 rounded-2xl border border-amber-200/90 shadow-2xs flex items-start gap-2.5 hover:shadow-xs transition-shadow">
            <div className="w-8 h-8 rounded-lg bg-rose-100 text-rose-700 flex items-center justify-center shrink-0 mt-0.5">
              <HeartPulse className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[10px] text-sacred-warmGray font-medium">
                {lang === 'hi' ? 'निःशुल्क चिकित्सा' : 'Free Healthcare'}
              </div>
              <div className="text-xs font-bold text-sacred-brown">
                {lang === 'hi' ? 'स्वास्थ्य व नेचुरोपैथी' : 'Medical & Camps'}
              </div>
            </div>
          </div>

          <div className="bg-white/85 backdrop-blur-xs p-3.5 rounded-2xl border border-amber-200/90 shadow-2xs flex items-start gap-2.5 hover:shadow-xs transition-shadow">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[10px] text-sacred-warmGray font-medium">
                {lang === 'hi' ? 'अवैतनिक प्रबंधन' : 'Honorary Board'}
              </div>
              <div className="text-xs font-bold text-sacred-brown">
                {lang === 'hi' ? '100% निःस्वार्थ सेवा' : '100% Selfless Service'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
