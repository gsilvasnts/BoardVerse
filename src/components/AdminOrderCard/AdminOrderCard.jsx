import Button from "../Button/Button";
import { getAcoesAdmin } from "./adminOrderStatusConfig";
import styles from "./AdminOrderCard.module.css";

function formatarPreco(valor) {
  return `R$ ${valor.toFixed(2).replace(".", ",")}`;
}

const MAX_THUMBS = 3;

function AdminOrderCard({ pedido, onAcao }) {
  const { id, itens, dataFormatada, total, detalhe, status } = pedido;

  const thumbsVisiveis = itens.slice(0, MAX_THUMBS);
  const quantidadeExtra = itens.length - MAX_THUMBS;

  const acoes = getAcoesAdmin(status);

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
        {detalhe && <span className={styles.detalhe}>{detalhe}</span>}
      </div>

      <div className={styles.actions}>
        {acoes.map((acao) => (
          <Button
            key={acao.acao}
            variante={acao.variante}
            onClick={() => onAcao(acao.acao, id)}
          >
            {acao.label}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default AdminOrderCard;
