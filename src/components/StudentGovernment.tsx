import { useLanguage } from "@/contexts/LanguageContext";
import { Users, Award } from "lucide-react";

const governmentMembers = [
  {
    role: { sq: "Kryetari", en: "President", it: "Presidente" },
    name: "Andi Hoxha",
    description: {
      sq: "Udhëheq iniciativat studentore dhe përfaqëson nxënësit në vendimmarrje. Organizon aktivitete dhe ndërmjetëson mes studentëve dhe administratës.",
      en: "Leads student initiatives and represents students in decision-making. Organizes activities and mediates between students and administration.",
      it: "Guida le iniziative studentesche e rappresenta gli studenti nel processo decisionale. Organizza attività e media tra studenti e amministrazione.",
    },
    icon: Users,
    gradient: "from-primary to-navy-dark",
  },
  {
    role: { sq: "Zëvendëskryetari", en: "Vice President", it: "Vicepresidente" },
    name: "Elira Krasniqi",
    description: {
      sq: "Mbështet kryetarin në detyrat e përditshme dhe merr përsipër projekte të veçanta. Koordinon komisionet e ndryshme të qeverisjes.",
      en: "Supports the president in daily duties and takes on special projects. Coordinates various governance committees.",
      it: "Supporta il presidente nei compiti quotidiani e si occupa di progetti speciali. Coordina i vari comitati di governance.",
    },
    icon: Award,
    gradient: "from-accent to-gold-dark",
  },
];

export const StudentGovernment = () => {
  const { language, t } = useLanguage();

  return (
    <section id="student-government" className="section-padding bg-secondary/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-accent/20 text-accent font-medium text-sm mb-4">
            {t("studentGov.badge")}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t("studentGov.title1")}{" "}
            <span className="text-gradient-gold">{t("studentGov.title2")}</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            {t("studentGov.description")}
          </p>
        </div>

        {/* Government Members Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {governmentMembers.map((member, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl overflow-hidden shadow-elegant border border-border hover:border-accent/50 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Gradient Header */}
              <div className={`h-32 bg-gradient-to-br ${member.gradient} relative`}>
                <div className="absolute inset-0 bg-black/10" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                  <div className="w-20 h-20 rounded-full bg-card border-4 border-card shadow-lg flex items-center justify-center">
                    <member.icon className="w-10 h-10 text-accent" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="pt-14 pb-8 px-6 text-center">
                <span className="inline-block px-3 py-1 rounded-full bg-secondary text-primary text-xs font-semibold mb-3">
                  {member.role[language]}
                </span>
                <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                  {member.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {member.description[language]}
                </p>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
