
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
                  Brasileiro, casado, 27 anos.
                </p>
                <p>
                  Construí uma carreira consolidada como Analista de Controladoria, com atuação em auditoria, 
                  elaboração de relatórios gerenciais, análise de dados e controle de folha de pagamento.
                </p>
                <p>
                  Atualmente estou em transição para a área de tecnologia com foco em desenvolvimento back-end com Java.
                </p>
                <p>
                  Estou cursando formação Full Stack com ênfase em Java, Spring Boot, APIs REST, Kafka, 
                  JPA, testes com JUnit e Mockito.
                </p>
                <p>
                  Possuo certificação em Prompt Engineering com domínio de técnicas para IA aplicada.
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
