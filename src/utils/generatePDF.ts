
import jsPDF from 'jspdf';

export const generateCV = () => {
  const doc = new jsPDF();
  
  // Configurações de cores
  const primaryColor: [number, number, number] = [30, 58, 138]; // resume-blue
  const textColor: [number, number, number] = [31, 41, 55]; // resume-gray-dark
  const lightGray: [number, number, number] = [107, 114, 128]; // resume-gray
  
  // Header com nome e informações de contato
  doc.setFontSize(24);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.text('IZAIAS PALMA JUNIOR', 20, 25);
  
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(textColor[0], textColor[1], textColor[2]);
  doc.text('Brasileiro, casado, 28 anos | Barueri-SP', 20, 35);
  doc.text('Contato: (11) 99166-9288 | E-mail: izaiaspalmajr@gmail.com', 20, 42);
  doc.text('LinkedIn: linkedin.com/in/izaiasjunior1/ | GitHub: github.com/IzaiasJr77', 20, 49);
  
  // Linha separadora
  doc.setDrawColor(lightGray[0], lightGray[1], lightGray[2]);
  doc.line(20, 55, 190, 55);
  
  // Perfil Profissional
  let currentY = 65;
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.text('PERFIL PROFISSIONAL', 20, currentY);
  
  currentY += 8;
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(textColor[0], textColor[1], textColor[2]);
  const perfilText = 'Engenheiro de Inteligência Artificial Jr com experiência em projetos práticos utilizando Python, IA generativa, engenharia de prompt e integração com APIs. Atua no desenvolvimento de soluções inovadoras com foco em LLMs e automações inteligentes, aplicando conceitos modernos da IA de forma eficaz. Possui 8 anos de vivência no setor financeiro e de controladoria, agregando visão analítica e estratégica aos projetos. Une pensamento estruturado à tecnologia para criar soluções eficientes e escaláveis.';
  const perfilLines = doc.splitTextToSize(perfilText, 170);
  doc.text(perfilLines, 20, currentY);
  currentY += perfilLines.length * 5;
  
  // Cursos e Certificações
  currentY += 10;
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.text('CURSOS E CERTIFICAÇÕES', 20, currentY);
  
  currentY += 8;
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(textColor[0], textColor[1], textColor[2]);
  
  const cursos = [
    '• Testes Automatizados e IA Generativa - Cursando',
    '• Complete AI Engineer Training: Python, NPL, Transformers, LLMs – Concluído (Out/2025)',
    '• Automações e Agentes de IA com N8N – Concluído (Ago/2025)',
    '• Bootcamp Python e Inteligência Artificial: do Zero ao Expert – Concluído (Jul/2025)',
    '• Jornada Python com IA e Análise de Dados – Concluído (Jun/2025)',
    '• Engenharia de Prompt – Concluído (Abr/2025)',
    '• Imersão em Inteligência Artificial - Concluído (Jun/2025)',
    '• Full Stack Java (Java, HTML, CSS, JavaScript, Spring Boot, MySQL) - Concluído (Mar/2025)'
  ];
  
  cursos.forEach(item => {
    doc.text(item, 20, currentY);
    currentY += 6;
  });
  
  // Habilidades Técnicas
  currentY += 8;
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.text('HABILIDADES TÉCNICAS', 20, currentY);
  
  currentY += 8;
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(textColor[0], textColor[1], textColor[2]);
  
  const habilidades = [
    '• Python, Pandas, Numpy, APIs REST, IA Generativa',
    '• Automações com IA (Evolution, WhatsApp) Git/Github',
    '• Prompt Engineering, LLMs, Langchain',
    '• Projetos com Automações no N8N e Lovable AI',
    '• Banco de dados SQL (MySQL/PostgreSQL)'
  ];
  
  habilidades.forEach(item => {
    doc.text(item, 20, currentY);
    currentY += 6;
  });
  
  // Nova página para experiência profissional
  doc.addPage();
  currentY = 25;
  
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
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
    doc.setTextColor(textColor[0], textColor[1], textColor[2]);
    doc.text(`${exp.cargo} | ${exp.empresa}`, 20, currentY);
    
    currentY += 6;
    doc.setFontSize(9);
    doc.setFont('helvetica', 'italic');
    doc.setTextColor(lightGray[0], lightGray[1], lightGray[2]);
    doc.text(exp.periodo, 20, currentY);
    
    currentY += 8;
    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(textColor[0], textColor[1], textColor[2]);
    
    exp.atividades.forEach(atividade => {
      doc.text(atividade, 20, currentY);
      currentY += 5;
    });
    
    currentY += 8;
  });
  
  // Salvar o PDF
  doc.save('Izaias_Palma_Junior_CV.pdf');
};
