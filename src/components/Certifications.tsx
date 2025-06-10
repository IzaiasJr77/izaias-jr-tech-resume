
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Certifications = () => {
  const certifications = [
    {
      title: "Jornada Python com IA e Análise de Dados",
      institution: "Instituição de Ensino",
      status: "Concluído",
      date: "Jun/2025",
      description: "Curso completo focado em Python para desenvolvimento de soluções com Inteligência Artificial e análise avançada de dados.",
      skills: ["Python", "IA", "Análise de Dados", "Machine Learning"]
    },
    {
      title: "Curso Full Stack Java",
      institution: "Instituição de Ensino",
      status: "Concluído",
      date: "Mar/2025",
      description: "Formação completa em desenvolvimento Full Stack com Java, HTML, CSS, JavaScript, Spring Boot e MySQL.",
      skills: ["Java", "HTML", "CSS", "JavaScript", "Spring Boot", "MySQL"]
    },
    {
      title: "Imersão em Inteligência Artificial",
      institution: "Instituição de Ensino",
      status: "Em andamento",
      date: "Jun/2025",
      description: "Programa intensivo de imersão em IA com foco em aplicações práticas e desenvolvimento de soluções inovadoras.",
      skills: ["IA", "Machine Learning", "Deep Learning", "Automação"]
    }
  ];

  const projects = [
    {
      title: "Projetos com Python e IA",
      description: "Desenvolvimento de automações com IA, integração com APIs e WhatsApp (Twilio)."
    },
    {
      title: "Bots com IA Generativa",
      description: "Criação de bots inteligentes com IA generativa e análises automatizadas."
    },
    {
      title: "Versionamento de Código",
      description: "Experiência prática com Git e GitHub para controle de versão."
    },
    {
      title: "APIs e Prompt Engineering",
      description: "Conhecimentos em desenvolvimento de APIs REST e técnicas de Prompt Engineering."
    }
  ];

  return (
    <section id="certifications" className="bg-white py-20">
      <div className="container">
        <div className="section-content">
          <h2 className="section-title">Certificações e Cursos</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {certifications.map((cert, index) => (
              <Card key={index} className="shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl font-bold">{cert.title}</CardTitle>
                      <CardDescription className="text-resume-gray">
                        {cert.institution}
                      </CardDescription>
                    </div>
                    <Badge variant={cert.status === "Em andamento" ? "outline" : "default"} 
                           className={cert.status === "Em andamento" ? "bg-yellow-100 text-yellow-800 border-yellow-300" : "bg-green-100 text-green-800 border-green-300"}>
                      {cert.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-2 text-sm text-resume-gray">{cert.date}</p>
                  <p className="mb-4">{cert.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, idx) => (
                      <Badge key={idx} variant="secondary" className="bg-resume-gray-light">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 text-resume-blue">
              Projetos e Conhecimentos Técnicos
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <Card key={index} className="shadow-md hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{project.description}</p>
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

export default Certifications;
