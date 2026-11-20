'use client';

import React from 'react';
import { Heart, BookOpen, ShieldCheck, Sparkles, HeartPulse, Building2 } from 'lucide-react';
import { TRUST_DATA } from '@/data/trustData';
import { Emblem } from './Emblem';
import { useLanguage } from '@/context/LanguageContext';

interface HeroProps {
  onOpenDonateModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDonateModal }) => {
  const { lang } = useLanguage();

  return (
    <section
      id="home"
      className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-ivory-50 via-amber-50/50 to-ivory-100 py-12 sm:py-16 overflow-hidden"
    >
      {/* Sacred Indian Geometric Mandala Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035] bg-[radial-gradient(#c2410c_1.5px,transparent_1.5px)] [background-size:20px_20px]" />

      {/* Decorative Aura Blobs */}
      <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-gradient-to-br from-amber-300/25 to-saffron-400/15 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-gradient-to-tl from-saffron-400/25 to-amber-200/15 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center max-w-4xl">
        {/* Registration Badge - Fixed Height, Perfect Vertical Centering */}
        <div className="h-8 inline-flex items-center justify-center gap-1.5 px-3.5 rounded-full text-xs font-semibold bg-amber-100/90 text-saffron-900 border border-amber-300/80 shadow-2xs mb-5 animate-in fade-in zoom-in-95 duration-300 leading-none">
          <ShieldCheck className="w-3.5 h-3.5 text-saffron-700 shrink-0" />
          <span className="leading-none">{lang === 'hi' ? TRUST_DATA.registrationBadgeHindi : TRUST_DATA.registrationBadgeEnglish}</span>
          <span className="hidden sm:inline text-amber-500 leading-none">•</span>
          <span className="hidden sm:inline text-sacred-warmGray text-[11px] leading-none">
            {lang === 'hi' ? 'तहसील जानसठ, मुजफ्फरनगर' : 'Tehsil Jansath, Muzaffarnagar'}
          </span>
        </div>

        {/* Central Traditional Emblem with Radiance */}
        <div className="flex justify-center mb-5">
          <div className="relative p-1.5 rounded-full bg-white/90 shadow-xs border border-amber-200/90 backdrop-blur-xs">
            <Emblem size={64} className="w-14 h-14 sm:w-16 sm:h-16" />
          </div>
        </div>

        {/* Main Trust Heading (H1) - Generous vertical space, zero clipping, dignified space between lines */}
        <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] font-bold text-sacred-brown leading-normal mb-6">
          <span className="inline-block pt-1 pb-0.5">
            {lang === 'hi' ? 'कमला देवी पब्लिक सेवा' : 'Kamla Devi Public Seva'}
          </span>
          <span className="block mt-2 sm:mt-3 text-saffron-700 pt-1 pb-1">
            {lang === 'hi' ? 'मन्दिर ट्रस्ट' : 'Mandir Trust'}
          </span>
        </h1>

        {/* Heartfelt Mission Statement */}
        <p className="max-w-2xl mx-auto text-xs sm:text-sm md:text-base text-sacred-brown/85 font-normal leading-relaxed mb-8">
          {lang === 'hi'
            ? '«नर सेवा ही नारायण सेवा है» के पावन संकल्प के साथ धर्म, शिक्षा, स्वास्थ्य, निराश्रित वृद्धजन सेवा एवं समाज के सर्वांगीण उत्थान को समर्पित एक पंजीकृत धर्मार्थ ट्रस्ट।'
            : 'Guided by the sacred vow "Service to Humanity is Service to God", dedicated to spiritual preservation, free education, healthcare, elder support, and social welfare.'}
        </p>

        {/* Action Buttons (CTAs) - 100% Symmetrical, Vertically & Horizontally Centered */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-11">
          <button
            type="button"
            onClick={onOpenDonateModal}
            className="w-full sm:w-auto min-w-[190px] sm:min-w-[210px] h-12 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-saffron-600 to-saffron-700 hover:from-saffron-700 hover:to-saffron-800 text-white font-bold text-sm sm:text-base px-6 rounded-xl shadow-xs hover:shadow-sm transition-all transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-saffron-500 text-center leading-none"
          >
            <Heart className="w-4 h-4 fill-white shrink-0" />
            <span className="leading-none">{lang === 'hi' ? 'पुण्य दान करें' : 'Donate Online'}</span>
          </button>

          <a
            href="#objectives"
            className="w-full sm:w-auto min-w-[190px] sm:min-w-[210px] h-12 inline-flex items-center justify-center gap-2 bg-white hover:bg-amber-50/60 text-sacred-brown font-bold text-sm sm:text-base px-6 rounded-xl border border-amber-300 shadow-2xs hover:shadow-xs transition-all focus:outline-none focus:ring-2 focus:ring-saffron-500 text-center leading-none"
          >
            <BookOpen className="w-4 h-4 text-saffron-600 shrink-0" />
            <span className="leading-none">{lang === 'hi' ? 'हमारे कार्य जानें' : 'Our Objectives'}</span>
          </a>
        </div>

        {/* 4 Feature Pillars - Compact, elegant proportions */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3.5 max-w-3xl mx-auto text-left">
          <div className="bg-white/80 backdrop-blur-xs p-3 rounded-xl border border-amber-200/80 shadow-2xs flex items-start gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-saffron-100 text-saffron-700 flex items-center justify-center shrink-0 mt-0.5">
              <Building2 className="w-3.5 h-3.5" />
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

          <div className="bg-white/80 backdrop-blur-xs p-3 rounded-xl border border-amber-200/80 shadow-2xs flex items-start gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 mt-0.5">
              <BookOpen className="w-3.5 h-3.5" />
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

          <div className="bg-white/80 backdrop-blur-xs p-3 rounded-xl border border-amber-200/80 shadow-2xs flex items-start gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-rose-100 text-rose-700 flex items-center justify-center shrink-0 mt-0.5">
              <HeartPulse className="w-3.5 h-3.5" />
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

          <div className="bg-white/80 backdrop-blur-xs p-3 rounded-xl border border-amber-200/80 shadow-2xs flex items-start gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
              <Sparkles className="w-3.5 h-3.5" />
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
