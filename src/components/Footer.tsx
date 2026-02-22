import { GraduationCap, Facebook, Instagram } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const Footer = () => {
  const { t } = useLanguage();

  const quickLinks = [
    { nameKey: "nav.about", href: "#about" },
    { nameKey: "nav.programs", href: "#programs" },
    { nameKey: "nav.news", href: "#news" },
    { nameKey: "nav.contact", href: "#contact" },
  ];

  const resources = [
    { nameKey: "footer.academicCalendar", href: "#" },
    { nameKey: "footer.library", href: "#" },
    { nameKey: "footer.studentPortal", href: "#" },
    { nameKey: "footer.careers", href: "#" },
  ];

  const socials = [
    { icon: Facebook, href: "https://www.facebook.com/qemalstafatirane", label: "Facebook" },
    { icon: Instagram, href: "https://www.instagram.com/qemalstafatirane", label: "Instagram" },
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom section-padding pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold">Qemal Stafa</h3>
                <p className="text-sm text-primary-foreground/70">Gjimnaz • Tiranë</p>
              </div>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              {t("footer.description")}
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-4">{t("footer.quickLinks")}</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.nameKey}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                  >
                    {t(link.nameKey)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-4">{t("footer.resources")}</h4>
            <ul className="space-y-3">
              {resources.map((link) => (
                <li key={link.nameKey}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                  >
                    {t(link.nameKey)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-4">{t("footer.subscribe")}</h4>
            <p className="text-primary-foreground/70 text-sm mb-4">
              {t("footer.subscribeDesc")}
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder={t("footer.emailPlaceholder")}
                className="flex-1 px-4 py-2 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-lg bg-accent hover:bg-gold-light text-accent-foreground font-medium text-sm transition-colors"
              >
                {t("footer.send")}
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>© 2026 Gjimnazi "Qemal Stafa". {t("footer.rights")}</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-accent transition-colors">{t("footer.privacy")}</a>
              <a href="#" className="hover:text-accent transition-colors">{t("footer.terms")}</a>
              <a href="#" className="hover:text-accent transition-colors">{t("footer.accessibility")}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
