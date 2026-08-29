import { Search, User, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>BoardVerse</h1>

      <nav className={styles.navigation}>
        <ul>
          <li>
            <Link to="/tabuleiros">Tabuleiros</Link>
          </li>
          <li>
            <Link to="/cartas">Cartas</Link>
          </li>
          <li>
            <Link to="/dados">Dados</Link>
          </li>
          <li>
            <Link to="/quebra-cabecas">Quebra-cabeças</Link>
          </li>
          <li>
            <Link to="/todos">Todos</Link>
          </li>
        </ul>
      </nav>

      <div className={styles.actions}>
        <div className={styles.search}>
          <input type="search" placeholder="Buscar produtos..." />
          <button type="button">
            <Search size={20} />
          </button>
        </div>

        <button type="button" className={styles.userButton}>
          <User size={20} />
        </button>

        <button type="button" className={styles.cartButton}>
          <div className={styles.cartCount}>0</div>
          <ShoppingCart size={20} />
          <span>Carrinho</span>
        </button>
      </div>
    </header>
  );
}

export default Header;
