
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Certifications = () => {
  const certifications = [
    {
      title: "Testes Automatizados e IA Generativa",
      institution: "Em andamento",
      status: "Cursando",
      date: "2025",
      description: "Curso focado em testes automatizados com IA generativa",
      skills: ["IA Generativa", "Testes Automatizados"]
    },
    {
      title: "Complete AI Engineer Training",
      institution: "Udemy",
      status: "Concluído",
      date: "Out/2025",
      description: "Python, NPL, Transformers, LLMs - Treinamento completo",
      skills: ["Python", "NPL", "Transformers", "LLMs"]
    },
    {
      title: "Automações e Agentes de IA com N8N",
      institution: "Udemy",
      status: "Concluído",
      date: "Ago/2025",
      description: "Automações inteligentes usando N8N",
      skills: ["N8N", "Automação", "IA"]
    },
    {
      title: "Bootcamp Python e Inteligência Artificial",
      institution: "Bootcamp",
      status: "Concluído",
      date: "Jul/2025",
      description: "Do Zero ao Expert em Python e IA",
      skills: ["Python", "IA"]
    },
    {
      title: "Jornada Python com IA e Análise de Dados",
      institution: "Hashtag Treinamentos",
      status: "Concluído",
      date: "Jun/2025",
      description: "Curso completo de Python focado em IA e análise de dados",
      skills: ["Python", "IA", "Análise de Dados"]
    },
    {
      title: "Engenharia de Prompt",
      institution: "Online",
      status: "Concluído",
      date: "Abr/2025",
      description: "Técnicas avançadas de prompt engineering",
      skills: ["Prompt Engineering", "LLMs"]
    },
    {
      title: "Imersão em Inteligência Artificial",
      institution: "Alura",
      status: "Concluído",
      date: "Jun/2025",
      description: "Imersão prática em IA e suas aplicações",
      skills: ["IA", "Machine Learning"]
    },
    {
      title: "Curso Full Stack Java",
      institution: "SENAI",
      status: "Concluído",
      date: "Mar/2025",
      description: "Java, HTML, CSS, JavaScript, Spring Boot, MySQL",
      skills: ["Java", "Spring Boot", "MySQL", "HTML", "CSS", "JavaScript"]
    }
  ];

  const skills = [
    "Python, Pandas, Numpy",
    "APIs REST, IA Generativa",
    "Automações com IA (Evolution, WhatsApp)",
    "Git/Github",
    "Prompt Engineering, LLMs, Langchain",
    "Projetos com Automações no N8N e Lovable AI",
    "Banco de dados SQL (MySQL/PostgreSQL)"
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
              Habilidades Técnicas
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <Card key={index} className="shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <p className="text-resume-gray-dark">{skill}</p>
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
