import { MapPin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";
import schoolMapImage from "@/assets/school-map.png";

export const Contact = () => {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    emri: "",
    mbiemri: "",
    email: "",
    subjekti: "",
    mesazhi: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.emri || !formData.email || !formData.mesazhi) {
      toast.error(t("contact.required"));
      return;
    }

    const subject = encodeURIComponent(formData.subjekti || "Message from school website");
    const body = encodeURIComponent(
      `${t("contact.name")}: ${formData.emri} ${formData.mbiemri}\nEmail: ${formData.email}\n\n${t("contact.message")}:\n${formData.mesazhi}`
    );
    
    window.location.href = `mailto:orientimkarriereqs@gmail.com?subject=${subject}&body=${body}`;
    toast.success(t("contact.opening"));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      titleKey: "contact.address",
      details: ["Rruga e Durresit", "Tiranë, Shqipëri"],
    },
    {
      icon: Mail,
      titleKey: "contact.email",
      details: ["orientimkarriereqs@gmail.com"],
    },
  ];

  return (
    <section id="contact" className="section-padding bg-secondary/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-secondary text-primary font-medium text-sm mb-4">
            {t("contact.badge")}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t("contact.title1")}{" "}
            <span className="text-gradient-gold">{t("contact.title2")}</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            {t("contact.description")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="p-8 rounded-2xl bg-card border border-border shadow-elegant">
            <h3 className="font-serif text-2xl font-bold text-foreground mb-6">
              {t("contact.sendMessage")}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t("contact.name")} *
                  </label>
                  <Input 
                    name="emri"
                    value={formData.emri}
                    onChange={handleChange}
                    placeholder={t("contact.namePlaceholder")} 
                    className="bg-background" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t("contact.lastName")}
                  </label>
                  <Input 
                    name="mbiemri"
                    value={formData.mbiemri}
                    onChange={handleChange}
                    placeholder={t("contact.lastNamePlaceholder")} 
                    className="bg-background" 
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t("contact.email")} *
                </label>
                <Input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t("contact.emailPlaceholder")} 
                  className="bg-background" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t("contact.subject")}
                </label>
                <Input 
                  name="subjekti"
                  value={formData.subjekti}
                  onChange={handleChange}
                  placeholder={t("contact.subjectPlaceholder")} 
                  className="bg-background" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t("contact.message")} *
                </label>
                <Textarea
                  name="mesazhi"
                  value={formData.mesazhi}
                  onChange={handleChange}
                  placeholder={t("contact.messagePlaceholder")}
                  rows={4}
                  className="bg-background resize-none"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-navy-dark text-primary-foreground font-semibold"
              >
                {t("contact.send")}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info) => (
              <div
                key={info.titleKey}
                className="p-6 rounded-xl bg-card border border-border card-hover flex gap-4"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <info.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-foreground mb-1">
                    {t(info.titleKey)}
                  </h4>
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-muted-foreground text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            {/* Map Image */}
            <div className="rounded-xl overflow-hidden border border-border">
              <img 
                src={schoolMapImage} 
                alt="School location map" 
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
