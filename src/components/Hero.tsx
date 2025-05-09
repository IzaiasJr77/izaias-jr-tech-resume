
import React from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 pb-16 bg-resume-dark"
    >
      <div className="container flex flex-col items-center text-center">
        <div className="w-36 h-36 md:w-48 md:h-48 rounded-full border-4 border-resume-blue overflow-hidden mb-6">
          <img
            src="/lovable-uploads/ae84b369-5f96-45a5-b9aa-f228400a7ace.png"
            alt="Izaias Palma Junior"
            className="w-full h-full object-cover"
          />
        </div>

        <h1 className="text-3xl md:text-5xl font-bold text-white mb-2 animate-fade-in">
          Izaias Palma Junior
        </h1>

        <p className="text-gray-300 mb-2 animate-fade-in">
          Parque Viana, Barueri-SP
        </p>

        <div className="max-w-2xl mx-auto mb-8 animate-fade-in-up">
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed italic">
            "Profissional em transição de carreira para tecnologia, com sólida experiência em controladoria, 
            foco em desenvolvimento full stack e paixão por resolver problemas com código."
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up">
          <Button
            className="bg-resume-blue hover:bg-resume-blue/90"
            onClick={() => window.open("/resume.pdf", "_blank")}
          >
            Download CV
          </Button>
          <Button
            variant="outline"
            className="border-resume-blue text-resume-blue hover:bg-resume-blue hover:text-white"
            onClick={() => window.open("https://linkedin.com/in/izaiasjunior1", "_blank")}
          >
            <Linkedin className="mr-2 h-4 w-4" />
            LinkedIn
          </Button>
          <Button
            variant="outline"
            className="border-resume-blue text-resume-blue hover:bg-resume-blue hover:text-white"
            onClick={() => window.open("https://github.com/IzaiasJr77/izaias-jr-tech-resume.git", "_blank")}
          >
            <Github className="mr-2 h-4 w-4" />
            GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
