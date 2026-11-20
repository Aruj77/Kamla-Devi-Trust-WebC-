'use client';

import React from 'react';
import { Heart, MapPin, Mail, Phone, ShieldCheck, ChevronRight } from 'lucide-react';
import { TRUST_DATA } from '@/data/trustData';
import { Emblem } from './Emblem';
import { useLanguage } from '@/context/LanguageContext';

interface FooterProps {
  onOpenDonateModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDonateModal }) => {
  const { lang } = useLanguage();
  const currentYear = 2026;

  const quickLinks = lang === 'hi'
    ? [
        { name: 'मुख्य पृष्ठ', href: '#home' },
        { name: 'हमारे बारे में', href: '#about' },
        { name: 'उद्देश्य एवं सेवाएं', href: '#objectives' },
        { name: 'सदस्यगण', href: '#members' },
        { name: 'पारदर्शिता एवं सुशासन', href: '#transparency' },
        { name: 'संपर्क एवं स्थान', href: '#contact' },
        { name: 'दान करें (Donation)', href: '#donate' },
      ]
    : [
        { name: 'Home', href: '#home' },
        { name: 'About Us', href: '#about' },
        { name: 'Objectives & Services', href: '#objectives' },
        { name: 'Trustees & Leadership', href: '#members' },
        { name: 'Transparency & Governance', href: '#transparency' },
        { name: 'Contact & Location', href: '#contact' },
        { name: 'Donate Online', href: '#donate' },
      ];

  return (
    <footer className="bg-sacred-brown text-ivory-50 pt-12 pb-8 border-t-3 border-saffron-600 relative overflow-hidden">
      {/* Subtle mandala background accent */}
      <div className="absolute inset-0 opacity-[0.025] bg-[radial-gradient(#ea580c_1px,transparent_1px)] [background-size:18px_18px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-8 border-b border-amber-900/50">
          {/* Col 1: Trust Profile */}
          <div className="lg:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <Emblem size={40} className="w-9 h-9 shrink-0 drop-shadow-xs" />
              <div>
                <h3 className="font-heading font-bold text-lg sm:text-xl text-amber-100 leading-tight">
                  {lang === 'hi' ? TRUST_DATA.nameHindi : TRUST_DATA.nameEnglish}
                </h3>
                <p className="text-[11px] text-amber-300 font-semibold">
                  {lang === 'hi' ? 'पंजीकृत जनकल्याणकारी एवं धर्मार्थ ट्रस्ट' : 'Registered Public Charitable Trust'}
                </p>
              </div>
            </div>

            <p className="text-xs text-ivory-200/80 leading-relaxed max-w-sm">
              {lang === 'hi'
                ? 'भारतीय ट्रस्ट अधिनियम 1882 की धारा 3 के अंतर्गत कार्यालय उपनिबंधक, जानसठ (मुजफ्फरनगर) में पंजीकृत। समाज के कमजोर वर्गों के उत्थान, निःशुल्क शिक्षा, चिकित्सा एवं सनातन धर्म के संवर्धन हेतु समर्पित।'
                : 'Registered under Section 3 of the Indian Trusts Act, 1882 at Sub-Registrar Office, Jansath (Muzaffarnagar). Dedicated to free education, healthcare, elder care, and social welfare.'}
            </p>

            <div className="pt-1">
              {/* Footer Donate Button - Fixed Height & Centered */}
              <button
                type="button"
                onClick={onOpenDonateModal}
                className="h-9 inline-flex items-center justify-center gap-1.5 bg-saffron-600 hover:bg-saffron-700 text-white font-bold text-xs px-4 rounded-full shadow-xs transition-all leading-none text-center"
              >
                <Heart className="w-3.5 h-3.5 fill-white shrink-0" />
                <span className="leading-none">{lang === 'hi' ? 'पुण्य अर्पण / दान करें' : 'Donate Online (UPI)'}</span>
              </button>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-sm text-amber-200 tracking-wide pb-1.5 border-b border-amber-900/50">
              {lang === 'hi' ? 'त्वरित नेविगेशन' : 'Quick Navigation'}
            </h4>
            <ul className="space-y-1.5 text-xs text-ivory-200/80">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-amber-300 transition-colors inline-flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3 h-3 text-saffron-500 shrink-0" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Address & UPI Info */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-heading font-bold text-sm text-amber-200 tracking-wide pb-1.5 border-b border-amber-900/50">
              {lang === 'hi' ? 'कार्यालय एवं केंद्र' : 'Offices & Centers'}
            </h4>

            <div className="space-y-2 text-xs text-ivory-200/80">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-saffron-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-amber-200">{lang === 'hi' ? 'प्रधान कार्यालय: ' : 'Head Office: '}</span>
                  <span>{lang === 'hi' ? TRUST_DATA.address.headOfficeHindi : TRUST_DATA.address.headOfficeEnglish}</span>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-amber-200">{lang === 'hi' ? 'शाखा कार्यालय: ' : 'Branch Office: '}</span>
                  <span>{lang === 'hi' ? TRUST_DATA.address.branchOfficeHindi : TRUST_DATA.address.branchOfficeEnglish}</span>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-orange-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-amber-200">{lang === 'hi' ? 'वृद्ध आश्रम: ' : 'Old Age Home: '}</span>
                  <span>{lang === 'hi' ? TRUST_DATA.address.ashramHindi : TRUST_DATA.address.ashramEnglish}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <Phone className="w-3.5 h-3.5 text-saffron-400 shrink-0" />
                <span>{lang === 'hi' ? TRUST_DATA.contact.displayPhoneHindi : TRUST_DATA.contact.displayPhoneEnglish}</span>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-saffron-400 shrink-0" />
                <span className="font-mono text-[11px]">{TRUST_DATA.contact.email}</span>
              </div>

              {/* UPI Reminder Card */}
              <div className="mt-3 p-2.5 rounded-xl bg-amber-950/70 border border-amber-800/80 text-[11px]">
                <span className="text-amber-300 font-bold block mb-0.5 leading-none">
                  {lang === 'hi' ? 'ट्रस्ट आधिकारिक UPI ID:' : 'Trust Official UPI ID:'}
                </span>
                <span className="font-mono text-white text-xs font-bold bg-black/40 px-2 py-0.5 rounded inline-block mt-1">
                  {TRUST_DATA.donation.upiId}
                </span>
                <span className="block mt-1 text-[10px] text-ivory-200/70 truncate">
                  {lang === 'hi' ? `लाभार्थी: ${TRUST_DATA.donation.payeeNameHindi}` : `Payee: ${TRUST_DATA.donation.payeeName}`}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-ivory-200/70 text-center sm:text-left">
          <div>
            © {currentYear} {lang === 'hi' ? TRUST_DATA.nameHindi : TRUST_DATA.nameEnglish}। {lang === 'hi' ? 'सर्वाधिकार सुरक्षित।' : 'All rights reserved.'}
          </div>

          {/* Compliance Tag - Centered */}
          <div className="inline-flex items-center justify-center gap-1.5 text-[10px] leading-none">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span className="leading-none">
              {lang === 'hi'
                ? 'भारतीय ट्रस्ट अधिनियम 1882 एवं आयकर अधिनियम 1961 के तहत पंजीकृत'
                : 'Registered under Indian Trusts Act, 1882 & Income Tax Act, 1961'}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
