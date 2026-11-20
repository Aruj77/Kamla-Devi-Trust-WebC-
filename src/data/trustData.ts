export interface ObjectiveItem {
  id: number;
  titleHindi: string;
  titleEnglish: string;
  shortDescHindi: string;
  shortDescEnglish: string;
  fullDescHindi: string;
  fullDescEnglish: string;
  iconName: 'temple' | 'bookOpen' | 'heartPulse' | 'shieldCheck' | 'users' | 'trophy' | 'sprout';
  pointsHindi: string[];
  pointsEnglish: string[];
}

export interface TransparencyRule {
  id: number;
  titleHindi: string;
  titleEnglish: string;
  summaryHindi: string;
  summaryEnglish: string;
  detailHindi: string;
  detailEnglish: string;
  iconName: 'award' | 'fileSpreadsheet' | 'scale' | 'landmark';
}

export const TRUST_DATA = {
  nameHindi: 'कमला देवी पब्लिक सेवा मन्दिर ट्रस्ट',
  nameEnglish: 'Kamla Devi Public Seva Mandir Trust',
  shortNameHindi: 'कमला देवी ट्रस्ट',
  shortNameEnglish: 'Kamla Devi Trust',
  taglineHindi: 'मानव सेवा ही ईश्वर सेवा है • धर्म, शिक्षा, स्वास्थ्य एवं जनकल्याण को समर्पित',
  taglineEnglish: 'Service to Humanity is Service to God • Dedicated to Education, Health & Welfare',
  registrationBadgeHindi: 'भारतीय ट्रस्ट अधिनियम 1882 के अंतर्गत पंजीकृत',
  registrationBadgeEnglish: 'Registered under Indian Trusts Act, 1882',
  registrationFullHindi: 'भारतीय ट्रस्ट अधिनियम 1882 की धारा 3 के अंतर्गत पंजीकृत (कार्यालय उपनिबंधक, जानसठ, जिला मुजफ्फरनगर, उत्तर प्रदेश)',
  registrationFullEnglish: 'Registered under Section 3 of Indian Trusts Act, 1882 (Office of Sub-Registrar, Jansath, Distt. Muzaffarnagar, UP)',
  operationalScopeHindi: 'संपूर्ण भारत (एवं आवश्यकता पड़ने पर भारत से बाहर भी)',
  operationalScopeEnglish: 'Across India (and globally as required)',
  natureHindi: 'गैर-लाभकारी (Non-Profit) जनकल्याणकारी एवं धर्मार्थ ट्रस्ट (आयकर अधिनियम 1961 के अधीन)',
  natureEnglish: 'Non-Profit Public Charitable & Religious Trust (under IT Act, 1961)',
  jurisdictionHindi: 'जिला मुजफ्फरनगर (उत्तर प्रदेश)',
  jurisdictionEnglish: 'District Muzaffarnagar (Uttar Pradesh)',
  foundingYear: '2024',
  
  address: {
    villageHindi: 'ग्राम शुक्रताल',
    villageEnglish: 'Village Shukratal',
    parganaHindi: 'परगना भोकरहेड़ी',
    parganaEnglish: 'Pargana Bhokarhedi',
    tehsilHindi: 'तहसील जानसठ',
    tehsilEnglish: 'Tehsil Jansath',
    districtHindi: 'जिला मुजफ्फरनगर',
    districtEnglish: 'District Muzaffarnagar',
    stateHindi: 'उत्तर प्रदेश',
    stateEnglish: 'Uttar Pradesh',
    pincode: '251316',
    countryHindi: 'भारत',
    countryEnglish: 'India',
    fullHindi: 'ग्राम शुक्रताल, परगना भोकरहेड़ी, तहसील जानसठ, जिला मुजफ्फरनगर, उत्तर प्रदेश - 251316',
    fullEnglish: 'Village Shukratal, Pargana Bhokarhedi, Tehsil Jansath, District Muzaffarnagar, Uttar Pradesh - 251316, India',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13854.766150247657!2d77.89201977797782!3d29.589839958178125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ea11fb43770f1%3A0x6b4eb90c42cb831e!2sShukratal%2C%20Uttar%20Pradesh%20251316!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
    directionsUrl: 'https://maps.google.com/?q=Shukratal,+Jansath,+Muzaffarnagar,+Uttar+Pradesh+251316',
  },

  contact: {
    helpline: '+91 98970 00000',
    displayPhoneHindi: '+91 94588 59203 (ट्रस्ट कार्यालय)',
    displayPhoneEnglish: '+91 94588 59203 (Trust Office)',
    email: 'kamladevitrust@gmail.com',
    officeHoursHindi: 'प्रातः 09:00 बजे से सायं 06:00 बजे तक (सोमवार - शनिवार)',
    officeHoursEnglish: '09:00 AM to 06:00 PM (Monday - Saturday)',
    visitingDaysHindi: 'सप्ताह के सभी सात दिन',
    visitingDaysEnglish: 'Open all 7 days for pilgrims & visitors',
  },

  donation: {
    upiId: '44655729189@sbi',
    payeeName: 'Kamla Devi Public Seva Mandir Trust',
    payeeNameHindi: 'कमला देवी पब्लिक सेवा मन्दिर ट्रस्ट',
    bankNameHindi: 'भारतीय स्टेट बैंक (State Bank of India)',
    bankNameEnglish: 'State Bank of India (SBI)',
    suggestedAmounts: [101, 251, 501, 1100, 2100],
    defaultAmount: 501,
    noteHindi: 'आपका हर एक रुपया धर्म, निःशुल्क शिक्षा, चिकित्सा एवं वृद्धजनों की सेवा में प्रत्यक्ष रूप से उपयोग किया जाता है।',
    noteEnglish: 'Every single contribution directly empowers free education, healthcare, elder support, and cultural preservation.',
    accountHolderHindi: 'कमला देवी पब्लिक सेवा मन्दिर ट्रस्ट',
    accountHolderEnglish: 'Kamla Devi Public Seva Mandir Trust',
  },

  about: {
    paragraph1Hindi: 'कमला देवी पब्लिक सेवा मन्दिर ट्रस्ट एक पंजीकृत, गैर-लाभकारी सामाजिक व धार्मिक संस्था है। इसकी स्थापना भारतीय ट्रस्ट अधिनियम 1882 की धारा 3 के अंतर्गत कार्यालय उपनिबंधक, जानसठ (जिला मुजफ्फरनगर) में विधिवत रूप से की गई है। ट्रस्ट का मुख्य कार्यालय पावन तीर्थ भूमि शुक्रताल में स्थित है।',
    paragraph1English: 'Kamla Devi Public Seva Mandir Trust is a registered, non-profit public charitable and religious trust. It is formally established under Section 3 of the Indian Trusts Act, 1882 at the Office of the Sub-Registrar, Jansath (Muzaffarnagar District). The trust is headquartered in the sacred pilgrimage town of Shukratal.',
    paragraph2Hindi: 'ट्रस्ट का पावन ध्येय समाज के अंतिम पायदान पर खड़े व्यक्ति तक शिक्षा, स्वास्थ्य, संबल और धर्म का प्रकाश पहुंचाना है। ट्रस्ट के आजीवन अध्यक्ष श्री धीरज सिंह चौहान के कुशल मार्गदर्शन में संपूर्ण भारत वर्ष में जनकल्याणकारी गतिविधियों का निष्पादन किया जा रहा है।',
    paragraph2English: 'The trust is dedicated to bringing quality education, healthcare, dignity, and spiritual wisdom to underprivileged communities. Under the leadership of Lifetime President Shri Dheeraj Singh Chauhan, social welfare initiatives are carried out throughout India.',
    paragraph3Hindi: 'ट्रस्ट द्वारा स्थापित और संचालित सभी विद्यालय, चिकित्सालय, प्राकृतिक चिकित्सा केंद्र, वृद्ध आश्रम एवं धार्मिक संस्थान सदैव "कमला देवी पब्लिक सेवा मन्दिर ट्रस्ट" के शाश्वत नाम से ही संचालित रहेंगे। यह संस्था जाति, वर्ग, वर्ण एवं लिंग के भेदभाव से परे होकर समस्त मानव जाति के कल्याण हेतु संकल्पबद्ध है।',
    paragraph3English: 'All schools, hospitals, naturopathy centers, old-age homes, and religious centers established by the trust shall permanently operate under the name "Kamla Devi Public Seva Mandir Trust". The trust works selflessly for universal welfare without discrimination of caste, creed, or background.',
  },

  objectives: [
    {
      id: 1,
      titleHindi: 'धार्मिक एवं सांस्कृतिक उत्थान',
      titleEnglish: 'Religious & Cultural Revival',
      shortDescHindi: 'सनातन संस्कृति का संवर्धन, धार्मिक स्थलों का निर्माण व सत्संग-समारोह का आयोजन।',
      shortDescEnglish: 'Promoting cultural roots, construction of spiritual institutions, and publishing spiritual literature.',
      fullDescHindi: 'धार्मिक भावनाओं को प्रोत्साहित करना, धार्मिक संस्थाओं, मन्दिरों व आश्रमों का निर्माण व संचालन, प्रामाणिक धार्मिक एवं आध्यात्मिक पुस्तकों का प्रकाशन, सार्वजनिक पुस्तकालय संचालन तथा धार्मिक सेमिनार व सम्मेलनों का निरंतर आयोजन करना।',
      fullDescEnglish: 'Encouraging religious consciousness, building and managing spiritual institutions and ashrams, publishing authentic Vedic literature, running public libraries, and organizing educational seminars.',
      iconName: 'temple',
      pointsHindi: [
        'धार्मिक संस्थाओं, देवालयों व सत्संग भवनों का निर्माण एवं रखरखाव',
        'धार्मिक पुस्तकों, ग्रंथों एवं सदाचार साहित्य का प्रकाशन व निःशुल्क वितरण',
        'आध्यात्मिक चेतना के प्रसार हेतु पुस्तकालयों एवं वाचनालयों की स्थापना',
        'समय-समय पर धार्मिक सेमिनार, कथा-प्रवचन व सम्मेलनों का प्रबंध',
      ],
      pointsEnglish: [
        'Construction and maintenance of temples, ashrams, and discourse halls',
        'Publication and free distribution of authentic philosophical & value-based books',
        'Establishing community libraries and reading rooms for spiritual learning',
        'Organizing moral discourses, conferences, and heritage celebrations',
      ],
    },
    {
      id: 2,
      titleHindi: 'शिक्षा एवं शोध कार्य',
      titleEnglish: 'Education & Academic Research',
      shortDescHindi: 'विद्यालय, उच्च तकनीकी व मेडिकल संस्थानों की स्थापना और जरूरतमंदों को छात्रवृत्ति।',
      shortDescEnglish: 'Founding modern schools, engineering and medical colleges, and providing scholarships to needy youth.',
      fullDescHindi: 'विद्यालयों, इंजीनियरिंग व मेडिकल संस्थानों की स्थापना, मेधावी एवं आर्थिक रूप से पिछड़े छात्र-छात्राओं के लिए उच्च शिक्षा हेतु आर्थिक सहायता तथा सामान्य विज्ञान व तकनीकी अनुसंधान को बढ़ावा देना।',
      fullDescEnglish: 'Establishing quality primary and higher academic institutions, offering scholarships to talented underprivileged students, and promoting research in science and technology.',
      iconName: 'bookOpen',
      pointsHindi: [
        'आधुनिक व संस्कारयुक्त प्राथमिक, माध्यमिक एवं उच्च शिक्षण संस्थानों का संचालन',
        'इंजीनियरिंग, तकनीकी एवं मेडिकल शिक्षा के आधुनिक केंद्रों का विकास',
        'गरीब एवं मेधावी विद्यार्थियों हेतु निःशुल्क छात्रवृत्ति एवं पाठ्य-सामग्री वितरण',
        'विज्ञान, प्रौद्योगिकी एवं मानवीय मूल्यों पर आधारित अनुसंधानों को प्रोत्साहन',
      ],
      pointsEnglish: [
        'Running modern value-based primary, secondary, and higher educational schools',
        'Developing advanced centers for engineering, technical, and medical training',
        'Distributing free books, learning kits, and scholarships to bright poor students',
        'Encouraging scientific, technological, and human welfare research',
      ],
    },
    {
      id: 3,
      titleHindi: 'चिकित्सा एवं प्राकृतिक उपचार',
      titleEnglish: 'Healthcare & Naturopathy',
      shortDescHindi: 'निःशुल्क चिकित्सालय, मेडिकल कैंप, प्राकृतिक चिकित्सा व जड़ी-बूटी संरक्षण।',
      shortDescEnglish: 'Free dispensaries, regular health camps, naturopathy centers, and medicinal herb research.',
      fullDescHindi: 'गरीबों एवं वंचितों के लिए सुसज्जित चिकित्सालय खोलना, समय-समय पर निःशुल्क स्वास्थ्य शिविर लगाना, प्राकृतिक चिकित्सा केंद्रों का संचालन, पारंपरिक औषधीय जड़ी-बूटियों का संरक्षण व आधुनिक चिकित्सा विज्ञान में शोध कार्य।',
      fullDescEnglish: 'Opening charitable hospitals for the needy, conducting regular free health screening camps, running naturopathy and yoga centers, and conserving traditional herbal medicine.',
      iconName: 'heartPulse',
      pointsHindi: [
        'गरीब व असहाय मरीजों हेतु निःशुल्क प्राथमिक स्वास्थ्य केंद्र व अस्पताल स्थापना',
        'ग्रामीण व दूरदराज के अंचलों में नियमित निःशुल्क स्वास्थ्य व नेत्र जांच शिविर',
        'प्राकृतिक चिकित्सा (नेचुरोपैथी) व योग केंद्रों की स्थापना व संचालन',
        'प्राचीन आयुर्वेदिक जड़ी-बूटियों का संवर्धन एवं आधुनिक चिकित्सा शोध',
      ],
      pointsEnglish: [
        'Establishing charitable healthcare centers and dispensaries for underprivileged families',
        'Regular free health checkup and eye-care camps in rural areas',
        'Operating naturopathy, ayurveda, and yoga wellness centers',
        'Promoting organic medicinal herbs and research in modern medical science',
      ],
    },
    {
      id: 4,
      titleHindi: 'वृद्धजन एवं असहाय सहायता',
      titleEnglish: 'Elder Care & Destitute Support',
      shortDescHindi: 'निराश्रित वृद्धों को सम्मानजनक आश्रय, भोजन, चिकित्सा एवं पारिवारिक संबल।',
      shortDescEnglish: 'Safe shelter, nutritious meals, healthcare, and compassionate care for elderly and destitute citizens.',
      fullDescHindi: 'गरीब, असहाय, परित्यक्त एवं निस्सहाय वृद्धजनों को सुरक्षित एवं सम्मानजनक आश्रय प्रदान करना, उनके स्वास्थ्य, पोषण, मनोरंजन की व्यवस्था करना तथा उनकी हर संभव सहायता करना।',
      fullDescEnglish: 'Providing dignified shelter, healthcare, nutritious food, and emotional warmth to abandoned and poor senior citizens, ensuring their peace and well-being.',
      iconName: 'shieldCheck',
      pointsHindi: [
        'सर्वसुविधायुक्त एवं वात्सल्यपूर्ण वृद्ध आश्रमों की स्थापना व संचालन',
        'वृद्धजनों हेतु निःशुल्क पौष्टिक भोजन, वस्त्र एवं विशेषज्ञ स्वास्थ्य देखभाल',
        'एकाकीपन दूर करने हेतु सत्संग, योग, भजन-कीर्तन व सांस्कृतिक संवाद',
        'शारीरिक रूप से असमर्थ वृद्धजनों के लिए सहायक उपकरणों का निःशुल्क वितरण',
      ],
      pointsEnglish: [
        'Establishing and operating fully-equipped old-age homes with affectionate care',
        'Providing free balanced meals, clothing, and geriatric healthcare',
        'Conducting satsang, yoga, and interactive sessions to alleviate loneliness',
        'Free distribution of assistive mobility aids to disabled and elderly individuals',
      ],
    },
    {
      id: 5,
      titleHindi: 'महिला उत्थान एवं समाज सुधार',
      titleEnglish: 'Women Empowerment & Social Reform',
      shortDescHindi: 'महिला सशक्तिकरण, कन्या भ्रूण हत्या रोकथाम अभियान व कुरीतियों का निवारण।',
      shortDescEnglish: 'Vocational training for women, campaigns against female feticide, and eliminating social evils.',
      fullDescHindi: 'महिलाओं के आत्मनिर्भर व सशक्त जीवन हेतु कार्य करना, कन्या भ्रूण हत्या रोकने के लिए व्यापक जन-जागरूकता अभियान चलाना तथा दहेज, नशाखोरी जैसी सामाजिक कुरीतियों व बुराइयों को समाप्त करना।',
      fullDescEnglish: 'Fostering financial independence for women, running awareness drives against female feticide, and working towards the eradication of dowry, substance abuse, and backward social evils.',
      iconName: 'users',
      pointsHindi: [
        'महिलाओं को सिलाई, बुनाई, हस्तशिल्प व कंप्यूटर जैसे कौशलों में स्वावलंबी बनाना',
        'कन्या भ्रूण हत्या के विरुद्ध सघन जनजागरण एवं "बेटी बचाओ" अभियान',
        'दहेज प्रथा, बाल विवाह एवं सामाजिक कुप्रथाओं के समूल उन्मूलन हेतु प्रयास',
        'संकटग्रस्त महिलाओं के लिए परामर्श, कानूनी मार्गदर्शन व पुनर्वास केंद्र',
      ],
      pointsEnglish: [
        'Self-reliance vocational training in stitching, handicrafts, and computer literacy',
        'Awareness campaigns against female feticide and girl-child education drives',
        'Combating social evils like dowry, child marriage, and domestic abuse',
        'Providing counseling, legal assistance, and rehabilitation for distressed women',
      ],
    },
    {
      id: 6,
      titleHindi: 'खेल एवं युवा विकास',
      titleEnglish: 'Sports & Youth Development',
      shortDescHindi: 'खेल मैदानों का निर्माण, खेल प्रतिभाओं की खोज व खेल सामग्री का वितरण।',
      shortDescEnglish: 'Building sports grounds, nurturing rural athletic talent, and distributing sports equipment.',
      fullDescHindi: 'युवाओं के शारीरिक एवं मानसिक विकास हेतु खेलों का प्रचार-प्रसार करना, ग्रामीण एवं अर्धशहरी क्षेत्रों में क्रीड़ा स्थलों (खेल मैदानों) का निर्माण तथा साधनहीन खिलाड़ियों को खेल सामग्री वितरित करना।',
      fullDescEnglish: 'Promoting athletic and mental fitness among youngsters, establishing sports grounds and fitness facilities in villages, and supporting needy athletes with professional sports kits.',
      iconName: 'trophy',
      pointsHindi: [
        'ग्रामीण क्षेत्रों में खेल मैदानों एवं व्यायामशालाओं (जिम) का निर्माण',
        'प्रतिभाशाली किंतु निर्धन खिलाड़ियों को किट व खेल सामग्री का निःशुल्क वितरण',
        'क्षेत्रीय एवं अंतर-जनपदीय खेल प्रतियोगिताओं का नियमित आयोजन',
        'युवाओं को नशे की लत से दूर कर खेल व राष्ट्र निर्माण से जोड़ना',
      ],
      pointsEnglish: [
        'Developing playing grounds and community gymnasiums in rural sectors',
        'Free distribution of sports kits and equipment to underprivileged champions',
        'Organizing inter-village and district-level sports tournaments',
        'Channelling youth energy away from substance addiction towards nation-building',
      ],
    },
    {
      id: 7,
      titleHindi: 'कृषि एवं स्वावलंबन',
      titleEnglish: 'Sustainable Agriculture & Livelihood',
      shortDescHindi: 'मधुमक्खी पालन, पुष्प खेती एवं मशरूम उत्पादन जैसे स्वरोजगार आधारित कृषि कार्य।',
      shortDescEnglish: 'Promoting beekeeping, floriculture, and mushroom cultivation for self-reliance in rural communities.',
      fullDescHindi: 'किसानों एवं ग्रामीण युवाओं की आय में वृद्धि हेतु मधुमक्खी पालन (एपीकल्चर), पुष्प खेती (फ्लोरीकल्चर) एवं मशरूम उत्पादन जैसी आधुनिक स्वरोजगार आधारित कृषि गतिविधियों को बढ़ावा देना एवं व्यावहारिक प्रशिक्षण देना।',
      fullDescEnglish: 'Enhancing rural farm incomes by providing hands-on training and starter kits for beekeeping (apiculture), commercial floriculture, and organic mushroom cultivation.',
      iconName: 'sprout',
      pointsHindi: [
        'मधुमक्खी पालन, शहद उत्पादन एवं विपणन का निःशुल्क प्रशिक्षण व किट',
        'वाणिज्यिक पुष्प खेती (फ्लोरीकल्चर) तकनीक का कृषकों के बीच प्रसार',
        'कम लागत में उच्च मुनाफे वाले मशरूम उत्पादन के कार्यशालाएं',
        'प्राकृतिक एवं जैविक खेती को प्रोत्साहित कर मृदा व मानव स्वास्थ्य का संरक्षण',
      ],
      pointsEnglish: [
        'Free training and equipment for modern beekeeping and pure honey production',
        'Introducing commercial floriculture practices for increased farmer earnings',
        'Practical workshops on cost-effective, high-yield mushroom cultivation',
        'Encouraging chemical-free natural farming to preserve soil and ecological health',
      ],
    },
  ] as ObjectiveItem[],

  transparency: [
    {
      id: 1,
      titleHindi: 'निःस्वार्थ व अवैतनिक सेवा',
      titleEnglish: 'Honorary & Selfless Governance',
      summaryHindi: 'ट्रस्टियों का कोई व्यक्तिगत वित्तीय लाभ नहीं',
      summaryEnglish: 'Zero salary or financial remuneration for board members',
      detailHindi: 'बोर्ड ऑफ ट्रस्टीज के समस्त सदस्य पूर्णतः मानसेवी रूप से निष्काम समाज सेवा करते हैं। ट्रस्ट के संविधान अनुसार कोई भी ट्रस्टी किसी प्रकार का वेतन, भत्ता या व्यक्तिगत वित्तीय लाभ प्राप्त नहीं करता।',
      detailEnglish: 'All members of the Board of Trustees serve purely in an honorary capacity. Under the trust constitution, no trustee receives any salary, stipend, or personal financial gain.',
      iconName: 'award',
    },
    {
      id: 2,
      titleHindi: 'नियमित चार्टर्ड अकाउंटेंट (CA) ऑडिट',
      titleEnglish: 'Regular Chartered Accountant Audit',
      summaryHindi: 'प्रत्येक वित्तीय वर्ष में आय-व्यय की स्वतंत्र जांच',
      summaryEnglish: 'Independent annual audit of all receipts and expenses',
      detailHindi: 'प्रत्येक वित्तीय वर्ष (1 अप्रैल से 31 मार्च) के समापन पर अधिकृत चार्टर्ड अकाउंटेंट (CA) द्वारा ट्रस्ट के संपूर्ण आय-व्यय एवं बैंक खातों का विस्तृत ऑडिट किया जाता है।',
      detailEnglish: 'At the conclusion of each financial year (April 1 to March 31), certified Chartered Accountants conduct an independent statutory audit of all accounts, books, and donations.',
      iconName: 'fileSpreadsheet',
    },
    {
      id: 3,
      titleHindi: 'पारदर्शी गैर-लाभकारी कार्यप्रणाली',
      titleEnglish: 'Strict Non-Profit Compliance',
      summaryHindi: 'आयकर अधिनियम 1961 एवं धारा 11(5) के अनुरूप',
      summaryEnglish: 'Fully governed under Income Tax Act Section 11(5) guidelines',
      detailHindi: 'ट्रस्ट की संपूर्ण वित्तीय कार्यप्रणाली भारत सरकार के आयकर अधिनियम 1961 एवं धारा 11(5) में विनिर्दिष्ट सुरक्षित व पारदर्शी निवेश नियमों के अधीन पूर्ण सत्यनिष्ठा से संचालित है।',
      detailEnglish: 'The trust functions strictly in accordance with non-profit charitable guidelines and designated secure investment instruments prescribed under Section 11(5) of the Income Tax Act, 1961.',
      iconName: 'scale',
    },
    {
      id: 4,
      titleHindi: 'सार्वजनिक व समर्पित संपत्ति',
      titleEnglish: 'Irrevocably Dedicated Public Assets',
      summaryHindi: 'समस्त संपत्तियां केवल जनकल्याण के लिए आरक्षित',
      summaryEnglish: 'All assets dedicated exclusively to public welfare objectives',
      detailHindi: 'ट्रस्ट की समस्त चल एवं अचल संपत्ति ट्रस्ट के घोषित जनकल्याणकारी व धार्मिक उद्देश्यों के लिए सदैव समर्पित है। किसी भी ट्रस्टी अथवा व्यक्ति का इस पर व्यक्तिगत स्वामित्व अधिकार नहीं है।',
      detailEnglish: 'All movable and immovable properties are held solely in trust for public charitable purposes. No individual trustee has personal claims or ownership over trust property.',
      iconName: 'landmark',
    },
  ] as TransparencyRule[],
};
