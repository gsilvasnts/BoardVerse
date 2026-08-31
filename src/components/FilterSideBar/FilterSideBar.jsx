import styles from "./FilterSideBar.module.css";

const OPCOES_ORDENACAO = [
  { valor: "relevancia", rotulo: "Mais vendidos" },
  { valor: "preco-asc", rotulo: "Preço, menor para maior" },
  { valor: "preco-desc", rotulo: "Preço, maior para menor" },
  { valor: "nome-asc", rotulo: "Ordem alfabética, A-Z" },
  { valor: "nome-desc", rotulo: "Ordem alfabética, Z-A" },
];

function FilterSideBar({ precoMin, precoMax, onPrecoMinChange, onPrecoMaxChange, ordenacao, onOrdenacaoChange }) {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.section}>
        <h4 className={styles.title}>Preço</h4>

        <div className={styles.priceInputs}>
          <div className={styles.priceField}>
            <label className={styles.priceLabel} htmlFor="preco-min">Mín.</label>
            <input
              id="preco-min"
              type="number"
              className={styles.priceInput}
              value={precoMin}
              onChange={(e) => onPrecoMinChange(Number(e.target.value))}
              min={0}
            />
          </div>

          <div className={styles.priceField}>
            <label className={styles.priceLabel} htmlFor="preco-max">Máx.</label>
            <input
              id="preco-max"
              type="number"
              className={styles.priceInput}
              value={precoMax}
              onChange={(e) => onPrecoMaxChange(Number(e.target.value))}
              min={0}
            />
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <h4 className={styles.title}>Filtrar por</h4>

        <div className={styles.sortOptions}>
          {OPCOES_ORDENACAO.map((opcao) => (
            <label key={opcao.valor} className={styles.sortOption}>
              <input
                type="radio"
                name="ordenacao"
                value={opcao.valor}
                checked={ordenacao === opcao.valor}
                onChange={() => onOrdenacaoChange(opcao.valor)}
              />
              <span>{opcao.rotulo}</span>
            </label>
          ))}
        </div>
      </div>
    </aside>
  );
}

export default FilterSideBar;