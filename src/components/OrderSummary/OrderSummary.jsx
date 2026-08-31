import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Button from "../Button/Button";
import styles from "./OrderSummary.module.css";

function formatarPreco(valor) {
  return `R$ ${valor.toFixed(2).replace(".", ",")}`;
}

function OrderSummary({
  subtotal,
  entrega,
  cep,
  onCepChange,
  onCalcularEntrega,
  onCheckout,
}) {
  const navigate = useNavigate();
  const total = subtotal + entrega;

  function handleCheckout() {
    navigate("/checkout");
  }

  return (
    <div className={styles.summary}>
      <h2 className={styles.title}>Resumo do pedido</h2>

      <div className={styles.row}>
        <span className={styles.label}>Subtotal</span>
        <span className={styles.value}>{formatarPreco(subtotal)}</span>
      </div>

      <div className={styles.divider} />

      <div className={styles.row}>
        <span className={styles.totalLabel}>Total</span>
        <span className={styles.totalValue}>{formatarPreco(total)}</span>
      </div>

      <Button variante="primary" onClick={handleCheckout}>
        Detalhes do Pedido
        <ArrowRight size={16} />
      </Button>
    </div>
  );
}

export default OrderSummary;
