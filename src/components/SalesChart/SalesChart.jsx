import { PieChart, Pie, Cell, Tooltip } from "recharts";
import styles from "./SalesChart.module.css";

const CORES = ["#7c4dff", "#4dd8d8", "#f4867a", "#ffb057"];

function SalesChart({ dados }) {
  return (
    <div className={styles.container}>
      <div className={styles.legenda}>
        {dados.map((item, index) => (
          <div key={item.categoria} className={styles.legendaItem}>
            <span
              className={styles.legendaCor}
              style={{ backgroundColor: CORES[index % CORES.length] }}
            />
            <span>{item.categoria}</span>
          </div>
        ))}
      </div>

      <PieChart width={360} height={360}>
        <Pie
          data={dados}
          dataKey="valor"
          nameKey="categoria"
          cx="50%"
          cy="50%"
          outerRadius={140}
          label={({ valor }) => valor}
          labelLine={{ stroke: "rgba(255,255,255,0.3)" }}
        >
          {dados.map((item, index) => (
            <Cell key={item.categoria} fill={CORES[index % CORES.length]} />
          ))}
        </Pie>
        <Tooltip
          contentStyle={{
            background: "#2b2b2b",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "10px",
            color: "#ffffff",
          }}
        />
      </PieChart>
    </div>
  );
}

export default SalesChart;
