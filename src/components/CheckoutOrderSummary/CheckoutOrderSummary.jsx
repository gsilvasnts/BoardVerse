import Button from "../Button/Button";
import PaymentMethods from "../PaymentMethods/PaymentMethods";
import styles from "./CheckoutOrderSummary.module.css";

function formatarPreco(valor) {
  return `R$ ${valor.toFixed(2).replace(".", ",")}`;
}

function CheckoutOrderSummary({ itens, entrega, onFinalizarPedido }) {
  const subtotal = itens.reduce(
    (soma, item) => soma + item.precoUnitario * item.quantidade,
    0,
  );
  const total = subtotal + entrega;

  return (
    <div className={styles.container}>
      <div className={styles.headerRow}>
        <span className={styles.headerLabel}>Produtos</span>
        <span className={styles.headerLabel}>Subtotal</span>
      </div>

      {itens.map((item) => (
        <div key={item.id} className={styles.itemRow}>
          <span className={styles.itemNome}>
            {item.nome}{" "}
            <span className={styles.itemQtd}>x {item.quantidade}</span>
          </span>
          <span className={styles.itemValor}>
            {formatarPreco(item.precoUnitario * item.quantidade)}
          </span>
        </div>
      ))}

      <div className={styles.divider} />

      <div className={styles.itemRow}>
        <span className={styles.itemNome}>Subtotal</span>
        <span className={styles.itemValor}>{formatarPreco(subtotal)}</span>
      </div>

      <div className={styles.itemRow}>
        <span className={styles.itemNome}>Entrega: Padrão</span>
        <span className={styles.itemValor}>{formatarPreco(entrega)}</span>
      </div>

      <div className={styles.divider} />

      <div className={styles.itemRow}>
        <span className={styles.totalLabel}>Total</span>
        <span className={styles.totalValor}>{formatarPreco(total)}</span>
      </div>

      <PaymentMethods total={total} />

      <p className={styles.privacidade}>
        Valorizamos a sua privacidade. Seus dados pessoais são utilizados apenas
        para gerenciar sua conta e melhorar sua experiência, de acordo com a
        nossa{" "}
        <a href="#" className={styles.link}>
          Política de Privacidade.
        </a>
      </p>

      <Button variante="primary" onClick={onFinalizarPedido}>
        Finalizar pedido
      </Button>
    </div>
  );
}

export default CheckoutOrderSummary;
