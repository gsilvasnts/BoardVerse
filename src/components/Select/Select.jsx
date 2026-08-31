import { ChevronDown } from "lucide-react";
import styles from "./Select.module.css";

function Select({ valor, onChange, opcoes, placeholder }) {
  return (
    <div className={styles.wrapper}>
      <select className={styles.select} value={valor} onChange={onChange}>
        <option value="" disabled>
          {placeholder}
        </option>
        {opcoes.map((opcao) => (
          <option key={opcao.valor} value={opcao.valor}>
            {opcao.rotulo}
          </option>
        ))}
      </select>
      <ChevronDown size={16} className={styles.icon} />
    </div>
  );
}

export default Select;
