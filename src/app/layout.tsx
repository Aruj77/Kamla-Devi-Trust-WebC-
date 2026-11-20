import type { Metadata } from 'next';
import './globals.css';
import { TRUST_DATA } from '@/data/trustData';
import { LanguageProvider } from '@/context/LanguageContext';

export const metadata: Metadata = {
  title: 'कमला देवी पब्लिक सेवा मन्दिर ट्रस्ट | पंजीकृत धर्मार्थ ट्रस्ट शुक्रताल, मुजफ्फरनगर',
  description:
    'कमला देवी पब्लिक सेवा मन्दिर ट्रस्ट (भारतीय ट्रस्ट अधिनियम 1882 की धारा 3 के अंतर्गत पंजीकृत)। ग्राम शुक्रताल, जानसठ (मुजफ्फरनगर, उ.प्र.) स्थित गैर-लाभकारी धर्मार्थ ट्रस्ट — धर्म, निःशुल्क शिक्षा, चिकित्सा, वृद्धजन सहायता एवं जनकल्याण को समर्पित।',
  keywords: [
    'कमला देवी पब्लिक सेवा मन्दिर ट्रस्ट',
    'Kamla Devi Public Seva Mandir Trust',
    'कमला देवी ट्रस्ट',
    'शुक्रताल ट्रस्ट',
    'Shukratal Trust Muzaffarnagar',
    'मुजफ्फरनगर जनसेवा ट्रस्ट',
    'शुक्रताल मंदिर ट्रस्ट',
    'भारतीय ट्रस्ट अधिनियम 1882',
    'धीरज सिंह चौहान',
    'धर्मार्थ ट्रस्ट मुजफ्फरनगर',
    'जानसठ ट्रस्ट',
    'निःशुल्क चिकित्सा ट्रस्ट',
    'वृद्ध आश्रम शुक्रताल',
    'दान ट्रस्ट UPI',
    '44655729189@sbi',
  ],
  authors: [{ name: 'कमला देवी पब्लिक सेवा मन्दिर ट्रस्ट' }],
  creator: 'कमला देवी पब्लिक सेवा मन्दिर ट्रस्ट',
  publisher: 'कमला देवी पब्लिक सेवा मन्दिर ट्रस्ट',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://kamladevitrust.org',
  },
  openGraph: {
    title: 'कमला देवी पब्लिक सेवा मन्दिर ट्रस्ट | धर्म, शिक्षा, स्वास्थ्य एवं जनकल्याण',
    description:
      'पंजीकृत जनकल्याणकारी एवं धर्मार्थ ट्रस्ट, ग्राम शुक्रताल, तहसील जानसठ, जिला मुजफ्फरनगर (उत्तर प्रदेश)। नर सेवा ही नारायण सेवा है।',
    url: 'https://kamladevitrust.org',
    siteName: 'कमला देवी पब्लिक सेवा मन्दिर ट्रस्ट',
    locale: 'hi_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'कमला देवी पब्लिक सेवा मन्दिर ट्रस्ट',
    description:
      'भारतीय ट्रस्ट अधिनियम 1882 के अंतर्गत पंजीकृत गैर-लाभकारी जनकल्याणकारी ट्रस्ट, शुक्रताल (मुजफ्फरनगर)।',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'NGO',
    name: TRUST_DATA.nameHindi,
    alternateName: TRUST_DATA.nameEnglish,
    url: 'https://kamladevitrust.org',
    logo: 'https://kamladevitrust.org/emblem.svg',
    description:
      'भारतीय ट्रस्ट अधिनियम 1882 की धारा 3 के अंतर्गत पंजीकृत गैर-लाभकारी धर्मार्थ एवं जनकल्याणकारी ट्रस्ट।',
    founder: {
      '@type': 'Person',
      name: 'श्री धीरज सिंह चौहान',
      jobTitle: 'आजीवन अध्यक्ष एवं मुख्य ट्रस्टी',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'ग्राम शुक्रताल, परगना भोकरहेड़ी, तहसील जानसठ',
      addressLocality: 'Shukratal, Jansath',
      addressRegion: 'Uttar Pradesh',
      postalCode: '251316',
      addressCountry: 'IN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-98970-00000',
      contactType: 'Trust Office',
      availableLanguage: ['Hindi', 'English'],
    },
    areaServed: 'IN',
    taxID: 'Section 11(5) Compliant',
  };

  return (
    <html lang="hi" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/icon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;500;600;700&family=Tiro+Devanagari+Hindi:ital@0;1&family=Yatra+One&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className="min-h-screen bg-ivory-50 text-sacred-brown antialiased selection:bg-saffron-600 selection:text-white"
        suppressHydrationWarning
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
