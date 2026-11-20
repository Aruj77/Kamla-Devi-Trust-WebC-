'use client';

import React from 'react';
import {
  Flame,
  GraduationCap,
  HeartPulse,
  HeartHandshake,
  Users,
  Trophy,
  Sprout,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { TRUST_DATA, ObjectiveItem } from '@/data/trustData';
import { useLanguage } from '@/context/LanguageContext';

export const Objectives: React.FC = () => {
  const { lang } = useLanguage();

  const getObjectiveIcon = (iconName: ObjectiveItem['iconName']) => {
    switch (iconName) {
      case 'temple':
        return <Flame className="w-5 h-5 text-saffron-600" />;
      case 'bookOpen':
        return <GraduationCap className="w-5 h-5 text-amber-600" />;
      case 'heartPulse':
        return <HeartPulse className="w-5 h-5 text-rose-600" />;
      case 'shieldCheck':
        return <HeartHandshake className="w-5 h-5 text-orange-600" />;
      case 'users':
        return <Users className="w-5 h-5 text-amber-700" />;
      case 'trophy':
        return <Trophy className="w-5 h-5 text-yellow-600" />;
      case 'sprout':
        return <Sprout className="w-5 h-5 text-emerald-600" />;
      default:
        return <Sparkles className="w-5 h-5 text-saffron-600" />;
    }
  };

  return (
    <section id="objectives" className="py-14 sm:py-16 bg-ivory-100 relative">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          {/* Section Badge - Fixed Height & Perfectly Centered */}
          <div className="h-8 inline-flex items-center justify-center gap-1.5 px-3.5 rounded-full text-xs font-semibold bg-saffron-100 text-saffron-800 border border-saffron-200 mb-3 shadow-2xs leading-none">
            <Sparkles className="w-3.5 h-3.5 text-saffron-600 shrink-0" />
            <span className="leading-none">{lang === 'hi' ? 'ट्रस्ट विलेख (Trust Deed) के अनुसार' : 'Mandated by Trust Deed'}</span>
          </div>

          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-sacred-brown">
            {lang === 'hi' ? 'हमारे प्रमुख उद्देश्य एवं सेवा कार्य' : 'Core Objectives & Services'}
          </h2>

          <p className="mt-2 text-xs sm:text-sm text-sacred-brown/80">
            {lang === 'hi'
              ? 'संस्था के अधिकृत संविधान व ट्रस्ट विलेख में उल्लिखित 7 प्रमुख जनकल्याणकारी स्तंभ'
              : '7 foundational pillars of public welfare and religious service'}
          </p>
        </div>

        {/* 7 Structured Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {TRUST_DATA.objectives.map((obj, index) => {
            const isSeventh = index === 6;

            return (
              <div
                key={obj.id}
                className={`bg-white rounded-2xl p-5 sm:p-6 border border-amber-200/90 shadow-2xs hover:shadow-xs transition-all duration-200 flex flex-col justify-between group hover:-translate-y-0.5 ${
                  isSeventh ? 'md:col-span-2 lg:col-span-3 lg:max-w-2xl lg:mx-auto w-full' : ''
                }`}
              >
                <div>
                  {/* Card Header & Icon */}
                  <div className="flex items-center justify-between gap-3 mb-3.5">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-50 to-orange-100 border border-amber-200 flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                      {getObjectiveIcon(obj.iconName)}
                    </div>
                    {/* Pillar Badge - Exact Height & Centered */}
                    <span className="h-6 inline-flex items-center justify-center px-2.5 rounded-full font-heading text-[11px] font-bold bg-ivory-100 text-saffron-800 border border-amber-200 leading-none">
                      <span className="leading-none">{lang === 'hi' ? `स्तंभ ०${obj.id}` : `Pillar 0${obj.id}`}</span>
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-base sm:text-lg font-bold text-sacred-brown mb-2 group-hover:text-saffron-700 transition-colors">
                    {lang === 'hi' ? obj.titleHindi : obj.titleEnglish}
                  </h3>

                  <p className="text-sacred-brown/85 text-xs sm:text-sm leading-relaxed mb-4">
                    {lang === 'hi' ? obj.fullDescHindi : obj.fullDescEnglish}
                  </p>

                  {/* Bullet Highlights */}
                  <div className="pt-3 border-t border-amber-100 space-y-2">
                    {(lang === 'hi' ? obj.pointsHindi : obj.pointsEnglish).map((pt, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-sacred-brown/90 leading-snug">
                        <CheckCircle2 className="w-3.5 h-3.5 text-saffron-600 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Subtext Footer */}
                <div className="mt-4 pt-2.5 text-[10px] sm:text-[11px] font-semibold text-sacred-warmGray/80 flex items-center gap-1.5 border-t border-amber-50">
                  <span className="w-1.5 h-1.5 rounded-full bg-saffron-500 shrink-0" />
                  <span className="leading-none">{lang === 'hi' ? 'निःशुल्क एवं परोपकारी सेवा प्रकल्प' : 'Free Humanitarian Service'}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Objectives;
