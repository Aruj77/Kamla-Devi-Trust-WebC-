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
    <section id="gallery" className="py-14 sm:py-20 bg-ivory-100/60 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[radial-gradient(#c2410c_1.5px,transparent_1.5px)] [background-size:24px_24px]" />
      <div className="absolute top-10 right-0 w-72 h-72 rounded-full bg-amber-200/20 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="h-8 inline-flex items-center justify-center gap-1.5 px-3.5 rounded-full text-xs font-semibold bg-amber-100 text-saffron-900 border border-amber-300 shadow-2xs mb-3 leading-none">
            <Camera className="w-3.5 h-3.5 text-saffron-700 shrink-0" />
            <span className="leading-none">
              {lang === 'hi' ? 'सेवा दर्शन एवं चित्र वीथिका' : 'Field Work & Photo Gallery'}
            </span>
          </div>

          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-sacred-brown">
            {lang === 'hi' ? 'ट्रस्ट के सेवा कार्य एवं गतिविधियां' : 'Activities & Live Seva Glimpses'}
          </h2>

          <p className="mt-2.5 text-xs sm:text-sm text-sacred-brown/80 max-w-xl mx-auto">
            {lang === 'hi'
              ? 'पावन शुक्रताल तीर्थ एवं मुजफ्फरनगर परिक्षेत्र में संचालित गौ सेवा, अन्नदान, स्वास्थ्य एवं सामाजिक सेवा प्रकल्प'
              : 'Glimpses of selfless cow protection, daily annakshetra, health checkups, and spiritual programs at Shukratal'}
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 max-w-4xl mx-auto">
          {filterTabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`h-9 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 inline-flex items-center justify-center leading-none ${
                  isActive
                    ? 'bg-gradient-to-r from-saffron-600 to-saffron-700 text-white shadow-xs scale-105'
                    : 'bg-white hover:bg-amber-50 text-sacred-brown/85 border border-amber-200 hover:border-amber-300 shadow-2xs'
                }`}
              >
                <span>{lang === 'hi' ? tab.labelHindi : tab.labelEnglish}</span>
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group cursor-pointer bg-white rounded-2xl border border-amber-200/90 shadow-2xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 overflow-hidden flex flex-col"
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

                {/* Real Photo Badge (if original photo uploaded) */}
                {item.isRealPhoto ? (
                  <div className="absolute top-3 right-3 z-10">
                    <span className="h-6 inline-flex items-center gap-1 px-2.5 rounded-full text-[10px] font-bold bg-emerald-600/95 text-white shadow-xs backdrop-blur-xs leading-none">
                      <CheckCircle2 className="w-3 h-3 shrink-0" />
                      <span>{lang === 'hi' ? 'वास्तविक छायाचित्र' : 'Original Photo'}</span>
                    </span>
                  </div>
                ) : (
                  <div className="absolute top-3 right-3 z-10">
                    <span className="h-6 inline-flex items-center gap-1 px-2.5 rounded-full text-[10px] font-bold bg-saffron-600/90 text-white shadow-xs backdrop-blur-xs leading-none">
                      <Sparkles className="w-2.5 h-2.5 shrink-0" />
                      <span>{lang === 'hi' ? item.categoryLabelHindi : item.categoryLabelEnglish}</span>
                    </span>
                  </div>
                )}

                {/* Hover Zoom Icon Pill */}
                <div className="absolute bottom-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <span className="h-7 w-7 rounded-full bg-white/95 text-saffron-700 flex items-center justify-center shadow-md">
                    <ZoomIn className="w-4 h-4" />
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                <div>
                  {/* Location badge */}
                  <div className="inline-flex items-center gap-1 text-[11px] text-sacred-warmGray font-medium mb-1.5">
                    <MapPin className="w-3 h-3 text-saffron-600 shrink-0" />
                    <span>{lang === 'hi' ? item.locationHindi : item.locationEnglish}</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-base sm:text-lg font-bold text-sacred-brown group-hover:text-saffron-700 transition-colors duration-200 line-clamp-1 mb-2">
                    {lang === 'hi' ? item.titleHindi : item.titleEnglish}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-sacred-brown/80 leading-relaxed line-clamp-2">
                    {lang === 'hi' ? item.descriptionHindi : item.descriptionEnglish}
                  </p>
                </div>

                {/* Read More Footer */}
                <div className="pt-3 mt-3 border-t border-amber-100 flex items-center justify-between text-xs font-semibold text-saffron-700">
                  <span>{lang === 'hi' ? 'विवरण एवं फोटो देखें →' : 'View Details & Zoom →'}</span>
                  <span className="text-[11px] text-sacred-warmGray font-normal">
                    {lang === 'hi' ? 'शुक्रताल न्यास' : 'Shukratal Trust'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative max-w-2xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl border border-amber-200 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedItem(null)}
              className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Modal Image */}
            <div className="relative aspect-[16/10] bg-sacred-brown">
              <ImageWithFallback
                src={selectedItem.imagePath}
                alt={lang === 'hi' ? selectedItem.titleHindi : selectedItem.titleEnglish}
                aspectRatio="aspect-[16/10]"
                categoryTag={
                  lang === 'hi' ? selectedItem.categoryLabelHindi : selectedItem.categoryLabelEnglish
                }
                title={lang === 'hi' ? selectedItem.titleHindi : selectedItem.titleEnglish}
              />
            </div>

            {/* Modal Details */}
            <div className="p-5 sm:p-6">
              <div className="flex items-center gap-2 text-xs text-saffron-700 font-bold mb-1">
                <MapPin className="w-3.5 h-3.5 shrink-0" />
                <span>
                  {lang === 'hi' ? selectedItem.locationHindi : selectedItem.locationEnglish}
                </span>
                <span>•</span>
                <span>
                  {lang === 'hi'
                    ? selectedItem.categoryLabelHindi
                    : selectedItem.categoryLabelEnglish}
                </span>
              </div>

              <h3 className="font-heading text-lg sm:text-xl font-bold text-sacred-brown mb-2.5">
                {lang === 'hi' ? selectedItem.titleHindi : selectedItem.titleEnglish}
              </h3>

              <p className="text-xs sm:text-sm text-sacred-brown/85 leading-relaxed mb-5">
                {lang === 'hi' ? selectedItem.descriptionHindi : selectedItem.descriptionEnglish}
              </p>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-amber-100 text-xs">
                <span className="text-sacred-warmGray">
                  {lang === 'hi'
                    ? 'स्थान: ग्राम शुक्रताल, जानसठ (मुजफ्फरनगर)'
                    : 'Location: Shukratal, Jansath, UP'}
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedItem(null)}
                  className="h-8 px-4 rounded-lg bg-saffron-600 hover:bg-saffron-700 text-white font-bold leading-none inline-flex items-center justify-center"
                >
                  {lang === 'hi' ? 'बंद करें' : 'Close'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
