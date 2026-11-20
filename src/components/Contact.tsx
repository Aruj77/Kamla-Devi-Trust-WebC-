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
    <section id="contact" className="py-14 sm:py-20 bg-ivory-50 relative">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="h-8 inline-flex items-center justify-center gap-1.5 px-3.5 rounded-full text-xs font-semibold bg-amber-100 text-saffron-900 border border-amber-300 mb-3 shadow-2xs leading-none">
            <Compass className="w-3.5 h-3.5 text-saffron-700 shrink-0" />
            <span className="leading-none">{lang === 'hi' ? 'कार्यालय एवं केंद्र' : 'Offices & Centers'}</span>
          </div>

          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-sacred-brown">
            {lang === 'hi' ? 'संपर्क, कार्यालय एवं सेवा केंद्र' : 'Contact, Offices & Locations'}
          </h2>

          <p className="mt-2 text-xs sm:text-sm text-sacred-brown/80 max-w-xl mx-auto">
            {lang === 'hi'
              ? 'ट्रस्ट के प्रधान कार्यालय शुक्रताल, शाखा कार्यालय नूरपुर अथवा वृद्ध आश्रम दरबड़ा (चांदपुर) में आपका सदैव स्वागत है'
              : 'You are welcome to visit our Head Office at Shukratal, Branch Office at Noorpur, or Vriddh Ashram at Darbada (Chandpur)'}
          </p>
        </div>

        {/* 3 Centers Showcase Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 mb-8 max-w-6xl mx-auto">
          {/* 1. Head Office */}
          <div className="bg-white p-5 rounded-2xl border-2 border-saffron-300 shadow-2xs hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="w-9 h-9 rounded-xl bg-saffron-100 text-saffron-700 flex items-center justify-center shrink-0">
                  <Landmark className="w-5 h-5" />
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-saffron-800 bg-amber-100 px-2.5 py-0.5 rounded-full">
                  {lang === 'hi' ? 'पंजीकृत प्रधान कार्यालय' : 'Head Office'}
                </span>
              </div>
              <h3 className="font-heading text-base font-bold text-sacred-brown mb-1.5">
                {lang === 'hi' ? 'शुक्रताल प्रधान कार्यालय' : 'Shukratal Head Office'}
              </h3>
              <p className="text-xs text-sacred-brown/85 leading-relaxed">
                {lang === 'hi' ? TRUST_DATA.address.fullHindi : TRUST_DATA.address.fullEnglish}
              </p>
            </div>
            <div className="pt-3 mt-3 border-t border-amber-100 text-[11px] text-saffron-700 font-semibold flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 shrink-0" />
              <span>{lang === 'hi' ? 'पवित्र तीर्थ नगरी शुक्रताल' : 'Holy Pilgrimage Shukratal'}</span>
            </div>
          </div>

          {/* 2. Branch Office Noorpur */}
          <div className="bg-white p-5 rounded-2xl border-2 border-amber-300 shadow-2xs hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="w-9 h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                  <Building2 className="w-5 h-5" />
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
                  {lang === 'hi' ? 'शाखा कार्यालय' : 'Branch Office'}
                </span>
              </div>
              <h3 className="font-heading text-base font-bold text-sacred-brown mb-1.5">
                {lang === 'hi' ? 'नूरपुर शाखा कार्यालय' : 'Noorpur Branch Office'}
              </h3>
              <p className="text-xs text-sacred-brown/85 leading-relaxed">
                {lang === 'hi'
                  ? TRUST_DATA.address.branchOfficeHindi
                  : TRUST_DATA.address.branchOfficeEnglish}
              </p>
            </div>
            <div className="pt-3 mt-3 border-t border-amber-100 text-[11px] text-amber-800 font-semibold flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 shrink-0" />
              <span>{lang === 'hi' ? 'केनरा बैंक के सामने, स्योहारा रोड' : 'Opposite Canara Bank'}</span>
            </div>
          </div>

          {/* 3. Vriddh Ashram Darbada (Chandpur) */}
          <div className="bg-white p-5 rounded-2xl border-2 border-amber-300 shadow-2xs hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="w-9 h-9 rounded-xl bg-orange-100 text-orange-800 flex items-center justify-center shrink-0">
                  <HeartHandshake className="w-5 h-5" />
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-orange-800 bg-orange-50 px-2.5 py-0.5 rounded-full border border-orange-200">
                  {lang === 'hi' ? 'आश्रय एवं सेवा केंद्र' : 'Old Age Home'}
                </span>
              </div>
              <h3 className="font-heading text-base font-bold text-sacred-brown mb-1.5">
                {lang === 'hi' ? 'कमला देवी वृद्ध आश्रम' : 'Kamla Devi Vriddh Ashram'}
              </h3>
              <p className="text-xs text-sacred-brown/85 leading-relaxed">
                {lang === 'hi'
                  ? TRUST_DATA.address.ashramHindi
                  : TRUST_DATA.address.ashramEnglish}
              </p>
            </div>
            <div className="pt-3 mt-3 border-t border-amber-100 text-[11px] text-orange-800 font-semibold flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 shrink-0" />
              <span>{lang === 'hi' ? 'ग्राम दरबड़ा, तहसील चांदपुर' : 'Village Darbada, Chandpur'}</span>
            </div>
          </div>
        </div>

        {/* Content Layout: Helplines & Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch max-w-6xl mx-auto">
          {/* Left Column: Helpline, Email & Visiting Info */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-3.5">
            {/* Helpline Card */}
            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-amber-200/90 shadow-2xs">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 mt-0.5">
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
            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-amber-200/90 shadow-2xs">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-orange-100 text-orange-800 flex items-center justify-center shrink-0 mt-0.5">
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
            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-amber-200/90 shadow-2xs">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
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

          {/* Right Column: Google Maps Location Frame */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="h-full min-h-[340px] bg-white rounded-2xl border border-amber-300 shadow-xs overflow-hidden flex flex-col">
              <div className="p-3.5 bg-gradient-to-r from-amber-50 to-orange-50 border-b border-amber-200 flex items-center justify-between gap-2">
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
                  className="inline-flex items-center gap-1 text-[11px] font-bold text-saffron-700 hover:text-saffron-800"
                >
                  <span>{lang === 'hi' ? 'दिशा-निर्देश प्राप्त करें' : 'Get Directions'}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Responsive Iframe Container */}
              <div className="relative flex-1 w-full min-h-[280px]">
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
              <div className="p-3 bg-white border-t border-amber-100 flex items-center justify-between text-[11px] text-sacred-warmGray">
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
