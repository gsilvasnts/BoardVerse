import { useState } from "react";
import { Pencil, Save, LogOut } from "lucide-react";
import Tabs from "../../components/Tabs/Tabs";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import AddressList from "../../components/AddressList/AddressList";
import OrderList from "../../components/OrderList/OrderList";
import { STATUS } from "../../components/OrderCard/orderStatusConfig";
import CouponList from "../../components/CouponList/CouponList";
import skullKingImage from "../../assets/images/skull-king.jpg";
import unoImage from "../../assets/images/uno.jpg";
import catanImage from "../../assets/images/catan.jpg";
import styles from "./ProfilePage.module.css";

const ABAS = [
  { id: "perfil", label: "Perfil" },
  { id: "enderecos", label: "Endereços", contador: 2 },
  { id: "pedidos", label: "Pedidos", contador: 2 },
  { id: "cupons", label: "Cupons" },
];

const ENDERECOS_MOCK = [
  {
    id: 1,
    rua: "Rua das Amendoeiras, nº 42",
    complemento: "3º Esquerdo",
    cep: "12345-768",
    cidadeEstado: "Mogi das Cruzes, São Paulo",
  },
  {
    id: 2,
    rua: "Avenida da Boavista, nº 1250",
    complemento: "5º Andar",
    cep: "12345-768",
    cidadeEstado: "Mogi das Cruzes, São Paulo",
  },
  {
    id: 3,
    rua: "Rua Dom Frei Caetano Brandão, nº 18",
    complemento: "Casa",
    cep: "12345-768",
    cidadeEstado: "Mogi das Cruzes, São Paulo",
  },
];

const PEDIDOS_MOCK = [
  {
    id: 1,
    resumo: "3x Skull King, 2x Uno",
    dataFormatada: "15 de Março, 2026",
    total: 25.78,
    status: STATUS.EM_ANDAMENTO,
    itens: [
      { nome: "Skull King", imagem: skullKingImage },
      { nome: "Uno", imagem: unoImage },
      { nome: "Catan", imagem: catanImage },
    ],
  },
  {
    id: 2,
    resumo: "3x Skull King, 2x Uno",
    dataFormatada: "26 de Janeiro, 2026",
    total: 25.78,
    status: STATUS.ENTREGUE,
    itens: [
      { nome: "Skull King", imagem: skullKingImage },
      { nome: "Uno", imagem: unoImage },
    ],
  },
];

const CUPONS_MOCK = [
  {
    id: 1,
    valorExibicao: "R$ 10",
    titulo: "R$ 10 para jogos de tabuleiro",
    dataExpiracao: "18/09/2026",
    valorMinimo: "R$ 100",
    regras:
      "Válido para compras de jogos de tabuleiro acima de R$ 100. Não cumulativo com outras promoções. Um cupom por pedido.",
  },
  {
    id: 2,
    valorExibicao: "20%",
    titulo: "20% para novos lançamentos",
    dataExpiracao: "15/09/2026",
    valorMinimo: "R$ 100",
    regras:
      "Válido exclusivamente para produtos da categoria Lançamentos. Desconto aplicado sobre o valor total dos itens elegíveis.",
  },
];

function ProfilePage() {
  const [abaAtiva, setAbaAtiva] = useState("perfil");
  const [nome, setNome] = useState("João Silva");
  const [email, setEmail] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [telefone, setTelefone] = useState("");
  const [enderecos, setEnderecos] = useState(ENDERECOS_MOCK);
  const [pedidos, setPedidos] = useState(PEDIDOS_MOCK);

  function handleSalvar() {
    console.log("Salvando perfil:", { nome, email, dataNascimento, telefone });
  }

  function handleSair() {
    console.log("Saindo da conta...");
  }

  function handleAdicionarEndereco() {
    console.log("Abrir formulário de novo endereço");
  }

  function handleEditarEndereco(id) {
    console.log("Editar endereço:", id);
  }

  function handleExcluirEndereco(id) {
    setEnderecos((atual) => atual.filter((endereco) => endereco.id !== id));
  }

  function handleAcaoPedido(acao, pedidoId) {
    switch (acao) {
      case "confirmarRecebimento":
        setPedidos((atual) =>
          atual.map((p) =>
            p.id === pedidoId ? { ...p, status: STATUS.ENTREGUE } : p,
          ),
        );
        break;
      case "cancelarPedido":
        setPedidos((atual) =>
          atual.map((p) =>
            p.id === pedidoId ? { ...p, status: STATUS.CANCELADO } : p,
          ),
        );
        break;
      case "solicitarTroca":
        console.log("Solicitar troca do pedido:", pedidoId);
        break;
      case "informarDespacho":
        console.log("Informar despacho do pedido:", pedidoId);
        break;
      case "verDetalhes":
        console.log("Ver detalhes do pedido:", pedidoId);
        break;
      default:
        break;
    }
  }

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Perfil</h1>

      <Tabs abas={ABAS} abaAtiva={abaAtiva} onChange={setAbaAtiva} />

      <div className={styles.content}>
        {abaAtiva === "perfil" && (
          <div className={styles.perfilTab}>
            <div className={styles.topRow}>
              <div className={styles.avatarWrapper}>
                <div className={styles.avatar} />
                <button
                  type="button"
                  className={styles.avatarEditButton}
                  aria-label="Trocar foto"
                >
                  <Pencil size={12} />
                </button>
              </div>

              <div className={styles.nomeWrapper}>
                <h2 className={styles.nome}>{nome}</h2>
                <button
                  type="button"
                  className={styles.nomeEditButton}
                  aria-label="Editar nome"
                >
                  <Pencil size={14} />
                </button>
              </div>

              <div className={styles.actions}>
                <Button variante="primary" onClick={handleSalvar}>
                  <Save size={14} />
                  Salvar
                </Button>
                <Button variante="secundary" onClick={handleSair}>
                  <LogOut size={14} />
                  Sair
                </Button>
              </div>
            </div>

            <div className={styles.fieldsRow}>
              <Input
                placeholder="Email"
                tipo="email"
                valor={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <Input
                placeholder="Data de nascimento"
                tipo="date"
                valor={dataNascimento}
                onChange={(e) => setDataNascimento(e.target.value)}
              />

              <Input
                placeholder="Número de telefone"
                tipo="tel"
                valor={telefone}
                onChange={(e) => setTelefone(e.target.value)}
              />
            </div>
          </div>
        )}

        {abaAtiva === "enderecos" && (
          <AddressList
            enderecos={enderecos}
            onAdicionar={handleAdicionarEndereco}
            onEditar={handleEditarEndereco}
            onExcluir={handleExcluirEndereco}
          />
        )}
        {abaAtiva === "pedidos" && (
          <OrderList pedidos={pedidos} onAcao={handleAcaoPedido} />
        )}
        {abaAtiva === "cupons" && (
          <CouponList cupons={CUPONS_MOCK} />
        )}
      </div>
    </div>
  );
}

export default ProfilePage;
