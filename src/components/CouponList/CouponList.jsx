import CouponCard from "../CouponCard/CouponCard";
import styles from "./CouponList.module.css";

function CouponList({ cupons }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Cupons</h2>

      <div className={styles.lista}>
        {cupons.map((cupom) => (
          <CouponCard key={cupom.id} cupom={cupom} />
        ))}
      </div>
    </div>
  );
}

export default CouponList;
