import { useMemo, useState } from "react";
import FilterSideBar from "../../components/FilterSideBar/FilterSideBar";
import ProdutoGrid from "../../components/ProdutoGrid/ProdutoGrid";
import styles from "./ProdutosPage.module.css";

const ITENS_POR_PAGINA = 9;

import skullKingImage from "../../assets/images/skull-king.jpg";
import unoImage from "../../assets/images/uno.jpg";
import catanImage from "../../assets/images/catan.jpg";

const PRODUTOS_MOCK = [
  { id: 1, nome: "Skull King", preco: 60, imagem: skullKingImage },
  { id: 2, nome: "UNO", preco: 60, imagem: unoImage },
  { id: 3, nome: "Catan", preco: 60, imagem: catanImage },
];

function ProdutosPage() {
  const [precoMin, setPrecoMin] = useState(10);
  const [precoMax, setPrecoMax] = useState(150);
  const [ordenacao, setOrdenacao] = useState("relevancia");
  const [paginaAtual, setPaginaAtual] = useState(1);

  const produtosFiltrados = useMemo(() => {
    let resultado = PRODUTOS_MOCK.filter(
      (produto) => produto.preco >= precoMin && produto.preco <= precoMax
    );

    switch (ordenacao) {
      case "preco-asc":
        resultado = [...resultado].sort((a, b) => a.preco - b.preco);
        break;
      case "preco-desc":
        resultado = [...resultado].sort((a, b) => b.preco - a.preco);
        break;
      case "nome-asc":
        resultado = [...resultado].sort((a, b) => a.nome.localeCompare(b.nome));
        break;
      case "nome-desc":
        resultado = [...resultado].sort((a, b) => b.nome.localeCompare(a.nome));
        break;
      default:
        break;
    }

    return resultado;
  }, [precoMin, precoMax, ordenacao]);

  const totalPaginas = Math.max(1, Math.ceil(produtosFiltrados.length / ITENS_POR_PAGINA));

  const produtosPaginados = produtosFiltrados.slice(
    (paginaAtual - 1) * ITENS_POR_PAGINA,
    paginaAtual * ITENS_POR_PAGINA
  );

  function handleAdicionarAoCarrinho(produto) {
    console.log("Adicionado ao carrinho:", produto);
  }

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Página de produtos</h1>

      <div className={styles.content}>
        <FilterSideBar
          precoMin={precoMin}
          precoMax={precoMax}
          onPrecoMinChange={setPrecoMin}
          onPrecoMaxChange={setPrecoMax}
          ordenacao={ordenacao}
          onOrdenacaoChange={setOrdenacao}
        />

        <div className={styles.main}>
          <ProdutoGrid produtos={produtosPaginados} onAdicionarAoCarrinho={handleAdicionarAoCarrinho} />
        </div>
      </div>
    </div>
  );
}

export default ProdutosPage;