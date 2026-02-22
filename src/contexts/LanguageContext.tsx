import { createContext, useContext, useState, ReactNode } from "react";

export type Language = "sq" | "en" | "it";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  sq: {
    // Header
    "nav.home": "Kryefaqja",
    "nav.about": "Rreth Nesh",
    "nav.programs": "Programet",
    "nav.news": "Lajme",
    "nav.contact": "Kontakt",
    "nav.apply": "Apliko Tani",
    "nav.studentGov": "Qeveria e Nxënësve",
    "nav.heritage": "Trashëgimia",
    
    // Hero
    "hero.badge": "Që nga viti 1925 • 100 vjet tradite",
    "hero.title1": "Gjimnazi",
    "hero.title2": "Qemal Stafa",
    "hero.subtitle": "Një nga institucionet më prestigjioze arsimore të Shqipërisë, duke formuar liderë të së ardhmes përmes ekselencës akademike dhe vlerave të forta.",
    "hero.discoverPrograms": "Zbulo Programet",
    "hero.learnMore": "Mëso Më Shumë",
    "hero.students": "Studentë Aktivë",
    "hero.teachers": "Mësues të Kualifikuar",
    "hero.clubs": "Klube dhe Aktivitete",
    "hero.ranking": "Shkolla në Shqipëri",
    
    // About
    "about.badge": "Rreth Nesh",
    "about.title1": "Një Traditë",
    "about.title2": "Ekselence",
    "about.description": "Gjimnazi \"Qemal Stafa\" është themeluar në vitin 1925 dhe ka qenë gjithmonë një vatër e dijes dhe kulturës për brezat e rinj shqiptarë.",
    "about.mission": "Formojmë Liderët e së Ardhmes",
    "about.missionDesc": "Me mbi një shekull përvojë, Gjimnazi \"Qemal Stafa\" ka prodhuar disa nga mendjet më të shkëlqyera të Shqipërisë. Misioni ynë është të ofrojmë një arsim cilësor që përgatit studentët për sfidat e së ardhmes.",
    "about.achievement1": "Projekte inovative dhe teknologjike",
    "about.achievement2": "Aktivitetet kulturore dhe sportive",
    "about.achievement3": "Pjesëmarrje dhe suksese në olimpiada",
    "about.achievement4": "Performancë e lartë akademike",
    "about.successRate": "Shkallë Suksesi",
    "about.clubsActivities": "Klube & Aktivitete",
    "about.partnerCountries": "Vende Partnere",
    "about.excellence": "Ekselencë Akademike",
    "about.excellenceDesc": "Përkushtim i plotë ndaj standardeve më të larta arsimore dhe rezultateve të shkëlqyera.",
    "about.values": "Vlera të Forta",
    "about.valuesDesc": "Kultivimi i integritetit, respektit dhe përgjegjësisë tek çdo student.",
    "about.innovation": "Inovacion",
    "about.innovationDesc": "Përqafimi i metodave moderne të mësimdhënies dhe teknologjisë së avancuar.",
    
    // Student Government
    "studentGov.badge": "Lidershipi Studentor",
    "studentGov.title1": "Qeveria e",
    "studentGov.title2": "Nxënësve",
    "studentGov.description": "Qeveria e Nxënësve përfaqëson zërin e studentëve dhe punon për të përmirësuar jetën shkollore.",
    
    // Heritage
    "heritage.badge": "Trashëgimia Jonë",
    "heritage.title1": "Historia dhe",
    "heritage.title2": "Sukseset",
    "heritage.description": "Zbuloni historinë e pasur dhe arritjet e jashtëzakonshme të Gjimnazit \"Qemal Stafa\" përgjatë 100 viteve.",
    "heritage.history": "Historia e Shkollës",
    "heritage.historyDesc": "Themeluar në vitin 1925, Gjimnazi \"Qemal Stafa\" është një nga institucionet arsimore më të vjetra dhe më prestigjioze në Shqipëri.",
    "heritage.museum": "Muzeu i Shkollës",
    "heritage.museumDesc": "Muzeu ynë ruan artifakte historike, dokumente të rëndësishme dhe kujtime nga 100 vjet histori.",
    "heritage.awards": "Çmime dhe Njohje",
    "heritage.awardsDesc": "Gjimnazi \"Qemal Stafa\" ka fituar shumë çmime kombëtare dhe ndërkombëtare për ekselencën akademike.",
    
    // Programs
    "programs.badge": "Programet Tona",
    "programs.title1": "Zbulo",
    "programs.title2": "Profilet Akademike",
    "programs.description": "Ofrojmë një gamë të gjerë profilesh që u përshtaten interesave dhe aspiratave të çdo studenti.",
    "programs.viewProfile": "Shiko Profilin",
    "programs.viewAll": "Shiko të Gjitha Programet",
    "programs.natyror": "Profili Natyror",
    "programs.natyrorDesc": "Fizikë, Kimi, Biologji dhe Matematikë e avancuar për studentët që aspirojnë karrierë në shkenca.",
    "programs.matematike": "Profili Matematikë-Informatikë",
    "programs.matematikDesc": "Fokus në matematikë të thelluar dhe shkenca kompjuterike për liderët e teknologjisë.",
    "programs.shoqeror": "Profili Shoqëror",
    "programs.shoqerorDesc": "Histori, Gjeografi dhe Shkenca Sociale për të kuptuar botën që na rrethon.",
    "programs.gjuhe": "Gjuhë të Huaja",
    "programs.gjuheDesc": "Anglisht, Frëngjisht, Gjermanisht dhe Italisht me mësues native.",
    "programs.arte": "Arte & Muzikë",
    "programs.arteDesc": "Programe kreative për zhvillimin e talenteve artistike dhe muzikore.",
    
    // News
    "news.badge": "Lajme & Ngjarje",
    "news.title1": "Lajmet e Fundit nga",
    "news.title2": "Gjimnazi Ynë",
    "news.description": "Qëndroni të informuar me lajmet dhe ngjarjet më të fundit nga komuniteti ynë.",
    "news.upcoming": "Ngjarje të Ardhshme",
    "news.viewCalendar": "Shiko Kalendarin",
    "news.100vjetori": "100 Vjetori i Shkollës Tonë",
    "news.100vjetoriDesc": "Festojmë 100 vjetorin e themelimit të Gjimnazit Qemal Stafa me aktivitete të shumta dhe festime të veçanta.",
    "news.robot": "Krijimi i një roboti për 100 vjetorin e shkollës",
    "news.robotDesc": "Shkolla jonë ka bërë hapat e saj të parë drejt botës së robotikës, duke ndërtuar me sukses robotin tonë të parë.",
    "news.festival": "Festivali i Shkencës",
    "news.festivalDesc": "Mësuesit tanë përfaqësuan shkollën në Science on Stage Festival, duke sjellë ide inovative.",
    "news.anniversary": "Përvjetor",
    "news.event": "Ngjarje",
    "news.collaboration": "Bashkëpunim",
    "news.fieldMeeting": "Takim me njerëz të fushave",
    "news.openDay": "Dita e Hapur për Prindërit",
    "news.debate": "Konkursi i Debatit",
    
    // Contact
    "contact.badge": "Na Kontaktoni",
    "contact.title1": "Jemi Këtu për",
    "contact.title2": "Ju",
    "contact.description": "Keni pyetje? Na kontaktoni dhe do të ju përgjigjemi sa më shpejt të jetë e mundur.",
    "contact.sendMessage": "Dërgoni një Mesazh",
    "contact.name": "Emri",
    "contact.lastName": "Mbiemri",
    "contact.email": "Email",
    "contact.subject": "Subjekti",
    "contact.message": "Mesazhi",
    "contact.namePlaceholder": "Emri juaj",
    "contact.lastNamePlaceholder": "Mbiemri juaj",
    "contact.emailPlaceholder": "email@shembull.com",
    "contact.subjectPlaceholder": "Si mund të ju ndihmojmë?",
    "contact.messagePlaceholder": "Shkruani mesazhin tuaj këtu...",
    "contact.send": "Dërgo Mesazhin",
    "contact.address": "Adresa",
    "contact.required": "Ju lutem plotësoni të gjitha fushat e detyrueshme",
    "contact.opening": "Po hapet klienti i email-it tuaj...",
    
    // Footer
    "footer.description": "Formojmë liderët e së ardhmes përmes ekselencës akademike dhe vlerave të forta që nga viti 1925.",
    "footer.quickLinks": "Lidhje të Shpejta",
    "footer.resources": "Burime",
    "footer.subscribe": "Abonohu",
    "footer.subscribeDesc": "Merrni lajmet e fundit direkt në emailin tuaj.",
    "footer.emailPlaceholder": "Email juaj",
    "footer.send": "Dërgo",
    "footer.rights": "Të gjitha të drejtat e rezervuara.",
    "footer.privacy": "Privatësia",
    "footer.terms": "Kushtet",
    "footer.accessibility": "Aksesueshmëria",
    "footer.academicCalendar": "Kalendari Akademik",
    "footer.library": "Biblioteka",
    "footer.studentPortal": "Portali i Studentëve",
    "footer.careers": "Karriera",
  },
  en: {
    // Header
    "nav.home": "Home",
    "nav.about": "About Us",
    "nav.programs": "Programs",
    "nav.news": "News",
    "nav.contact": "Contact",
    "nav.apply": "Apply Now",
    "nav.studentGov": "Student Government",
    "nav.heritage": "Heritage",
    
    // Hero
    "hero.badge": "Since 1925 • 100 years of tradition",
    "hero.title1": "High School",
    "hero.title2": "Qemal Stafa",
    "hero.subtitle": "One of Albania's most prestigious educational institutions, shaping future leaders through academic excellence and strong values.",
    "hero.discoverPrograms": "Discover Programs",
    "hero.learnMore": "Learn More",
    "hero.students": "Active Students",
    "hero.teachers": "Qualified Teachers",
    "hero.clubs": "Clubs and Activities",
    "hero.ranking": "School in Albania",
    
    // About
    "about.badge": "About Us",
    "about.title1": "A Tradition of",
    "about.title2": "Excellence",
    "about.description": "\"Qemal Stafa\" High School was founded in 1925 and has always been a center of knowledge and culture for young Albanian generations.",
    "about.mission": "Shaping Future Leaders",
    "about.missionDesc": "With over a century of experience, \"Qemal Stafa\" High School has produced some of Albania's brightest minds. Our mission is to provide quality education that prepares students for future challenges.",
    "about.achievement1": "Innovative and technological projects",
    "about.achievement2": "Cultural and sports activities",
    "about.achievement3": "Participation and success in olympiads",
    "about.achievement4": "High academic performance",
    "about.successRate": "Success Rate",
    "about.clubsActivities": "Clubs & Activities",
    "about.partnerCountries": "Partner Countries",
    "about.excellence": "Academic Excellence",
    "about.excellenceDesc": "Full commitment to the highest educational standards and excellent results.",
    "about.values": "Strong Values",
    "about.valuesDesc": "Cultivating integrity, respect and responsibility in every student.",
    "about.innovation": "Innovation",
    "about.innovationDesc": "Embracing modern teaching methods and advanced technology.",
    
    // Student Government
    "studentGov.badge": "Student Leadership",
    "studentGov.title1": "Student",
    "studentGov.title2": "Government",
    "studentGov.description": "The Student Government represents the voice of students and works to improve school life.",
    
    // Heritage
    "heritage.badge": "Our Heritage",
    "heritage.title1": "History and",
    "heritage.title2": "Achievements",
    "heritage.description": "Discover the rich history and extraordinary achievements of \"Qemal Stafa\" High School over 100 years.",
    "heritage.history": "School History",
    "heritage.historyDesc": "Founded in 1925, \"Qemal Stafa\" High School is one of the oldest and most prestigious educational institutions in Albania.",
    "heritage.museum": "School Museum",
    "heritage.museumDesc": "Our museum preserves historical artifacts, important documents and memories from 100 years of history.",
    "heritage.awards": "Awards and Recognition",
    "heritage.awardsDesc": "\"Qemal Stafa\" High School has won many national and international awards for academic excellence.",
    
    // Programs
    "programs.badge": "Our Programs",
    "programs.title1": "Discover",
    "programs.title2": "Academic Profiles",
    "programs.description": "We offer a wide range of profiles tailored to the interests and aspirations of every student.",
    "programs.viewProfile": "View Profile",
    "programs.viewAll": "View All Programs",
    "programs.natyror": "Natural Sciences",
    "programs.natyrorDesc": "Physics, Chemistry, Biology and advanced Mathematics for students aspiring to careers in sciences.",
    "programs.matematike": "Mathematics-Informatics",
    "programs.matematikDesc": "Focus on advanced mathematics and computer science for technology leaders.",
    "programs.shoqeror": "Social Sciences",
    "programs.shoqerorDesc": "History, Geography and Social Sciences to understand the world around us.",
    "programs.gjuhe": "Foreign Languages",
    "programs.gjuheDesc": "English, French, German and Italian with native teachers.",
    "programs.arte": "Arts & Music",
    "programs.arteDesc": "Creative programs for developing artistic and musical talents.",
    
    // News
    "news.badge": "News & Events",
    "news.title1": "Latest News from",
    "news.title2": "Our School",
    "news.description": "Stay informed with the latest news and events from our community.",
    "news.upcoming": "Upcoming Events",
    "news.viewCalendar": "View Calendar",
    "news.100vjetori": "100th Anniversary of Our School",
    "news.100vjetoriDesc": "Celebrating the 100th anniversary of Qemal Stafa High School with numerous activities and special celebrations.",
    "news.robot": "Building a Robot for the School's 100th Anniversary",
    "news.robotDesc": "Our school has taken its first steps into the world of robotics, successfully building our first robot.",
    "news.festival": "Science Festival",
    "news.festivalDesc": "Our teachers represented the school at the Science on Stage Festival, bringing innovative ideas.",
    "news.anniversary": "Anniversary",
    "news.event": "Event",
    "news.collaboration": "Collaboration",
    "news.fieldMeeting": "Meeting with Field Professionals",
    "news.openDay": "Open Day for Parents",
    "news.debate": "Debate Competition",
    
    // Contact
    "contact.badge": "Contact Us",
    "contact.title1": "We Are Here for",
    "contact.title2": "You",
    "contact.description": "Have questions? Contact us and we will respond as soon as possible.",
    "contact.sendMessage": "Send a Message",
    "contact.name": "Name",
    "contact.lastName": "Last Name",
    "contact.email": "Email",
    "contact.subject": "Subject",
    "contact.message": "Message",
    "contact.namePlaceholder": "Your name",
    "contact.lastNamePlaceholder": "Your last name",
    "contact.emailPlaceholder": "email@example.com",
    "contact.subjectPlaceholder": "How can we help you?",
    "contact.messagePlaceholder": "Write your message here...",
    "contact.send": "Send Message",
    "contact.address": "Address",
    "contact.required": "Please fill in all required fields",
    "contact.opening": "Opening your email client...",
    
    // Footer
    "footer.description": "Shaping future leaders through academic excellence and strong values since 1925.",
    "footer.quickLinks": "Quick Links",
    "footer.resources": "Resources",
    "footer.subscribe": "Subscribe",
    "footer.subscribeDesc": "Get the latest news directly to your email.",
    "footer.emailPlaceholder": "Your email",
    "footer.send": "Send",
    "footer.rights": "All rights reserved.",
    "footer.privacy": "Privacy",
    "footer.terms": "Terms",
    "footer.accessibility": "Accessibility",
    "footer.academicCalendar": "Academic Calendar",
    "footer.library": "Library",
    "footer.studentPortal": "Student Portal",
    "footer.careers": "Careers",
  },
  it: {
    // Header
    "nav.home": "Home",
    "nav.about": "Chi Siamo",
    "nav.programs": "Programmi",
    "nav.news": "Notizie",
    "nav.contact": "Contatti",
    "nav.apply": "Iscriviti Ora",
    "nav.studentGov": "Governo Studentesco",
    "nav.heritage": "Patrimonio",
    
    // Hero
    "hero.badge": "Dal 1925 • 100 anni di tradizione",
    "hero.title1": "Liceo",
    "hero.title2": "Qemal Stafa",
    "hero.subtitle": "Una delle istituzioni educative più prestigiose dell'Albania, che forma i leader del futuro attraverso l'eccellenza accademica e valori forti.",
    "hero.discoverPrograms": "Scopri i Programmi",
    "hero.learnMore": "Scopri di Più",
    "hero.students": "Studenti Attivi",
    "hero.teachers": "Insegnanti Qualificati",
    "hero.clubs": "Club e Attività",
    "hero.ranking": "Scuola in Albania",
    
    // About
    "about.badge": "Chi Siamo",
    "about.title1": "Una Tradizione di",
    "about.title2": "Eccellenza",
    "about.description": "Il Liceo \"Qemal Stafa\" è stato fondato nel 1925 ed è sempre stato un centro di conoscenza e cultura per le giovani generazioni albanesi.",
    "about.mission": "Formiamo i Leader del Futuro",
    "about.missionDesc": "Con oltre un secolo di esperienza, il Liceo \"Qemal Stafa\" ha prodotto alcune delle menti più brillanti dell'Albania. La nostra missione è fornire un'istruzione di qualità che prepari gli studenti alle sfide future.",
    "about.achievement1": "Progetti innovativi e tecnologici",
    "about.achievement2": "Attività culturali e sportive",
    "about.achievement3": "Partecipazione e successi alle olimpiadi",
    "about.achievement4": "Alta performance accademica",
    "about.successRate": "Tasso di Successo",
    "about.clubsActivities": "Club & Attività",
    "about.partnerCountries": "Paesi Partner",
    "about.excellence": "Eccellenza Accademica",
    "about.excellenceDesc": "Pieno impegno verso i più alti standard educativi e risultati eccellenti.",
    "about.values": "Valori Forti",
    "about.valuesDesc": "Coltivare integrità, rispetto e responsabilità in ogni studente.",
    "about.innovation": "Innovazione",
    "about.innovationDesc": "Abbracciare metodi di insegnamento moderni e tecnologia avanzata.",
    
    // Student Government
    "studentGov.badge": "Leadership Studentesca",
    "studentGov.title1": "Governo",
    "studentGov.title2": "Studentesco",
    "studentGov.description": "Il Governo Studentesco rappresenta la voce degli studenti e lavora per migliorare la vita scolastica.",
    
    // Heritage
    "heritage.badge": "Il Nostro Patrimonio",
    "heritage.title1": "Storia e",
    "heritage.title2": "Successi",
    "heritage.description": "Scopri la ricca storia e gli straordinari successi del Liceo \"Qemal Stafa\" in 100 anni.",
    "heritage.history": "Storia della Scuola",
    "heritage.historyDesc": "Fondato nel 1925, il Liceo \"Qemal Stafa\" è una delle istituzioni educative più antiche e prestigiose dell'Albania.",
    "heritage.museum": "Museo della Scuola",
    "heritage.museumDesc": "Il nostro museo conserva manufatti storici, documenti importanti e ricordi di 100 anni di storia.",
    "heritage.awards": "Premi e Riconoscimenti",
    "heritage.awardsDesc": "Il Liceo \"Qemal Stafa\" ha vinto molti premi nazionali e internazionali per l'eccellenza accademica.",
    
    // Programs
    "programs.badge": "I Nostri Programmi",
    "programs.title1": "Scopri i",
    "programs.title2": "Profili Accademici",
    "programs.description": "Offriamo una vasta gamma di profili adatti agli interessi e alle aspirazioni di ogni studente.",
    "programs.viewProfile": "Vedi Profilo",
    "programs.viewAll": "Vedi Tutti i Programmi",
    "programs.natyror": "Scienze Naturali",
    "programs.natyrorDesc": "Fisica, Chimica, Biologia e Matematica avanzata per studenti che aspirano a carriere nelle scienze.",
    "programs.matematike": "Matematica-Informatica",
    "programs.matematikDesc": "Focus su matematica avanzata e informatica per i leader della tecnologia.",
    "programs.shoqeror": "Scienze Sociali",
    "programs.shoqerorDesc": "Storia, Geografia e Scienze Sociali per comprendere il mondo che ci circonda.",
    "programs.gjuhe": "Lingue Straniere",
    "programs.gjuheDesc": "Inglese, Francese, Tedesco e Italiano con insegnanti madrelingua.",
    "programs.arte": "Arte & Musica",
    "programs.arteDesc": "Programmi creativi per lo sviluppo di talenti artistici e musicali.",
    
    // News
    "news.badge": "Notizie & Eventi",
    "news.title1": "Ultime Notizie dalla",
    "news.title2": "Nostra Scuola",
    "news.description": "Rimani informato con le ultime notizie ed eventi dalla nostra comunità.",
    "news.upcoming": "Prossimi Eventi",
    "news.viewCalendar": "Vedi Calendario",
    "news.100vjetori": "100° Anniversario della Nostra Scuola",
    "news.100vjetoriDesc": "Celebriamo il 100° anniversario del Liceo Qemal Stafa con numerose attività e celebrazioni speciali.",
    "news.robot": "Costruzione di un Robot per il 100° Anniversario",
    "news.robotDesc": "La nostra scuola ha fatto i primi passi nel mondo della robotica, costruendo con successo il nostro primo robot.",
    "news.festival": "Festival della Scienza",
    "news.festivalDesc": "I nostri insegnanti hanno rappresentato la scuola al Science on Stage Festival, portando idee innovative.",
    "news.anniversary": "Anniversario",
    "news.event": "Evento",
    "news.collaboration": "Collaborazione",
    "news.fieldMeeting": "Incontro con Professionisti",
    "news.openDay": "Giornata Aperta per Genitori",
    "news.debate": "Gara di Dibattito",
    
    // Contact
    "contact.badge": "Contattaci",
    "contact.title1": "Siamo Qui per",
    "contact.title2": "Te",
    "contact.description": "Hai domande? Contattaci e ti risponderemo il prima possibile.",
    "contact.sendMessage": "Invia un Messaggio",
    "contact.name": "Nome",
    "contact.lastName": "Cognome",
    "contact.email": "Email",
    "contact.subject": "Oggetto",
    "contact.message": "Messaggio",
    "contact.namePlaceholder": "Il tuo nome",
    "contact.lastNamePlaceholder": "Il tuo cognome",
    "contact.emailPlaceholder": "email@esempio.com",
    "contact.subjectPlaceholder": "Come possiamo aiutarti?",
    "contact.messagePlaceholder": "Scrivi il tuo messaggio qui...",
    "contact.send": "Invia Messaggio",
    "contact.address": "Indirizzo",
    "contact.required": "Compila tutti i campi obbligatori",
    "contact.opening": "Apertura del client email...",
    
    // Footer
    "footer.description": "Formiamo i leader del futuro attraverso l'eccellenza accademica e valori forti dal 1925.",
    "footer.quickLinks": "Link Rapidi",
    "footer.resources": "Risorse",
    "footer.subscribe": "Iscriviti",
    "footer.subscribeDesc": "Ricevi le ultime notizie direttamente nella tua email.",
    "footer.emailPlaceholder": "La tua email",
    "footer.send": "Invia",
    "footer.rights": "Tutti i diritti riservati.",
    "footer.privacy": "Privacy",
    "footer.terms": "Termini",
    "footer.accessibility": "Accessibilità",
    "footer.academicCalendar": "Calendario Accademico",
    "footer.library": "Biblioteca",
    "footer.studentPortal": "Portale Studenti",
    "footer.careers": "Carriere",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("sq");

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
