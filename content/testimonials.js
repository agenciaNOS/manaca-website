import moment from 'moment';
import 'moment/locale/pt-br'

export const testimonials = [
  {
    name: 'Maria Laura Pedroso',
    description: 'As meninas foram super atenciosas e resolveram tudo que nós precisávamos 😊',
    pictureUrl: 'https://lh3.googleusercontent.com/a-/ACB-R5Q6w4vgMgH7JGtzdHLLhzG-uRG788F1yLDNdrnh=w60-h60-p-rp-mo-br100',
    createdAt: 'Thu Jan 19 2023 11:07:44 GMT-0300 (Brasilia Standard Time)',
  },
  {
    name: 'Matheus Cucumazzo Santos',
    description: 'Atendimento, muito bom, projeto muito bem feito, parabéns pelo ótimo trabalho executado, trabalharemos juntos novamente.',
    pictureUrl: 'https://lh3.googleusercontent.com/a/AGNmyxYx1R4BXSpoUenGDxaSuU6J5veDOQTOeNt45ang=w60-h60-p-rp-mo-br100',
    createdAt: 'Fri Aug 19 2022 11:07:44 GMT-0300 (Brasilia Standard Time)',
  },
  {
    name: 'Thiago Henry',
    plusDescription: 'Avaliação positiva: Atendimento, Profissionalismo, Qualidade, Valor',
    description: 'A minha experiência, juntamente com a minha esposa, com a Manacá tem sido excelente. A Thaís cuidou do nosso projeto com todo o carinho e atenção, projeto esse tão importante para nós. O seu alto entendimento técnico, dos processos ambientais e conhecimento da região resultam em um trabalho excelente da Thaís e da Manacá. Recomendamos muito a Consultoria, que cuida de cada caso com muita atenção e carinho!',
    pictureUrl: 'https://lh3.googleusercontent.com/a/AGNmyxbkrWsQqic0ob4SA-vdoa1YvjUn0u8lfbvVqfm7=w60-h60-p-rp-mo-br100',
    createdAt: 'Tue Apr 19 2022 11:07:44 GMT-0300 (Brasilia Standard Time)',
  },
  {
    name: 'Reginaldo Hinz',
    plusDescription: 'Avaliação positiva: Atendimento, Profissionalismo, Qualidade, Valor',
    description: 'Em 2016, qdo iniciamos umas mudanças aqui na nossa área procurei o Manacá para nos orientar nos serviços ambientais. A Thais tem bastante conhecimento na área. Fez um relatório de todas as propostas solicitadas que até hoje nos orientam. Sempre que preciso procuro seus serviços. Hoje sei que fizemos a melhor escolha. Posso dizer tranquilamente que a Manacá é referência em serviços ambientais na região.',
    pictureUrl: 'https://lh3.googleusercontent.com/a-/ACB-R5QHFf0W6yP07HKwNe-lHU4qpEDV2qlVuk_Pajg3gg=w60-h60-p-rp-mo-br100',
    createdAt: 'Mon Apr 19 2021 11:07:44 GMT-0300 (Brasilia Standard Time)',
  },
  {
    name: 'Geone Silva',
    description: 'Excelente! Muita atenção no atendimento...',
    pictureUrl: 'https://lh3.googleusercontent.com/a-/ACB-R5ShzU213TAihau1Yrwm7fNeZ3w8oMV5JF7lsbtx=w60-h60-p-rp-mo-br100',
    createdAt: 'Fri Aug 19 2022 11:07:44 GMT-0300 (Brasilia Standard Time)',
  },
  {
    name: 'Jonatan Vivian',
    plusDescription: 'Avaliação positiva: Profissionalismo, Qualidade',
    description: 'Serviço de ótima qualidade, com profissionalismo, presteza e responsabilidade.',
    pictureUrl: 'https://lh3.googleusercontent.com/a/AGNmyxY3AtDgEgQhHwiuj5loGb4hl7mlSRDmUN91D458=w60-h60-p-rp-mo-br100',
    createdAt: 'Thu Jan 19 2023 11:07:44 GMT-0300 (Brasilia Standard Time)',
  },
  {
    name: 'Ronaldo Kempis',
    plusDescription: 'Avaliação positiva: Atendimento, Profissionalismo, Qualidade, Valor',
    description: 'Serviços com qualidade e competência',
    pictureUrl: 'https://lh3.googleusercontent.com/a/AGNmyxakTcFMvPsU_PRieRKR0EDR_EUOKujIbGB0H-dS=w60-h60-p-rp-mo-br100',
    createdAt: 'Mon Apr 19 2021 11:07:44 GMT-0300 (Brasilia Standard Time)',
  },
  {
    name: 'Alexandre Toledo',
    description: 'Equipe com excelente atendimento e profissionalismo.',
    pictureUrl: 'https://lh3.googleusercontent.com/a/AGNmyxYW4MILkKCO2naL2empQdtkZN_omoDoGCAwfEmO=w60-h60-p-rp-mo-br100',
    createdAt: 'Wed Apr 18 2023 11:16:37 GMT-0300 (Brasilia Standard Time)',
  },
];

export function formattedTestimonials() {
  moment.locale('pt-br');

  return testimonials.map((testimonial) => {
    const dateObject = new Date(testimonial.createdAt);
    testimonial.timeAgo = moment(dateObject).fromNow();

    return testimonial;
  })
};
