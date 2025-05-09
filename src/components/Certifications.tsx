
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Certifications = () => {
  const certifications = [
    {
      title: "Formação Full Stack Developer",
      institution: "Digital Innovation One",
      status: "Em andamento",
      date: "2023 - Presente",
      description: "Formação completa em desenvolvimento Full Stack com ênfase em Java, Spring Boot, APIs REST, Kafka, JPA, testes com JUnit e Mockito.",
      skills: ["Java", "Spring Boot", "APIs REST", "Kafka", "JPA", "JUnit", "Mockito"]
    },
    {
      title: "Certificação em Prompt Engineering",
      institution: "AI Training Academy",
      status: "Concluído",
      date: "2023",
      description: "Certificação especializada em técnicas de Prompt Engineering para aplicação eficiente de Inteligência Artificial em soluções de negócios e desenvolvimento.",
      skills: ["IA", "Prompt Engineering", "GPT", "Engenharia de Prompts"]
    }
  ];

  return (
    <section id="certifications" className="bg-white py-20">
      <div className="container">
        <div className="section-content">
          <h2 className="section-title">Certificações e Cursos</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
        </div>
      </div>
    </section>
  );
};

export default Certifications;
