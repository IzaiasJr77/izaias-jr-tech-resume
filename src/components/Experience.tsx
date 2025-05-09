
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const experiences = [
    {
      company: "Grupo Souza Lima",
      position: "Analista de Controladoria Pleno e Assistente",
      period: "2020 - Atual",
      description: [
        "Auditoria e análise de dados financeiros",
        "Elaboração de relatórios gerenciais",
        "Controle de folha de pagamento",
        "Implementação de melhorias em processos internos"
      ],
      skills: ["Análise de Dados", "Excel Avançado", "Power BI", "Automação de Processos"]
    },
    {
      company: "Vitalflex Diamond Group",
      position: "Auxiliar de Controladoria e Contábil Fiscal",
      period: "2018 - 2020",
      description: [
        "Suporte na elaboração de demonstrativos financeiros",
        "Controle de documentação fiscal",
        "Análise de dados contábeis",
        "Apoio em auditorias internas"
      ],
      skills: ["Análise Contábil", "Organização", "Atenção aos Detalhes"]
    },
    {
      company: "AGN Innova",
      position: "Estágio em Finanças",
      period: "2017 - 2018",
      description: [
        "Apoio em operações financeiras",
        "Elaboração de relatórios básicos",
        "Organização de documentação",
        "Contato com clientes"
      ],
      skills: ["Comunicação", "Organização", "Microsoft Office"]
    },
    {
      company: "R&L Consultoria",
      position: "Office Boy",
      period: "2016 - 2017",
      description: [
        "Suporte administrativo geral",
        "Gestão de correspondências",
        "Organização de documentos",
        "Serviços externos"
      ],
      skills: ["Proatividade", "Responsabilidade", "Organização"]
    }
  ];

  const transferableSkills = [
    {
      title: "Análise de Dados",
      description: "Experiência com análise detalhada e interpretação de dados, habilidade crucial para desenvolvimento back-end e tomada de decisões baseadas em dados."
    },
    {
      title: "Confiabilidade de Informações",
      description: "Prática em garantir precisão e integridade de dados financeiros, transferível para validação e teste de software."
    },
    {
      title: "Automação de Relatórios",
      description: "Desenvolvimento de soluções automatizadas para processos repetitivos, habilidade diretamente aplicável à programação e automação de tarefas."
    },
    {
      title: "Raciocínio Lógico",
      description: "Forte capacidade de análise crítica e solução de problemas complexos, essencial para desenvolvimento de algoritmos e debugging."
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container">
        <div className="section-content">
          <h2 className="section-title">Experiência Profissional</h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="border-l-4 border-l-resume-blue shadow-md">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start flex-col md:flex-row gap-2">
                    <CardTitle className="text-xl font-bold">{exp.position}</CardTitle>
                    <Badge variant="outline" className="bg-resume-blue/10 text-resume-blue border-resume-blue">
                      {exp.period}
                    </Badge>
                  </div>
                  <p className="text-lg font-medium text-resume-gray">{exp.company}</p>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 mb-4 space-y-1">
                    {exp.description.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.skills.map((skill, idx) => (
                      <Badge key={idx} variant="secondary" className="bg-resume-gray-light">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16">
            <h3 className="text-xl font-semibold mb-6 text-resume-blue">
              Habilidades Transferíveis para Tecnologia
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {transferableSkills.map((skill, index) => (
                <Card key={index} className="shadow-md hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{skill.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{skill.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
