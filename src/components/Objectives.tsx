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
  Heart,
} from 'lucide-react';
import { TRUST_DATA, ObjectiveItem } from '@/data/trustData';
import { ImageWithFallback } from './ImageWithFallback';
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

  const getObjectiveImage = (id: number) => {
    switch (id) {
      case 1:
        return '/images/activities/shukratal-vatvriksh.webp';
      case 2:
        return '/images/activities/vidyalaya-education.webp';
      case 3:
        return '/images/activities/medical-camp.webp';
      case 4:
        return '/images/activities/vriddh-ashram.webp';
      case 5:
        return '/images/activities/women-empowerment.webp';
      case 6:
        return '/images/activities/youth-sports.webp';
      case 7:
        return '/images/activities/krishi-swavlamban.webp';
      default:
        return '/images/activities/shukratal-vatvriksh.webp';
    }
  };

  return (
    <section id="objectives" className="py-16 sm:py-24 bg-ivory-100/70 relative overflow-hidden">
      {/* Decorative Radiant Blobs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-gradient-to-br from-amber-300/20 to-saffron-300/15 blur-3xl pointer-events-none animate-float-slow" />
      <div className="absolute bottom-10 right-0 w-80 h-80 rounded-full bg-amber-400/20 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-6xl">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16" data-reveal="fade-in">
          <div className="min-h-[36px] inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold glass-badge text-saffron-950 mb-3 shadow-xs leading-none">
            <Sparkles className="w-4 h-4 text-saffron-600 shrink-0" />
            <span className="leading-none">{lang === 'hi' ? 'ट्रस्ट विलेख (Trust Deed) के अनुसार' : 'Mandated by Trust Deed'}</span>
          </div>

          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-bold text-sacred-brown leading-tight">
            {lang === 'hi' ? 'हमारे प्रमुख उद्देश्य एवं सेवा कार्य' : 'Core Objectives & Pillars of Service'}
          </h2>

          <p className="mt-3 text-xs sm:text-sm md:text-base text-sacred-brown/85 max-w-xl mx-auto leading-relaxed">
            {lang === 'hi'
              ? 'संस्था के अधिकृत संविधान व ट्रस्ट विलेख में उल्लिखित 7 प्रमुख जनकल्याणकारी स्तंभ'
              : 'The 7 statutory foundational pillars of humanitarian, medical, and spiritual welfare'}
          </p>
        </div>

        {/* SPECIAL FEATURED GAUSHALA BANNER (REAL USER PHOTO WITH GLASSMORHPISM) */}
        <div className="max-w-6xl mx-auto mb-14" data-reveal="fade-in">
          <div className="relative rounded-3xl p-1.5 sm:p-2 bg-gradient-to-r from-amber-400 via-saffron-500 to-amber-500 shadow-xl">
            <div className="glass-panel rounded-[22px] p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center border border-white/90">
              {/* Left Real Image */}
              <div className="lg:col-span-5 rounded-2xl overflow-hidden shadow-lg border border-amber-200/80 relative group aspect-[4/3] sm:aspect-[16/11]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/activities/gaushala.webp"
                  alt={lang === 'hi' ? 'पावन गौशाला - शुक्रताल' : 'Shukratal Gaushala'}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute top-3.5 left-3.5">
                  <span className="min-h-[32px] inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-600 text-white shadow-md leading-none">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{lang === 'hi' ? 'वास्तविक गौशाला दृश्य' : 'Live Gaushala Photo'}</span>
                  </span>
                </div>
              </div>

              {/* Right Content */}
              <div className="lg:col-span-7 space-y-3.5">
                <div className="min-h-[32px] inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold glass-badge text-saffron-900 border border-amber-300">
                  <Heart className="w-3.5 h-3.5 text-saffron-600 fill-saffron-600" />
                  <span>{lang === 'hi' ? 'विशेष पावन प्रकल्प • गौ माता सेवा' : 'Special Initiative • Sacred Cow Care'}</span>
                </div>

                <h3 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-sacred-brown leading-snug">
                  {lang === 'hi' ? 'निराश्रित गोवंश एवं गौशाला संरक्षण प्रकल्प' : 'Shelter & Lifelong Protection for Cows'}
                </h3>

                <p className="text-xs sm:text-sm text-sacred-brown/90 leading-relaxed">
                  {lang === 'hi'
                    ? 'ट्रस्ट द्वारा पावन शुक्रताल धाम में निराश्रित गायों एवं बछड़ों के लिए सुव्यवस्थित गौशाला का संचालन किया जा रहा है। यहाँ प्रतिदिन ताजा हरा चारा, स्वच्छ पेय जल, पोषण तथा अनुभवी पशु चिकित्सकों द्वारा स्वास्थ्य परीक्षण सुनिश्चित किया जाता है।'
                    : 'The trust maintains a dedicated cow shelter (Gaushala) in sacred Shukratal, providing nutritious green fodder, fresh water, hygienic shelter, and routine veterinary medical care.'}
                </p>

                <div className="pt-2 flex flex-wrap gap-2 text-xs font-semibold text-sacred-brown">
                  <span className="min-h-[30px] inline-flex items-center px-3.5 py-1 glass-badge rounded-lg">
                    {lang === 'hi' ? '✓ प्रतिदिन हरा चारा व पोषण' : '✓ Daily Green Fodder'}
                  </span>
                  <span className="min-h-[30px] inline-flex items-center px-3.5 py-1 glass-badge rounded-lg">
                    {lang === 'hi' ? '✓ नियमित पशु चिकित्सा शिविर' : '✓ Veterinary Healthcare'}
                  </span>
                  <span className="min-h-[30px] inline-flex items-center px-3.5 py-1 glass-badge rounded-lg">
                    {lang === 'hi' ? '✓ 100% दान का प्रत्यक्ष सदुपयोग' : '✓ 100% Direct Utility'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 7 Structured Cards Grid with Glassmorphism */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 max-w-6xl mx-auto">
          {TRUST_DATA.objectives.map((obj, index) => {
            const isSeventh = index === 6;

            return (
              <div
                key={obj.id}
                data-reveal="zoom-in"
                className={`glass-panel rounded-3xl border border-white/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-2 overflow-hidden ${
                  isSeventh ? 'md:col-span-2 lg:col-span-3 lg:max-w-2xl lg:mx-auto w-full' : ''
                }`}
              >
                {/* Visual Header Image */}
                <div className="relative aspect-[16/9] overflow-hidden border-b border-amber-100/70">
                  <ImageWithFallback
                    src={getObjectiveImage(obj.id)}
                    alt={lang === 'hi' ? obj.titleHindi : obj.titleEnglish}
                    aspectRatio="aspect-[16/9]"
                    categoryTag={lang === 'hi' ? `स्तंभ ०${obj.id}` : `Pillar 0${obj.id}`}
                    title={lang === 'hi' ? obj.titleHindi : obj.titleEnglish}
                    icon={getObjectiveIcon(obj.iconName)}
                  />
                  <div className="absolute top-3.5 left-3.5 z-10">
                    <span className="min-h-[34px] px-3 inline-flex items-center justify-center gap-1.5 rounded-full text-xs font-bold glass-badge text-saffron-950 border border-amber-300 shadow-md leading-none">
                      {getObjectiveIcon(obj.iconName)}
                      <span className="leading-none">{lang === 'hi' ? `स्तंभ ०${obj.id}` : `Pillar 0${obj.id}`}</span>
                    </span>
                  </div>
                </div>

                <div className="p-5 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Title */}
                    <h3 className="font-heading text-lg sm:text-xl font-bold text-sacred-brown mb-2.5 group-hover:text-saffron-700 transition-colors leading-snug">
                      {lang === 'hi' ? obj.titleHindi : obj.titleEnglish}
                    </h3>

                    <p className="text-sacred-brown/85 text-xs sm:text-sm leading-relaxed mb-4">
                      {lang === 'hi' ? obj.fullDescHindi : obj.fullDescEnglish}
                    </p>

                    {/* Bullet Highlights */}
                    <div className="pt-3 border-t border-amber-100/80 space-y-2">
                      {(lang === 'hi' ? obj.pointsHindi : obj.pointsEnglish).map((pt, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-sacred-brown/90 leading-snug">
                          <CheckCircle2 className="w-4 h-4 text-saffron-600 shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Mandate Footer */}
                  <div className="mt-5 pt-3.5 border-t border-amber-100/80 flex items-center justify-between text-[11px] text-sacred-warmGray font-medium">
                    <span>{lang === 'hi' ? 'भारतीय ट्रस्ट अधिनियम 1882' : 'Indian Trusts Act, 1882'}</span>
                    <span className="text-saffron-700 font-semibold">{lang === 'hi' ? 'सत्यापित उद्देश्य ✓' : 'Statutory Goal ✓'}</span>
                  </div>
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
