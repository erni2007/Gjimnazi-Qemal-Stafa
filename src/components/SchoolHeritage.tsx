import { useLanguage } from "@/contexts/LanguageContext";
import { History, Building2, Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import schoolBuildingImage from "@/assets/school-building.png";

const heritageItems = [
  {
    icon: History,
    titleKey: "heritage.history",
    descKey: "heritage.historyDesc",
    link: "/historia",
  },
  {
    icon: Building2,
    titleKey: "heritage.museum",
    descKey: "heritage.museumDesc",
    link: "/muzeu",
  },
  {
    icon: Trophy,
    titleKey: "heritage.awards",
    descKey: "heritage.awardsDesc",
    link: "/cmime",
  },
];

export const SchoolHeritage = () => {
  const { t, language } = useLanguage();

  return (
    <section id="heritage" className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-secondary text-primary font-medium text-sm mb-4">
            {t("heritage.badge")}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t("heritage.title1")}{" "}
            <span className="text-gradient-gold">{t("heritage.title2")}</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            {t("heritage.description")}
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Image with overlay */}
          <div className="relative group">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-elegant">
              <img
                src={schoolBuildingImage}
                alt="Ndërtesa historike e Gjimnazit Qemal Stafa"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white font-serif text-2xl font-bold">1925 - 2025</p>
                <p className="text-white/80 text-sm">100 Vjet Histori dhe Ekselencë</p>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/20 rounded-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 border-2 border-accent/40 rounded-2xl -z-10" />
          </div>

          {/* Right - Heritage Items */}
          <div className="space-y-6">
            {heritageItems.map((item, index) => (
              <Link
                to={item.link}
                key={index}
                className="group block p-6 rounded-xl bg-card border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-elegant hover:-translate-y-1"
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <item.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                      {t(item.titleKey)}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {t(item.descKey)}
                    </p>
                  </div>
                  <div className="flex-shrink-0 self-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Timeline / Stats */}
        <div className="mt-16 grid grid-cols-3 gap-6">
          {[
            { year: "1925", label: { sq: "Themelimi", en: "Founded", it: "Fondazione" } },
            { year: "50+", label: { sq: "Çmime", en: "Awards", it: "Premi" } },
            { year: "100", label: { sq: "Vjet Histori", en: "Years of History", it: "Anni di Storia" } },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-secondary/50 border border-border"
            >
              <p className="font-serif text-3xl md:text-4xl font-bold text-accent mb-2">
                {stat.year}
              </p>
              <p className="text-sm text-muted-foreground">
                {stat.label[language as keyof typeof stat.label]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
