'use client';

import React, { useState } from 'react';
import { Camera, MapPin, Sparkles, X, ZoomIn, CheckCircle2 } from 'lucide-react';
import { ACTIVITIES_DATA, ActivityItem } from '@/data/activities';
import { ImageWithFallback } from './ImageWithFallback';
import { useLanguage } from '@/context/LanguageContext';

export const Gallery: React.FC = () => {
  const { lang } = useLanguage();
  const [activeTab, setActiveTab] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<ActivityItem | null>(null);

  const filterTabs = [
    { id: 'all', labelHindi: 'सभी सेवा कार्य', labelEnglish: 'All Activities' },
    { id: 'gaushala', labelHindi: 'गौ सेवा (गौशाला)', labelEnglish: 'Gau Seva' },
    { id: 'annakshetra', labelHindi: 'अन्नदान व लंगर', labelEnglish: 'Annakshetra' },
    { id: 'shukratal', labelHindi: 'शुक्रताल तीर्थ दर्शन', labelEnglish: 'Shukratal' },
    { id: 'medical', labelHindi: 'चिकित्सा शिविर', labelEnglish: 'Health Camps' },
    { id: 'education', labelHindi: 'संस्कार व शिक्षा', labelEnglish: 'Education' },
    { id: 'eldercare', labelHindi: 'वृद्धजन सेवा', labelEnglish: 'Elder Care' },
    { id: 'swavlamban', labelHindi: 'स्वावलंबन व कृषि', labelEnglish: 'Self-Reliance' },
  ];

  const filteredItems =
    activeTab === 'all'
      ? ACTIVITIES_DATA
      : ACTIVITIES_DATA.filter((item) => item.category === activeTab);

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-ivory-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[radial-gradient(#c2410c_1.5px,transparent_1.5px)] [background-size:24px_24px]" />
      <div className="absolute top-1/4 -right-20 w-80 h-80 rounded-full bg-gradient-to-br from-amber-300/25 to-saffron-300/15 blur-3xl pointer-events-none animate-float-slow" />
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-amber-400/15 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-6xl">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14" data-reveal="fade-in">
          <div className="min-h-[36px] inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold glass-badge text-saffron-950 mb-3 shadow-xs leading-none">
            <Camera className="w-4 h-4 text-saffron-700 shrink-0" />
            <span className="leading-none">
              {lang === 'hi' ? 'सेवा दर्शन एवं चित्र वीथिका' : 'Field Work & Photo Gallery'}
            </span>
          </div>

          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-bold text-sacred-brown leading-tight">
            {lang === 'hi' ? 'ट्रस्ट के सेवा कार्य एवं गतिविधियां' : 'Activities & Live Seva Glimpses'}
          </h2>

          <p className="mt-3 text-xs sm:text-sm md:text-base text-sacred-brown/85 max-w-xl mx-auto leading-relaxed">
            {lang === 'hi'
              ? 'पावन शुक्रताल तीर्थ एवं मुजफ्फरनगर परिक्षेत्र में संचालित गौ सेवा, अन्नदान, स्वास्थ्य एवं सामाजिक सेवा प्रकल्प'
              : 'Glimpses of selfless cow protection, daily annakshetra, health checkups, and spiritual programs at Shukratal'}
          </p>
        </div>

        {/* Filter Tabs in Frosted Glass */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-12 max-w-4xl mx-auto" data-reveal="fade-in">
          {filterTabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`min-h-[38px] px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 inline-flex items-center justify-center leading-none ${
                  isActive
                    ? 'bg-gradient-to-r from-saffron-600 to-saffron-700 text-white shadow-md scale-105'
                    : 'glass-badge hover:bg-white text-sacred-brown hover:text-saffron-800 shadow-2xs hover:shadow-xs'
                }`}
              >
                <span>{lang === 'hi' ? tab.labelHindi : tab.labelEnglish}</span>
              </button>
            );
          })}
        </div>

        {/* Gallery Grid with Glassmorphic Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 max-w-6xl mx-auto">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              data-reveal="zoom-in"
              onClick={() => setSelectedItem(item)}
              className="group cursor-pointer glass-panel rounded-3xl border border-white/85 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden flex flex-col justify-between"
            >
              {/* Image Frame */}
              <div className="relative overflow-hidden aspect-[16/11]">
                <ImageWithFallback
                  src={item.imagePath}
                  alt={lang === 'hi' ? item.titleHindi : item.titleEnglish}
                  aspectRatio="aspect-[16/11]"
                  categoryTag={lang === 'hi' ? item.categoryLabelHindi : item.categoryLabelEnglish}
                  title={lang === 'hi' ? item.titleHindi : item.titleEnglish}
                />

                {/* Subtle Gradient Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-sacred-brown/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Top Badge */}
                {item.isRealPhoto ? (
                  <div className="absolute top-3 right-3 z-10">
                    <span className="min-h-[28px] inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-emerald-600 text-white shadow-md leading-none">
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                      <span>{lang === 'hi' ? 'वास्तविक छायाचित्र' : 'Original Photo'}</span>
                    </span>
                  </div>
                ) : (
                  <div className="absolute top-3 right-3 z-10">
                    <span className="min-h-[28px] inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold glass-badge text-saffron-900 border border-amber-300 shadow-sm leading-none">
                      <Sparkles className="w-3 h-3 text-saffron-600 shrink-0" />
                      <span>{lang === 'hi' ? item.categoryLabelHindi : item.categoryLabelEnglish}</span>
                    </span>
                  </div>
                )}

                {/* Hover Zoom Icon Pill */}
                <div className="absolute bottom-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <span className="h-8 w-8 rounded-full glass-panel text-saffron-700 flex items-center justify-center shadow-md">
                    <ZoomIn className="w-4 h-4" />
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Location badge */}
                  <div className="inline-flex items-center gap-1.5 text-xs text-sacred-warmGray font-medium mb-2">
                    <MapPin className="w-3.5 h-3.5 text-saffron-600 shrink-0" />
                    <span>{lang === 'hi' ? item.locationHindi : item.locationEnglish}</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-base sm:text-lg font-bold text-sacred-brown group-hover:text-saffron-700 transition-colors duration-200 line-clamp-1 mb-2 leading-snug">
                    {lang === 'hi' ? item.titleHindi : item.titleEnglish}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-sacred-brown/80 leading-relaxed line-clamp-2">
                    {lang === 'hi' ? item.descriptionHindi : item.descriptionEnglish}
                  </p>
                </div>

                {/* Read More Footer */}
                <div className="pt-3.5 mt-4 border-t border-amber-100 flex items-center justify-between text-xs font-semibold text-saffron-700">
                  <span className="group-hover:translate-x-1 transition-transform">
                    {lang === 'hi' ? 'विवरण एवं फोटो देखें →' : 'View Details & Zoom →'}
                  </span>
                  <span className="text-[11px] text-sacred-warmGray font-medium">
                    {lang === 'hi' ? 'शुक्रताल न्यास' : 'Shukratal Trust'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal with Frosted Glass Backdrop */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedItem(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative glass-panel rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-white/30"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full glass-panel text-sacred-brown hover:text-saffron-700 flex items-center justify-center shadow-md transition-colors"
              aria-label="बंद करें"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="relative aspect-[16/10] bg-black">
              <ImageWithFallback
                src={selectedItem.imagePath}
                alt={lang === 'hi' ? selectedItem.titleHindi : selectedItem.titleEnglish}
                aspectRatio="aspect-[16/10]"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Modal Info */}
            <div className="p-5 sm:p-6 bg-white/95">
              <div className="flex items-center gap-2 mb-2">
                <span className="min-h-[26px] px-3 inline-flex items-center rounded-full text-xs font-bold bg-amber-100 text-saffron-900 border border-amber-300">
                  {lang === 'hi' ? selectedItem.categoryLabelHindi : selectedItem.categoryLabelEnglish}
                </span>
                <span className="inline-flex items-center gap-1 text-xs text-sacred-warmGray">
                  <MapPin className="w-3.5 h-3.5 text-saffron-600" />
                  <span>{lang === 'hi' ? selectedItem.locationHindi : selectedItem.locationEnglish}</span>
                </span>
              </div>

              <h3 className="font-heading text-lg sm:text-xl font-bold text-sacred-brown mb-2">
                {lang === 'hi' ? selectedItem.titleHindi : selectedItem.titleEnglish}
              </h3>

              <p className="text-xs sm:text-sm text-sacred-brown/85 leading-relaxed">
                {lang === 'hi' ? selectedItem.descriptionHindi : selectedItem.descriptionEnglish}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
