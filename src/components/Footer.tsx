
import React from "react";
import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-resume-gray-dark py-10 border-t border-gray-200">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="font-semibold text-lg mb-1">Izaias Palma Junior</p>
            <p className="text-sm text-resume-gray">
              © {currentYear} Todos os direitos reservados
            </p>
          </div>

          <div className="flex space-x-4">
            <a
              href="https://linkedin.com/in/izaiasjunior1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-resume-blue hover:text-resume-blue/80 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="https://github.com/IzaiasJr77/izaias-jr-tech-resume.git"
              target="_blank"
              rel="noopener noreferrer"
              className="text-resume-blue hover:text-resume-blue/80 transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
