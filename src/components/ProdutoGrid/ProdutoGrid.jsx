import ProdutoCard from "../ProdutoCard/ProdutoCard";
import styles from "./ProdutoGrid.module.css";

function ProdutoGrid({ produtos, onAdicionarAoCarrinho }) {
  if (produtos.length === 0) {
    return <p className={styles.empty}>Nenhum produto encontrado.</p>;
  }

  return (
    <div className={styles.grid}>
      {produtos.map((produto) => (
        <ProdutoCard
          key={produto.id}
          imagem={produto.imagem}
          nome={produto.nome}
          preco={produto.preco}
          onAdicionarAoCarrinho={() => onAdicionarAoCarrinho(produto)}
        />
      ))}
    </div>
  );
}

export default ProdutoGrid;