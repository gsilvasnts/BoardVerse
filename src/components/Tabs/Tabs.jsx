import styles from "./Tabs.module.css";

function Tabs({ abas, abaAtiva, onChange }) {
  return (
    <div className={styles.tabs}>
      {abas.map((aba) => (
        <button
          key={aba.id}
          type="button"
          className={`${styles.tab} ${abaAtiva === aba.id ? styles.active : ""}`}
          onClick={() => onChange(aba.id)}
        >
          <span>{aba.label}</span>
          {aba.contador !== undefined && (
            <span className={styles.badge}>{aba.contador}</span>
          )}
        </button>
      ))}
    </div>
  );
}

export default Tabs;
