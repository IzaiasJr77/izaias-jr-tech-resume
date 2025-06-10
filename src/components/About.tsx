
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
                  Profissional em transição de carreira, com sólida experiência em controladoria e 
                  financeiro. Migrando para a área de tecnologia com foco em Inteligência Artificial, 
                  automações com Python e análise de dados.
                </p>
                <p>
                  Experiência consolidada em análise de dados financeiros, auditoria, elaboração de 
                  relatórios gerenciais e controle de processos. Atualmente desenvolvendo projetos 
                  com Python, automações com IA, APIs e integração com WhatsApp (Twilio).
                </p>
                <p>
                  Criação de bots com IA generativa, análises automatizadas, conhecimentos em Git, 
                  GitHub para versionamento de código, Prompt Engineering e APIs REST.
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
