import { X } from "lucide-react";
import styles from "./Modal.module.css";

function Modal({ aberto, onFechar, titulo, children }) {
  if (!aberto) return null;

  return (
    <div className={styles.overlay} onClick={onFechar}>
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h2 className={styles.title}>{titulo}</h2>
          <button
            type="button"
            className={styles.closeButton}
            onClick={onFechar}
            aria-label="Fechar"
          >
            <X size={18} />
          </button>
        </div>

        <div className={styles.body}>{children}</div>
      </div>
    </div>
  );
}

export default Modal;
