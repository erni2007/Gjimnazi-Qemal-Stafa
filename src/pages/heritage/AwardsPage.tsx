import { useLanguage } from "@/contexts/LanguageContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowLeft, Trophy, Medal, Star, Award } from "lucide-react";
import { Link } from "react-router-dom";

const translations = {
  sq: {
    back: "Kthehu",
    badge: "Çmime dhe Njohje",
    title: "Arritjet Tona",
    subtitle: "Një histori suksesi dhe ekselence akademike",
    intro: "Gjimnazi \"Qemal Stafa\" ka një histori të pasur çmimesh dhe njohjesh në nivel kombëtar dhe ndërkombëtar. Studentët dhe mësuesit tanë kanë fituar qindra medalje dhe trofë në fusha të ndryshme.",
    category1Title: "Olimpiadat Kombëtare",
    category1Text: "Çdo vit, studentët tanë fitojnë pozitat e para në olimpiadat kombëtare të matematikës, fizikës, kimisë, biologjisë dhe informatikës. Kemi fituar mbi 200 medalje të arta në 10 vitet e fundit.",
    category2Title: "Garat Ndërkombëtare",
    category2Text: "Shkolla jonë ka përfaqësuar Shqipërinë në olimpiada ndërkombëtare, duke fituar medalje në IMO, IPhO, IChO dhe IOI. Studentët tanë kanë treguar nivel të lartë kompetence në arenën globale.",
    category3Title: "Çmime për Ekselencë",
    category3Text: "Gjimnazi \"Qemal Stafa\" është nderuar me çmime të shumta për kontributin e jashtëzakonshëm në arsim, duke përfshirë çmimin \"Shkolla e Vitit\" dhe njohje nga Ministria e Arsimit.",
    category4Title: "Aktivitete Kulturore",
    category4Text: "Studentët tanë shkëlqejnë edhe në arte dhe kulturë, duke fituar çmime në festivale muzike, konkurse arti, dhe gara debati në nivel kombëtar dhe rajonal.",
    statsTitle: "Në Numra",
    stat1: "Medalje të Arta",
    stat2: "Medalje Olimpike",
    stat3: "Çmime Kombëtare",
    stat4: "Njohje Ndërkombëtare",
    recentTitle: "Arritjet e Fundit",
    recent1Title: "Olimpiada e Matematikës 2024",
    recent1Text: "3 medalje të arta dhe 2 të argjendta në Olimpiadën Kombëtare të Matematikës",
    recent2Title: "Gara e Informatikës 2024",
    recent2Text: "Vendi i parë në Garën Kombëtare të Informatikës dhe kualifikim për IOI",
    recent3Title: "Festivali i Shkencës 2024",
    recent3Text: "Çmimi i madh për projektin më inovativ në Festivalin Kombëtar të Shkencës",
    recent4Title: "Debati Kombëtar 2024",
    recent4Text: "Kampionë të Shqipërisë në kategorinë e debatit parlamentar",
  },
  en: {
    back: "Go Back",
    badge: "Awards and Recognition",
    title: "Our Achievements",
    subtitle: "A history of success and academic excellence",
    intro: "\"Qemal Stafa\" High School has a rich history of awards and recognition at national and international levels. Our students and teachers have won hundreds of medals and trophies in various fields.",
    category1Title: "National Olympiads",
    category1Text: "Every year, our students win top positions in national olympiads of mathematics, physics, chemistry, biology, and informatics. We have won over 200 gold medals in the last 10 years.",
    category2Title: "International Competitions",
    category2Text: "Our school has represented Albania in international olympiads, winning medals at IMO, IPhO, IChO, and IOI. Our students have demonstrated high-level competence in the global arena.",
    category3Title: "Excellence Awards",
    category3Text: "\"Qemal Stafa\" High School has been honored with numerous awards for outstanding contribution to education, including the \"School of the Year\" award and recognition from the Ministry of Education.",
    category4Title: "Cultural Activities",
    category4Text: "Our students also excel in arts and culture, winning awards in music festivals, art competitions, and debate contests at national and regional levels.",
    statsTitle: "By the Numbers",
    stat1: "Gold Medals",
    stat2: "Olympic Medals",
    stat3: "National Awards",
    stat4: "International Recognition",
    recentTitle: "Recent Achievements",
    recent1Title: "Mathematics Olympiad 2024",
    recent1Text: "3 gold and 2 silver medals at the National Mathematics Olympiad",
    recent2Title: "Informatics Competition 2024",
    recent2Text: "First place at the National Informatics Competition and qualification for IOI",
    recent3Title: "Science Festival 2024",
    recent3Text: "Grand prize for the most innovative project at the National Science Festival",
    recent4Title: "National Debate 2024",
    recent4Text: "Champions of Albania in the parliamentary debate category",
  },
  it: {
    back: "Torna Indietro",
    badge: "Premi e Riconoscimenti",
    title: "I Nostri Successi",
    subtitle: "Una storia di successo ed eccellenza accademica",
    intro: "Il Liceo \"Qemal Stafa\" ha una ricca storia di premi e riconoscimenti a livello nazionale e internazionale. I nostri studenti e insegnanti hanno vinto centinaia di medaglie e trofei in vari campi.",
    category1Title: "Olimpiadi Nazionali",
    category1Text: "Ogni anno, i nostri studenti vincono le prime posizioni nelle olimpiadi nazionali di matematica, fisica, chimica, biologia e informatica. Abbiamo vinto oltre 200 medaglie d'oro negli ultimi 10 anni.",
    category2Title: "Competizioni Internazionali",
    category2Text: "La nostra scuola ha rappresentato l'Albania alle olimpiadi internazionali, vincendo medaglie a IMO, IPhO, IChO e IOI. I nostri studenti hanno dimostrato competenze di alto livello nell'arena globale.",
    category3Title: "Premi per l'Eccellenza",
    category3Text: "Il Liceo \"Qemal Stafa\" è stato onorato con numerosi premi per il contributo eccezionale all'istruzione, incluso il premio \"Scuola dell'Anno\" e riconoscimenti dal Ministero dell'Istruzione.",
    category4Title: "Attività Culturali",
    category4Text: "I nostri studenti eccellono anche nelle arti e nella cultura, vincendo premi in festival musicali, concorsi d'arte e gare di dibattito a livello nazionale e regionale.",
    statsTitle: "In Numeri",
    stat1: "Medaglie d'Oro",
    stat2: "Medaglie Olimpiche",
    stat3: "Premi Nazionali",
    stat4: "Riconoscimenti Internazionali",
    recentTitle: "Successi Recenti",
    recent1Title: "Olimpiade di Matematica 2024",
    recent1Text: "3 medaglie d'oro e 2 d'argento all'Olimpiade Nazionale di Matematica",
    recent2Title: "Competizione di Informatica 2024",
    recent2Text: "Primo posto alla Competizione Nazionale di Informatica e qualificazione per IOI",
    recent3Title: "Festival della Scienza 2024",
    recent3Text: "Gran premio per il progetto più innovativo al Festival Nazionale della Scienza",
    recent4Title: "Dibattito Nazionale 2024",
    recent4Text: "Campioni d'Albania nella categoria dibattito parlamentare",
  },
};

const AwardsPage = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const categories = [
    { icon: Medal, title: t.category1Title, text: t.category1Text, color: "from-yellow-500 to-yellow-600" },
    { icon: Trophy, title: t.category2Title, text: t.category2Text, color: "from-accent to-gold-dark" },
    { icon: Award, title: t.category3Title, text: t.category3Text, color: "from-primary to-navy-dark" },
    { icon: Star, title: t.category4Title, text: t.category4Text, color: "from-emerald-500 to-emerald-600" },
  ];

  const stats = [
    { number: "200+", label: t.stat1 },
    { number: "50+", label: t.stat2 },
    { number: "100+", label: t.stat3 },
    { number: "25+", label: t.stat4 },
  ];

  const recentAchievements = [
    { icon: Medal, title: t.recent1Title, text: t.recent1Text },
    { icon: Trophy, title: t.recent2Title, text: t.recent2Text },
    { icon: Star, title: t.recent3Title, text: t.recent3Text },
    { icon: Award, title: t.recent4Title, text: t.recent4Text },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-accent via-gold-dark to-accent overflow-hidden">
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

        {/* Stats */}
        <section className="py-12 bg-secondary/30">
          <div className="container-custom">
            <h2 className="font-serif text-2xl font-bold text-foreground text-center mb-8">
              {t.statsTitle}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-6 rounded-xl bg-card border border-border">
                  <p className="font-serif text-4xl font-bold text-accent mb-2">{stat.number}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
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

        {/* Categories */}
        <section className="pb-16">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-8">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className="group relative rounded-2xl overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-10 group-hover:opacity-20 transition-opacity`} />
                  <div className="relative p-8 bg-card border border-border rounded-2xl hover:border-accent/50 transition-all duration-300">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-6`}>
                      <category.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-foreground mb-4">
                      {category.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {category.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Achievements */}
        <section className="py-16 bg-secondary/30">
          <div className="container-custom">
            <h2 className="font-serif text-3xl font-bold text-foreground text-center mb-12">
              {t.recentTitle}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {recentAchievements.map((achievement, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-card border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-elegant"
                >
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <achievement.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{achievement.title}</h4>
                  <p className="text-sm text-muted-foreground">{achievement.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trophy Display */}
        <section className="py-16">
          <div className="container-custom">
            <div className="flex justify-center gap-8 flex-wrap">
              {[Trophy, Medal, Award, Star, Trophy].map((Icon, index) => (
                <div
                  key={index}
                  className="w-24 h-24 rounded-full bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center animate-pulse"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <Icon className="w-12 h-12 text-accent" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AwardsPage;
