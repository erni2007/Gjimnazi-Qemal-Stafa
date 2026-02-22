import { ArrowLeft, Calculator, BookOpen, Trophy, CheckCircle, Code, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const translations = {
  sq: {
    back: "Kthehu te Profilet",
    badge: "Profil Akademik",
    title: "Profili Matematikë-Informatikë",
    subtitle: "Fokus në matematikë të thelluar dhe shkenca kompjuterike për liderët e teknologjisë së nesërme.",
    overview: "Përmbledhje",
    overviewText: "Profili Matematikë-Informatikë është krijuar për studentët që duan të eksplorojnë botën e teknologjisë dhe matematikës së aplikuar. Nxënësit mësojnë programim, algoritme, strukturë të dhënash dhe matematikë të avancuar, duke u përgatitur për karriera në industrinë e teknologjisë informative dhe më gjerë.",
    curriculum: "Kurrikula e Plotë",
    careers: "Mundësi Karriere",
    activities: "Aktivitete në Klasë",
    gallery: "Galeria e Profilet",
    math: "Matematikë",
    mathHours: "6 orë/javë",
    mathDesc: "Analizë, algjebër lineare, statistikë",
    informatics: "Informatikë",
    informaticsHours: "4 orë/javë",
    informaticsDesc: "Bazat e kompjuterit dhe rrjeteve",
    programming: "Programim",
    programmingHours: "4 orë/javë",
    programmingDesc: "Python, C++, algoritme",
    act1: "Projekte programimi",
    act1Desc: "Zhvillim aplikacionesh dhe lojërash",
    act2: "Hackathons",
    act2Desc: "Konkurse programimi 24 orë",
    act3: "Olimpiada matematike",
    act3Desc: "Përgatitje për konkurse",
    act4: "Robotikë",
    act4Desc: "Ndërtim dhe programim robotësh",
  },
  en: {
    back: "Back to Profiles",
    badge: "Academic Profile",
    title: "Mathematics-Informatics",
    subtitle: "Focus on advanced mathematics and computer science for tomorrow's technology leaders.",
    overview: "Overview",
    overviewText: "The Mathematics-Informatics profile is designed for students who want to explore the world of technology and applied mathematics. Students learn programming, algorithms, data structures, and advanced mathematics, preparing for careers in the information technology industry and beyond.",
    curriculum: "Full Curriculum",
    careers: "Career Opportunities",
    activities: "Classroom Activities",
    gallery: "Profile Gallery",
    math: "Mathematics",
    mathHours: "6 hours/week",
    mathDesc: "Analysis, linear algebra, statistics",
    informatics: "Informatics",
    informaticsHours: "4 hours/week",
    informaticsDesc: "Computer and network basics",
    programming: "Programming",
    programmingHours: "4 hours/week",
    programmingDesc: "Python, C++, algorithms",
    act1: "Programming projects",
    act1Desc: "App and game development",
    act2: "Hackathons",
    act2Desc: "24-hour coding competitions",
    act3: "Math olympiads",
    act3Desc: "Competition preparation",
    act4: "Robotics",
    act4Desc: "Building and programming robots",
  },
  it: {
    back: "Torna ai Profili",
    badge: "Profilo Accademico",
    title: "Matematica-Informatica",
    subtitle: "Focus su matematica avanzata e informatica per i leader tecnologici di domani.",
    overview: "Panoramica",
    overviewText: "Il profilo Matematica-Informatica è progettato per gli studenti che vogliono esplorare il mondo della tecnologia e della matematica applicata. Gli studenti imparano programmazione, algoritmi, strutture dati e matematica avanzata, preparandosi per carriere nell'industria IT e oltre.",
    curriculum: "Curriculum Completo",
    careers: "Opportunità di Carriera",
    activities: "Attività in Classe",
    gallery: "Galleria del Profilo",
    math: "Matematica",
    mathHours: "6 ore/settimana",
    mathDesc: "Analisi, algebra lineare, statistica",
    informatics: "Informatica",
    informaticsHours: "4 ore/settimana",
    informaticsDesc: "Fondamenti di computer e reti",
    programming: "Programmazione",
    programmingHours: "4 ore/settimana",
    programmingDesc: "Python, C++, algoritmi",
    act1: "Progetti di programmazione",
    act1Desc: "Sviluppo di app e giochi",
    act2: "Hackathons",
    act2Desc: "Competizioni di 24 ore",
    act3: "Olimpiadi di matematica",
    act3Desc: "Preparazione alle competizioni",
    act4: "Robotica",
    act4Desc: "Costruzione e programmazione di robot",
  },
};

const ProfileMatematike = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const careers = {
    sq: ["Inxhinier Softuer", "Data Science", "Cyber Security", "AI/ML Engineer", "Web Developer", "System Administrator", "Matematikan", "Analist Financiar"],
    en: ["Software Engineer", "Data Science", "Cyber Security", "AI/ML Engineer", "Web Developer", "System Administrator", "Mathematician", "Financial Analyst"],
    it: ["Ingegnere Software", "Data Science", "Cyber Security", "AI/ML Engineer", "Web Developer", "System Administrator", "Matematico", "Analista Finanziario"],
  };

  // Placeholder images - replace with actual photos
  const galleryImages = [
    { src: "/placeholder.svg", alt: "Coding 1" },
    { src: "/placeholder.svg", alt: "Coding 2" },
    { src: "/placeholder.svg", alt: "Coding 3" },
    { src: "/placeholder.svg", alt: "Coding 4" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-blue-500/10 py-16 md:py-24">
        <div className="container-custom">
          <Link to="/#programs">
            <Button variant="ghost" className="mb-6 text-blue-600 hover:text-blue-700">
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t.back}
            </Button>
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-blue-500/20 flex items-center justify-center">
              <Calculator className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <span className="text-sm font-medium text-blue-600">{t.badge}</span>
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
                <BookOpen className="w-6 h-6 text-blue-600" />
                {t.overview}
              </h2>
              <p className="text-muted-foreground leading-relaxed">{t.overviewText}</p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">{t.curriculum}</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { subject: t.math, hours: t.mathHours, description: t.mathDesc },
                  { subject: t.informatics, hours: t.informaticsHours, description: t.informaticsDesc },
                  { subject: t.programming, hours: t.programmingHours, description: t.programmingDesc },
                ].map((item) => (
                  <div key={item.subject} className="p-4 rounded-xl bg-card border border-border">
                    <h3 className="font-semibold text-foreground">{item.subject}</h3>
                    <p className="text-sm text-blue-600 mb-1">{item.hours}</p>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Trophy className="w-6 h-6 text-blue-600" />
                {t.careers}
              </h2>
              <div className="flex flex-wrap gap-2">
                {careers[language].map((career) => (
                  <span key={career} className="px-4 py-2 rounded-full bg-blue-500/10 text-blue-700 text-sm font-medium">
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
                <Camera className="w-5 h-5 text-blue-600" />
                {t.gallery}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {galleryImages.map((image, index) => (
                  <div 
                    key={index} 
                    className="aspect-square rounded-lg overflow-hidden bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800"
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

            <div className="p-6 rounded-2xl bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800">
              <h3 className="font-serif text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                <Code className="w-5 h-5 text-blue-600" />
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
                    <CheckCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
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

export default ProfileMatematike;