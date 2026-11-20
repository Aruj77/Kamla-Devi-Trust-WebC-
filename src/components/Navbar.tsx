'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Heart } from 'lucide-react';
import { TRUST_DATA } from '@/data/trustData';
import { Emblem } from './Emblem';
import { useLanguage } from '@/context/LanguageContext';

interface NavbarProps {
  onOpenDonateModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDonateModal }) => {
  const { lang, setLang } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = lang === 'hi'
    ? [
        { name: 'मुख्य पृष्ठ', href: '#home' },
        { name: 'हमारे बारे में', href: '#about' },
        { name: 'उद्देश्य एवं सेवाएं', href: '#objectives' },
        { name: 'चित्र वीथिका', href: '#gallery' },
        { name: 'सदस्यगण', href: '#members' },
        { name: 'पारदर्शिता', href: '#transparency' },
        { name: 'संपर्क', href: '#contact' },
      ]
    : [
        { name: 'Home', href: '#home' },
        { name: 'About Us', href: '#about' },
        { name: 'Objectives', href: '#objectives' },
        { name: 'Gallery', href: '#gallery' },
        { name: 'Trustees', href: '#members' },
        { name: 'Transparency', href: '#transparency' },
        { name: 'Contact', href: '#contact' },
      ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/85 backdrop-blur-xl shadow-md border-b border-amber-200/70 py-2'
          : 'bg-white/75 backdrop-blur-lg border-b border-amber-200/40 py-2.5 sm:py-3'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between gap-3">
          {/* Logo & Trust Brand */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-saffron-500 rounded-xl p-0.5"
            aria-label={lang === 'hi' ? 'कमला देवी पब्लिक सेवा मन्दिर ट्रस्ट मुख्य पृष्ठ' : 'Kamla Devi Trust Home'}
          >
            <div className="shrink-0 transition-transform duration-200 group-hover:scale-105">
              <Emblem size={38} className="w-8 h-8 sm:w-10 sm:h-10 drop-shadow-xs" />
            </div>
            <div className="flex flex-col py-0.5">
              <span className="font-heading font-bold text-sm sm:text-base md:text-lg text-sacred-brown group-hover:text-saffron-700 transition-colors leading-normal">
                {lang === 'hi' ? TRUST_DATA.nameHindi : TRUST_DATA.nameEnglish}
              </span>
              <span className="text-[10px] sm:text-[11px] text-saffron-800 font-semibold tracking-wide">
                {lang === 'hi' ? 'पंजीकृत धर्मार्थ ट्रस्ट • शुक्रताल (मुजफ्फरनगर)' : 'Registered Charitable Trust • Shukratal (UP)'}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-5" aria-label="मुख्य नेविगेशन">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs sm:text-[13px] font-semibold text-sacred-brown/90 hover:text-saffron-700 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-saffron-600 hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Area: Unified Height, Perfect Vertical Centering */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Top Bar Language Toggle Button - Exactly 36px (h-9) */}
            <div
              className="h-9 inline-flex items-center rounded-full bg-amber-100/90 p-0.5 border border-amber-300 shadow-2xs text-[11px] font-bold leading-none"
              role="group"
              aria-label="भाषा चुनें / Select Language"
            >
              <button
                type="button"
                onClick={() => setLang('hi')}
                className={`h-full px-2.5 inline-flex items-center justify-center rounded-full transition-all text-center leading-none ${
                  lang === 'hi'
                    ? 'bg-saffron-600 text-white shadow-xs'
                    : 'text-sacred-brown hover:text-saffron-700'
                }`}
                title="हिन्दी में देखें"
              >
                <span className="leading-none">{lang === 'hi' ? 'हिन्दी' : 'हिन्दी'}</span>
              </button>
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`h-full px-2.5 inline-flex items-center justify-center rounded-full transition-all text-center leading-none ${
                  lang === 'en'
                    ? 'bg-saffron-600 text-white shadow-xs'
                    : 'text-sacred-brown hover:text-saffron-700'
                }`}
                title="Switch to English"
              >
                <span className="leading-none">English</span>
              </button>
            </div>

            {/* Donate CTA Button - Exactly 36px (h-9), Perfectly Centered Icon & Text */}
            <button
              type="button"
              onClick={onOpenDonateModal}
              className="h-9 inline-flex items-center justify-center gap-1.5 bg-gradient-to-r from-saffron-600 to-saffron-700 hover:from-saffron-700 hover:to-saffron-800 text-white font-bold text-xs sm:text-sm px-4 rounded-full shadow-xs hover:shadow-sm transition-all transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-saffron-500 text-center leading-none"
            >
              <Heart className="w-3.5 h-3.5 fill-white shrink-0" />
              <span className="leading-none">{lang === 'hi' ? 'दान करें' : 'Donate'}</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden h-9 w-9 inline-flex items-center justify-center rounded-lg text-sacred-brown hover:bg-amber-100/70 focus:outline-none focus:ring-2 focus:ring-saffron-500 transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'मेनू बंद करें' : 'मेनू खोलें'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu with Frosted Glass */}
        {mobileMenuOpen && (
          <div className="xl:hidden glass-panel rounded-2xl p-4 mt-3 border border-amber-200 shadow-xl animate-in slide-in-from-top-1 duration-200">
            <nav className="flex flex-col space-y-1" aria-label="मोबाइल नेविगेशन">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="px-3.5 py-2 rounded-xl text-sm font-semibold text-sacred-brown hover:bg-saffron-50 hover:text-saffron-700 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2 px-1 flex flex-col gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenDonateModal();
                  }}
                  className="w-full h-11 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-saffron-600 to-saffron-700 hover:from-saffron-700 hover:to-saffron-800 text-white font-bold px-4 rounded-xl shadow-md text-sm text-center leading-none"
                >
                  <Heart className="w-4 h-4 fill-white shrink-0" />
                  <span className="leading-none">{lang === 'hi' ? 'ऑनलाइन दान करें (UPI)' : 'Donate Online via UPI'}</span>
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
