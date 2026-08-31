// components/PaymentMethods/PaymentMethods.jsx
import { useState } from "react";
import Input from "../Input/Input";
import styles from "./PaymentMethods.module.css";

const METODOS = [
  { id: "pix", label: "Pix" },
  { id: "cartao", label: "Cartão (débito / crédito)" },
  { id: "boleto", label: "Boleto" },
];

function formatarPreco(valor) {
  return `R$ ${valor.toFixed(2).replace(".", ",")}`;
}

function PaymentMethods({ total }) {
  const [permiteMultiplas, setPermiteMultiplas] = useState("nao");
  const [metodosSelecionados, setMetodosSelecionados] = useState([]);
  const [valorCartao, setValorCartao] = useState("");

  function alternarMetodo(id) {
    if (permiteMultiplas === "nao") {
      setMetodosSelecionados((atual) => (atual[0] === id ? [] : [id]));
      return;
    }

    setMetodosSelecionados((atual) =>
      atual.includes(id) ? atual.filter((m) => m !== id) : [...atual, id],
    );
  }

  function handleTogglePermiteMultiplas(valor) {
    setPermiteMultiplas(valor);
    if (valor === "nao") {
      setMetodosSelecionados((atual) => (atual.length > 0 ? [atual[0]] : []));
    }
  }

  const valorCartaoNumerico = Number(valorCartao) || 0;
  const restante = Math.max(0, total - valorCartaoNumerico);

  return (
    <div className={styles.container}>
      <p className={styles.question}>
        Selecionar mais de uma forma de pagamento?
      </p>

      <div className={styles.toggleRow}>
        <label className={styles.toggleOption}>
          <input
            type="radio"
            name="permiteMultiplas"
            checked={permiteMultiplas === "sim"}
            onChange={() => handleTogglePermiteMultiplas("sim")}
          />
          <span>Sim</span>
        </label>

        <label className={styles.toggleOption}>
          <input
            type="radio"
            name="permiteMultiplas"
            checked={permiteMultiplas === "nao"}
            onChange={() => handleTogglePermiteMultiplas("nao")}
          />
          <span>Não</span>
        </label>
      </div>

      <div className={styles.metodos}>
        {METODOS.map((metodo) => {
          const selecionado = metodosSelecionados.includes(metodo.id);

          return (
            <div key={metodo.id} className={styles.metodoBloco}>
              <label className={styles.metodoRow}>
                <input
                  type="checkbox"
                  className={styles.checkbox}
                  checked={selecionado}
                  onChange={() => alternarMetodo(metodo.id)}
                />
                <span className={styles.metodoLabel}>{metodo.label}</span>

                {metodo.id === "pix" && selecionado && (
                  <span className={styles.valorPill}>
                    {formatarPreco(total)}
                  </span>
                )}
              </label>

              {metodo.id === "cartao" && selecionado && (
                <div className={styles.cartaoDetalhes}>
                  <label className={styles.parcelaOption}>
                    <input type="checkbox" />
                    <span>Débito - Final $$$</span>
                  </label>
                  <label className={styles.parcelaOption}>
                    <input type="checkbox" />
                    <span>Crédito - Final $$$</span>
                  </label>

                  <Input
                    placeholder="Digite o valor"
                    tipo="number"
                    valor={valorCartao}
                    onChange={(e) => setValorCartao(e.target.value)}
                  />

                  <button type="button" className={styles.addCardButton}>
                    Adicionar novo cartão
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {metodosSelecionados.includes("cartao") && (
        <div className={styles.restanteRow}>
          <span className={styles.restanteLabel}>Restante no cartão</span>
          <span className={styles.restanteValor}>
            {formatarPreco(restante)}
          </span>
        </div>
      )}

      {metodosSelecionados.includes("boleto") && (
        <div className={styles.restanteRow}>
          <span className={styles.restanteLabel}>Restante</span>
          <span className={styles.restanteValor}>
            {formatarPreco(restante)}
          </span>
        </div>
      )}
    </div>
  );
}

export default PaymentMethods;
