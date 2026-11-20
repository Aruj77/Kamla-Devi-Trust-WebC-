'use client';

import React from 'react';
import { MapPin, Phone, Mail, Clock, Compass, ExternalLink } from 'lucide-react';
import { TRUST_DATA } from '@/data/trustData';
import { useLanguage } from '@/context/LanguageContext';

export const Contact: React.FC = () => {
  const { lang } = useLanguage();

  return (
    <section id="contact" className="py-14 sm:py-16 bg-ivory-50 relative">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          {/* Section Badge - Fixed Height & Centered */}
          <div className="h-8 inline-flex items-center justify-center gap-1.5 px-3.5 rounded-full text-xs font-semibold bg-amber-100 text-saffron-900 border border-amber-200 mb-3 shadow-2xs leading-none">
            <Compass className="w-3.5 h-3.5 text-saffron-700 shrink-0" />
            <span className="leading-none">{lang === 'hi' ? 'मुख्यालय एवं संपर्क' : 'Headquarters & Reach'}</span>
          </div>

          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-sacred-brown">
            {lang === 'hi' ? 'संपर्क एवं स्थान' : 'Contact & Location'}
          </h2>

          <p className="mt-2 text-xs sm:text-sm text-sacred-brown/80">
            {lang === 'hi'
              ? 'पावन तीर्थ नगरी शुक्रताल में स्थित ट्रस्ट कार्यालय में आपका सदैव हार्दिक स्वागत है'
              : 'You are cordially welcome to visit our trust office in sacred Shukratal'}
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-3">
            {/* Address Card */}
            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-amber-200/90 shadow-2xs">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-saffron-100 text-saffron-700 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-heading text-sm sm:text-base font-bold text-sacred-brown mb-0.5 leading-normal">
                    {lang === 'hi' ? 'ट्रस्ट का अधिकृत पता' : 'Registered Office Address'}
                  </h3>
                  <p className="text-xs sm:text-[13px] font-medium text-sacred-brown/90 leading-relaxed">
                    {lang === 'hi' ? TRUST_DATA.address.fullHindi : TRUST_DATA.address.fullEnglish}
                  </p>
                  <p className="text-[11px] text-sacred-warmGray mt-1 font-semibold leading-normal">
                    {lang === 'hi' ? '(पवित्र तीर्थ स्थल शुक्रताल, तहसील जानसठ)' : '(Holy Pilgrimage Town Shukratal, Tehsil Jansath)'}
                  </p>
                </div>
              </div>
            </div>

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
                    {lang === 'hi' ? 'सेवा प्रकल्पों एवं दान संबंधित जानकारी हेतु' : 'For donations, seva projects, and visits'}
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
                    {lang === 'hi' ? 'कार्यालय समय' : 'Office Visiting Hours'}
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
              {/* Map Title Bar */}
              <div className="bg-gradient-to-r from-amber-100/80 to-orange-100/80 px-4 py-2.5 border-b border-amber-200 flex items-center justify-between">
                <div className="flex items-center gap-1.5 leading-none">
                  <MapPin className="w-3.5 h-3.5 text-saffron-700 shrink-0" />
                  <span className="font-bold text-xs text-sacred-brown leading-none">
                    {lang === 'hi' ? 'गूगल मानचित्र: शुक्रताल, मुजफ्फरनगर (उ.प्र.)' : 'Google Map: Shukratal, Muzaffarnagar (UP)'}
                  </span>
                </div>
                <a
                  href={TRUST_DATA.address.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-6.5 inline-flex items-center justify-center gap-1 px-2.5 rounded-md text-[11px] font-bold text-saffron-700 hover:text-saffron-900 transition-colors leading-none"
                >
                  <span className="leading-none">{lang === 'hi' ? 'दिशा-निर्देश' : 'Get Directions'}</span>
                  <ExternalLink className="w-3 h-3 shrink-0" />
                </a>
              </div>

              {/* Iframe */}
              <div className="relative flex-1 w-full min-h-[270px]">
                <iframe
                  title="शुक्रताल स्थित कमला देवी पब्लिक सेवा मन्दिर ट्रस्ट का मानचित्र"
                  src={TRUST_DATA.address.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>

              {/* Map Caption Footer */}
              <div className="p-2.5 bg-ivory-50 border-t border-amber-200 text-[11px] text-sacred-brown/80 text-center leading-normal">
                {lang === 'hi'
                  ? 'पवित्र भागवत भूमि शुक्रताल (मोरना-भोकरहेड़ी मार्ग, तहसील जानसठ, मुजफ्फरनगर)'
                  : 'Sacred Sukadeva Pilgrimage, Shukratal (Jansath Tehsil, Muzaffarnagar, UP)'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
