export interface ActivityItem {
  id: string;
  titleHindi: string;
  titleEnglish: string;
  category: 'all' | 'gaushala' | 'annakshetra' | 'medical' | 'education' | 'shukratal' | 'eldercare' | 'swavlamban';
  categoryLabelHindi: string;
  categoryLabelEnglish: string;
  locationHindi: string;
  locationEnglish: string;
  imagePath: string;
  descriptionHindi: string;
  descriptionEnglish: string;
  isRealPhoto?: boolean;
}

export const ACTIVITIES_DATA: ActivityItem[] = [
  {
    id: 'gaushala-seva',
    titleHindi: 'पावन गौ माता एवं नंदी सेवा (गौशाला)',
    titleEnglish: 'Sacred Cow Shelter & Gau Seva',
    category: 'gaushala',
    categoryLabelHindi: 'गौ सेवा',
    categoryLabelEnglish: 'Cow Protection',
    locationHindi: 'ग्राम शुक्रताल, मुजफ्फरनगर',
    locationEnglish: 'Village Shukratal, Muzaffarnagar',
    imagePath: '/images/activities/gaushala.jpg',
    descriptionHindi: 'शुक्रताल स्थित गौशाला में निराश्रित गोवंश, गायों एवं बछड़ों की नियमित सेवा, हरा चारा, स्वच्छ जल, पोषण व चिकित्सा देखभाल का निरंतर प्रबंध।',
    descriptionEnglish: 'Nurturing shelter, green fodder, medical care, and lifelong protection for cows and calves at the trust gaushala.',
    isRealPhoto: true,
  },
  {
    id: 'annakshetra-langar',
    titleHindi: 'प्रतिदिन निःशुल्क अन्नक्षेत्र एवं लंगर सेवा',
    titleEnglish: 'Daily Free Annakshetra & Langar Feast',
    category: 'annakshetra',
    categoryLabelHindi: 'अन्नदान सेवा',
    categoryLabelEnglish: 'Food Distribution',
    locationHindi: 'ट्रस्ट अन्नक्षेत्र परिसर, शुक्रताल',
    locationEnglish: 'Trust Annakshetra Hall, Shukratal',
    imagePath: '/images/activities/annakshetra.png',
    descriptionHindi: 'तीर्थ यात्रियों, साधु-संतों, निराश्रितों एवं जरूरतमंदों हेतु प्रतिदिन पवित्र, सात्विक एवं पौष्टिक भोजन का निःशुल्क वितरण।',
    descriptionEnglish: 'Serving fresh, hygienic, and nutritious free meals daily to pilgrims, saints, and underprivileged community members.',
  },
  {
    id: 'shukratal-vatvriksh',
    titleHindi: 'अमर वटवृक्ष एवं पावन शुक्रताल तीर्थ धाम',
    titleEnglish: 'Akshay Banyan Tree & Shukratal Pilgrimage',
    category: 'shukratal',
    categoryLabelHindi: 'तीर्थ एवं दर्शन',
    categoryLabelEnglish: 'Holy Pilgrimage',
    locationHindi: 'शुकदेव आश्रम, शुक्रताल, जानसठ',
    locationEnglish: 'Shukdev Ashram, Shukratal, Jansath',
    imagePath: '/images/activities/shukratal-vatvriksh.png',
    descriptionHindi: 'श्रीमद्भागवत की अमर उद्गम स्थली, 5100+ वर्ष प्राचीन अक्षय वटवृक्ष की पावन छत्रछाया में आध्यात्मिक चेतना एवं जनकल्याण केंद्र।',
    descriptionEnglish: 'The birthplace of Shrimad Bhagavata discourse under the 5100+ year-old sacred Banyan tree, radiating peace and spiritual wisdom.',
  },
  {
    id: 'medical-camp',
    titleHindi: 'निःशुल्क स्वास्थ्य एवं प्राकृतिक चिकित्सा शिविर',
    titleEnglish: 'Free Health & Naturopathy Camps',
    category: 'medical',
    categoryLabelHindi: 'चिकित्सा सेवा',
    categoryLabelEnglish: 'Medical Camps',
    locationHindi: 'ग्रामीण अंचल, जानसठ (मुजफ्फरनगर)',
    locationEnglish: 'Rural Areas, Jansath (Muzaffarnagar)',
    imagePath: '/images/activities/medical-camp.png',
    descriptionHindi: 'ग्रामीण क्षेत्रों में विशेषज्ञ चिकित्सकों द्वारा निःशुल्क स्वास्थ्य जांच, दवा वितरण, नेत्र परीक्षण एवं प्राकृतिक जीवनशैली परामर्श।',
    descriptionEnglish: 'Free diagnostic screening, essential medicine distribution, eye checkups, and naturopathy lifestyle counseling.',
  },
  {
    id: 'vidyalaya-education',
    titleHindi: 'संस्कार युक्त बाल शिक्षा एवं वेद विद्यालय',
    titleEnglish: 'Value-Based Child Education & Vidyalaya',
    category: 'education',
    categoryLabelHindi: 'बाल शिक्षा',
    categoryLabelEnglish: 'Education Support',
    locationHindi: 'ट्रस्ट विद्यापीठ, मुजफ्फरनगर',
    locationEnglish: 'Trust Vidyapeeth, Muzaffarnagar',
    imagePath: '/images/activities/vidyalaya-education.png',
    descriptionHindi: 'मेधावी एवं आर्थिक रूप से निर्बल बच्चों को आधुनिक शिक्षा, पाठ्य-सामग्री वितरण तथा भारतीय सांस्कृतिक व नैतिक संस्कारों का शिक्षण।',
    descriptionEnglish: 'Equipping underprivileged students with modern academic kits, scholarships, and ethical value-based upbringing.',
  },
  {
    id: 'vriddh-ashram',
    titleHindi: 'निराश्रित वृद्धजन सेवा एवं संबल प्रकल्प',
    titleEnglish: 'Elderly Care & Compassion Support',
    category: 'eldercare',
    categoryLabelHindi: 'वृद्ध सेवा',
    categoryLabelEnglish: 'Elder Care',
    locationHindi: 'वृद्ध कल्याण केंद्र, शुक्रताल',
    locationEnglish: 'Elder Care Center, Shukratal',
    imagePath: '/images/activities/vriddh-ashram.png',
    descriptionHindi: 'परित्यक्त एवं असहाय वृद्धजनों के लिए पारिवारिक वात्सल्य, सुरक्षित आश्रय, नियमित स्वास्थ्य देखभाल एवं सत्संग संवाद का प्रबंध।',
    descriptionEnglish: 'Offering loving warmth, respectful shelter, routine geriatric care, and uplifting satsang for solitary senior citizens.',
  },
  {
    id: 'women-empowerment',
    titleHindi: 'महिला स्वावलंबन एवं कौशल विकास केंद्र',
    titleEnglish: 'Women Empowerment & Vocational Training',
    category: 'swavlamban',
    categoryLabelHindi: 'महिला स्वावलंबन',
    categoryLabelEnglish: 'Women Empowerment',
    locationHindi: 'जानसठ एवं निकटवर्ती ग्राम',
    locationEnglish: 'Jansath & Nearby Villages',
    imagePath: '/images/activities/women-empowerment.png',
    descriptionHindi: 'ग्रामीण महिलाओं एवं युवतियों को सिलाई-कढ़ाई, हस्तशिल्प एवं स्वरोजगार का प्रशिक्षण देकर आत्मनिर्भर बनाने का निरंतर प्रयास।',
    descriptionEnglish: 'Empowering rural women with vocational tailoring, craft training, and self-help livelihood skills.',
  },
  {
    id: 'krishi-swavlamban',
    titleHindi: 'मधुमक्खी पालन, पुष्प खेती एवं जैविक कृषि',
    titleEnglish: 'Apiculture, Floriculture & Organic Farming',
    category: 'swavlamban',
    categoryLabelHindi: 'कृषि संवर्धन',
    categoryLabelEnglish: 'Sustainable Farming',
    locationHindi: 'परगना भोकरहेड़ी, मुजफ्फरनगर',
    locationEnglish: 'Pargana Bhokarhedi, Muzaffarnagar',
    imagePath: '/images/activities/krishi-swavlamban.png',
    descriptionHindi: 'किसानों की आय संवर्धन हेतु मधुमक्खी पालन (एपीकल्चर), व्यावसायिक पुष्प खेती तथा मशरूम उत्पादन का व्यावहारिक प्रशिक्षण।',
    descriptionEnglish: 'Training rural youth in profitable apiculture, commercial floriculture, and organic mushroom farming.',
  },
];
