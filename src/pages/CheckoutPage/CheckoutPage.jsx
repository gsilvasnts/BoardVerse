import { useState } from "react";
import Select from "../../components/Select/Select";
import { Plus } from "lucide-react";
import Button from "../../components/Button/Button";
import CheckoutOrderSummary from "../../components/CheckoutOrderSummary/CheckoutOrderSummary";
import styles from "./CheckoutPage.module.css";

const METODOS_ENTREGA = [
  { valor: "padrao", rotulo: "Padrão (3 - 7 dias úteis)" },
  { valor: "expressa", rotulo: "Expressa (1 - 2 dias úteis)" },
];

const CUPONS = [
  { valor: "PRIMEIRACOMPRA10", rotulo: "PRIMEIRACOMPRA10 — 10% off" },
];

const ENDERECOS_MOCK = [
  {
    id: 1,
    rua: "Rua das Amendoeiras, nº 42",
    complemento: "3º Esquerdo",
    cep: "1900-285",
    cidadeEstado: "Suzano, São Paulo",
  },
  {
    id: 2,
    rua: "Avenida da Boavista, nº 1250",
    complemento: "5º Andar",
    cep: "4100-130",
    cidadeEstado: "Mogi das Cruzes, São Paulo",
  },
  {
    id: 3,
    rua: "Rua Dom Frei Caetano Brandão, nº 18",
    complemento: "Rés-do-chão",
    cep: "5300-301",
    cidadeEstado: "Mogi das Cruzes, São Paulo",
  },
];

const ITENS_MOCK = [
  { id: 1, nome: "Skull King", precoUnitario: 25.78, quantidade: 1 },
];

function CheckoutPage() {
  const [metodoEntrega, setMetodoEntrega] = useState("padrao");
  const [cupom, setCupom] = useState("");
  const [enderecoSelecionadoId, setEnderecoSelecionadoId] = useState(
    ENDERECOS_MOCK[0].id,
  );

  const opcoesEndereco = ENDERECOS_MOCK.map((endereco) => ({
    valor: String(endereco.id),
    rotulo: endereco.rua,
  }));

  const enderecoSelecionado = ENDERECOS_MOCK.find(
    (endereco) => endereco.id === enderecoSelecionadoId,
  );

  function handleFinalizarPedido() {
    console.log("Pedido finalizado!");
  }

  function handleAdicionarNovoEndereco() {
    console.log("Abrir formulário de novo endereço");
  }

  return (
    <div className={styles.page}>
      <div className={styles.left}>
        <h1 className={styles.title}>Detalhes do pedido</h1>

        <div className={styles.field}>
          <label className={styles.label}>Método de entrega</label>
          <Select
            valor={metodoEntrega}
            onChange={(e) => setMetodoEntrega(e.target.value)}
            opcoes={METODOS_ENTREGA}
            placeholder="Selecionar"
          />
        </div>

        <div className={styles.field}>
          <label className={styles.label}>Cupom</label>
          <Select
            valor={cupom}
            onChange={(e) => setCupom(e.target.value)}
            opcoes={CUPONS}
            placeholder="Selecionar"
          />
        </div>

        <div className={styles.field}>
          <label className={styles.label}>Endereço</label>
          <Select
            valor={String(enderecoSelecionadoId)}
            onChange={(e) => setEnderecoSelecionadoId(Number(e.target.value))}
            opcoes={opcoesEndereco}
            placeholder="Selecionar endereço"
          />

          <Button variante="primary" onClick={handleAdicionarNovoEndereco}>
            <Plus size={16} />
            Adicionar novo endereço
          </Button>
        </div>
      </div>

      <div className={styles.right}>
        <CheckoutOrderSummary
          itens={ITENS_MOCK}
          entrega={3}
          onFinalizarPedido={handleFinalizarPedido}
        />
      </div>
    </div>
  );
}

export default CheckoutPage;
