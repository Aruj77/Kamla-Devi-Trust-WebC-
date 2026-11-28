'use client';

import React from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Compass,
  ExternalLink,
  Building2,
  Landmark,
  HeartHandshake,
} from 'lucide-react';
import { TRUST_DATA } from '@/data/trustData';
import { useLanguage } from '@/context/LanguageContext';

export const Contact: React.FC = () => {
  const { lang } = useLanguage();

  return (
    <section id="contact" className="py-16 sm:py-24 bg-ivory-100/70 relative overflow-hidden">
      {/* Decorative Aura Blobs */}
      <div className="absolute top-10 right-10 w-96 h-96 rounded-full bg-gradient-to-br from-amber-300/25 to-saffron-300/15 blur-3xl pointer-events-none animate-float-slow" />
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-gradient-to-tl from-saffron-300/20 to-amber-200/25 blur-3xl pointer-events-none animate-float-reverse" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-6xl">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14" data-reveal="fade-in">
          <div className="min-h-[36px] inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold glass-badge text-saffron-950 mb-3 shadow-xs leading-none">
            <Compass className="w-4 h-4 text-saffron-700 shrink-0" />
            <span className="leading-none">{lang === 'hi' ? 'कार्यालय एवं केंद्र' : 'Offices & Centers'}</span>
          </div>

          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-bold text-sacred-brown leading-tight">
            {lang === 'hi' ? 'संपर्क, कार्यालय एवं सेवा केंद्र' : 'Contact, Offices & Locations'}
          </h2>

          <p className="mt-3 text-xs sm:text-sm md:text-base text-sacred-brown/85 max-w-xl mx-auto leading-relaxed">
            {lang === 'hi'
              ? 'ट्रस्ट के प्रधान कार्यालय शुक्रताल, शाखा कार्यालय नूरपुर अथवा वृद्ध आश्रम दरबड़ा (चांदपुर) में आपका सदैव स्वागत है'
              : 'You are welcome to visit our Head Office at Shukratal, Branch Office at Noorpur, or Vriddh Ashram at Darbada (Chandpur)'}
          </p>
        </div>

        {/* 3 Centers Showcase Row with Glassmorphism */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-6xl mx-auto">
          {/* 1. Head Office */}
          <div
            data-reveal="zoom-in"
            className="glass-panel-warm p-6 rounded-3xl border-2 border-amber-300 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="w-11 h-11 rounded-2xl bg-gradient-to-br from-saffron-100 to-amber-100 text-saffron-700 flex items-center justify-center shrink-0 border border-amber-200 shadow-2xs">
                  <Landmark className="w-5 h-5" />
                </span>
                <span className="min-h-[26px] inline-flex items-center px-3 rounded-full text-[11px] font-bold uppercase tracking-wider text-saffron-900 bg-amber-100 border border-amber-300 leading-none">
                  {lang === 'hi' ? 'पंजीकृत प्रधान कार्यालय' : 'Head Office'}
                </span>
              </div>
              <h3 className="font-heading text-base sm:text-lg font-bold text-sacred-brown mb-2 leading-snug">
                {lang === 'hi' ? 'शुक्रताल प्रधान कार्यालय (वृद्ध आश्रम)' : 'Shukratal Head Office (Vridh Ashram)'}
              </h3>
              <p className="text-xs sm:text-sm text-sacred-brown/85 leading-relaxed">
                {lang === 'hi' ? TRUST_DATA.address.fullHindi : TRUST_DATA.address.fullEnglish}
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-amber-200/80 text-xs text-saffron-700 font-semibold flex items-center gap-1.5">
              <MapPin className="w-4 h-4 shrink-0 text-saffron-600" />
              <span>{lang === 'hi' ? 'पवित्र तीर्थ नगरी शुक्रताल' : 'Holy Pilgrimage Shukratal'}</span>
            </div>
          </div>

          {/* 2. Branch Office Noorpur */}
          <div
            data-reveal="zoom-in"
            className="glass-panel p-6 rounded-3xl border border-white/85 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="w-11 h-11 rounded-2xl bg-gradient-to-br from-amber-100 to-orange-100 text-amber-800 flex items-center justify-center shrink-0 border border-amber-200 shadow-2xs">
                  <Building2 className="w-5 h-5" />
                </span>
                <span className="min-h-[26px] inline-flex items-center px-3 rounded-full text-[11px] font-bold uppercase tracking-wider text-amber-900 bg-amber-50 border border-amber-200 leading-none">
                  {lang === 'hi' ? 'शाखा कार्यालय' : 'Branch Office'}
                </span>
              </div>
              <h3 className="font-heading text-base sm:text-lg font-bold text-sacred-brown mb-2 leading-snug">
                {lang === 'hi' ? 'नूरपुर शाखा कार्यालय' : 'Noorpur Branch Office'}
              </h3>
              <p className="text-xs sm:text-sm text-sacred-brown/85 leading-relaxed">
                {lang === 'hi'
                  ? TRUST_DATA.address.branchOfficeHindi
                  : TRUST_DATA.address.branchOfficeEnglish}
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-amber-100 text-xs text-amber-900 font-semibold flex items-center gap-1.5">
              <MapPin className="w-4 h-4 shrink-0 text-amber-700" />
              <span>{lang === 'hi' ? 'केनरा बैंक के सामने, स्योहारा रोड' : 'Opposite Canara Bank'}</span>
            </div>
          </div>

          {/* 3. Vriddh Ashram Darbada (Chandpur) */}
          <div
            data-reveal="zoom-in"
            className="glass-panel p-6 rounded-3xl border border-white/85 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="w-11 h-11 rounded-2xl bg-gradient-to-br from-orange-100 to-amber-100 text-orange-800 flex items-center justify-center shrink-0 border border-orange-200 shadow-2xs">
                  <HeartHandshake className="w-5 h-5" />
                </span>
                <span className="min-h-[26px] inline-flex items-center px-3 rounded-full text-[11px] font-bold uppercase tracking-wider text-orange-900 bg-orange-50 border border-orange-200 leading-none">
                  {lang === 'hi' ? 'आश्रय एवं सेवा केंद्र' : 'Old Age Home'}
                </span>
              </div>
              <h3 className="font-heading text-base sm:text-lg font-bold text-sacred-brown mb-2 leading-snug">
                {lang === 'hi' ? 'कमला देवी वृद्ध आश्रम' : 'Kamla Devi Vriddh Ashram'}
              </h3>
              <p className="text-xs sm:text-sm text-sacred-brown/85 leading-relaxed">
                {lang === 'hi'
                  ? TRUST_DATA.address.ashramHindi
                  : TRUST_DATA.address.ashramEnglish}
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-amber-100 text-xs text-orange-900 font-semibold flex items-center gap-1.5">
              <MapPin className="w-4 h-4 shrink-0 text-orange-700" />
              <span>{lang === 'hi' ? 'ग्राम दरबड़ा, तहसील चांदपुर' : 'Village Darbada, Chandpur'}</span>
            </div>
          </div>
        </div>

        {/* Content Layout: Helplines & Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch max-w-6xl mx-auto">
          {/* Left Column: Helpline, Email & Visiting Info */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4" data-reveal="fade-in">
            {/* Helpline Card */}
            <div className="glass-panel p-5 rounded-2xl border border-white/80 shadow-2xs hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 mt-0.5 border border-amber-200">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-heading text-sm sm:text-base font-bold text-sacred-brown mb-0.5 leading-normal">
                    {lang === 'hi' ? 'दूरभाष / हेल्पलाइन' : 'Helpline & Telephone'}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-sacred-brown leading-normal">
                    {lang === 'hi' ? TRUST_DATA.contact.displayPhoneHindi : TRUST_DATA.contact.displayPhoneEnglish}
                  </p>
                  <p className="text-[11px] text-sacred-warmGray mt-0.5 leading-normal">
                    {lang === 'hi' ? 'सेवा प्रकल्पों, गौशाला एवं दान संबंधित जानकारी हेतु' : 'For donations, seva projects, and visits'}
                  </p>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="glass-panel p-5 rounded-2xl border border-white/80 shadow-2xs hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-800 flex items-center justify-center shrink-0 mt-0.5 border border-orange-200">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-heading text-sm sm:text-base font-bold text-sacred-brown mb-0.5 leading-normal">
                    {lang === 'hi' ? 'आधिकारिक ईमेल' : 'Official Email'}
                  </h3>
                  <p className="text-xs sm:text-sm font-mono font-semibold text-sacred-brown leading-normal">
                    {TRUST_DATA.contact.email}
                  </p>
                  <p className="text-[11px] text-sacred-warmGray mt-0.5 leading-normal">
                    {lang === 'hi' ? 'लिखित पत्राचार एवं सहयोग प्रस्ताव हेतु' : 'For formal correspondence and proposals'}
                  </p>
                </div>
              </div>
            </div>

            {/* Timings Card */}
            <div className="glass-panel p-5 rounded-2xl border border-white/80 shadow-2xs hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-200">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-heading text-sm sm:text-base font-bold text-sacred-brown mb-0.5 leading-normal">
                    {lang === 'hi' ? 'कार्यालय समय एवं दर्शन' : 'Office Visiting Hours'}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-sacred-brown leading-normal">
                    {lang === 'hi' ? TRUST_DATA.contact.officeHoursHindi : TRUST_DATA.contact.officeHoursEnglish}
                  </p>
                  <p className="text-[11px] text-sacred-warmGray mt-0.5 leading-normal">
                    {lang === 'hi' ? TRUST_DATA.contact.visitingDaysHindi : TRUST_DATA.contact.visitingDaysEnglish}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps Location Frame in Frosted Glass */}
          <div className="lg:col-span-7 flex flex-col" data-reveal="fade-in">
            <div className="h-full min-h-[360px] glass-panel rounded-3xl border border-amber-300 shadow-md overflow-hidden flex flex-col">
              <div className="p-4 bg-gradient-to-r from-amber-50 to-orange-50 border-b border-amber-200 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-saffron-700 shrink-0" />
                  <span className="font-heading text-xs sm:text-sm font-bold text-sacred-brown">
                    {lang === 'hi'
                      ? 'गूगल मानचित्र (Google Map) — तीर्थ नगरी शुक्रताल'
                      : 'Google Maps — Shukratal Pilgrimage'}
                  </span>
                </div>
                <a
                  href={TRUST_DATA.address.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-saffron-700 hover:text-saffron-800"
                >
                  <span>{lang === 'hi' ? 'दिशा-निर्देश प्राप्त करें' : 'Get Directions'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Responsive Iframe Container */}
              <div className="relative flex-1 w-full min-h-[290px]">
                <iframe
                  src={TRUST_DATA.address.mapEmbedUrl}
                  title={lang === 'hi' ? 'कमला देवी ट्रस्ट का स्थान' : 'Kamla Devi Trust Location Map'}
                  className="absolute inset-0 w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>

              {/* Map Footer Note */}
              <div className="p-3.5 bg-white/90 border-t border-amber-100 flex items-center justify-between text-xs text-sacred-warmGray">
                <span>
                  {lang === 'hi' ? 'पिनकोड: 251316 (उत्तर प्रदेश)' : 'Pincode: 251316 (Uttar Pradesh)'}
                </span>
                <span className="text-saffron-700 font-semibold">
                  {lang === 'hi' ? 'शुकदेव आश्रम के निकट' : 'Near Shukdev Ashram'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
