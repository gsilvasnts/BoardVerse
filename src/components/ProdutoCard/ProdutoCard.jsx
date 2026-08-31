import { ShoppingCart } from "lucide-react";
import styles from "./ProdutoCard.module.css";

function ProdutoCard({ imagem, nome, preco, onAdicionarAoCarrinho }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={imagem} alt={nome} className={styles.image} />
      </div>

      <h3 className={styles.name}>{nome}</h3>

      <div className={styles.footer}>
        <span className={styles.price}>
          R$ {preco.toFixed(2).replace(".", ",")}
        </span>

        <button
          type="button"
          className={styles.cartButton}
          onClick={onAdicionarAoCarrinho}
          aria-label={`Adicionar ${nome} ao carrinho`}
        >
          <ShoppingCart size={18} />
        </button>
      </div>
    </div>
  );
}

export default ProdutoCard;