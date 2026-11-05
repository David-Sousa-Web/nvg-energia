// Dados de contato usados em todo o site: altere aqui e reflete em todas as seções.
export const empresa = {
  nome: "Otto's",
  nomeCompleto: "Otto's Arquitetura e Engenharia",
  telefone: '(11) 99439-9940',
  whatsapp: '5511994399940',
  email: 'ottos.eng.arq@gmail.com',
  cidade: 'Barueri, SP',
  instagram: 'https://www.instagram.com/ottos.arquitetura.engenharia/',
  instagramUser: '@ottos.arquitetura.engenharia',
};

export const whatsappLink = (mensagem = 'Olá! Gostaria de solicitar um orçamento.') =>
  `https://wa.me/${empresa.whatsapp}?text=${encodeURIComponent(mensagem)}`;
