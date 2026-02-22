import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { StudentGovernment } from "@/components/StudentGovernment";
import { SchoolHeritage } from "@/components/SchoolHeritage";
import { Programs } from "@/components/Programs";
import { News } from "@/components/News";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <StudentGovernment />
        <SchoolHeritage />
        <Programs />
        <News />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
