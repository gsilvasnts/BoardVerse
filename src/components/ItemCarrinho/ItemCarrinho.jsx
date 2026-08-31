import QuantitySelector from "../QuantitySelector/QuantitySelector";
import styles from "./ItemCarrinho.module.css";

function formatarPreco(valor) {
  return `R$ ${valor.toFixed(2).replace(".", ",")}`;
}

function ItemCarrinho({
  imagem,
  nome,
  precoUnitario,
  quantidade,
  onDiminuir,
  onAumentar,
}) {
  const subtotal = precoUnitario * quantidade;

  return (
    <div className={styles.item}>
      <img src={imagem} alt={nome} className={styles.image} />

      <div className={styles.info}>
        <h3 className={styles.nome}>{nome}</h3>
        <span className={styles.precoUnitario}>
          {formatarPreco(precoUnitario)} / unidade
        </span>

        <QuantitySelector
          quantidade={quantidade}
          onDiminuir={onDiminuir}
          onAumentar={onAumentar}
        />
      </div>

      <span className={styles.subtotal}>{formatarPreco(subtotal)}</span>
    </div>
  );
}

export default ItemCarrinho;
