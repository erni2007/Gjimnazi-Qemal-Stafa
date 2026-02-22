import { useLanguage } from "@/contexts/LanguageContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowLeft, Camera, BookOpen, Award } from "lucide-react";
import { Link } from "react-router-dom";
import schoolEntranceImage from "@/assets/school-entrance.png";
import schoolBuildingImage from "@/assets/school-building.png";

const translations = {
  sq: {
    back: "Kthehu",
    badge: "Muzeu i Shkollës",
    title: "Muzeu Historik",
    subtitle: "Ruajtja e kujtimeve dhe trashëgimisë së 100 viteve",
    intro: "Muzeu i Gjimnazit \"Qemal Stafa\" është një hapësirë e dedikuar për ruajtjen dhe prezantimin e historisë së pasur të shkollës. Këtu gjenden artifakte të rralla, dokumente historike dhe kujtime nga brezat e studentëve.",
    collection1Title: "Koleksioni i Dokumenteve",
    collection1Text: "Muzeu ruan dokumente origjinale nga themelimi i shkollës, duke përfshirë certifikatat e para të diplomimit, rregulloret e vjetra shkollore, dhe korrespondencën zyrtare me institucionet shtetërore.",
    collection2Title: "Uniformat Historike",
    collection2Text: "Një koleksion i veçantë uniformash studentore nga periudha të ndryshme historike, duke treguar evolucionin e veshjes shkollore nga viti 1925 deri në ditët e sotme.",
    collection3Title: "Fotografi të Rralla",
    collection3Text: "Arkivi fotografik përmban mijëra foto të rralla nga jeta shkollore, ngjarjet e rëndësishme, dhe personalitetet që kanë kaluar nëpër shkollë gjatë 100 viteve.",
    collection4Title: "Trofetë dhe Medaljet",
    collection4Text: "Ekspozita e çmimeve dhe trofeeve të fituara nga shkolla dhe studentët e saj në gara kombëtare dhe ndërkombëtare, olimpiada dhe konkurse të ndryshme.",
    visitTitle: "Vizitoni Muzeun",
    visitText: "Muzeu është i hapur për vizitorë gjatë orarit të punës së shkollës. Grupet e mëdha duhet të bëjnë rezervim paraprak.",
    hours: "Orari: E Hënë - E Premte, 09:00 - 15:00",
    gallery: "Galeria e Muzës",
  },
  en: {
    back: "Go Back",
    badge: "School Museum",
    title: "Historical Museum",
    subtitle: "Preserving memories and heritage of 100 years",
    intro: "The \"Qemal Stafa\" High School Museum is a dedicated space for preserving and presenting the school's rich history. Here you can find rare artifacts, historical documents, and memories from generations of students.",
    collection1Title: "Document Collection",
    collection1Text: "The museum preserves original documents from the school's founding, including the first graduation certificates, old school regulations, and official correspondence with state institutions.",
    collection2Title: "Historical Uniforms",
    collection2Text: "A special collection of student uniforms from different historical periods, showing the evolution of school attire from 1925 to the present day.",
    collection3Title: "Rare Photographs",
    collection3Text: "The photographic archive contains thousands of rare photos from school life, important events, and personalities who passed through the school during 100 years.",
    collection4Title: "Trophies and Medals",
    collection4Text: "Exhibition of awards and trophies won by the school and its students in national and international competitions, olympiads, and various contests.",
    visitTitle: "Visit the Museum",
    visitText: "The museum is open to visitors during school working hours. Large groups should make a reservation in advance.",
    hours: "Hours: Monday - Friday, 09:00 - 15:00",
    gallery: "Museum Gallery",
  },
  it: {
    back: "Torna Indietro",
    badge: "Museo della Scuola",
    title: "Museo Storico",
    subtitle: "Preservare i ricordi e il patrimonio di 100 anni",
    intro: "Il Museo del Liceo \"Qemal Stafa\" è uno spazio dedicato alla conservazione e presentazione della ricca storia della scuola. Qui si trovano manufatti rari, documenti storici e ricordi di generazioni di studenti.",
    collection1Title: "Collezione di Documenti",
    collection1Text: "Il museo conserva documenti originali dalla fondazione della scuola, inclusi i primi certificati di diploma, vecchi regolamenti scolastici e corrispondenza ufficiale con le istituzioni statali.",
    collection2Title: "Uniformi Storiche",
    collection2Text: "Una collezione speciale di uniformi studentesche di diversi periodi storici, che mostra l'evoluzione dell'abbigliamento scolastico dal 1925 ai giorni nostri.",
    collection3Title: "Fotografie Rare",
    collection3Text: "L'archivio fotografico contiene migliaia di foto rare della vita scolastica, eventi importanti e personalità che sono passate dalla scuola durante 100 anni.",
    collection4Title: "Trofei e Medaglie",
    collection4Text: "Esposizione di premi e trofei vinti dalla scuola e dai suoi studenti in competizioni nazionali e internazionali, olimpiadi e vari concorsi.",
    visitTitle: "Visita il Museo",
    visitText: "Il museo è aperto ai visitatori durante l'orario di lavoro della scuola. I gruppi numerosi devono prenotare in anticipo.",
    hours: "Orario: Lunedì - Venerdì, 09:00 - 15:00",
    gallery: "Galleria del Museo",
  },
};

const MuseumPage = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const collections = [
    { icon: BookOpen, title: t.collection1Title, text: t.collection1Text },
    { icon: Camera, title: t.collection2Title, text: t.collection2Text },
    { icon: Camera, title: t.collection3Title, text: t.collection3Text },
    { icon: Award, title: t.collection4Title, text: t.collection4Text },
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

        {/* Collections */}
        <section className="pb-16">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-8">
              {collections.map((collection, index) => (
                <div
                  key={index}
                  className="group p-8 rounded-2xl bg-card border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-elegant"
                >
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                    <collection.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-4">
                    {collection.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {collection.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-16 bg-secondary/30">
          <div className="container-custom">
            <h2 className="font-serif text-3xl font-bold text-foreground text-center mb-12">
              {t.gallery}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="aspect-square rounded-xl overflow-hidden shadow-elegant">
                <img src={schoolBuildingImage} alt="Muzeu 1" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="aspect-square rounded-xl overflow-hidden shadow-elegant">
                <img src={schoolEntranceImage} alt="Muzeu 2" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="aspect-square rounded-xl overflow-hidden shadow-elegant bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                <div className="text-center p-4">
                  <Camera className="w-12 h-12 text-accent mx-auto mb-2" />
                  <p className="text-muted-foreground text-sm">+500 Foto</p>
                </div>
              </div>
              <div className="aspect-square rounded-xl overflow-hidden shadow-elegant">
                <img src={schoolBuildingImage} alt="Muzeu 3" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="aspect-square rounded-xl overflow-hidden shadow-elegant bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <div className="text-center p-4">
                  <BookOpen className="w-12 h-12 text-primary mx-auto mb-2" />
                  <p className="text-muted-foreground text-sm">Dokumente</p>
                </div>
              </div>
              <div className="aspect-square rounded-xl overflow-hidden shadow-elegant">
                <img src={schoolEntranceImage} alt="Muzeu 4" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default MuseumPage;
