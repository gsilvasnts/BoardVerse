import { useState } from "react";
import { Download } from "lucide-react";
import Select from "../../components/Select/Select";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import SalesChart from "../../components/SalesChart/SalesChart";
import styles from "./SalesPage.module.css";

const CATEGORIAS = [
  { valor: "todos", rotulo: "Todos" },
  { valor: "tabuleiros", rotulo: "Tabuleiros" },
  { valor: "cartas", rotulo: "Cartas" },
  { valor: "dados", rotulo: "Dados" },
  { valor: "familia", rotulo: "Família" },
];

const EXIBICOES = [
  { valor: "unidades", rotulo: "Unidades" },
  { valor: "faturamento", rotulo: "Faturamento" },
];

const DADOS_MOCK = [
  { categoria: "Tabuleiros", valor: 100 },
  { categoria: "Cartas", valor: 60 },
  { categoria: "Dados", valor: 30 },
  { categoria: "Família", valor: 27 },
];

function SalesPage() {
  const [categoria, setCategoria] = useState("todos");
  const [dataDe, setDataDe] = useState("2026-08-17");
  const [dataAte, setDataAte] = useState("2026-08-23");
  const [exibicao, setExibicao] = useState("unidades");

  function handleExportarGrafico() {
    console.log("Exportando gráfico...", {
      categoria,
      dataDe,
      dataAte,
      exibicao,
    });
  }

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Histórico De Vendas</h1>

      <div className={styles.card}>
        <span className={styles.filterLabel}>Filtrar por:</span>

        <div className={styles.filtersRow}>
          <div className={styles.field}>
            <label className={styles.label}>Categoria</label>
            <Select
              valor={categoria}
              onChange={(e) => setCategoria(e.target.value)}
              opcoes={CATEGORIAS}
              placeholder="Selecionar"
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label}>De</label>
            <Input
              tipo="date"
              valor={dataDe}
              onChange={(e) => setDataDe(e.target.value)}
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label}>Até</label>
            <Input
              tipo="date"
              valor={dataAte}
              onChange={(e) => setDataAte(e.target.value)}
            />
          </div>
        </div>

        <div className={styles.field}>
          <label className={styles.label}>Exibição</label>
          <div className={styles.exibicaoWrapper}>
            <Select
              valor={exibicao}
              onChange={(e) => setExibicao(e.target.value)}
              opcoes={EXIBICOES}
              placeholder="Selecionar"
            />
          </div>
        </div>

        <div className={styles.chartArea}>
          <SalesChart dados={DADOS_MOCK} />
        </div>

        <div className={styles.exportRow}>
          <Button variante="primary" onClick={handleExportarGrafico}>
            <Download size={16} />
            Exportar gráfico
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SalesPage;
