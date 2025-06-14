
import React from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { generateCV } from "@/utils/generatePDF";

const Hero = () => {
  return <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-16 relative">
      {/* Modern tech background with gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-resume-dark to-resume-dark/80 z-0">
        <div className="absolute inset-0 bg-repeat opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233B82F6' fill-opacity='0.4'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10S50 55.523 50 50zm0-30c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10S50 25.523 50 20zM20 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10S20 55.523 20 50zm0-30c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10S20 25.523 20 20zm30 10c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10zm-30 0c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      </div>
      
      <div className="container flex flex-col items-center text-center z-10">
        {/* Modern profile photo with adjusted sizing to prevent cropping */}
        <div className="w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden mb-8 shadow-xl bg-gray-800/50">
          <Avatar className="w-full h-full">
            <AvatarImage alt="Izaias Palma Junior" className="h-full w-full object-cover" src="/lovable-uploads/94ea1181-79e4-433c-9dd2-479978c07a23.png" />
            <AvatarFallback className="text-4xl bg-resume-blue text-white">
              IPJ
            </AvatarFallback>
          </Avatar>
        </div>

        <h1 className="text-3xl md:text-5xl font-bold text-white mb-2 animate-fade-in">
          Izaias Palma Junior
        </h1>

        <p className="text-gray-300 mb-2 animate-fade-in">
          Parque Viana, Barueri-SP
        </p>

        <div className="max-w-2xl mx-auto mb-8 animate-fade-in-up">
          <p className="text-xl md:text-2xl text-gray-200 leading-relaxed italic">
            "Profissional em transição de carreira, com sólida experiência em controladoria e 
            financeiro. Migrando para a área de tecnologia com foco em Inteligência Artificial, 
            automações com Python e análise de dados."
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up">
          <Button className="bg-resume-blue hover:bg-resume-blue/90 text-white" onClick={generateCV}>
            Download CV
          </Button>
          <Button variant="outline" className="border-resume-blue text-resume-blue-light hover:bg-resume-blue hover:text-white" onClick={() => window.open("https://linkedin.com/in/izaiasjunior1", "_blank")}>
            <Linkedin className="mr-2 h-4 w-4" />
            LinkedIn
          </Button>
          <Button variant="outline" className="border-resume-blue text-resume-blue-light hover:bg-resume-blue hover:text-white" onClick={() => window.open("https://github.com/IzaiasJr77/izaias-jr-tech-resume.git", "_blank")}>
            <Github className="mr-2 h-4 w-4" />
            GitHub
          </Button>
        </div>
      </div>
    </section>;
};

export default Hero;
