import { ArrowLeft, Palette, BookOpen, Trophy, CheckCircle, Brush, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const translations = {
  sq: {
    back: "Kthehu te Profilet",
    badge: "Profil Akademik",
    title: "Arte & Muzikë",
    subtitle: "Programe kreative për zhvillimin e talenteve artistike dhe muzikore në një mjedis frymëzues.",
    overview: "Përmbledhje",
    overviewText: "Profili Arte & Muzikë është krijuar për nxënësit me talent dhe pasion për artet e bukura. Programi kombinon studimin teorik me praktikën intensive në pikturë, skulpturë, muzikë dhe teatër. Nxënësit inkurajohen të eksplorojnë kreativitetin e tyre dhe të zhvillojnë një zë artistik unik.",
    curriculum: "Kurrikula e Plotë",
    careers: "Mundësi Karriere",
    activities: "Aktivitete në Klasë",
    gallery: "Galeria e Profilet",
    painting: "Pikturë",
    paintingHours: "4 orë/javë",
    paintingDesc: "Teknika të ndryshme pikture",
    sculpture: "Skulpturë",
    sculptureHours: "3 orë/javë",
    sculptureDesc: "Punë me argjilë dhe materiale",
    music: "Muzikë",
    musicHours: "4 orë/javë",
    musicDesc: "Teori muzikore dhe instrument",
    theater: "Teatër",
    theaterHours: "3 orë/javë",
    theaterDesc: "Aktrimi dhe interpretimi skenar",
    act1: "Ekspozita arti",
    act1Desc: "Prezantim i punimeve studentore",
    act2: "Koncerte dhe shfaqje",
    act2Desc: "Performanca muzikore dhe teatrale",
    act3: "Workshope me artistë",
    act3Desc: "Mësim nga profesionistë",
    act4: "Vizita në muze",
    act4Desc: "Galeri dhe teatro kombëtare",
  },
  en: {
    back: "Back to Profiles",
    badge: "Academic Profile",
    title: "Arts & Music",
    subtitle: "Creative programs for developing artistic and musical talents in an inspiring environment.",
    overview: "Overview",
    overviewText: "The Arts & Music profile is designed for students with talent and passion for the fine arts. The program combines theoretical study with intensive practice in painting, sculpture, music, and theater. Students are encouraged to explore their creativity and develop a unique artistic voice.",
    curriculum: "Full Curriculum",
    careers: "Career Opportunities",
    activities: "Classroom Activities",
    gallery: "Profile Gallery",
    painting: "Painting",
    paintingHours: "4 hours/week",
    paintingDesc: "Various painting techniques",
    sculpture: "Sculpture",
    sculptureHours: "3 hours/week",
    sculptureDesc: "Work with clay and materials",
    music: "Music",
    musicHours: "4 hours/week",
    musicDesc: "Music theory and instruments",
    theater: "Theater",
    theaterHours: "3 hours/week",
    theaterDesc: "Acting and stage interpretation",
    act1: "Art exhibitions",
    act1Desc: "Presentation of student works",
    act2: "Concerts and shows",
    act2Desc: "Musical and theatrical performances",
    act3: "Workshops with artists",
    act3Desc: "Learning from professionals",
    act4: "Museum visits",
    act4Desc: "National galleries and theaters",
  },
  it: {
    back: "Torna ai Profili",
    badge: "Profilo Accademico",
    title: "Arte & Musica",
    subtitle: "Programmi creativi per lo sviluppo di talenti artistici e musicali in un ambiente ispirante.",
    overview: "Panoramica",
    overviewText: "Il profilo Arte & Musica è progettato per studenti con talento e passione per le belle arti. Il programma combina studio teorico con pratica intensiva in pittura, scultura, musica e teatro. Gli studenti sono incoraggiati a esplorare la loro creatività e sviluppare una voce artistica unica.",
    curriculum: "Curriculum Completo",
    careers: "Opportunità di Carriera",
    activities: "Attività in Classe",
    gallery: "Galleria del Profilo",
    painting: "Pittura",
    paintingHours: "4 ore/settimana",
    paintingDesc: "Varie tecniche pittoriche",
    sculpture: "Scultura",
    sculptureHours: "3 ore/settimana",
    sculptureDesc: "Lavoro con argilla e materiali",
    music: "Musica",
    musicHours: "4 ore/settimana",
    musicDesc: "Teoria musicale e strumenti",
    theater: "Teatro",
    theaterHours: "3 ore/settimana",
    theaterDesc: "Recitazione e interpretazione scenica",
    act1: "Mostre d'arte",
    act1Desc: "Presentazione di lavori studenteschi",
    act2: "Concerti e spettacoli",
    act2Desc: "Performance musicali e teatrali",
    act3: "Workshop con artisti",
    act3Desc: "Apprendimento da professionisti",
    act4: "Visite ai musei",
    act4Desc: "Gallerie e teatri nazionali",
  },
};

const ProfileArte = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const careers = {
    sq: ["Artist Piktor", "Skulptor", "Muzikant", "Aktor", "Dizajner Grafik", "Regjisor", "Koreograf", "Kritik Arti"],
    en: ["Painter Artist", "Sculptor", "Musician", "Actor", "Graphic Designer", "Director", "Choreographer", "Art Critic"],
    it: ["Artista Pittore", "Scultore", "Musicista", "Attore", "Graphic Designer", "Regista", "Coreografo", "Critico d'Arte"],
  };

  // Placeholder images - replace with actual photos
  const galleryImages = [
    { src: "/placeholder.svg", alt: "Art 1" },
    { src: "/placeholder.svg", alt: "Art 2" },
    { src: "/placeholder.svg", alt: "Art 3" },
    { src: "/placeholder.svg", alt: "Art 4" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-rose-500/10 py-16 md:py-24">
        <div className="container-custom">
          <Link to="/#programs">
            <Button variant="ghost" className="mb-6 text-rose-600 hover:text-rose-700">
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t.back}
            </Button>
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-rose-500/20 flex items-center justify-center">
              <Palette className="w-8 h-8 text-rose-600" />
            </div>
            <div>
              <span className="text-sm font-medium text-rose-600">{t.badge}</span>
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
                <BookOpen className="w-6 h-6 text-rose-600" />
                {t.overview}
              </h2>
              <p className="text-muted-foreground leading-relaxed">{t.overviewText}</p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">{t.curriculum}</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { subject: t.painting, hours: t.paintingHours, description: t.paintingDesc },
                  { subject: t.sculpture, hours: t.sculptureHours, description: t.sculptureDesc },
                  { subject: t.music, hours: t.musicHours, description: t.musicDesc },
                  { subject: t.theater, hours: t.theaterHours, description: t.theaterDesc },
                ].map((item) => (
                  <div key={item.subject} className="p-4 rounded-xl bg-card border border-border">
                    <h3 className="font-semibold text-foreground">{item.subject}</h3>
                    <p className="text-sm text-rose-600 mb-1">{item.hours}</p>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Trophy className="w-6 h-6 text-rose-600" />
                {t.careers}
              </h2>
              <div className="flex flex-wrap gap-2">
                {careers[language].map((career) => (
                  <span key={career} className="px-4 py-2 rounded-full bg-rose-500/10 text-rose-700 text-sm font-medium">
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
                <Camera className="w-5 h-5 text-rose-600" />
                {t.gallery}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {galleryImages.map((image, index) => (
                  <div 
                    key={index} 
                    className="aspect-square rounded-lg overflow-hidden bg-rose-100 dark:bg-rose-900/30 border border-rose-200 dark:border-rose-800"
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

            <div className="p-6 rounded-2xl bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-800">
              <h3 className="font-serif text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                <Brush className="w-5 h-5 text-rose-600" />
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
                    <CheckCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
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

export default ProfileArte;