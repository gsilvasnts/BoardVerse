import { User } from "lucide-react";
import { Link } from "react-router-dom";
import styles from "./AdminHeader.module.css";

function AdminHeader() {
  return (
    <header className={styles.header}>
      <Link to="/admin" className={styles.brand}>
        <span className={styles.logo}>🎲 BoardVerse</span>
      </Link>

      <nav className={styles.navigation}>
        <ul>
          <li>
            <Link to="/admin/vendas">Vendas</Link>
          </li>
          <li>
            <Link to="/admin/pedidos">Pedidos</Link>
          </li>
          <li>
            <Link to="/admin/trocas">Trocas</Link>
          </li>
          <li>
            <Link to="/admin/clientes">Clientes</Link>
          </li>
        </ul>
      </nav>

      <button type="button" className={styles.userButton}>
        <User size={20} />
      </button>
    </header>
  );
}

export default AdminHeader;
