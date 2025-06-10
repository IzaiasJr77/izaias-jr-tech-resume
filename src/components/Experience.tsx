
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const experiences = [
    {
      company: "VIVEO",
      position: "Analista de Benefícios",
      period: "Nov/2023 - Jun/2025",
      description: [
        "Responsável pelo fluxo e processo de pagamento das NFs de benefícios",
        "Controle e lançamento no sistema Protheus",
        "Auditoria de valores mensais e análise de variações"
      ],
      skills: ["Sistema Protheus", "Auditoria", "Análise de Variações", "Controle de Processos"]
    },
    {
      company: "Grupo Souza Lima",
      position: "Analista de Controladoria Pleno",
      period: "Out/2022 - Nov/2023",
      description: [
        "Elaboração e consolidação de relatórios gerenciais",
        "Análises comparativas e variações de contas",
        "Suporte na auditoria de folha de pagamento e benefícios"
      ],
      skills: ["Relatórios Gerenciais", "Análise Comparativa", "Auditoria", "Controladoria"]
    },
    {
      company: "Grupo Souza Lima",
      position: "Assistente de Controladoria",
      period: "Nov/2020 - Out/2022",
      description: [
        "Auditoria de processos e folha de pagamento",
        "Conciliação bancária e atualização de gráficos gerenciais",
        "Análise de contratos e pagamentos a terceiros"
      ],
      skills: ["Conciliação Bancária", "Auditoria de Processos", "Análise de Contratos", "Gráficos Gerenciais"]
    },
    {
      company: "Vitalflex Diamond Group",
      position: "Auxiliar de Controladoria",
      period: "Jan/2018 - Abr/2020",
      description: [
        "Análise de relatórios como DRE e Balanço Patrimonial",
        "Emissão de GNRE e escrituração de notas fiscais",
        "Experiência anterior como Auxiliar Contábil Fiscal com foco em impostos e declarações acessórias"
      ],
      skills: ["DRE", "Balanço Patrimonial", "GNRE", "Escrituração Fiscal", "Impostos"]
    },
    {
      company: "AGN Innova S.A",
      position: "Estagiário em Finanças",
      period: "Nov/2015 - Nov/2017",
      description: [
        "Pagamento de contas e provisionamento financeiro",
        "Emissão de notas fiscais e controle de suprimentos"
      ],
      skills: ["Finanças", "Provisionamento", "Notas Fiscais", "Controle de Suprimentos"]
    }
  ];

  const transferableSkills = [
    {
      title: "Análise de Dados",
      description: "Experiência com análise detalhada e interpretação de dados, habilidade crucial para desenvolvimento com IA e automações."
    },
    {
      title: "Automação de Processos",
      description: "Experiência em automatizar processos financeiros, agora aplicada em automações com Python e IA."
    },
    {
      title: "Controle de Qualidade",
      description: "Prática em auditoria e validação de dados, essencial para desenvolvimento de soluções confiáveis."
    },
    {
      title: "Raciocínio Analítico",
      description: "Forte capacidade de análise crítica e solução de problemas complexos, essencial para desenvolvimento de algoritmos e IA."
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
