import styles from "./Footer.module.css";

function Footer() {
  const anoAtual = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.row}>
          <div className={styles.col}>
            <h5 className={styles.footerLogo}>🎲 BoardVerse</h5>

            <p className={styles.footerText}>Jogos, expansões e acessórios.</p>

            <p className={`${styles.footerTitle} ${styles.mtTop}`}>
              Junte-se à nossa comunidade
            </p>

            <div className={styles.footerSocial}>
              <a
                className={styles.footerSocialIcon}
                href="#"
                aria-label="Discord"
              >
                🎮
              </a>
              <a
                className={styles.footerSocialIcon}
                href="#"
                aria-label="YouTube"
              >
                ▶️
              </a>
              <a
                className={styles.footerSocialIcon}
                href="#"
                aria-label="Twitter"
              >
                🐦
              </a>
              <a
                className={styles.footerSocialIcon}
                href="#"
                aria-label="Instagram"
              >
                📷
              </a>
            </div>
          </div>

          <div className={styles.col}>
            <h5 className={styles.footerTitle}>Explorar</h5>
            <ul className={styles.footerLinks}>
              <li>
                <a href="#">Loja</a>
              </li>
              <li>
                <a href="#">Eventos e Torneios</a>
              </li>
              <li>
                <a href="#">Fale Conosco</a>
              </li>
            </ul>
          </div>

          <div className={styles.col}>
            <h5 className={styles.footerTitle}>Fique por Dentro</h5>
            <p className={styles.footerText}>
              Dicas, promoções e convites para torneios
              <br />
              direto na sua caixa de entrada.
            </p>

            <form
              className={styles.footerForm}
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                className={styles.footerInput}
                type="email"
                placeholder="Digite seu e-mail aqui"
                required
              />
              <button className={styles.footerBtn} type="submit">
                Inscrever-se
              </button>
            </form>
          </div>
        </div>

        <hr className={styles.footerDivider} />

        <p className={styles.footerCopy}>© BoardVerse · {anoAtual}</p>
      </div>
    </footer>
  );
}

export default Footer;
