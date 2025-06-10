
import jsPDF from 'jspdf';

export const generateCV = () => {
  const doc = new jsPDF();
  
  // Configurações de cores
  const primaryColor = [30, 58, 138]; // resume-blue
  const textColor = [31, 41, 55]; // resume-gray-dark
  const lightGray = [107, 114, 128]; // resume-gray
  
  // Header com nome e informações de contato
  doc.setFontSize(24);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...primaryColor);
  doc.text('IZAIAS PALMA JUNIOR', 20, 25);
  
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(...textColor);
  doc.text('Brasileiro, casado, 28 anos | Parque Viana, Barueri-SP', 20, 35);
  doc.text('Contato: (11) 99166-9288 | E-mail: izaiaspalmajr@gmail.com', 20, 42);
  doc.text('LinkedIn: linkedin.com/in/izaiasjunior1/ | GitHub: github.com/IzaiasJr77', 20, 49);
  
  // Linha separadora
  doc.setDrawColor(...lightGray);
  doc.line(20, 55, 190, 55);
  
  // Objetivo
  let currentY = 65;
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...primaryColor);
  doc.text('OBJETIVO', 20, currentY);
  
  currentY += 8;
  doc.setFontSize(11);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(...textColor);
  doc.text('Analista de Automação de IA Jr', 20, currentY);
  
  // Perfil Profissional
  currentY += 15;
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...primaryColor);
  doc.text('PERFIL PROFISSIONAL', 20, currentY);
  
  currentY += 8;
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(...textColor);
  const perfilText = 'Profissional em transição de carreira, com sólida experiência em controladoria e financeiro. Migrando para a área de tecnologia com foco em Inteligência Artificial, automações com Python e análise de dados.';
  const perfilLines = doc.splitTextToSize(perfilText, 170);
  doc.text(perfilLines, 20, currentY);
  currentY += perfilLines.length * 5;
  
  // Qualificações em Tecnologia
  currentY += 10;
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...primaryColor);
  doc.text('QUALIFICAÇÕES EM TECNOLOGIA', 20, currentY);
  
  currentY += 8;
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(...textColor);
  
  const qualificacoes = [
    '• Jornada Python com IA e Análise de Dados - Concluído (Jun/2025)',
    '• Curso Full Stack Java (Java, HTML, CSS, JavaScript, Spring Boot, MySQL) - Concluído (Mar/2025)',
    '• Imersão em Inteligência Artificial - Em andamento (Jun/2025)',
    '• Projetos com Python, automações com IA, APIs e WhatsApp (Twilio)',
    '• Criação de bots com IA generativa e análises automatizadas',
    '• Git e GitHub para versionamento de código',
    '• Conhecimentos em Prompt Engineering e APIs REST'
  ];
  
  qualificacoes.forEach(item => {
    doc.text(item, 20, currentY);
    currentY += 6;
  });
  
  // Formação Acadêmica
  currentY += 8;
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...primaryColor);
  doc.text('FORMAÇÃO ACADÊMICA', 20, currentY);
  
  currentY += 8;
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(...textColor);
  doc.text('Bacharel em Administração – Universidade Estácio de Sá – Cursando', 20, currentY);
  
  // Nova página para experiência profissional
  doc.addPage();
  currentY = 25;
  
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...primaryColor);
  doc.text('EXPERIÊNCIA PROFISSIONAL', 20, currentY);
  
  currentY += 12;
  
  const experiencias = [
    {
      cargo: 'Analista de Benefícios',
      empresa: 'VIVEO',
      periodo: 'Nov/2023 a Jun/2025',
      atividades: [
        '• Responsável pelo fluxo e processo de pagamento das NFs de benefícios',
        '• Controle e lançamento no sistema Protheus',
        '• Auditoria de valores mensais e análise de variações'
      ]
    },
    {
      cargo: 'Analista de Controladoria Pleno',
      empresa: 'Grupo Souza Lima',
      periodo: 'Out/2022 a Nov/2023',
      atividades: [
        '• Elaboração e consolidação de relatórios gerenciais',
        '• Análises comparativas e variações de contas',
        '• Suporte na auditoria de folha de pagamento e benefícios'
      ]
    },
    {
      cargo: 'Assistente de Controladoria',
      empresa: 'Grupo Souza Lima',
      periodo: 'Nov/2020 a Out/2022',
      atividades: [
        '• Auditoria de processos e folha de pagamento',
        '• Conciliação bancária e atualização de gráficos gerenciais',
        '• Análise de contratos e pagamentos a terceiros'
      ]
    },
    {
      cargo: 'Auxiliar de Controladoria',
      empresa: 'Vitalflex Diamond Group',
      periodo: 'Jan/2018 a Abr/2020',
      atividades: [
        '• Análise de relatórios como DRE e Balanço Patrimonial',
        '• Emissão de GNRE e escrituração de notas fiscais',
        '• Experiência anterior como Auxiliar Contábil Fiscal com foco em impostos e declarações acessórias'
      ]
    },
    {
      cargo: 'Estagiário em Finanças',
      empresa: 'AGN Innova S.A',
      periodo: 'Nov/2015 a Nov/2017',
      atividades: [
        '• Pagamento de contas e provisionamento financeiro',
        '• Emissão de notas fiscais e controle de suprimentos'
      ]
    }
  ];
  
  experiencias.forEach(exp => {
    // Verificar se precisa de nova página
    if (currentY > 250) {
      doc.addPage();
      currentY = 25;
    }
    
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...textColor);
    doc.text(`${exp.cargo} | ${exp.empresa}`, 20, currentY);
    
    currentY += 6;
    doc.setFontSize(9);
    doc.setFont('helvetica', 'italic');
    doc.setTextColor(...lightGray);
    doc.text(exp.periodo, 20, currentY);
    
    currentY += 8;
    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...textColor);
    
    exp.atividades.forEach(atividade => {
      doc.text(atividade, 20, currentY);
      currentY += 5;
    });
    
    currentY += 8;
  });
  
  // Salvar o PDF
  doc.save('Izaias_Palma_Junior_CV.pdf');
};
