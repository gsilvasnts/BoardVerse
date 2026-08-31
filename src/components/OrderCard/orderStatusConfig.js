export const STATUS = {
  EM_ANDAMENTO: "em_andamento",
  ENTREGUE: "entregue",
  TROCA_APROVADA: "troca_aprovada",
  CANCELADO: "cancelado",
};

export const STATUS_LABELS = {
  [STATUS.EM_ANDAMENTO]: "Status: Em trânsito",
  [STATUS.ENTREGUE]: "Status: Entregue",
  [STATUS.TROCA_APROVADA]: "Status: Troca aprovada",
  [STATUS.CANCELADO]: "Status: Cancelado",
};

export function getAcoesPorStatus(status) {
  switch (status) {
    case STATUS.EM_ANDAMENTO:
      return ["confirmarRecebimento", "cancelarPedido"];
    case STATUS.ENTREGUE:
      return ["solicitarTroca"];
    case STATUS.TROCA_APROVADA:
      return ["informarDespacho"];
    case STATUS.CANCELADO:
      return [];
    default:
      return [];
  }
}