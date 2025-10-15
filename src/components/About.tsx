
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="bg-white py-20">
      <div className="container">
        <div className="section-content">
          <h2 className="section-title">Sobre Mim</h2>
          <Card className="border-none shadow-lg">
            <CardContent className="p-6 md:p-8">
              <div className="space-y-4 text-resume-gray-dark">
                <p>
                  Brasileiro, casado, 28 anos.
                </p>
                <p>
                  Engenheiro de Inteligência Artificial Jr com experiência em projetos práticos utilizando Python, 
                  IA generativa, engenharia de prompt e integração com APIs. Atua no desenvolvimento de soluções 
                  inovadoras com foco em LLMs e automações inteligentes, aplicando conceitos modernos da IA de 
                  forma eficaz.
                </p>
                <p>
                  Possui 8 anos de vivência no setor financeiro e de controladoria, agregando visão analítica e 
                  estratégica aos projetos. Une pensamento estruturado à tecnologia para criar soluções eficientes 
                  e escaláveis.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
