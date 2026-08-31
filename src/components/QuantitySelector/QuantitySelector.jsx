import { Minus, Plus } from "lucide-react";
import styles from "./QuantitySelector.module.css";

function QuantitySelector({ quantidade, onDiminuir, onAumentar }) {
  return (
    <div className={styles.selector}>
      <button
        type="button"
        className={styles.button}
        onClick={onDiminuir}
        aria-label="Diminuir quantidade"
      >
        <Minus size={14} />
      </button>

      <span className={styles.quantidade}>{quantidade}</span>

      <button
        type="button"
        className={styles.button}
        onClick={onAumentar}
        aria-label="Aumentar quantidade"
      >
        <Plus size={14} />
      </button>
    </div>
  );
}

export default QuantitySelector;