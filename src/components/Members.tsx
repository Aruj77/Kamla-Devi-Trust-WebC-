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
    <section id="members" className="py-14 sm:py-20 bg-ivory-50 relative overflow-hidden">
      {/* Sacred Subtle Mandala Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[radial-gradient(#c2410c_1.5px,transparent_1.5px)] [background-size:20px_20px]" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="h-8 inline-flex items-center justify-center gap-1.5 px-3.5 rounded-full text-xs font-semibold bg-amber-100 text-saffron-900 border border-amber-300 mb-3 shadow-2xs leading-none">
            <Users className="w-3.5 h-3.5 text-saffron-700 shrink-0" />
            <span className="leading-none">
              {lang === 'hi' ? 'संचालक मंडल एवं ट्रस्टीगण' : 'Board of Trustees & Leadership'}
            </span>
          </div>

          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-sacred-brown">
            {lang === 'hi' ? 'ट्रस्ट के पदाधिकारी एवं सदस्यगण' : 'Leadership & Executive Board'}
          </h2>

          <p className="mt-2 text-xs sm:text-sm text-sacred-brown/80 max-w-xl mx-auto">
            {lang === 'hi'
              ? 'संस्था के विधिक अधिदेश को धरातल पर साकार करने हेतु समर्पित, मानसेवी एवं 100% निस्वार्थ संचालक मंडल'
              : 'Honorary governing body dedicated to realizing the vision of universal welfare, healthcare, and education'}
          </p>
        </div>

        {/* 1. FEATURED LIFETIME PRESIDENT CARD */}
        <div className="max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="relative bg-gradient-to-br from-amber-50 via-white to-orange-50/70 rounded-3xl p-6 sm:p-8 border-2 border-saffron-400 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden group">
            {/* Top Badge */}
            <div className="absolute top-4 right-4">
              <span className="h-7 inline-flex items-center justify-center gap-1.5 px-3 rounded-full text-xs font-bold bg-saffron-600 text-white shadow-xs leading-none">
                <Crown className="w-3.5 h-3.5 shrink-0" />
                <span className="leading-none">{lang === 'hi' ? 'मुख्य ट्रस्टी' : 'Chief Trustee'}</span>
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-7 text-center sm:text-left">
              {/* President Avatar */}
              <div className="shrink-0 transition-transform duration-300 group-hover:scale-105">
                <MemberAvatar
                  src={president.imagePath}
                  alt={lang === 'hi' ? president.nameHindi : president.nameEnglish}
                  initials={president.initials}
                  size="lg"
                  isPresident={true}
                />
              </div>

              {/* President Info */}
              <div className="space-y-2">
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

                {/* President Tags */}
                <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-2 text-xs font-medium text-sacred-warmGray">
                  <span className="h-6.5 inline-flex items-center justify-center px-3 bg-amber-100/90 text-saffron-900 rounded-md border border-amber-300 leading-none">
                    <span className="leading-none">{lang === 'hi' ? 'आजीवन सेवा संकल्प' : 'Lifetime Dedication'}</span>
                  </span>
                  <span className="h-6.5 inline-flex items-center justify-center px-3 bg-amber-100/90 text-saffron-900 rounded-md border border-amber-300 leading-none">
                    <span className="leading-none">{lang === 'hi' ? '100% मानसेवी' : '100% Honorary'}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. EXECUTIVE OFFICE BEARERS (उपाध्यक्ष, सचिव, कोषाध्यक्ष) */}
        <div className="max-w-5xl mx-auto mb-14">
          <div className="text-center mb-6">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-saffron-700 bg-amber-100/80 px-3 py-1 rounded-full border border-amber-200">
              {lang === 'hi' ? 'प्रमुख कार्यकारी पदाधिकारी' : 'Executive Office Bearers'}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {officeBearers.map((bearer) => (
              <div
                key={bearer.id}
                className="bg-white rounded-2xl p-5 border border-amber-300 shadow-2xs hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center group relative overflow-hidden"
              >
                {/* Subtle top saffron bar */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-amber-400 via-saffron-500 to-amber-400" />

                <div className="mb-3.5 mt-2 transition-transform duration-300 group-hover:scale-105">
                  <MemberAvatar
                    src={bearer.imagePath}
                    alt={lang === 'hi' ? bearer.nameHindi : bearer.nameEnglish}
                    initials={bearer.initials}
                    size="md"
                    isPresident={false}
                  />
                </div>

                {/* Role Pill */}
                <div className="mb-2">
                  <span className="h-6 inline-flex items-center justify-center gap-1 px-3 rounded-full text-xs font-bold bg-amber-100 text-saffron-900 border border-amber-300 leading-none shadow-2xs">
                    <Shield className="w-3 h-3 text-saffron-700 shrink-0" />
                    <span>{lang === 'hi' ? bearer.roleHindi : bearer.roleEnglish}</span>
                  </span>
                </div>

                <h3 className="font-heading text-lg font-bold text-sacred-brown group-hover:text-saffron-700 transition-colors mb-1.5">
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
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-sacred-warmGray bg-ivory-100 px-3 py-1 rounded-full border border-amber-200">
              {lang === 'hi' ? 'सम्मानित ट्रस्टी सदस्यगण' : 'Trustee Board Members'}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
            {generalMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-xl p-4 sm:p-5 border border-amber-200/90 shadow-2xs hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center group"
              >
                <div className="mb-3 transition-transform duration-300 group-hover:scale-105">
                  <MemberAvatar
                    src={member.imagePath}
                    alt={lang === 'hi' ? member.nameHindi : member.nameEnglish}
                    initials={member.initials}
                    size="md"
                    isPresident={false}
                  />
                </div>

                {/* Role */}
                <span className="h-5.5 inline-flex items-center justify-center gap-1 px-2.5 rounded-full text-[11px] font-semibold bg-amber-50 text-saffron-900 border border-amber-200/80 mb-1.5 leading-none">
                  <UserCheck className="w-2.5 h-2.5 text-saffron-600" />
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
