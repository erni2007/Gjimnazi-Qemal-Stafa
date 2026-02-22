import { useLanguage } from "@/contexts/LanguageContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowLeft, Calendar, MapPin, Users, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import schoolBuildingImage from "@/assets/school-building.png";
import schoolEntranceImage from "@/assets/school-entrance.png";

const translations = {
  sq: {
    back: "Kthehu",
    badge: "Historia Jonë",
    title: "Historia e Shkollës",
    subtitle: "Një udhëtim 100-vjeçar i ekselencës akademike dhe traditës",
    intro: "Gjimnazi \"Qemal Stafa\" është një nga institucionet arsimore më të vjetra dhe më prestigjioze në Shqipëri. Themeluar në vitin 1925, shkolla ka luajtur një rol kyç në formimin e elitës intelektuale shqiptare.",
    section1Title: "Themelimi (1925)",
    section1Text: "Shkolla u themelua në vitin 1925 si Gjimnazi i Tiranës, duke u bërë një nga institucionet e para të arsimit të mesëm në kryeqytet. Që nga fillimi, shkolla vendosi standarde të larta akademike dhe tërhoqi studentët më të talentuar nga e gjithë Shqipëria.",
    section2Title: "Vitet e Artë (1930-1945)",
    section2Text: "Gjatë kësaj periudhe, shkolla u bë qendra e jetës intelektuale në Tiranë. Shumë nga figurat më të shquara të historisë shqiptare kaluan nëpër korridorët e saj. Biblioteka u pasurua me vepra të rëndësishme dhe laboratorët u modernizuan.",
    section3Title: "Emërtimi \"Qemal Stafa\" (1946)",
    section3Text: "Pas Luftës së Dytë Botërore, shkolla mori emrin e Qemal Stafës, një nga figurat simbol të lëvizjes antifashiste dhe të rinisë. Emri u vendos për nder të rolit të tij në rezistencën kundër pushtimit dhe për ndikimin e tij tek të rinjtë.",
    section4Title: "Epoka Moderne (1990-Sot)",
    section4Text: "Pas rënies së sistemit komunist, gjimnazi u përshtat me reformat e reja arsimore. U modernizuan programet mësimore. U rrit bashkëpunimi me institucione të huaja arsimore. Shkolla nisi të njihej për aktivitetet e saj kulturore, klubet, projektet ndërkombëtare dhe konkurset. Kërkesa për t'u regjistruar në Qemal Stafa u rrit shumë, duke e bërë një nga gjimnazet më të kërkuara në kryeqytet.",
    milestone1: "Themelimi",
    milestone2: "Riemërtimi",
    milestone3: "Modernizimi",
    milestone4: "100-Vjetori",
  },
  en: {
    back: "Go Back",
    badge: "Our History",
    title: "School History",
    subtitle: "A 100-year journey of academic excellence and tradition",
    intro: "\"Qemal Stafa\" High School is one of the oldest and most prestigious educational institutions in Albania. Founded in 1925, the school has played a key role in shaping Albania's intellectual elite.",
    section1Title: "Foundation (1925)",
    section1Text: "The school was founded in 1925 as Tirana High School, becoming one of the first secondary education institutions in the capital. From the beginning, the school set high academic standards and attracted the most talented students from all over Albania.",
    section2Title: "Golden Years (1930-1945)",
    section2Text: "During this period, the school became the center of intellectual life in Tirana. Many of the most prominent figures in Albanian history passed through its corridors. The library was enriched with important works and laboratories were modernized.",
    section3Title: "Naming \"Qemal Stafa\" (1946)",
    section3Text: "After World War II, the school took the name of Qemal Stafa, one of the symbolic figures of the anti-fascist movement and youth. The name was given in honor of his role in the resistance against occupation and his influence on young people.",
    section4Title: "Modern Era (1990-Present)",
    section4Text: "After the fall of the communist system, the gymnasium adapted to the new educational reforms. Teaching programs were modernized. Cooperation with foreign educational institutions increased. The school became known for its cultural activities, clubs, international projects, and competitions. Demand for enrollment at Qemal Stafa increased significantly, making it one of the most sought-after gymnasiums in the capital.",
    milestone1: "Foundation",
    milestone2: "Renaming",
    milestone3: "Modernization",
    milestone4: "100th Anniversary",
  },
  it: {
    back: "Torna Indietro",
    badge: "La Nostra Storia",
    title: "Storia della Scuola",
    subtitle: "Un viaggio di 100 anni di eccellenza accademica e tradizione",
    intro: "Il Liceo \"Qemal Stafa\" è una delle istituzioni educative più antiche e prestigiose dell'Albania. Fondato nel 1925, la scuola ha svolto un ruolo chiave nella formazione dell'élite intellettuale albanese.",
    section1Title: "Fondazione (1925)",
    section1Text: "La scuola è stata fondata nel 1925 come Liceo di Tirana, diventando una delle prime istituzioni di istruzione secondaria nella capitale. Fin dall'inizio, la scuola ha stabilito elevati standard accademici e ha attratto gli studenti più talentuosi da tutta l'Albania.",
    section2Title: "Anni d'Oro (1930-1945)",
    section2Text: "Durante questo periodo, la scuola divenne il centro della vita intellettuale a Tirana. Molte delle figure più importanti della storia albanese sono passate per i suoi corridoi. La biblioteca si arricchì di opere importanti e i laboratori furono modernizzati.",
    section3Title: "Denominazione \"Qemal Stafa\" (1946)",
    section3Text: "Dopo la Seconda Guerra Mondiale, la scuola prese il nome di Qemal Stafa, una delle figure simbolo del movimento antifascista e della gioventù. Il nome fu dato in onore del suo ruolo nella resistenza contro l'occupazione e della sua influenza sui giovani.",
    section4Title: "Era Moderna (1990-Oggi)",
    section4Text: "Dopo la caduta del sistema comunista, il liceo si è adattato alle nuove riforme educative. I programmi di insegnamento sono stati modernizzati. È aumentata la cooperazione con istituzioni educative straniere. La scuola è diventata nota per le sue attività culturali, club, progetti internazionali e concorsi. La domanda di iscrizione al Qemal Stafa è aumentata notevolmente, rendendolo uno dei licei più richiesti nella capitale.",
    milestone1: "Fondazione",
    milestone2: "Ridenominazione",
    milestone3: "Modernizzazione",
    milestone4: "100° Anniversario",
  },
};

const HistoryPage = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const milestones = [
    { year: "1925", label: t.milestone1 },
    { year: "1946", label: t.milestone2 },
    { year: "1990", label: t.milestone3 },
    { year: "2025", label: t.milestone4 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary via-navy-dark to-primary overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
          </div>
          <div className="container-custom relative z-10">
            <Link to="/#heritage" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              {t.back}
            </Link>
            <span className="inline-block px-4 py-1 rounded-full bg-white/20 text-white font-medium text-sm mb-4">
              {t.badge}
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {t.title}
            </h1>
            <p className="text-xl text-white/80 max-w-2xl">
              {t.subtitle}
            </p>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-12 bg-secondary/30">
          <div className="container-custom">
            <div className="flex justify-between items-center overflow-x-auto pb-4">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex flex-col items-center min-w-[100px]">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white font-bold mb-2">
                    {milestone.year}
                  </div>
                  <p className="text-sm text-muted-foreground text-center">{milestone.label}</p>
                  {index < milestones.length - 1 && (
                    <div className="hidden md:block absolute w-full h-0.5 bg-accent/30 top-6" style={{ left: '50%', width: 'calc(100% - 100px)' }} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-xl text-muted-foreground leading-relaxed">
                {t.intro}
              </p>
            </div>
          </div>
        </section>

        {/* History Sections */}
        <section className="pb-20">
          <div className="container-custom space-y-20">
            {/* Section 1 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-elegant">
                  <img src={schoolBuildingImage} alt="Themelimi i shkollës" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-accent/20 rounded-xl -z-10" />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-accent font-semibold">1925</span>
                </div>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {t.section1Title}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t.section1Text}
                </p>
              </div>
            </div>

            {/* Section 2 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-accent font-semibold">1930-1945</span>
                </div>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {t.section2Title}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t.section2Text}
                </p>
              </div>
              <div className="relative order-1 lg:order-2">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-elegant">
                  <img src={schoolEntranceImage} alt="Vitet e artë" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-accent/20 rounded-xl -z-10" />
              </div>
            </div>

            {/* Section 3 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-elegant bg-gradient-to-br from-primary to-navy-dark flex items-center justify-center">
                  <div className="text-center p-8">
                    <Users className="w-16 h-16 text-accent mx-auto mb-4" />
                    <p className="text-white font-serif text-3xl font-bold">Qemal Stafa</p>
                    <p className="text-white/70">1920 - 1942</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Users className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-accent font-semibold">1946</span>
                </div>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {t.section3Title}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t.section3Text}
                </p>
              </div>
            </div>

            {/* Section 4 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-accent font-semibold">1990 - Sot</span>
                </div>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {t.section4Title}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t.section4Text}
                </p>
              </div>
              <div className="relative order-1 lg:order-2">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-elegant">
                  <img src={schoolBuildingImage} alt="Epoka moderne" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-accent/20 rounded-xl -z-10" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HistoryPage;
