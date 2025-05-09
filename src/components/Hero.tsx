
import React from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 pb-16"
    >
      <div className="container flex flex-col items-center text-center">
        <div className="w-36 h-36 md:w-48 md:h-48 rounded-full border-4 border-resume-blue overflow-hidden mb-6">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
            alt="Izaias Palma Junior"
            className="w-full h-full object-cover"
          />
        </div>

        <h1 className="text-3xl md:text-5xl font-bold text-resume-blue mb-2 animate-fade-in">
          Izaias Palma Junior
        </h1>

        <p className="text-resume-gray mb-2 animate-fade-in">
          Parque Viana, Barueri-SP
        </p>

        <div className="max-w-2xl mx-auto mb-8 animate-fade-in-up">
          <p className="text-xl md:text-2xl text-resume-gray-dark leading-relaxed italic">
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
            onClick={() => window.open("https://github.com/izaiasjr", "_blank")}
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
