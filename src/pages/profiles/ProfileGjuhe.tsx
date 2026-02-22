import { ArrowLeft, BookText, BookOpen, Trophy, CheckCircle, Languages, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const translations = {
  sq: {
    back: "Kthehu te Profilet",
    badge: "Profil Akademik",
    title: "Gjuhë të Huaja",
    subtitle: "Anglisht, Frëngjisht, Gjermanisht dhe Italisht me mësues të kualifikuar dhe metoda moderne.",
    overview: "Përmbledhje",
    overviewText: "Profili i Gjuhëve të Huaja ofron mundësinë për të zotëruar disa gjuhë të rëndësishme evropiane. Nxënësit zhvillojnë aftësi në të folur, të shkruar, të lexuar dhe të dëgjuar, duke përdorur metoda bashkëkohore të mësimdhënies. Ky profil hap dyert për karriera ndërkombëtare dhe studime jashtë vendit.",
    curriculum: "Kurrikula e Plotë",
    careers: "Mundësi Karriere",
    activities: "Aktivitete në Klasë",
    gallery: "Galeria e Profilet",
    english: "Anglisht",
    englishHours: "3 orë/javë",
    englishDesc: "Niveli B2-C1, përgatitje IELTS/TOEFL",
    french: "Frëngjisht",
    frenchHours: "3 orë/javë",
    frenchDesc: "Niveli A2-B2, përgatitje DELF",
    german: "Gjermanisht",
    germanHours: "3 orë/javë",
    germanDesc: "Niveli A2-B2, përgatitje Goethe",
    italian: "Italisht",
    italianHours: "3 orë/javë",
    italianDesc: "Niveli A2-B1, kulturë italiane",
    act1: "Klube konversacioni",
    act1Desc: "Praktikë e të folurit me native",
    act2: "Shkëmbime studentore",
    act2Desc: "Vizita në shkolla partnere",
    act3: "Festivale kulturore",
    act3Desc: "Ngjarje për kulturën e vendeve",
    act4: "Përgatitje certifikatash",
    act4Desc: "IELTS, DELF, Goethe, etj.",
  },
  en: {
    back: "Back to Profiles",
    badge: "Academic Profile",
    title: "Foreign Languages",
    subtitle: "English, French, German and Italian with qualified teachers and modern methods.",
    overview: "Overview",
    overviewText: "The Foreign Languages profile offers the opportunity to master several important European languages. Students develop skills in speaking, writing, reading, and listening, using contemporary teaching methods. This profile opens doors to international careers and studies abroad.",
    curriculum: "Full Curriculum",
    careers: "Career Opportunities",
    activities: "Classroom Activities",
    gallery: "Profile Gallery",
    english: "English",
    englishHours: "3 hours/week",
    englishDesc: "Level B2-C1, IELTS/TOEFL preparation",
    french: "French",
    frenchHours: "3 hours/week",
    frenchDesc: "Level A2-B2, DELF preparation",
    german: "German",
    germanHours: "3 hours/week",
    germanDesc: "Level A2-B2, Goethe preparation",
    italian: "Italian",
    italianHours: "3 hours/week",
    italianDesc: "Level A2-B1, Italian culture",
    act1: "Conversation clubs",
    act1Desc: "Speaking practice with natives",
    act2: "Student exchanges",
    act2Desc: "Visits to partner schools",
    act3: "Cultural festivals",
    act3Desc: "Events about country cultures",
    act4: "Certificate preparation",
    act4Desc: "IELTS, DELF, Goethe, etc.",
  },
  it: {
    back: "Torna ai Profili",
    badge: "Profilo Accademico",
    title: "Lingue Straniere",
    subtitle: "Inglese, Francese, Tedesco e Italiano con insegnanti qualificati e metodi moderni.",
    overview: "Panoramica",
    overviewText: "Il profilo Lingue Straniere offre l'opportunità di padroneggiare diverse importanti lingue europee. Gli studenti sviluppano competenze nel parlare, scrivere, leggere e ascoltare, utilizzando metodi di insegnamento contemporanei. Questo profilo apre le porte a carriere internazionali e studi all'estero.",
    curriculum: "Curriculum Completo",
    careers: "Opportunità di Carriera",
    activities: "Attività in Classe",
    gallery: "Galleria del Profilo",
    english: "Inglese",
    englishHours: "3 ore/settimana",
    englishDesc: "Livello B2-C1, preparazione IELTS/TOEFL",
    french: "Francese",
    frenchHours: "3 ore/settimana",
    frenchDesc: "Livello A2-B2, preparazione DELF",
    german: "Tedesco",
    germanHours: "3 ore/settimana",
    germanDesc: "Livello A2-B2, preparazione Goethe",
    italian: "Italiano",
    italianHours: "3 ore/settimana",
    italianDesc: "Livello A2-B1, cultura italiana",
    act1: "Club di conversazione",
    act1Desc: "Pratica orale con madrelingua",
    act2: "Scambi studenteschi",
    act2Desc: "Visite a scuole partner",
    act3: "Festival culturali",
    act3Desc: "Eventi sulle culture dei paesi",
    act4: "Preparazione certificazioni",
    act4Desc: "IELTS, DELF, Goethe, ecc.",
  },
};

const ProfileGjuhe = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const careers = {
    sq: ["Përkthyes", "Interpret", "Mësues Gjuhe", "Diplomat", "Turizëm", "Marrëdhënie Ndërkombëtare", "Marketing Global", "Gazetar Ndërkombëtar"],
    en: ["Translator", "Interpreter", "Language Teacher", "Diplomat", "Tourism", "International Relations", "Global Marketing", "International Journalist"],
    it: ["Traduttore", "Interprete", "Insegnante di Lingue", "Diplomatico", "Turismo", "Relazioni Internazionali", "Marketing Globale", "Giornalista Internazionale"],
  };

  // Placeholder images - replace with actual photos
  const galleryImages = [
    { src: "/placeholder.svg", alt: "Languages 1" },
    { src: "/placeholder.svg", alt: "Languages 2" },
    { src: "/placeholder.svg", alt: "Languages 3" },
    { src: "/placeholder.svg", alt: "Languages 4" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-purple-500/10 py-16 md:py-24">
        <div className="container-custom">
          <Link to="/#programs">
            <Button variant="ghost" className="mb-6 text-purple-600 hover:text-purple-700">
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t.back}
            </Button>
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-purple-500/20 flex items-center justify-center">
              <BookText className="w-8 h-8 text-purple-600" />
            </div>
            <div>
              <span className="text-sm font-medium text-purple-600">{t.badge}</span>
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
                <BookOpen className="w-6 h-6 text-purple-600" />
                {t.overview}
              </h2>
              <p className="text-muted-foreground leading-relaxed">{t.overviewText}</p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">{t.curriculum}</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { subject: t.english, hours: t.englishHours, description: t.englishDesc },
                  { subject: t.french, hours: t.frenchHours, description: t.frenchDesc },
                  { subject: t.german, hours: t.germanHours, description: t.germanDesc },
                  { subject: t.italian, hours: t.italianHours, description: t.italianDesc },
                ].map((item) => (
                  <div key={item.subject} className="p-4 rounded-xl bg-card border border-border">
                    <h3 className="font-semibold text-foreground">{item.subject}</h3>
                    <p className="text-sm text-purple-600 mb-1">{item.hours}</p>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Trophy className="w-6 h-6 text-purple-600" />
                {t.careers}
              </h2>
              <div className="flex flex-wrap gap-2">
                {careers[language].map((career) => (
                  <span key={career} className="px-4 py-2 rounded-full bg-purple-500/10 text-purple-700 text-sm font-medium">
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
                <Camera className="w-5 h-5 text-purple-600" />
                {t.gallery}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {galleryImages.map((image, index) => (
                  <div 
                    key={index} 
                    className="aspect-square rounded-lg overflow-hidden bg-purple-100 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-800"
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

            <div className="p-6 rounded-2xl bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800">
              <h3 className="font-serif text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                <Languages className="w-5 h-5 text-purple-600" />
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
                    <CheckCircle className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
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

export default ProfileGjuhe;