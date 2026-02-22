import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import vjetoriImage from "@/assets/100-vjetori.png";
import robotiImage from "@/assets/takim-fushave.png";
import festivaliImage from "@/assets/festivali-shkences.png";
import takimImage from "@/assets/takim-fushave-new.png";

export const News = () => {
  const { t, language } = useLanguage();

  const newsItems = [
    {
      titleKey: "news.100vjetori",
      excerptKey: "news.100vjetoriDesc",
      date: { sq: "25 Janar 2026", en: "January 25, 2026", it: "25 Gennaio 2026" },
      categoryKey: "news.anniversary",
      image: vjetoriImage,
    },
    {
      titleKey: "news.robot",
      excerptKey: "news.robotDesc",
      date: { sq: "28 Tetor 2025", en: "October 28, 2025", it: "28 Ottobre 2025" },
      categoryKey: "news.event",
      image: robotiImage,
    },
    {
      titleKey: "news.festival",
      excerptKey: "news.festivalDesc",
      date: { sq: "10 Janar 2026", en: "January 10, 2026", it: "10 Gennaio 2026" },
      categoryKey: "news.collaboration",
      image: festivaliImage,
    },
  ];

  const upcomingEvents = [
    { titleKey: "news.fieldMeeting", date: { sq: "2 Shkurt 2026", en: "February 2, 2026", it: "2 Febbraio 2026" }, image: takimImage },
    { titleKey: "news.openDay", date: { sq: "29 Janar 2026", en: "January 29, 2026", it: "29 Gennaio 2026" } },
    { titleKey: "news.debate", date: { sq: "12 Shkurt 2026", en: "February 12, 2026", it: "12 Febbraio 2026" } },
  ];

  return (
    <section id="news" className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-secondary text-primary font-medium text-sm mb-4">
            {t("news.badge")}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t("news.title1")}{" "}
            <span className="text-gradient-gold">{t("news.title2")}</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            {t("news.description")}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* News Cards - 2 columns */}
          <div className="lg:col-span-2 space-y-6">
            {newsItems.map((item) => (
              <article
                key={item.titleKey}
                className="group p-6 rounded-2xl bg-card border border-border card-hover flex flex-col md:flex-row gap-6"
              >
                {/* Image or Placeholder */}
                <div className="w-full md:w-48 h-32 rounded-xl bg-secondary flex-shrink-0 flex items-center justify-center overflow-hidden">
                  {item.image ? (
                    <img src={item.image} alt={t(item.titleKey)} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-sm font-medium text-muted-foreground">{t(item.categoryKey)}</span>
                  )}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar className="w-4 h-4" />
                    <span>{item.date[language]}</span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {t(item.titleKey)}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {t(item.excerptKey)}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* Upcoming Events Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 p-6 rounded-2xl bg-primary text-primary-foreground">
              <h3 className="font-serif text-xl font-bold mb-6">
                {t("news.upcoming")}
              </h3>
              <div className="space-y-4">
                {upcomingEvents.map((event) => (
                  <div
                    key={event.titleKey}
                    className="p-4 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20"
                  >
                    {event.image && (
                      <div className="w-full h-24 rounded-lg overflow-hidden mb-3">
                        <img src={event.image} alt={t(event.titleKey)} className="w-full h-full object-cover" />
                      </div>
                    )}
                    <p className="font-medium text-primary-foreground mb-1">
                      {t(event.titleKey)}
                    </p>
                    <p className="text-sm text-primary-foreground/70 flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {event.date[language]}
                    </p>
                  </div>
                ))}
              </div>
              <Button
                className="w-full mt-6 bg-accent hover:bg-gold-light text-accent-foreground font-semibold"
              >
                {t("news.viewCalendar")}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
