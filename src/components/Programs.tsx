import { useState } from "react";
import { FlaskConical, Calculator, Globe, Palette, BookText, ArrowRight, ChevronDown, GraduationCap, Briefcase, BookOpen, Image, Users, Target, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import natyrorImage from "@/assets/profile-natyror.jpg";
import matematikeImage from "@/assets/profile-matematike.jpg";
import shoqerorImage from "@/assets/profile-shoqeror.jpg";
import gjuheImage from "@/assets/profile-gjuhe.jpg";
import arteImage from "@/assets/profile-arte.jpg";

const yearTranslations = {
  sq: {
    menu: "Menu",
    year1: "Viti 1",
    year2: "Viti 2",
    year3: "Viti 3",
    year1Title: "Viti i Parë - Bazat e Gjimnazit",
    year1Desc: "Ndërtimi i bazave akademike dhe përshtatja në jetën e gjimnazit",
    year2Title: "Viti i Dytë - Zhvillim & Aktivitete",
    year2Desc: "Zhvillimi i aftësive dhe karrierës me aktivitete të ndryshme",
    year3Title: "Viti i Tretë - Përgatitja për Maturën",
    year3Desc: "Fokusimi në suksesin akademik dhe përgatitjen për të ardhmen",
    foundation: "Bazat Akademike",
    foundationDesc: "Lëndët themelore për të gjitha profilet",
    foundationDetails: [
      "Matematikë - Algjebër dhe gjeometri themelore",
      "Gjuhë Shqipe - Gramatikë dhe letërsi",
      "Gjuhë e Huaj - Anglisht ose gjuhë tjetër",
      "Fizikë - Konceptet bazë të mekanikës",
      "Kimi - Hyrje në kiminë inorganike",
      "Biologji - Bazat e biologjisë qelizore",
      "Histori - Historia e Shqipërisë dhe botës",
      "Gjeografi - Gjeografia fizike dhe humane"
    ],
    adaptation: "Përshtatja në Gjimnaz",
    adaptationDesc: "Mbështetje për nxënësit e rinj",
    adaptationDetails: [
      "Orientim dhe tur i shkollës",
      "Takime me këshilltarët akademikë",
      "Grupe studimi dhe mbështetje",
      "Aktivitete integruese sociale",
      "Workshop-e për menaxhimin e kohës",
      "Mbështetje psikologjike",
      "Mentorimi nga nxënës të viteve më të larta"
    ],
    activities: "Aktivitete",
    activitiesDesc: "Aktivitete sportive, kulturore dhe sociale",
    activitiesDetails: [
      "Futboll, basketboll, volejboll",
      "Klube debati dhe oratori",
      "Grup teatri dhe arte",
      "Kor dhe orkestër shkollore",
      "Ekskursione edukative",
      "Konkurse ndër-shkollore",
      "Projekte vullnetarizmi",
      "Festivale kulturore"
    ],
    careerCounseling: "Këshillimi i Karrierës",
    careerCounselingDesc: "Orientim profesional dhe planifikim karriere",
    careerCounselingDetails: [
      "Teste për zbulimin e talenteve",
      "Takime individuale me këshilltarë",
      "Prezantime të profesioneve të ndryshme",
      "Vizita në universitete dhe kompani",
      "Workshop-e për CV dhe intervista",
      "Panaire pune dhe karriere",
      "Mbështetje për zgjedhjen e profilit"
    ],
    maturaPrep: "Përgatitje për Maturën",
    maturaPrepDesc: "Kursë përgatitore dhe simulime provimesh",
    maturaPrepDetails: [
      "Kurse intensive për lëndët e maturës",
      "Simulime provimesh çdo muaj",
      "Materiale studimi të përditësuara",
      "Konsultime individuale me mësues",
      "Strategji për menaxhimin e stresit",
      "Analiza e provimeve të viteve të kaluara",
      "Grupe studimi të organizuara"
    ],
    universityPrep: "Përgatitje për Universitet",
    universityPrepDesc: "Udhëzim për aplikimet universitare",
    universityPrepDetails: [
      "Informacion për universitetet shqiptare",
      "Udhëzim për aplikimet jashtë vendit",
      "Përgatitje për TOEFL/IELTS",
      "Mbështetje për dokumentacionin",
      "Letra rekomandimi",
      "Bursa dhe mundësi financimi",
      "Takime me përfaqësues universitetesh"
    ],
    photoGallery: "Galeria e Fotove",
    clickToExpand: "Kliko për më shumë detaje",
  },
  en: {
    menu: "Menu",
    year1: "Year 1",
    year2: "Year 2",
    year3: "Year 3",
    year1Title: "First Year - Gymnasium Foundations",
    year1Desc: "Building academic foundations and adapting to gymnasium life",
    year2Title: "Second Year - Development & Activities",
    year2Desc: "Developing skills and career with various activities",
    year3Title: "Third Year - Matura Preparation",
    year3Desc: "Focusing on academic success and future preparation",
    foundation: "Academic Foundations",
    foundationDesc: "Core subjects for all profiles",
    foundationDetails: [
      "Mathematics - Fundamental algebra and geometry",
      "Albanian Language - Grammar and literature",
      "Foreign Language - English or another language",
      "Physics - Basic mechanics concepts",
      "Chemistry - Introduction to inorganic chemistry",
      "Biology - Cell biology fundamentals",
      "History - Albanian and world history",
      "Geography - Physical and human geography"
    ],
    adaptation: "Gymnasium Adaptation",
    adaptationDesc: "Support for new students",
    adaptationDetails: [
      "Orientation and school tour",
      "Meetings with academic advisors",
      "Study groups and support",
      "Social integration activities",
      "Time management workshops",
      "Psychological support",
      "Mentoring from senior students"
    ],
    activities: "Activities",
    activitiesDesc: "Sports, cultural and social activities",
    activitiesDetails: [
      "Football, basketball, volleyball",
      "Debate and oratory clubs",
      "Theater and art groups",
      "School choir and orchestra",
      "Educational excursions",
      "Inter-school competitions",
      "Volunteer projects",
      "Cultural festivals"
    ],
    careerCounseling: "Career Counseling",
    careerCounselingDesc: "Professional guidance and career planning",
    careerCounselingDetails: [
      "Talent discovery tests",
      "Individual advisor meetings",
      "Various profession presentations",
      "University and company visits",
      "CV and interview workshops",
      "Job and career fairs",
      "Profile selection support"
    ],
    maturaPrep: "Matura Preparation",
    maturaPrepDesc: "Preparatory courses and exam simulations",
    maturaPrepDetails: [
      "Intensive courses for matura subjects",
      "Monthly exam simulations",
      "Updated study materials",
      "Individual teacher consultations",
      "Stress management strategies",
      "Analysis of past exams",
      "Organized study groups"
    ],
    universityPrep: "University Preparation",
    universityPrepDesc: "Guidance for university applications",
    universityPrepDetails: [
      "Information about Albanian universities",
      "Guidance for abroad applications",
      "TOEFL/IELTS preparation",
      "Documentation support",
      "Recommendation letters",
      "Scholarships and funding opportunities",
      "Meetings with university representatives"
    ],
    photoGallery: "Photo Gallery",
    clickToExpand: "Click for more details",
  },
  it: {
    menu: "Menu",
    year1: "Anno 1",
    year2: "Anno 2",
    year3: "Anno 3",
    year1Title: "Primo Anno - Fondamenti del Liceo",
    year1Desc: "Costruire le basi accademiche e adattarsi alla vita del liceo",
    year2Title: "Secondo Anno - Sviluppo & Attività",
    year2Desc: "Sviluppare competenze e carriera con varie attività",
    year3Title: "Terzo Anno - Preparazione alla Maturità",
    year3Desc: "Concentrarsi sul successo accademico e preparazione futura",
    foundation: "Fondamenti Accademici",
    foundationDesc: "Materie fondamentali per tutti i profili",
    foundationDetails: [
      "Matematica - Algebra e geometria fondamentale",
      "Lingua Albanese - Grammatica e letteratura",
      "Lingua Straniera - Inglese o altra lingua",
      "Fisica - Concetti base di meccanica",
      "Chimica - Introduzione alla chimica inorganica",
      "Biologia - Fondamenti di biologia cellulare",
      "Storia - Storia albanese e mondiale",
      "Geografia - Geografia fisica e umana"
    ],
    adaptation: "Adattamento al Liceo",
    adaptationDesc: "Supporto per i nuovi studenti",
    adaptationDetails: [
      "Orientamento e tour della scuola",
      "Incontri con consulenti accademici",
      "Gruppi di studio e supporto",
      "Attività di integrazione sociale",
      "Workshop sulla gestione del tempo",
      "Supporto psicologico",
      "Mentoring da studenti senior"
    ],
    activities: "Attività",
    activitiesDesc: "Attività sportive, culturali e sociali",
    activitiesDetails: [
      "Calcio, pallacanestro, pallavolo",
      "Club di dibattito e oratoria",
      "Gruppi di teatro e arte",
      "Coro e orchestra scolastica",
      "Escursioni educative",
      "Competizioni inter-scolastiche",
      "Progetti di volontariato",
      "Festival culturali"
    ],
    careerCounseling: "Consulenza Carriera",
    careerCounselingDesc: "Orientamento professionale e pianificazione carriera",
    careerCounselingDetails: [
      "Test di scoperta del talento",
      "Incontri individuali con consulenti",
      "Presentazioni di varie professioni",
      "Visite a università e aziende",
      "Workshop su CV e colloqui",
      "Fiere del lavoro e della carriera",
      "Supporto nella scelta del profilo"
    ],
    maturaPrep: "Preparazione Maturità",
    maturaPrepDesc: "Corsi preparatori e simulazioni d'esame",
    maturaPrepDetails: [
      "Corsi intensivi per le materie di maturità",
      "Simulazioni d'esame mensili",
      "Materiali di studio aggiornati",
      "Consulenze individuali con insegnanti",
      "Strategie per la gestione dello stress",
      "Analisi degli esami passati",
      "Gruppi di studio organizzati"
    ],
    universityPrep: "Preparazione Universitaria",
    universityPrepDesc: "Guida per le domande universitarie",
    universityPrepDetails: [
      "Informazioni sulle università albanesi",
      "Guida per le domande all'estero",
      "Preparazione TOEFL/IELTS",
      "Supporto per la documentazione",
      "Lettere di raccomandazione",
      "Borse di studio e opportunità di finanziamento",
      "Incontri con rappresentanti universitari"
    ],
    photoGallery: "Galleria Fotografica",
    clickToExpand: "Clicca per maggiori dettagli",
  },
};

export const Programs = () => {
  const { t, language } = useLanguage();
  const [activeYear, setActiveYear] = useState<string | null>(null);
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});
  const txt = yearTranslations[language];

  const toggleCard = (cardId: string) => {
    setExpandedCards(prev => ({ ...prev, [cardId]: !prev[cardId] }));
  };

  const programs = [
    {
      icon: FlaskConical,
      titleKey: "programs.natyror",
      descKey: "programs.natyrorDesc",
      subjects: { sq: ["Fizikë", "Kimi", "Biologji", "Matematikë"], en: ["Physics", "Chemistry", "Biology", "Mathematics"], it: ["Fisica", "Chimica", "Biologia", "Matematica"] },
      color: "bg-emerald-500/10 text-emerald-600",
      href: "/profili-natyror",
      image: natyrorImage,
    },
    {
      icon: Calculator,
      titleKey: "programs.matematike",
      descKey: "programs.matematikDesc",
      subjects: { sq: ["Matematikë", "Informatikë", "Programim"], en: ["Mathematics", "Informatics", "Programming"], it: ["Matematica", "Informatica", "Programmazione"] },
      color: "bg-blue-500/10 text-blue-600",
      href: "/profili-matematike",
      image: matematikeImage,
    },
    {
      icon: Globe,
      titleKey: "programs.shoqeror",
      descKey: "programs.shoqerorDesc",
      subjects: { sq: ["Histori", "Gjeografi", "Ekonomi", "Sociologji"], en: ["History", "Geography", "Economics", "Sociology"], it: ["Storia", "Geografia", "Economia", "Sociologia"] },
      color: "bg-amber-500/10 text-amber-600",
      href: "/profili-shoqeror",
      image: shoqerorImage,
    },
    {
      icon: BookText,
      titleKey: "programs.gjuhe",
      descKey: "programs.gjuheDesc",
      subjects: { sq: ["Anglisht", "Frëngjisht", "Gjermanisht", "Italisht"], en: ["English", "French", "German", "Italian"], it: ["Inglese", "Francese", "Tedesco", "Italiano"] },
      color: "bg-purple-500/10 text-purple-600",
      href: "/gjuhe-te-huaja",
      image: gjuheImage,
    },
    {
      icon: Palette,
      titleKey: "programs.arte",
      descKey: "programs.arteDesc",
      subjects: { sq: ["Pikturë", "Skulpturë", "Muzikë", "Teatër"], en: ["Painting", "Sculpture", "Music", "Theater"], it: ["Pittura", "Scultura", "Musica", "Teatro"] },
      color: "bg-rose-500/10 text-rose-600",
      href: "/arte-muzike",
      image: arteImage,
    },
  ];

  const scrollToYear = (yearId: string) => {
    setActiveYear(yearId);
    const element = document.getElementById(yearId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="programs" className="section-padding bg-secondary/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-secondary text-primary font-medium text-sm mb-4">
            {t("programs.badge")}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t("programs.title1")}{" "}
            <span className="text-gradient-gold">{t("programs.title2")}</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            {t("programs.description")}
          </p>
          
          {/* Menu Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="lg" className="bg-primary hover:bg-navy-dark text-primary-foreground font-semibold px-8">
                {txt.menu}
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-48">
              <DropdownMenuItem onClick={() => scrollToYear("year-1")} className="cursor-pointer">
                <BookOpen className="mr-2 h-4 w-4" />
                {txt.year1}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => scrollToYear("year-2")} className="cursor-pointer">
                <Users className="mr-2 h-4 w-4" />
                {txt.year2}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => scrollToYear("year-3")} className="cursor-pointer">
                <GraduationCap className="mr-2 h-4 w-4" />
                {txt.year3}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {programs.map((program) => (
            <Link
              key={program.titleKey}
              to={program.href}
              className="group rounded-2xl bg-card border border-border overflow-hidden card-hover block"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={program.image} 
                  alt={t(program.titleKey)}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className={`absolute top-4 left-4 w-12 h-12 rounded-xl ${program.color} flex items-center justify-center backdrop-blur-sm bg-white/90`}>
                  <program.icon className="w-6 h-6" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {t(program.titleKey)}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {t(program.descKey)}
                </p>

                {/* Subjects Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {program.subjects[language].map((subject) => (
                    <span
                      key={subject}
                      className="px-3 py-1 rounded-full bg-secondary text-xs font-medium text-secondary-foreground"
                    >
                      {subject}
                    </span>
                  ))}
                </div>

                {/* Learn More */}
                <div className="flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all">
                  <span>{t("programs.viewProfile")}</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Year 1 Section */}
        <div id="year-1" className={`scroll-mt-24 py-12 border-t border-border ${activeYear === 'year-1' ? 'bg-blue-50/50 dark:bg-blue-950/20 -mx-4 px-4 rounded-2xl' : ''}`}>
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium text-sm mb-4">
              <BookOpen className="w-4 h-4" />
              {txt.year1}
            </span>
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-2">{txt.year1Title}</h3>
            <p className="text-muted-foreground">{txt.year1Desc}</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Bazat Akademike */}
            <Collapsible open={expandedCards['foundation']} onOpenChange={() => toggleCard('foundation')}>
              <div className="bg-card border border-border rounded-xl overflow-hidden">
                <CollapsibleTrigger className="w-full p-6 text-left hover:bg-secondary/50 transition-colors cursor-pointer">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center mb-4">
                        <BookOpen className="w-6 h-6" />
                      </div>
                      <h4 className="font-semibold text-lg mb-2">{txt.foundation}</h4>
                      <p className="text-muted-foreground text-sm">{txt.foundationDesc}</p>
                      <p className="text-primary text-xs mt-2 flex items-center gap-1">
                        {txt.clickToExpand}
                        {expandedCards['foundation'] ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                      </p>
                    </div>
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="px-6 pb-6 border-t border-border pt-4">
                    <ul className="space-y-2">
                      {txt.foundationDetails.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CollapsibleContent>
              </div>
            </Collapsible>

            {/* Përshtatja në Gjimnaz */}
            <Collapsible open={expandedCards['adaptation']} onOpenChange={() => toggleCard('adaptation')}>
              <div className="bg-card border border-border rounded-xl overflow-hidden">
                <CollapsibleTrigger className="w-full p-6 text-left hover:bg-secondary/50 transition-colors cursor-pointer">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="w-12 h-12 rounded-xl bg-green-500/10 text-green-600 flex items-center justify-center mb-4">
                        <Users className="w-6 h-6" />
                      </div>
                      <h4 className="font-semibold text-lg mb-2">{txt.adaptation}</h4>
                      <p className="text-muted-foreground text-sm">{txt.adaptationDesc}</p>
                      <p className="text-primary text-xs mt-2 flex items-center gap-1">
                        {txt.clickToExpand}
                        {expandedCards['adaptation'] ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                      </p>
                    </div>
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="px-6 pb-6 border-t border-border pt-4">
                    <ul className="space-y-2">
                      {txt.adaptationDetails.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CollapsibleContent>
              </div>
            </Collapsible>
          </div>

          {/* Photo Gallery Year 1 */}
          <div className="mt-8">
            <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <Image className="w-5 h-5 text-blue-600" />
              {txt.photoGallery}
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square bg-secondary/50 rounded-xl border-2 border-dashed border-blue-300 dark:border-blue-700 flex items-center justify-center">
                  <Image className="w-8 h-8 text-blue-400" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Year 2 Section */}
        <div id="year-2" className={`scroll-mt-24 py-12 border-t border-border ${activeYear === 'year-2' ? 'bg-amber-50/50 dark:bg-amber-950/20 -mx-4 px-4 rounded-2xl' : ''}`}>
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 font-medium text-sm mb-4">
              <Users className="w-4 h-4" />
              {txt.year2}
            </span>
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-2">{txt.year2Title}</h3>
            <p className="text-muted-foreground">{txt.year2Desc}</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Aktivitete */}
            <Collapsible open={expandedCards['activities']} onOpenChange={() => toggleCard('activities')}>
              <div className="bg-card border border-border rounded-xl overflow-hidden">
                <CollapsibleTrigger className="w-full p-6 text-left hover:bg-secondary/50 transition-colors cursor-pointer">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center mb-4">
                        <Target className="w-6 h-6" />
                      </div>
                      <h4 className="font-semibold text-lg mb-2">{txt.activities}</h4>
                      <p className="text-muted-foreground text-sm">{txt.activitiesDesc}</p>
                      <p className="text-primary text-xs mt-2 flex items-center gap-1">
                        {txt.clickToExpand}
                        {expandedCards['activities'] ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                      </p>
                    </div>
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="px-6 pb-6 border-t border-border pt-4">
                    <ul className="space-y-2">
                      {txt.activitiesDetails.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CollapsibleContent>
              </div>
            </Collapsible>

            {/* Këshillimi i Karrierës */}
            <Collapsible open={expandedCards['career']} onOpenChange={() => toggleCard('career')}>
              <div className="bg-card border border-border rounded-xl overflow-hidden">
                <CollapsibleTrigger className="w-full p-6 text-left hover:bg-secondary/50 transition-colors cursor-pointer">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-600 flex items-center justify-center mb-4">
                        <Briefcase className="w-6 h-6" />
                      </div>
                      <h4 className="font-semibold text-lg mb-2">{txt.careerCounseling}</h4>
                      <p className="text-muted-foreground text-sm">{txt.careerCounselingDesc}</p>
                      <p className="text-primary text-xs mt-2 flex items-center gap-1">
                        {txt.clickToExpand}
                        {expandedCards['career'] ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                      </p>
                    </div>
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="px-6 pb-6 border-t border-border pt-4">
                    <ul className="space-y-2">
                      {txt.careerCounselingDetails.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CollapsibleContent>
              </div>
            </Collapsible>
          </div>

          {/* Photo Gallery Year 2 */}
          <div className="mt-8">
            <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <Image className="w-5 h-5 text-amber-600" />
              {txt.photoGallery}
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square bg-secondary/50 rounded-xl border-2 border-dashed border-amber-300 dark:border-amber-700 flex items-center justify-center">
                  <Image className="w-8 h-8 text-amber-400" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Year 3 Section */}
        <div id="year-3" className={`scroll-mt-24 py-12 border-t border-border ${activeYear === 'year-3' ? 'bg-emerald-50/50 dark:bg-emerald-950/20 -mx-4 px-4 rounded-2xl' : ''}`}>
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 font-medium text-sm mb-4">
              <GraduationCap className="w-4 h-4" />
              {txt.year3}
            </span>
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-2">{txt.year3Title}</h3>
            <p className="text-muted-foreground">{txt.year3Desc}</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Përgatitje për Maturën */}
            <Collapsible open={expandedCards['matura']} onOpenChange={() => toggleCard('matura')}>
              <div className="bg-card border border-border rounded-xl overflow-hidden">
                <CollapsibleTrigger className="w-full p-6 text-left hover:bg-secondary/50 transition-colors cursor-pointer">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center mb-4">
                        <GraduationCap className="w-6 h-6" />
                      </div>
                      <h4 className="font-semibold text-lg mb-2">{txt.maturaPrep}</h4>
                      <p className="text-muted-foreground text-sm">{txt.maturaPrepDesc}</p>
                      <p className="text-primary text-xs mt-2 flex items-center gap-1">
                        {txt.clickToExpand}
                        {expandedCards['matura'] ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                      </p>
                    </div>
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="px-6 pb-6 border-t border-border pt-4">
                    <ul className="space-y-2">
                      {txt.maturaPrepDetails.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CollapsibleContent>
              </div>
            </Collapsible>

            {/* Përgatitje për Universitet */}
            <Collapsible open={expandedCards['university']} onOpenChange={() => toggleCard('university')}>
              <div className="bg-card border border-border rounded-xl overflow-hidden">
                <CollapsibleTrigger className="w-full p-6 text-left hover:bg-secondary/50 transition-colors cursor-pointer">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-600 flex items-center justify-center mb-4">
                        <BookOpen className="w-6 h-6" />
                      </div>
                      <h4 className="font-semibold text-lg mb-2">{txt.universityPrep}</h4>
                      <p className="text-muted-foreground text-sm">{txt.universityPrepDesc}</p>
                      <p className="text-primary text-xs mt-2 flex items-center gap-1">
                        {txt.clickToExpand}
                        {expandedCards['university'] ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                      </p>
                    </div>
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="px-6 pb-6 border-t border-border pt-4">
                    <ul className="space-y-2">
                      {txt.universityPrepDetails.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CollapsibleContent>
              </div>
            </Collapsible>
          </div>

          {/* Photo Gallery Year 3 */}
          <div className="mt-8">
            <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <Image className="w-5 h-5 text-emerald-600" />
              {txt.photoGallery}
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square bg-secondary/50 rounded-xl border-2 border-dashed border-emerald-300 dark:border-emerald-700 flex items-center justify-center">
                  <Image className="w-8 h-8 text-emerald-400" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
