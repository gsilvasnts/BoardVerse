import styles from "./Button.module.css";

function Button({
  variante = "primary",
  children,
  onClick,
  type = "button",
  disabled = false,
}) {
  const classeVariante = styles[variante] || styles.primary;
  return (
    <button
      className={`${styles.button} ${classeVariante}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
