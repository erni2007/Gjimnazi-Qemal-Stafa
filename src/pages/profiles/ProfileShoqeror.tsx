import { ArrowLeft, Globe, BookOpen, Trophy, CheckCircle, MessageSquare, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const translations = {
  sq: {
    back: "Kthehu te Profilet",
    badge: "Profil Akademik",
    title: "Profili Shoqëror",
    subtitle: "Histori, Gjeografi dhe Shkenca Sociale për të kuptuar botën dhe shoqërinë që na rrethon.",
    overview: "Përmbledhje",
    overviewText: "Profili Shoqëror ofron një edukim të gjerë në shkencat sociale, duke përfshirë historinë, gjeografinë, ekonominë dhe sociologjinë. Ky profil përgatit studentët për të kuptuar dinamikat e shoqërisë, politikës dhe ekonomisë, duke krijuar bazën për karriera në diplomaci, drejtësi, gazetari dhe administrim publik.",
    curriculum: "Kurrikula e Plotë",
    careers: "Mundësi Karriere",
    activities: "Aktivitete në Klasë",
    gallery: "Galeria e Profilet",
    history: "Histori",
    historyHours: "4 orë/javë",
    historyDesc: "Historia botërore dhe shqiptare",
    geography: "Gjeografi",
    geographyHours: "3 orë/javë",
    geographyDesc: "Gjeografi fizike dhe humane",
    economics: "Ekonomi",
    economicsHours: "3 orë/javë",
    economicsDesc: "Bazat e ekonomisë dhe financës",
    sociology: "Sociologji",
    sociologyHours: "2 orë/javë",
    sociologyDesc: "Struktura sociale dhe kulturore",
    act1: "Debate dhe diskutime",
    act1Desc: "Analiza të temave sociale",
    act2: "Simulime OKB",
    act2Desc: "Model United Nations",
    act3: "Vizita në institucione",
    act3Desc: "Parlamenti, Gjykata, etj.",
    act4: "Projekte kërkimore",
    act4Desc: "Studime sociologjike dhe historike",
  },
  en: {
    back: "Back to Profiles",
    badge: "Academic Profile",
    title: "Social Sciences",
    subtitle: "History, Geography and Social Sciences to understand the world and society around us.",
    overview: "Overview",
    overviewText: "The Social Sciences profile offers a broad education in social sciences, including history, geography, economics, and sociology. This profile prepares students to understand the dynamics of society, politics, and economics, creating the foundation for careers in diplomacy, law, journalism, and public administration.",
    curriculum: "Full Curriculum",
    careers: "Career Opportunities",
    activities: "Classroom Activities",
    gallery: "Profile Gallery",
    history: "History",
    historyHours: "4 hours/week",
    historyDesc: "World and Albanian history",
    geography: "Geography",
    geographyHours: "3 hours/week",
    geographyDesc: "Physical and human geography",
    economics: "Economics",
    economicsHours: "3 hours/week",
    economicsDesc: "Economics and finance basics",
    sociology: "Sociology",
    sociologyHours: "2 hours/week",
    sociologyDesc: "Social and cultural structures",
    act1: "Debates and discussions",
    act1Desc: "Analysis of social topics",
    act2: "UN Simulations",
    act2Desc: "Model United Nations",
    act3: "Institution visits",
    act3Desc: "Parliament, Courts, etc.",
    act4: "Research projects",
    act4Desc: "Sociological and historical studies",
  },
  it: {
    back: "Torna ai Profili",
    badge: "Profilo Accademico",
    title: "Scienze Sociali",
    subtitle: "Storia, Geografia e Scienze Sociali per comprendere il mondo e la società che ci circonda.",
    overview: "Panoramica",
    overviewText: "Il profilo Scienze Sociali offre un'ampia formazione nelle scienze sociali, tra cui storia, geografia, economia e sociologia. Questo profilo prepara gli studenti a comprendere le dinamiche della società, della politica e dell'economia, creando le basi per carriere nella diplomazia, nel diritto, nel giornalismo e nella pubblica amministrazione.",
    curriculum: "Curriculum Completo",
    careers: "Opportunità di Carriera",
    activities: "Attività in Classe",
    gallery: "Galleria del Profilo",
    history: "Storia",
    historyHours: "4 ore/settimana",
    historyDesc: "Storia mondiale e albanese",
    geography: "Geografia",
    geographyHours: "3 ore/settimana",
    geographyDesc: "Geografia fisica e umana",
    economics: "Economia",
    economicsHours: "3 ore/settimana",
    economicsDesc: "Fondamenti di economia e finanza",
    sociology: "Sociologia",
    sociologyHours: "2 ore/settimana",
    sociologyDesc: "Strutture sociali e culturali",
    act1: "Dibattiti e discussioni",
    act1Desc: "Analisi di temi sociali",
    act2: "Simulazioni ONU",
    act2Desc: "Model United Nations",
    act3: "Visite alle istituzioni",
    act3Desc: "Parlamento, Tribunali, ecc.",
    act4: "Progetti di ricerca",
    act4Desc: "Studi sociologici e storici",
  },
};

const ProfileShoqeror = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const careers = {
    sq: ["Jurist", "Diplomat", "Gazetar", "Politolog", "Ekonomist", "Sociolog", "Historijan", "Administrator Publik"],
    en: ["Lawyer", "Diplomat", "Journalist", "Political Scientist", "Economist", "Sociologist", "Historian", "Public Administrator"],
    it: ["Avvocato", "Diplomatico", "Giornalista", "Politologo", "Economista", "Sociologo", "Storico", "Amministratore Pubblico"],
  };

  // Placeholder images - replace with actual photos
  const galleryImages = [
    { src: "/placeholder.svg", alt: "Social 1" },
    { src: "/placeholder.svg", alt: "Social 2" },
    { src: "/placeholder.svg", alt: "Social 3" },
    { src: "/placeholder.svg", alt: "Social 4" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-amber-500/10 py-16 md:py-24">
        <div className="container-custom">
          <Link to="/#programs">
            <Button variant="ghost" className="mb-6 text-amber-600 hover:text-amber-700">
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t.back}
            </Button>
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-amber-500/20 flex items-center justify-center">
              <Globe className="w-8 h-8 text-amber-600" />
            </div>
            <div>
              <span className="text-sm font-medium text-amber-600">{t.badge}</span>
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground">{t.title}</h1>
            </div>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl">{t.subtitle}</p>
        </div>
      </div>

      <div className="container-custom py-12 md:py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-amber-600" />
                {t.overview}
              </h2>
              <p className="text-muted-foreground leading-relaxed">{t.overviewText}</p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">{t.curriculum}</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { subject: t.history, hours: t.historyHours, description: t.historyDesc },
                  { subject: t.geography, hours: t.geographyHours, description: t.geographyDesc },
                  { subject: t.economics, hours: t.economicsHours, description: t.economicsDesc },
                  { subject: t.sociology, hours: t.sociologyHours, description: t.sociologyDesc },
                ].map((item) => (
                  <div key={item.subject} className="p-4 rounded-xl bg-card border border-border">
                    <h3 className="font-semibold text-foreground">{item.subject}</h3>
                    <p className="text-sm text-amber-600 mb-1">{item.hours}</p>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Trophy className="w-6 h-6 text-amber-600" />
                {t.careers}
              </h2>
              <div className="flex flex-wrap gap-2">
                {careers[language].map((career) => (
                  <span key={career} className="px-4 py-2 rounded-full bg-amber-500/10 text-amber-700 text-sm font-medium">
                    {career}
                  </span>
                ))}
              </div>
            </section>
          </div>

          <div className="space-y-6">
            {/* Photo Gallery */}
            <div className="p-6 rounded-2xl bg-card border border-border">
              <h3 className="font-serif text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                <Camera className="w-5 h-5 text-amber-600" />
                {t.gallery}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {galleryImages.map((image, index) => (
                  <div 
                    key={index} 
                    className="aspect-square rounded-lg overflow-hidden bg-amber-100 dark:bg-amber-900/30 border border-amber-200 dark:border-amber-800"
                  >
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800">
              <h3 className="font-serif text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-amber-600" />
                {t.activities}
              </h3>
              <div className="space-y-3">
                {[
                  { activity: t.act1, desc: t.act1Desc },
                  { activity: t.act2, desc: t.act2Desc },
                  { activity: t.act3, desc: t.act3Desc },
                  { activity: t.act4, desc: t.act4Desc },
                ].map((item) => (
                  <div key={item.activity} className="flex items-start gap-3 p-3 rounded-lg bg-white dark:bg-card">
                    <CheckCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground">{item.activity}</p>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileShoqeror;