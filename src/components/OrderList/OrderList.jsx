import OrderCard from "../OrderCard/OrderCard";
import styles from "./OrderList.module.css";

function OrderList({ pedidos, onAcao }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Histórico de Pedidos</h2>

      <div className={styles.lista}>
        {pedidos.map((pedido) => (
          <OrderCard key={pedido.id} pedido={pedido} onAcao={onAcao} />
        ))}
      </div>
    </div>
  );
}

export default OrderList;
