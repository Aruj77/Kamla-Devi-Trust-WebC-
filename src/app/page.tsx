'use client';

import React, { useState } from 'react';
import { ScrollObserver } from '@/components/ScrollObserver';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Objectives } from '@/components/Objectives';
import { Gallery } from '@/components/Gallery';
import { Members } from '@/components/Members';
import { Transparency } from '@/components/Transparency';
import { DonationSection } from '@/components/DonationSection';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { DonationModal } from '@/components/DonationModal';

export default function Home() {
  const [isDonateModalOpen, setIsDonateModalOpen] = useState(false);

  const handleOpenDonateModal = () => {
    setIsDonateModalOpen(true);
  };

  const handleCloseDonateModal = () => {
    setIsDonateModalOpen(false);
  };

  return (
    <div className="flex min-h-screen flex-col bg-ivory-50 text-sacred-brown">
      {/* Scroll-triggered reveal animations */}
      <ScrollObserver />

      {/* Sticky Header with Navigation & Quick Donate */}
      <Navbar onOpenDonateModal={handleOpenDonateModal} />

      {/* Main Semantic Landmark */}
      <main id="main-content" className="flex-1">
        {/* 1. Hero Section */}
        <Hero onOpenDonateModal={handleOpenDonateModal} />

        {/* 2. About Section (हमारे बारे में) */}
        <About />

        {/* 3. Objectives Section (उद्देश्य एवं सेवाएं - 7 Pillars) */}
        <Objectives />

        {/* 4. Activities & Photo Gallery Section (सेवा गतिविधियां एवं चित्र वीथिका) */}
        <Gallery />

        {/* 5. Members Section (पदाधिकारी एवं सदस्यगण) */}
        <Members />

        {/* 6. Transparency & Governance Section (पारदर्शिता एवं सुशासन) */}
        <Transparency />

        {/* 7. On-Page Donation Section (दान करें) */}
        <DonationSection />

        {/* 8. Contact & Location Section (संपर्क एवं स्थान) */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer onOpenDonateModal={handleOpenDonateModal} />

      {/* Reusable Interactive Donation Modal */}
      <DonationModal
        isOpen={isDonateModalOpen}
        onClose={handleCloseDonateModal}
      />
    </div>
  );
}
