export const copyData = {
  heroSection: {
    title: 'Precisando de soluções ambientais?',
    CTA: 'Nós podemos lhe ajudar!',
  },
  aboutSection: {
    introText:
      'A Manacá uma empresa de consultoria que, desde 2017, promove soluções ambientais aos seus clientes, oferecendo apoio em todas as etapas, do projeto à execução, seja direta ou indiretamente por meio dos parceiros (topografia, engenharia e outros). Atuamos na região do extremo sul de Minas Gerais, principalmente nas cidades de Extrema, Toledo, Itapeva, Camanducaia, Monte Verde, Cambuí, Senador Amaral, Estiva, Pouso Alegre e outras. Nossos princípios são a ética, empatia, transparência, responsabilidade e sustentabilidade.',
    partnerOne: {
      name: 'Thaís Scognamiglio',
      role: 'Sócia-fundadora',
      about:
        'Bióloga (2009), com especialização em Gestão Ambiental e Sustentabilidade (2012) e em Educação Ambiental (2016), com experiência na área de consultoria empresarial, gestão de resíduos de obras, projetos de loteamentos urbanos e coordenação de programas ambientais.',
      image: '/thais.jpeg',
    },
    partnerTwo: {
      name: 'Giovanna Caldeira',
      role: 'Sócia',
      about:
        'Engenheira Ambiental e Sanitarista (2020), com experiência na área de projetos e estudos de engenharia e gerenciamento de áreas contaminadas.',
      image: '/giovana.jpeg',
    },
  },
  servicesSection: {
    introText:
      'A Manacá promove soluções ambientais aos seus clientes, oferecendo apoio em todas as etapas, do projeto à execução. Confira nossos serviços:',
    areas: [
      {
        id: 'industrias',
        title: 'Indústrias',
        description:
          'A Manacá oferece serviços de consultoria ambiental para indústrias, com foco em licenciamento ambiental, gestão de resíduos, gestão de águas, gestão de riscos ambientais e gestão de áreas contaminadas. Nossos serviços são personalizados para cada cliente, de acordo com as necessidades e características de cada empresa.',
        services: [
          {
            title: 'Planejamento e Licenciamento Ambiental',
            list: [
              { id: 1, name: 'Estudo de Viabilidade Ambiental (EVA)' },
              { id: 2, name: 'Licença prévia (LP), de instalação (LI) e de operação (LO)' },
              { id: 3, name: 'Licença Ambiental Simplificada (LAS)' },
              { id: 4, name: 'Relatório Ambiental Simplificado (RAS)' },
              { id: 5, name: 'Plano de Controle Ambiental (PCA)e relatório (RCA)' },
              { id: 6, name: 'Dispensa e renovação de Licença Ambiental' },
              { id: 7, name: 'Estudo de Critérios Locacionais' },
              { id: 8, name: 'Plantas Ambientais' },
              { id: 9, name: 'Outorga de Uso de Recursos Hídricos e outros' },
            ],
          },
          {
            title: 'Documentações – IBAMA',
            list: [
              { id: 1, name: 'Cadastro Técnico Federal de Atividades Potencialmente Poluidoras (CTF-APP)' },
              { id: 2, name: 'Cadastro Técnico Federal de Atividades e Instrumentos de Defesa Ambiental (CTF-AIDA)' },
              { id: 3, name: 'Relatório Anual de Atividades Potencialmente Poluidoras (RAPP)' },
              { id: 4, name: 'Emissão de Taxas de Controle e Fiscalização Ambiental (TCFA)' },
              { id: 5, name: 'Licença para transporte de produtos perigosos e outros' },
            ],
          },
          {
            title: 'Controle Ambiental e gestão de condicionantes',
            list: [
              { id: 1, name: 'Declaração anual de uso de recursos hídricos (DAURH)' },
              { id: 2, name: 'Declaração anual de Carga Poluidora (DCP) – IGAM' },
              { id: 3, name: 'Gestão de Resíduos Sólidos (Manifesto de Transporte de Resíduos – MTR e SINIR, Declaração de Movimentação de Resíduos – DMR)' },
              { id: 4, name: 'Plano de Gerenciamento de Resíduos Sólidos – PGRS' },
              { id: 5, name: 'Assessoria técnica e consultoria em questões ambientais' },
              { id: 6, name: 'Programas de Educação Ambiental, palestras, treinamentos e oficinas e outros.' },
            ],
          },
        ],
      },
      {
        id: 'empreendimentos',
        title: 'Empreendimentos urbanos',
        description:
          'A Manacá oferece serviços de consultoria ambiental para empreendimentos urbanos, com foco em licenciamento ambiental, gestão de resíduos, gestão de águas, gestão de riscos ambientais e gestão de áreas contaminadas. Nossos serviços são personalizados para cada cliente, de acordo com as necessidades e características de cada empreendimento.',
        services: [
          {
            title: 'Intervenções e regularizações ambientais',
            list: [
              { id: 1, name: 'Documento Autorizativo para Intervenção Ambiental' },
              { id: 2, name: 'Projeto de Intervenção e de Compensação' },
              { id: 3, name: 'Estudo Técnico para regularização em APPs urbanas' },
              { id: 4, name: 'Laudo de Fauna Silvestre Terrestre' },
              { id: 5, name: 'Projeto de Restituição de Flora – PTRF' },
              { id: 6, name: 'Relatório de Regularização Ambiental' },
            ],
          },
          {
            id: 'loteamentos',
            title: 'Loteamentos',
            list: [
              { id: 1, name: 'Laudo de Caracterização de Vegetação' },
              { id: 2, name: 'Projeto de Arborização Urbana' },
              { id: 3, name: 'Acompanhamento de execução de plantios' },
              { id: 4, name: 'Assessoria técnica e consultoria ambiental' },
              { id: 5, name: 'Plano de Gerenciamento de Resíduos da Construção Civil – PGRCC' },
            ],
          },
        ],
      },
    ],
  },
  clientsSection: {
    title: 'Clientes',
    clients: [
      { name: 'Leggett & Platt do Brasil', image: 'leggett.png', id: 1 },
      { name: 'MVF Lavadoras', image: 'mvf.png', id: 2 },
      { name: 'Gases do Sul', image: 'gases.png', id: 3 },
      { name: 'Romar Metais', image: 'romar.png', id: 4 },
      { name: 'Sítio Teko Porã', image: 'teko.png', id: 5 },
      { name: 'Condomínio Reserva Grinberg', image: 'grinberg.png', id: 6 },
      { name: 'Loteamento Recanto Eucaliptal', image: 'recanto.png', id: 7 },
      { name: 'Residencial Pitangueiras', image: 'pitangueiras.png', id: 8 },
    ],
  },
  contactSection: {
    title: 'Contato',
    description:
      'Tem dúvidas ou precisa de um orçamento? Preencha o formulário abaixo',
    form: {
      name: 'Nome',
      company: 'Empresa',
      phone: 'Telefone',
      email: 'E-mail',
      message: 'Mensagem',
    },
    notFound: 'Não encontrou o que procurava? Consulte-nos!',
    whatsapp: 'WhatsApp',
    whatsappLink: 'https://api.whatsapp.com/send?phone=5535992266995',
    address: 'Endereço',
    phone: '(35) 9 9226-6995',
    addressText:
      'Rua Silviano Brandão, nº 185 – Sala 1, Centro, Camanducaia/MG',
    instagram: 'Instagram',
    instagramLink: 'https://www.instagram.com/manaca.consultoria/',
    facebook: 'Facebook',
    facebookLink: 'https://www.facebook.com/manaca.consultoriamg',
  },
  footer: {
    tagline: 'Desde 2017, conciliando pessoas, empresas e meio ambiente',
  },
};
