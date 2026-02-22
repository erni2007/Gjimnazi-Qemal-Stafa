import { ArrowLeft, FlaskConical, BookOpen, Trophy, CheckCircle, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const translations = {
  sq: {
    back: "Kthehu te Profilet",
    badge: "Profil Akademik",
    title: "Profili Natyror",
    subtitle: "Fizikë, Kimi, Biologji dhe Matematikë e avancuar për studentët që aspirojnë karrierë në shkenca natyrore dhe mjekësi.",
    overview: "Përmbledhje",
    overviewText: "Profili Natyror është zgjedhja ideale për studentët që kanë pasion për shkencën dhe dëshirojnë të ndjekin karriera në fushën e mjekësisë, inxhinierisë, farmacisë apo kërkimit shkencor. Kurrikula përfshin studime të thella në fizikë, kimi, biologji dhe matematikë, duke përgatitur nxënësit për sfidat e arsimit universitar dhe botës profesionale.",
    curriculum: "Kurrikula e Plotë",
    careers: "Mundësi Karriere",
    activities: "Aktivitete në Klasë",
    gallery: "Galeria e Profilet",
    physics: "Fizikë",
    physicsHours: "4 orë/javë",
    physicsDesc: "Mekanikë, termodinamikë, elektricitet",
    chemistry: "Kimi",
    chemistryHours: "4 orë/javë",
    chemistryDesc: "Kimi organike dhe inorganike",
    biology: "Biologji",
    biologyHours: "4 orë/javë",
    biologyDesc: "Biologji qelizore dhe molekulare",
    math: "Matematikë",
    mathHours: "5 orë/javë",
    mathDesc: "Analizë matematike, algjebër",
    act1: "Eksperimente laboratorike",
    act1Desc: "Punë praktike në laborator",
    act2: "Projekte kërkimore",
    act2Desc: "Hulumtime shkencore në grup",
    act3: "Olimpiada shkencash",
    act3Desc: "Përgatitje për konkurse",
    act4: "Vizita në terren",
    act4Desc: "Ekskursione edukative",
  },
  en: {
    back: "Back to Profiles",
    badge: "Academic Profile",
    title: "Natural Sciences",
    subtitle: "Physics, Chemistry, Biology and advanced Mathematics for students aspiring to careers in natural sciences and medicine.",
    overview: "Overview",
    overviewText: "The Natural Sciences profile is the ideal choice for students passionate about science who wish to pursue careers in medicine, engineering, pharmacy, or scientific research. The curriculum includes in-depth studies in physics, chemistry, biology, and mathematics, preparing students for the challenges of university education and the professional world.",
    curriculum: "Full Curriculum",
    careers: "Career Opportunities",
    activities: "Classroom Activities",
    gallery: "Profile Gallery",
    physics: "Physics",
    physicsHours: "4 hours/week",
    physicsDesc: "Mechanics, thermodynamics, electricity",
    chemistry: "Chemistry",
    chemistryHours: "4 hours/week",
    chemistryDesc: "Organic and inorganic chemistry",
    biology: "Biology",
    biologyHours: "4 hours/week",
    biologyDesc: "Cell and molecular biology",
    math: "Mathematics",
    mathHours: "5 hours/week",
    mathDesc: "Mathematical analysis, algebra",
    act1: "Laboratory experiments",
    act1Desc: "Practical work in the lab",
    act2: "Research projects",
    act2Desc: "Group scientific research",
    act3: "Science olympiads",
    act3Desc: "Competition preparation",
    act4: "Field trips",
    act4Desc: "Educational excursions",
  },
  it: {
    back: "Torna ai Profili",
    badge: "Profilo Accademico",
    title: "Scienze Naturali",
    subtitle: "Fisica, Chimica, Biologia e Matematica avanzata per studenti che aspirano a carriere nelle scienze naturali e medicina.",
    overview: "Panoramica",
    overviewText: "Il profilo Scienze Naturali è la scelta ideale per gli studenti appassionati di scienza che desiderano intraprendere carriere in medicina, ingegneria, farmacia o ricerca scientifica. Il curriculum include studi approfonditi in fisica, chimica, biologia e matematica, preparando gli studenti alle sfide dell'istruzione universitaria e del mondo professionale.",
    curriculum: "Curriculum Completo",
    careers: "Opportunità di Carriera",
    activities: "Attività in Classe",
    gallery: "Galleria del Profilo",
    physics: "Fisica",
    physicsHours: "4 ore/settimana",
    physicsDesc: "Meccanica, termodinamica, elettricità",
    chemistry: "Chimica",
    chemistryHours: "4 ore/settimana",
    chemistryDesc: "Chimica organica e inorganica",
    biology: "Biologia",
    biologyHours: "4 ore/settimana",
    biologyDesc: "Biologia cellulare e molecolare",
    math: "Matematica",
    mathHours: "5 ore/settimana",
    mathDesc: "Analisi matematica, algebra",
    act1: "Esperimenti di laboratorio",
    act1Desc: "Lavoro pratico in laboratorio",
    act2: "Progetti di ricerca",
    act2Desc: "Ricerca scientifica di gruppo",
    act3: "Olimpiadi scientifiche",
    act3Desc: "Preparazione alle competizioni",
    act4: "Gite sul campo",
    act4Desc: "Escursioni educative",
  },
};

const ProfileNatyror = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const careers = {
    sq: ["Mjekësi", "Farmaci", "Inxhinieri", "Biologji", "Kimi Industriale", "Kërkim Shkencor", "Stomatologji", "Fizioterapi"],
    en: ["Medicine", "Pharmacy", "Engineering", "Biology", "Industrial Chemistry", "Scientific Research", "Dentistry", "Physiotherapy"],
    it: ["Medicina", "Farmacia", "Ingegneria", "Biologia", "Chimica Industriale", "Ricerca Scientifica", "Odontoiatria", "Fisioterapia"],
  };

  // Placeholder images - replace with actual photos
  const galleryImages = [
    { src: "/placeholder.svg", alt: "Lab 1" },
    { src: "/placeholder.svg", alt: "Lab 2" },
    { src: "/placeholder.svg", alt: "Lab 3" },
    { src: "/placeholder.svg", alt: "Lab 4" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-emerald-500/10 py-16 md:py-24">
        <div className="container-custom">
          <Link to="/#programs">
            <Button variant="ghost" className="mb-6 text-emerald-600 hover:text-emerald-700">
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t.back}
            </Button>
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 flex items-center justify-center">
              <FlaskConical className="w-8 h-8 text-emerald-600" />
            </div>
            <div>
              <span className="text-sm font-medium text-emerald-600">{t.badge}</span>
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                {t.title}
              </h1>
            </div>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl">{t.subtitle}</p>
        </div>
      </div>

      {/* Content */}
      <div className="container-custom py-12 md:py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-emerald-600" />
                {t.overview}
              </h2>
              <p className="text-muted-foreground leading-relaxed">{t.overviewText}</p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">{t.curriculum}</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { subject: t.physics, hours: t.physicsHours, description: t.physicsDesc },
                  { subject: t.chemistry, hours: t.chemistryHours, description: t.chemistryDesc },
                  { subject: t.biology, hours: t.biologyHours, description: t.biologyDesc },
                  { subject: t.math, hours: t.mathHours, description: t.mathDesc },
                ].map((item) => (
                  <div key={item.subject} className="p-4 rounded-xl bg-card border border-border">
                    <h3 className="font-semibold text-foreground">{item.subject}</h3>
                    <p className="text-sm text-emerald-600 mb-1">{item.hours}</p>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Trophy className="w-6 h-6 text-emerald-600" />
                {t.careers}
              </h2>
              <div className="flex flex-wrap gap-2">
                {careers[language].map((career) => (
                  <span key={career} className="px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-700 text-sm font-medium">
                    {career}
                  </span>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Photo Gallery */}
            <div className="p-6 rounded-2xl bg-card border border-border">
              <h3 className="font-serif text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                <Camera className="w-5 h-5 text-emerald-600" />
                {t.gallery}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {galleryImages.map((image, index) => (
                  <div 
                    key={index} 
                    className="aspect-square rounded-lg overflow-hidden bg-emerald-100 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800"
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

            <div className="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800">
              <h3 className="font-serif text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                <Trophy className="w-5 h-5 text-emerald-600" />
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
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
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

export default ProfileNatyror;