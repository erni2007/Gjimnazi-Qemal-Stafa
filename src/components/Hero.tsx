import { ArrowRight, Award, Users, BookOpen, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImage from "@/assets/school-building.png";

export const Hero = () => {
  const { t } = useLanguage();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Gjimnazi Qemal Stafa"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-hero-gradient opacity-85" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 container-custom section-padding pt-32">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 mb-8 animate-fade-in">
            <Award className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-primary-foreground">
              {t("hero.badge")}
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            {t("hero.title1")}{" "}
            <span className="text-gradient-gold">{t("hero.title2")}</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mb-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            {t("hero.subtitle")}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16 opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button
              size="lg"
              className="bg-accent hover:bg-gold-light text-accent-foreground font-semibold text-lg px-8 shadow-gold"
              onClick={() => scrollToSection("#programs")}
            >
              {t("hero.discoverPrograms")}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              className="bg-white hover:bg-white/90 text-primary font-semibold text-lg px-8 shadow-lg"
              onClick={() => scrollToSection("#about")}
            >
              {t("hero.learnMore")}
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                <Users className="w-5 h-5 text-accent" />
                <span className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground">1200+</span>
              </div>
              <p className="text-sm text-primary-foreground/70">{t("hero.students")}</p>
            </div>
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                <BookOpen className="w-5 h-5 text-accent" />
                <span className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground">50+</span>
              </div>
              <p className="text-sm text-primary-foreground/70">{t("hero.teachers")}</p>
            </div>
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                <Trophy className="w-5 h-5 text-accent" />
                <span className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground">10+</span>
              </div>
              <p className="text-sm text-primary-foreground/70">{t("hero.clubs")}</p>
            </div>
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                <Award className="w-5 h-5 text-accent" />
                <span className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground">Top 2</span>
              </div>
              <p className="text-sm text-primary-foreground/70">{t("hero.ranking")}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-2.5 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};
