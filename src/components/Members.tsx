'use client';

import React from 'react';
import { Users, Crown, Award, Shield } from 'lucide-react';
import { MEMBERS_DATA } from '@/data/members';
import { MemberAvatar } from './MemberAvatar';
import { useLanguage } from '@/context/LanguageContext';

export const Members: React.FC = () => {
  const { lang } = useLanguage();
  const president = MEMBERS_DATA.find((m) => m.isPresident) || MEMBERS_DATA[0];
  const generalMembers = MEMBERS_DATA.filter((m) => !m.isPresident);

  return (
    <section id="members" className="py-14 sm:py-16 bg-ivory-50 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          {/* Section Badge - Fixed Height & Centered */}
          <div className="h-8 inline-flex items-center justify-center gap-1.5 px-3.5 rounded-full text-xs font-semibold bg-amber-100 text-saffron-900 border border-amber-200 mb-3 shadow-2xs leading-none">
            <Users className="w-3.5 h-3.5 text-saffron-700 shrink-0" />
            <span className="leading-none">{lang === 'hi' ? 'संचालक मंडल एवं ट्रस्टीगण' : 'Board of Trustees'}</span>
          </div>

          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-sacred-brown">
            {lang === 'hi' ? 'ट्रस्ट के पदाधिकारी एवं सदस्यगण' : 'Leadership & Board Members'}
          </h2>

          <p className="mt-2 text-xs sm:text-sm text-sacred-brown/80">
            {lang === 'hi'
              ? 'संस्था के उद्देश्यों को धरातल पर साकार करने हेतु समर्पित एवं मानसेवी संचालक मंडल'
              : 'Dedicated honorary trustees committed to realizing the vision of universal welfare'}
          </p>
        </div>

        {/* Featured President Card */}
        <div className="max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="relative bg-gradient-to-br from-amber-50 via-white to-orange-50/60 rounded-2xl p-5 sm:p-7 border border-saffron-300 shadow-sm overflow-hidden group">
            {/* Top Badge - Fixed Height & Centered */}
            <div className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4">
              <span className="h-6.5 sm:h-7 inline-flex items-center justify-center gap-1 px-2.5 rounded-full text-[11px] font-bold bg-saffron-600 text-white shadow-2xs leading-none">
                <Crown className="w-3 h-3 shrink-0" />
                <span className="leading-none">{lang === 'hi' ? 'मुख्य ट्रस्टी' : 'Chief Trustee'}</span>
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-left">
              {/* President Avatar */}
              <div className="shrink-0">
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
                <div className="inline-flex items-center gap-1 text-[11px] font-bold text-saffron-700 uppercase tracking-wider leading-none">
                  <Award className="w-3.5 h-3.5 text-saffron-600 shrink-0" />
                  <span className="leading-none">{lang === 'hi' ? 'सर्वोच्च मार्गदर्शक' : 'Founder & Guide'}</span>
                </div>

                <h3 className="font-heading text-xl sm:text-2xl font-bold text-sacred-brown leading-snug">
                  {lang === 'hi' ? president.nameHindi : president.nameEnglish}
                </h3>

                <p className="text-xs sm:text-sm font-bold text-saffron-800 leading-normal">
                  {lang === 'hi' ? president.roleHindi : president.roleEnglish}
                </p>

                <p className="text-sacred-brown/85 text-xs sm:text-sm leading-relaxed max-w-lg">
                  {lang === 'hi' ? president.descriptionHindi : president.descriptionEnglish}
                </p>

                {/* President Tags - Exact Height & Centered */}
                <div className="pt-1 flex flex-wrap items-center justify-center sm:justify-start gap-1.5 text-[11px] font-medium text-sacred-warmGray">
                  <span className="h-6 inline-flex items-center justify-center px-2.5 bg-amber-100/80 rounded-md border border-amber-200 leading-none">
                    <span className="leading-none">{lang === 'hi' ? 'आजीवन सेवा संकल्प' : 'Lifetime Dedication'}</span>
                  </span>
                  <span className="h-6 inline-flex items-center justify-center px-2.5 bg-amber-100/80 rounded-md border border-amber-200 leading-none">
                    <span className="leading-none">{lang === 'hi' ? 'संस्थापक नेतृत्व' : 'Founding Leadership'}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Grid for Other 9 Members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 max-w-5xl mx-auto">
          {generalMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-xl p-4 sm:p-5 border border-amber-200/80 shadow-2xs hover:shadow-xs transition-all duration-200 flex flex-col items-center text-center group hover:-translate-y-0.5"
            >
              <div className="mb-3">
                <MemberAvatar
                  src={member.imagePath}
                  alt={lang === 'hi' ? member.nameHindi : member.nameEnglish}
                  initials={member.initials}
                  size="md"
                />
              </div>

              <h4 className="font-heading text-base sm:text-lg font-bold text-sacred-brown group-hover:text-saffron-700 transition-colors leading-normal">
                {lang === 'hi' ? member.nameHindi : member.nameEnglish}
              </h4>

              {/* Member Role Badge - Exact Height & Centered */}
              <div className="h-6 inline-flex items-center justify-center gap-1 my-1.5 px-2.5 rounded-full text-[11px] font-semibold bg-amber-50 text-saffron-800 border border-amber-200 leading-none">
                <Shield className="w-3 h-3 text-saffron-600 shrink-0" />
                <span className="leading-none">{lang === 'hi' ? member.roleHindi : member.roleEnglish}</span>
              </div>

              <p className="text-[11px] sm:text-xs text-sacred-brown/80 mt-1 leading-relaxed">
                {lang === 'hi' ? member.descriptionHindi : member.descriptionEnglish}
              </p>
            </div>
          ))}
        </div>

        {/* Member Note */}
        <div className="mt-8 text-center text-[11px] text-sacred-warmGray max-w-lg mx-auto bg-amber-50/60 p-2.5 rounded-xl border border-amber-200/60 leading-normal">
          {lang === 'hi'
            ? 'बोर्ड ऑफ ट्रस्टीज के समस्त सदस्य अवैतनिक एवं मानसेवी रूप से निष्काम भाव से समाज सेवा हेतु समर्पित हैं।'
            : 'All members of the Board of Trustees serve purely in an honorary capacity without remuneration.'}
        </div>
      </div>
    </section>
  );
};

export default Members;
