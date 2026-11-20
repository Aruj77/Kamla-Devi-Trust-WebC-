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
  ShieldCheck,
  Heart,
  ArrowRight,
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
    <section id="objectives" className="py-14 sm:py-20 bg-ivory-100 relative">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="h-8 inline-flex items-center justify-center gap-1.5 px-3.5 rounded-full text-xs font-semibold bg-saffron-100 text-saffron-800 border border-saffron-200 mb-3 shadow-2xs leading-none">
            <Sparkles className="w-3.5 h-3.5 text-saffron-600 shrink-0" />
            <span className="leading-none">{lang === 'hi' ? 'ट्रस्ट विलेख (Trust Deed) के अनुसार' : 'Mandated by Trust Deed'}</span>
          </div>

          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-sacred-brown">
            {lang === 'hi' ? 'हमारे प्रमुख उद्देश्य एवं सेवा कार्य' : 'Core Objectives & Pillars of Service'}
          </h2>

          <p className="mt-2 text-xs sm:text-sm text-sacred-brown/80 max-w-xl mx-auto">
            {lang === 'hi'
              ? 'संस्था के अधिकृत संविधान व ट्रस्ट विलेख में उल्लिखित 7 प्रमुख जनकल्याणकारी स्तंभ'
              : 'The 7 statutory foundational pillars of humanitarian, medical, and spiritual welfare'}
          </p>
        </div>

        {/* SPECIAL FEATURED GAUSHALA BANNER (REAL USER PHOTO) */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="bg-gradient-to-r from-amber-500 via-saffron-600 to-amber-600 rounded-3xl p-1 shadow-lg overflow-hidden">
            <div className="bg-white rounded-[22px] p-5 sm:p-7 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              {/* Left Real Image */}
              <div className="lg:col-span-5 rounded-2xl overflow-hidden shadow-md border border-amber-200 relative group aspect-[4/3] sm:aspect-[16/10]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/activities/gaushala.webp"
                  alt={lang === 'hi' ? 'पावन गौशाला - शुक्रताल' : 'Shukratal Gaushala'}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3">
                  <span className="h-6 inline-flex items-center gap-1 px-2.5 rounded-full text-[11px] font-bold bg-emerald-600 text-white shadow-xs leading-none">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>{lang === 'hi' ? 'वास्तविक गौशाला दृश्य' : 'Live Gaushala Photo'}</span>
                  </span>
                </div>
              </div>

              {/* Right Content */}
              <div className="lg:col-span-7 space-y-3">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-saffron-900 border border-amber-300">
                  <Heart className="w-3.5 h-3.5 text-saffron-600 fill-saffron-600" />
                  <span>{lang === 'hi' ? 'विशेष पावन प्रकल्प • गौ माता सेवा' : 'Special Initiative • Sacred Cow Care'}</span>
                </div>

                <h3 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-sacred-brown">
                  {lang === 'hi' ? 'निराश्रित गोवंश एवं गौशाला संरक्षण प्रकल्प' : 'Shelter & Lifelong Protection for Cows'}
                </h3>

                <p className="text-xs sm:text-sm text-sacred-brown/85 leading-relaxed">
                  {lang === 'hi'
                    ? 'ट्रस्ट द्वारा पावन शुक्रताल धाम में निराश्रित गायों एवं बछड़ों के लिए सुव्यवस्थित गौशाला का संचालन किया जा रहा है। यहाँ प्रतिदिन ताजा हरा चारा, स्वच्छ पेय जल, पोषण तथा अनुभवी पशु चिकित्सकों द्वारा स्वास्थ्य परीक्षण सुनिश्चित किया जाता है।'
                    : 'The trust maintains a dedicated cow shelter (Gaushala) in sacred Shukratal, providing nutritious green fodder, fresh water, hygienic shelter, and routine veterinary medical care.'}
                </p>

                <div className="pt-2 flex flex-wrap gap-2 text-xs font-semibold text-sacred-brown">
                  <span className="px-3 py-1 bg-amber-50 rounded-lg border border-amber-200">
                    {lang === 'hi' ? '✓ प्रतिदिन हरा चारा व पोषण' : '✓ Daily Green Fodder'}
                  </span>
                  <span className="px-3 py-1 bg-amber-50 rounded-lg border border-amber-200">
                    {lang === 'hi' ? '✓ नियमित पशु चिकित्सा शिविर' : '✓ Veterinary Healthcare'}
                  </span>
                  <span className="px-3 py-1 bg-amber-50 rounded-lg border border-amber-200">
                    {lang === 'hi' ? '✓ 100% दान का प्रत्यक्ष सदुपयोग' : '✓ 100% Direct Utility'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 7 Structured Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {TRUST_DATA.objectives.map((obj, index) => {
            const isSeventh = index === 6;

            return (
              <div
                key={obj.id}
                className={`bg-white rounded-2xl border border-amber-200/90 shadow-2xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5 overflow-hidden ${isSeventh ? 'md:col-span-2 lg:col-span-3 lg:max-w-2xl lg:mx-auto w-full' : ''
                  }`}
              >
                {/* Visual Header Image */}
                <div className="relative aspect-[16/9] overflow-hidden border-b border-amber-100">
                  <ImageWithFallback
                    src={getObjectiveImage(obj.id)}
                    alt={lang === 'hi' ? obj.titleHindi : obj.titleEnglish}
                    aspectRatio="aspect-[16/9]"
                    categoryTag={lang === 'hi' ? `स्तंभ ०${obj.id}` : `Pillar 0${obj.id}`}
                    title={lang === 'hi' ? obj.titleHindi : obj.titleEnglish}
                    icon={getObjectiveIcon(obj.iconName)}
                  />
                  <div className="absolute top-3 left-3 z-10">
                    <span className="h-6.5 inline-flex items-center justify-center gap-1 px-2.5 rounded-full text-xs font-bold bg-white/95 text-saffron-800 border border-amber-200 shadow-2xs leading-none backdrop-blur-xs">
                      {getObjectiveIcon(obj.iconName)}
                      <span className="leading-none">{lang === 'hi' ? `स्तंभ ०${obj.id}` : `Pillar 0${obj.id}`}</span>
                    </span>
                  </div>
                </div>

                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Title */}
                    <h3 className="font-heading text-lg sm:text-xl font-bold text-sacred-brown mb-2 group-hover:text-saffron-700 transition-colors">
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

                  {/* Mandate Footer */}
                  <div className="mt-5 pt-3 border-t border-amber-50 flex items-center justify-between text-[11px] text-sacred-warmGray">
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
