export const STATUS = {
  EM_ABERTO: "em_aberto",
  EM_PROCESSAMENTO: "em_processamento",
  PAGAMENTO_REALIZADO: "pagamento_realizado",
  EM_TRANSITO: "em_transito",
  ENTREGUE: "entregue",
  TROCA_SOLICITADA: "troca_solicitada",
  TROCA_ACEITA: "troca_aceita",
  TROCA_REJEITADA: "troca_rejeitada",
  ITEM_ENVIADO: "item_enviado",
  ITEM_RECEBIDO: "item_recebido",
  TROCA_PROCESSADA: "troca_processada",
};

export const ABAS_PEDIDOS = [
  { id: STATUS.EM_ABERTO, label: "Em Aberto" },
  { id: STATUS.EM_PROCESSAMENTO, label: "Em Processamento" },
  { id: STATUS.PAGAMENTO_REALIZADO, label: "Pagamento Realizado" },
  { id: STATUS.EM_TRANSITO, label: "Em Trânsito" },
  { id: STATUS.ENTREGUE, label: "Entregue" },
];

const PROXIMO_STATUS = {
  [STATUS.EM_ABERTO]: STATUS.EM_PROCESSAMENTO,
  [STATUS.EM_PROCESSAMENTO]: STATUS.PAGAMENTO_REALIZADO,
  [STATUS.PAGAMENTO_REALIZADO]: STATUS.EM_TRANSITO,
  [STATUS.EM_TRANSITO]: STATUS.ENTREGUE,
  [STATUS.ITEM_ENVIADO]: STATUS.ITEM_RECEBIDO,
  [STATUS.ITEM_RECEBIDO]: STATUS.TROCA_PROCESSADA,
};

const LABEL_PROXIMO_STATUS = {
  [STATUS.EM_ABERTO]: "Em processamento",
  [STATUS.EM_PROCESSAMENTO]: "Pagamento realizado",
  [STATUS.PAGAMENTO_REALIZADO]: "Em trânsito",
  [STATUS.EM_TRANSITO]: "Entregue",
  [STATUS.ITEM_ENVIADO]: "Item recebido",
  [STATUS.ITEM_RECEBIDO]: "Troca processada",
};

export const ABAS_TROCAS = [
  { id: STATUS.TROCA_SOLICITADA, label: "Solicitações" },
  { id: STATUS.TROCA_ACEITA, label: "Aceita" },
  { id: STATUS.TROCA_REJEITADA, label: "Rejeitada" },
  { id: STATUS.ITEM_RECEBIDO, label: "Item Recebido" },
  { id: STATUS.ITEM_ENVIADO, label: "Item Enviado" },
  { id: STATUS.TROCA_PROCESSADA, label: "Troca Processada" },
];

export function getAcoesAdmin(status) {
  if (status === STATUS.TROCA_SOLICITADA) {
    return [
      { acao: "trocaNegada", label: "Rejeitar", variante: "outline" },
      { acao: "trocaAceita", label: "Aceitar", variante: "primary" },
    ];
  }

  const proximo = PROXIMO_STATUS[status];

  if (!proximo) {
    return [];
  }

  const acoes = [
    { acao: "avancarStatus", label: LABEL_PROXIMO_STATUS[status], variante: "primary" },
  ];

  if (status !== STATUS.ITEM_ENVIADO && status !== STATUS.ITEM_RECEBIDO) {
    acoes.push({ acao: "rejeitarPedido", label: "Rejeitar", variante: "outline" });
  }

  return acoes;
}

export function avancarStatus(statusAtual) {
  return PROXIMO_STATUS[statusAtual] || statusAtual;
}