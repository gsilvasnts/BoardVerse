import { useState } from "react";
import ItemCarrinho from "../../components/ItemCarrinho/ItemCarrinho";
import OrderSummary from "../../components/OrderSummary/OrderSummary";
import styles from "./CartPage.module.css";
import skullKingImage from "../../assets/images/skull-king.jpg";
import unoImage from "../../assets/images/uno.jpg";
import catanImage from "../../assets/images/catan.jpg";

const ITENS_MOCK = [
  {
    id: 1,
    nome: "Skull King",
    precoUnitario: 12.89,
    quantidade: 2,
    imagem: skullKingImage,
  },
  {
    id: 2,
    nome: "Catan",
    precoUnitario: 8.99,
    quantidade: 1,
    imagem: catanImage,
  },
  {
    id: 3,
    nome: "Uno",
    precoUnitario: 11.99,
    quantidade: 2,
    imagem: unoImage,
  },
];

function CartPage() {
  const [itens, setItens] = useState(ITENS_MOCK);
  const [cep, setCep] = useState("");
  const [entrega, setEntrega] = useState(12.44);

  function alterarQuantidade(id, delta) {
    setItens((atual) =>
      atual.map((item) =>
        item.id === id
          ? { ...item, quantidade: Math.max(1, item.quantidade + delta) }
          : item,
      ),
    );
  }

  const totalItens = itens.reduce((soma, item) => soma + item.quantidade, 0);
  const subtotal = itens.reduce(
    (soma, item) => soma + item.precoUnitario * item.quantidade,
    0,
  );

  function handleCalcularEntrega() {
    console.log("Calculando entrega para o CEP:", cep);
  }

  function handleCheckout() {
    console.log("Indo para o checkout...");
  }

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>Carrinho</h1>
        <span className={styles.itemCount}>{totalItens} Items</span>
      </div>

      <div className={styles.content}>
        <div className={styles.itemsList}>
          {itens.map((item) => (
            <ItemCarrinho
              key={item.id}
              imagem={item.imagem}
              nome={item.nome}
              precoUnitario={item.precoUnitario}
              quantidade={item.quantidade}
              onDiminuir={() => alterarQuantidade(item.id, -1)}
              onAumentar={() => alterarQuantidade(item.id, 1)}
            />
          ))}
        </div>

        <OrderSummary
          subtotal={subtotal}
          entrega={entrega}
          cep={cep}
          onCepChange={setCep}
          onCalcularEntrega={handleCalcularEntrega}
          onCheckout={handleCheckout}
        />
      </div>
    </div>
  );
}

export default CartPage;
