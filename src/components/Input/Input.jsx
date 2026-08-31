import styles from "./Input.module.css";

function Input({
  label,
  id,
  tipo = "text",
  valor,
  onChange,
  placeholder,
  obrigatorio = false,
  ...resto
}) {
  return (
    <div className={styles.field}>
      {label && (
        <label className={styles.label} htmlFor={id}>
          {label}
          {obrigatorio && <span className={styles.required}> *</span>}
        </label>
      )}

      <input
        id={id}
        type={tipo}
        className={styles.input}
        value={valor}
        onChange={onChange}
        placeholder={placeholder}
        required={obrigatorio}
        {...resto}
      />
    </div>
  );
}

export default Input;
