import { useState } from "react";
import { Menu, X, ChevronDown, BookOpen, Users, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logoImage from "@/assets/logo-qemal-stafa.png";

const menuTranslations = {
  sq: { menu: "Menu", year1: "Viti 1", year2: "Viti 2", year3: "Viti 3" },
  en: { menu: "Menu", year1: "Year 1", year2: "Year 2", year3: "Year 3" },
  it: { menu: "Menu", year1: "Anno 1", year2: "Anno 2", year3: "Anno 3" },
};

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, language } = useLanguage();
  const txt = menuTranslations[language];

  const navLinks = [
    { name: t("nav.home"), href: "#hero" },
    { name: t("nav.about"), href: "#about" },
    { name: t("nav.studentGov"), href: "#student-government" },
    { name: t("nav.heritage"), href: "#heritage" },
    { name: t("nav.programs"), href: "#programs" },
    { name: t("nav.news"), href: "#news" },
    { name: t("nav.contact"), href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const scrollToYear = (yearId: string) => {
    const element = document.getElementById(yearId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-elegant">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src={logoImage} 
              alt="Logo Qemal Stafa" 
              className="w-12 h-12 md:w-14 md:h-14 object-contain"
            />
            <div>
              <h1 className="font-serif text-lg md:text-xl font-bold text-primary">
                Qemal Stafa
              </h1>
              <p className="text-xs text-muted-foreground hidden sm:block">
                Gjimnaz, Tiranë
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors rounded-md hover:bg-secondary"
              >
                {link.name}
              </button>
            ))}
            <LanguageSwitcher />
            
            {/* Menu Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="ml-2 bg-primary hover:bg-primary/90 text-primary-foreground">
                  {txt.menu}
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48 bg-card border border-border shadow-lg z-50">
                <DropdownMenuItem onClick={() => scrollToYear("year-1")} className="cursor-pointer flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  {txt.year1}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => scrollToYear("year-2")} className="cursor-pointer flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  {txt.year2}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => scrollToYear("year-3")} className="cursor-pointer flex items-center gap-2">
                  <GraduationCap className="h-4 w-4" />
                  {txt.year3}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <LanguageSwitcher />
            <button
              className="p-2 text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="px-4 py-3 text-left font-medium text-foreground/80 hover:text-primary hover:bg-secondary rounded-md transition-colors"
                >
                  {link.name}
                </button>
              ))}
              
              {/* Mobile Year Links */}
              <div className="border-t border-border mt-2 pt-2">
                <p className="px-4 py-2 text-sm font-semibold text-muted-foreground">{txt.menu}</p>
                <button onClick={() => scrollToYear("year-1")} className="px-4 py-3 text-left font-medium text-foreground/80 hover:text-primary hover:bg-secondary rounded-md transition-colors flex items-center gap-2 w-full">
                  <BookOpen className="h-4 w-4" />
                  {txt.year1}
                </button>
                <button onClick={() => scrollToYear("year-2")} className="px-4 py-3 text-left font-medium text-foreground/80 hover:text-primary hover:bg-secondary rounded-md transition-colors flex items-center gap-2 w-full">
                  <Users className="h-4 w-4" />
                  {txt.year2}
                </button>
                <button onClick={() => scrollToYear("year-3")} className="px-4 py-3 text-left font-medium text-foreground/80 hover:text-primary hover:bg-secondary rounded-md transition-colors flex items-center gap-2 w-full">
                  <GraduationCap className="h-4 w-4" />
                  {txt.year3}
                </button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
