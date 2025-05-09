
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      // In a real application, you would send the form data to a server
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log("Form submitted:", data);
      toast({
        title: "Mensagem enviada!",
        description: "Obrigado pelo contato. Retornarei em breve.",
      });
      
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Erro ao enviar mensagem",
        description: "Por favor, tente novamente mais tarde.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container">
        <div className="section-content">
          <h2 className="section-title">Contato</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="text-xl font-bold">Envie uma mensagem</CardTitle>
                <CardDescription>
                  Preencha o formulário abaixo para entrar em contato comigo.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div>
                    <Input
                      placeholder="Seu nome"
                      {...register("name", { required: "Nome é obrigatório" })}
                      className={errors.name ? "border-red-500" : ""}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <Input
                      placeholder="Seu e-mail"
                      type="email"
                      {...register("email", {
                        required: "E-mail é obrigatório",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "E-mail inválido",
                        },
                      })}
                      className={errors.email ? "border-red-500" : ""}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <Textarea
                      placeholder="Sua mensagem"
                      rows={5}
                      {...register("message", { required: "Mensagem é obrigatória" })}
                      className={errors.message ? "border-red-500" : ""}
                    />
                    {errors.message && (
                      <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
                    )}
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-resume-blue hover:bg-resume-blue/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Enviando..." : "Enviar mensagem"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="shadow-md">
                <CardHeader>
                  <CardTitle className="text-xl font-bold">Informações de contato</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-resume-blue mr-3" />
                      <a href="mailto:izaiaspalmajr@gmail.com" className="hover:text-resume-blue transition-colors">
                        izaiaspalmajr@gmail.com
                      </a>
                    </div>
                    
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-resume-blue mr-3" />
                      <a href="https://wa.me/5511991669288" target="_blank" rel="noopener noreferrer" className="hover:text-resume-blue transition-colors">
                        (11) 99166-9288
                      </a>
                    </div>
                    
                    <div className="flex items-center">
                      <Linkedin className="h-5 w-5 text-resume-blue mr-3" />
                      <a href="https://linkedin.com/in/izaiasjunior1" target="_blank" rel="noopener noreferrer" className="hover:text-resume-blue transition-colors">
                        linkedin.com/in/izaiasjunior1
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-md bg-resume-blue text-white">
                <CardContent className="p-6">
                  <p className="text-lg font-medium mb-4">
                    Estou em busca de oportunidades na área de tecnologia!
                  </p>
                  <p>
                    Se você está procurando um profissional dedicado, com excelentes habilidades analíticas e em transição 
                    para o desenvolvimento de software, entre em contato comigo.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
