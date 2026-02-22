import { CheckCircle, Target, Heart, Lightbulb } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import schoolEntranceImage from "@/assets/school-entrance.png";

export const About = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: Target,
      titleKey: "about.excellence",
      descKey: "about.excellenceDesc",
    },
    {
      icon: Heart,
      titleKey: "about.values",
      descKey: "about.valuesDesc",
    },
    {
      icon: Lightbulb,
      titleKey: "about.innovation",
      descKey: "about.innovationDesc",
    },
  ];

  const achievements = [
    "about.achievement1",
    "about.achievement2",
    "about.achievement3",
    "about.achievement4",
  ];

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-secondary text-primary font-medium text-sm mb-4">
            {t("about.badge")}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t("about.title1")}{" "}
            <span className="text-gradient-gold">{t("about.title2")}</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            {t("about.description")}
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Image & Pattern */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-elegant">
              <img 
                src={schoolEntranceImage} 
                alt="Hyrja e Gjimnazit Qemal Stafa" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent/10 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-accent/30 rounded-2xl -z-10" />
          </div>

          {/* Right - Content */}
          <div>
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
              {t("about.mission")}
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              {t("about.missionDesc")}
            </p>

            {/* Achievements List */}
            <ul className="space-y-4 mb-8">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{t(achievement)}</span>
                </li>
              ))}
            </ul>

            {/* Stats Box */}
            <div className="p-6 rounded-xl bg-secondary">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="font-serif text-2xl font-bold text-primary">95%</p>
                  <p className="text-sm text-muted-foreground">{t("about.successRate")}</p>
                </div>
                <div>
                  <p className="font-serif text-2xl font-bold text-primary">50+</p>
                  <p className="text-sm text-muted-foreground">{t("about.clubsActivities")}</p>
                </div>
                <div>
                  <p className="font-serif text-2xl font-bold text-primary">30+</p>
                  <p className="text-sm text-muted-foreground">{t("about.partnerCountries")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-card border border-border card-hover text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 mx-auto mb-6 rounded-xl bg-accent/10 flex items-center justify-center">
                <value.icon className="w-7 h-7 text-accent" />
              </div>
              <h4 className="font-serif text-xl font-bold text-foreground mb-3">
                {t(value.titleKey)}
              </h4>
              <p className="text-muted-foreground">{t(value.descKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
