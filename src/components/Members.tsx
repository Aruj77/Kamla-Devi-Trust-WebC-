'use client';

import React from 'react';
import { Users, Crown, Award, Shield, UserCheck } from 'lucide-react';
import { MEMBERS_DATA } from '@/data/members';
import { MemberAvatar } from './MemberAvatar';
import { useLanguage } from '@/context/LanguageContext';

export const Members: React.FC = () => {
  const { lang } = useLanguage();

  const president = MEMBERS_DATA.find((m) => m.category === 'president') || MEMBERS_DATA[0];
  const officeBearers = MEMBERS_DATA.filter((m) => m.category === 'office-bearer');
  const generalMembers = MEMBERS_DATA.filter((m) => m.category === 'member');

  return (
    <section id="members" className="py-16 sm:py-24 bg-ivory-100/70 relative overflow-hidden">
      {/* Decorative Aura Blobs */}
      <div className="absolute top-10 left-10 w-96 h-96 rounded-full bg-gradient-to-br from-amber-300/25 to-saffron-300/15 blur-3xl pointer-events-none animate-float-slow" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-gradient-to-tl from-saffron-300/20 to-amber-200/25 blur-3xl pointer-events-none animate-float-reverse" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-6xl">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16" data-reveal="fade-in">
          <div className="min-h-[36px] inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold glass-badge text-saffron-950 mb-3 shadow-xs leading-none">
            <Users className="w-4 h-4 text-saffron-700 shrink-0" />
            <span className="leading-none">
              {lang === 'hi' ? 'संचालक मंडल एवं ट्रस्टीगण' : 'Board of Trustees & Leadership'}
            </span>
          </div>

          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-bold text-sacred-brown leading-tight">
            {lang === 'hi' ? 'ट्रस्ट के पदाधिकारी एवं सदस्यगण' : 'Leadership & Executive Board'}
          </h2>

          <p className="mt-3 text-xs sm:text-sm md:text-base text-sacred-brown/85 max-w-xl mx-auto leading-relaxed">
            {lang === 'hi'
              ? 'संस्था के विधिक अधिदेश को धरातल पर साकार करने हेतु समर्पित, मानसेवी एवं 100% निस्वार्थ संचालक मंडल'
              : 'Honorary governing body dedicated to realizing the vision of universal welfare, healthcare, and education'}
          </p>
        </div>

        {/* 1. FEATURED LIFETIME PRESIDENT CARD IN FROSTED GOLDEN GLASS */}
        <div className="max-w-3xl mx-auto mb-14 sm:mb-16" data-reveal="zoom-in">
          <div className="relative glass-panel-warm rounded-3xl p-6 sm:p-9 border-2 border-amber-300 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden group">
            {/* Top Chief Trustee Badge */}
            <div className="absolute top-4 right-4 z-10">
              <span className="min-h-[32px] inline-flex items-center justify-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-saffron-600 text-white shadow-md leading-none">
                <Crown className="w-3.5 h-3.5 shrink-0" />
                <span className="leading-none">{lang === 'hi' ? 'मुख्य ट्रस्टी' : 'Chief Trustee'}</span>
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 text-center sm:text-left">
              {/* President Avatar */}
              <div className="shrink-0 transition-transform duration-500 group-hover:scale-105">
                <MemberAvatar
                  src={president.imagePath}
                  alt={lang === 'hi' ? president.nameHindi : president.nameEnglish}
                  initials={president.initials}
                  size="lg"
                  isPresident={true}
                />
              </div>

              {/* President Info */}
              <div className="space-y-2.5">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-saffron-700 uppercase tracking-wider leading-none">
                  <Award className="w-4 h-4 text-saffron-600 shrink-0" />
                  <span className="leading-none">{lang === 'hi' ? 'सर्वोच्च संस्थापक मार्गदर्शक' : 'Founder & Supreme Guide'}</span>
                </div>

                <h3 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-sacred-brown leading-snug">
                  {lang === 'hi' ? president.nameHindi : president.nameEnglish}
                </h3>

                <p className="text-sm sm:text-base font-bold text-saffron-800 leading-normal">
                  {lang === 'hi' ? president.roleHindi : president.roleEnglish}
                </p>

                <p className="text-sacred-brown/85 text-xs sm:text-sm leading-relaxed max-w-xl">
                  {lang === 'hi' ? president.descriptionHindi : president.descriptionEnglish}
                </p>

                {/* President Tags in Frosted Glass */}
                <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-2 text-xs font-medium text-sacred-warmGray">
                  <span className="min-h-[28px] inline-flex items-center justify-center px-3 glass-badge text-saffron-950 rounded-lg">
                    <span>{lang === 'hi' ? 'आजीवन सेवा संकल्प' : 'Lifetime Dedication'}</span>
                  </span>
                  <span className="min-h-[28px] inline-flex items-center justify-center px-3 glass-badge text-saffron-950 rounded-lg">
                    <span>{lang === 'hi' ? '100% मानसेवी' : '100% Honorary'}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. EXECUTIVE OFFICE BEARERS (उपाध्यक्ष, सचिव, कोषाध्यक्ष) */}
        <div className="max-w-5xl mx-auto mb-16" data-reveal="fade-in">
          <div className="text-center mb-8">
            <span className="min-h-[30px] inline-flex items-center px-4 py-1 text-xs font-bold uppercase tracking-wider text-saffron-800 glass-badge rounded-full border border-amber-300">
              {lang === 'hi' ? 'प्रमुख कार्यकारी पदाधिकारी' : 'Executive Office Bearers'}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {officeBearers.map((bearer) => (
              <div
                key={bearer.id}
                data-reveal="zoom-in"
                className="glass-panel rounded-3xl p-6 sm:p-7 border border-white/80 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col items-center text-center group relative overflow-hidden"
              >
                {/* Subtle top saffron bar */}
                <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-amber-400 via-saffron-500 to-amber-400" />

                <div className="mb-4 mt-2 transition-transform duration-500 group-hover:scale-105">
                  <MemberAvatar
                    src={bearer.imagePath}
                    alt={lang === 'hi' ? bearer.nameHindi : bearer.nameEnglish}
                    initials={bearer.initials}
                    size="md"
                    isPresident={false}
                  />
                </div>

                {/* Role Pill */}
                <div className="mb-2.5">
                  <span className="min-h-[30px] inline-flex items-center justify-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold glass-badge text-saffron-950 border border-amber-300 leading-none shadow-xs">
                    <Shield className="w-3.5 h-3.5 text-saffron-700 shrink-0" />
                    <span>{lang === 'hi' ? bearer.roleHindi : bearer.roleEnglish}</span>
                  </span>
                </div>

                <h3 className="font-heading text-lg font-bold text-sacred-brown group-hover:text-saffron-700 transition-colors mb-2 leading-snug">
                  {lang === 'hi' ? bearer.nameHindi : bearer.nameEnglish}
                </h3>

                <p className="text-xs text-sacred-brown/80 leading-relaxed line-clamp-3">
                  {lang === 'hi' ? bearer.descriptionHindi : bearer.descriptionEnglish}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 3. TRUSTEE BOARD MEMBERS */}
        <div className="max-w-6xl mx-auto" data-reveal="fade-in">
          <div className="text-center mb-8">
            <span className="min-h-[30px] inline-flex items-center px-4 py-1 text-xs font-bold uppercase tracking-wider text-sacred-warmGray glass-badge rounded-full border border-amber-200">
              {lang === 'hi' ? 'सम्मानित ट्रस्टी सदस्यगण' : 'Trustee Board Members'}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
            {generalMembers.map((member) => (
              <div
                key={member.id}
                data-reveal="zoom-in"
                className="glass-panel rounded-2xl p-4 sm:p-5 border border-white/80 shadow-2xs hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center group"
              >
                <div className="mb-3 transition-transform duration-500 group-hover:scale-105">
                  <MemberAvatar
                    src={member.imagePath}
                    alt={lang === 'hi' ? member.nameHindi : member.nameEnglish}
                    initials={member.initials}
                    size="md"
                    isPresident={false}
                  />
                </div>

                {/* Role */}
                <span className="min-h-[26px] inline-flex items-center justify-center gap-1 px-3 rounded-full text-[11px] font-semibold glass-badge text-saffron-950 mb-2 leading-none">
                  <UserCheck className="w-3 h-3 text-saffron-600" />
                  <span>{lang === 'hi' ? member.roleHindi : member.roleEnglish}</span>
                </span>

                <h4 className="font-heading text-base font-bold text-sacred-brown group-hover:text-saffron-700 transition-colors mb-1">
                  {lang === 'hi' ? member.nameHindi : member.nameEnglish}
                </h4>

                <p className="text-[11px] text-sacred-brown/75 leading-relaxed line-clamp-2">
                  {lang === 'hi' ? member.descriptionHindi : member.descriptionEnglish}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Members;
