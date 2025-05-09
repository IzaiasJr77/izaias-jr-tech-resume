
import React from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 pb-16 bg-resume-gray-light relative"
    >
      {/* Background tech pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-repeat" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231E3A8A' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` 
        }}></div>
      </div>
      
      <div className="container flex flex-col items-center text-center z-10">
        {/* Profile photo with adjusted sizing and centering */}
        <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-gray-100 border-4 border-resume-blue overflow-hidden mb-6 flex items-center justify-center">
          <img
            src="/lovable-uploads/ae84b369-5f96-45a5-b9aa-f228400a7ace.png"
            alt="Izaias Palma Junior"
            className="w-auto h-auto max-w-full max-h-full object-contain"
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
