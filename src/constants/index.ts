export const chamadoData = [
  {
    id: "1",
    titulo: "Portão da garagem com defeito",
    descricao:
      "O portão não abre completamente e faz ruído estranho ao tentar fechar. Problema começou ontem após chuva forte.",
    status: "em andamento",
    dataCriacao: "2025-08-20",
    dataAtualizacao: "2024-01-20T14:15:00",
    solicitante: {
      name: "João Silva Matos",
      email: "joao.silva@empresa.com",
      telefone: "(92) 99999-9999",
      subtitle: "Bloco A - Apartamento 205",
      avatar: "/professional-man.png",
    },
    tecnico: {
      name: "Josias Jose Silva",
      email: "carlos.mendes@calltech.com",
      telefone: "(92) 88888-8888",
      subtitle: "Sistemas Elétricos",
      avatar: "/technician-man.png",
    },
    historico: [
      {
        id: 1,
        tipo: "criacao",
        descricao: "Chamado criado",
        usuario: "João Silva",
        data: "2024-01-20T10:30:00",
      },
      {
        id: 2,
        tipo: "atribuicao",
        descricao: "Chamado atribuído para Carlos Mendes",
        usuario: "Sistema",
        data: "2024-01-20T11:00:00",
      },
      {
        id: 3,
        tipo: "comentario",
        descricao: "Técnico a caminho do local. Previsão de chegada: 30 minutos.",
        usuario: "Carlos Mendes",
        data: "2024-01-20T14:15:00",
      },
    ],
    anexos: [
      { nome: "foto_portao.jpg", tipo: "imagem", tamanho: "2.3 MB" },
      { nome: "manual_equipamento.pdf", tipo: "documento", tamanho: "1.8 MB" },
    ],
  },
  {
    id: "2",
    titulo: "Lampada Queimada no corredo do 2 andar bloco b",
    descricao:
      "Lamapada queimada, a ultima troca já tem mais de 3 anos.",
    status: "aguardando",
    dataCriacao: "2025-08-20",
    dataAtualizacao: "2024-01-20T14:15:00",
    solicitante: {
      name: "Joana Silva Matos",
      email: "joao.silva@empresa.com",
      telefone: "(92) 99999-9999",
      subtitle: "Bloco A - Apartamento 205",
      avatar: "/professional-man.png",
    },
    tecnico: {
      name: "Eletricista a domicilio",
      email: "carlos.mendes@calltech.com",
      telefone: "(92) 88888-8888",
      subtitle: "Sistemas Elétricos",
      avatar: "/technician-man.png",
    },
    historico: [
      {
        id: 1,
        tipo: "criacao",
        descricao: "Chamado criado",
        usuario: "João Silva",
        data: "2024-01-20T10:30:00",
      },
      {
        id: 2,
        tipo: "atribuicao",
        descricao: "Chamado atribuído para Carlos Mendes",
        usuario: "Sistema",
        data: "2024-01-20T11:00:00",
      },
      {
        id: 3,
        tipo: "comentario",
        descricao: "Técnico a caminho do local. Previsão de chegada: 30 minutos.",
        usuario: "Carlos Mendes",
        data: "2024-01-20T14:15:00",
      },
    ],
    anexos: [
      { nome: "foto_portao.jpg", tipo: "imagem", tamanho: "2.3 MB" },
      { nome: "manual_equipamento.pdf", tipo: "documento", tamanho: "1.8 MB" },
    ],
  }
]
