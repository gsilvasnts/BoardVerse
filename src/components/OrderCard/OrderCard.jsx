import Button from "../Button/Button";
import { STATUS_LABELS, getAcoesPorStatus } from "./orderStatusConfig";
import styles from "./OrderCard.module.css";

function formatarPreco(valor) {
  return `R$ ${valor.toFixed(2).replace(".", ",")}`;
}

const MAX_THUMBS = 3;

function OrderCard({ pedido, onAcao }) {
  const { id, itens, dataFormatada, total, status } = pedido;

  const thumbsVisiveis = itens.slice(0, MAX_THUMBS);
  const quantidadeExtra = itens.length - MAX_THUMBS;

  const acoes = getAcoesPorStatus(status);

  return (
    <div className={styles.card}>
      <div className={styles.thumbs}>
        {thumbsVisiveis.map((item, index) => (
          <img
            key={index}
            src={item.imagem}
            alt={item.nome}
            className={styles.thumb}
          />
        ))}
        {quantidadeExtra > 0 && (
          <div className={styles.thumbExtra}>+{quantidadeExtra}</div>
        )}
      </div>

      <div className={styles.info}>
        <div className={styles.topRow}>
          <h3 className={styles.resumo}>{pedido.resumo}</h3>
          <span className={styles.total}>{formatarPreco(total)}</span>
        </div>

        <span className={styles.data}>{dataFormatada}</span>
        <span className={styles.status}>{STATUS_LABELS[status]}</span>
      </div>

      <div className={styles.actions}>
        {acoes.includes("confirmarRecebimento") && (
          <Button
            variante="primary"
            onClick={() => onAcao("confirmarRecebimento", id)}
          >
            Confirmar recebimento
          </Button>
        )}

        {acoes.includes("cancelarPedido") && (
          <Button
            variante="secondary"
            onClick={() => onAcao("cancelarPedido", id)}
          >
            Cancelar pedido
          </Button>
        )}

        {acoes.includes("solicitarTroca") && (
          <Button
            variante="secondary"
            onClick={() => onAcao("solicitarTroca", id)}
          >
            Solicitar troca
          </Button>
        )}

        {acoes.includes("informarDespacho") && (
          <Button
            variante="primary"
            onClick={() => onAcao("informarDespacho", id)}
          >
            Informar despacho
          </Button>
        )}

        <Button variante="secondary" onClick={() => onAcao("verDetalhes", id)}>
          Ver detalhes
        </Button>
      </div>
    </div>
  );
}

export default OrderCard;
