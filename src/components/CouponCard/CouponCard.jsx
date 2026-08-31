import { useState } from "react";
import { ChevronDown } from "lucide-react";
import styles from "./CouponCard.module.css";

function CouponCard({ cupom }) {
  const [regrasAbertas, setRegrasAbertas] = useState(false);

  return (
    <div className={styles.card}>
      <div className={styles.topo}>
        <div className={styles.badge}>{cupom.valorExibicao}</div>

        <div className={styles.info}>
          <h3 className={styles.titulo}>{cupom.titulo}</h3>
          <span className={styles.detalhe}>
            Expira em: {cupom.dataExpiracao}
          </span>
          <span className={styles.detalhe}>Mín. {cupom.valorMinimo}</span>
        </div>

        <button
          type="button"
          className={styles.verRegras}
          onClick={() => setRegrasAbertas((atual) => !atual)}
        >
          Ver regras
          <ChevronDown
            size={14}
            className={`${styles.chevron} ${regrasAbertas ? styles.chevronAberto : ""}`}
          />
        </button>
      </div>

      {regrasAbertas && (
        <div className={styles.regras}>
          <p className={styles.regraTexto}>{cupom.regras}</p>
        </div>
      )}
    </div>
  );
}

export default CouponCard;
