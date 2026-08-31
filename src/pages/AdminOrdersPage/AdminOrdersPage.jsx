import { useState } from "react";
import Tabs from "../../components/Tabs/Tabs";
import AdminOrderCard from "../../components/AdminOrderCard/AdminOrderCard";
import {
  ABAS_PEDIDOS,
  STATUS,
  avancarStatus,
} from "../../components/AdminOrderCard/adminOrderStatusConfig";
import styles from "./AdminOrdersPage.module.css";
import skullKingImage from "../../assets/images/skull-king.jpg";
import unoImage from "../../assets/images/uno.jpg";
import catanImage from "../../assets/images/catan.jpg";

const PEDIDOS_MOCK = [
  {
    id: 1,
    resumo: "3x Skull King, 2x Uno",
    dataFormatada: "15 de Março, 2026",
    total: 25.78,
    cliente: "João Silva",
    status: STATUS.EM_ABERTO,
    itens: [
      { nome: "Skull King", imagem: skullKingImage },
      { nome: "Uno", imagem: unoImage },
      { nome: "Catan", imagem: catanImage },
    ],
  },
  {
    id: 2,
    resumo: "3x Skull King, 2x Uno",
    dataFormatada: "15 de Março, 2026",
    total: 25.78,
    cliente: "João Silva",
    status: STATUS.EM_ABERTO,
    itens: [
      { nome: "Skull King", imagem: skullKingImage },
      { nome: "Uno", imagem: unoImage },
    ],
  },
];

function AdminOrdersPage() {
  const [abaAtiva, setAbaAtiva] = useState(STATUS.EM_ABERTO);
  const [pedidos, setPedidos] = useState(PEDIDOS_MOCK);

  const abas = ABAS_PEDIDOS.map((aba) => ({
    ...aba,
    contador: pedidos.filter((p) => p.status === aba.id).length,
  }));

  const pedidosFiltrados = pedidos.filter(
    (pedido) => pedido.status === abaAtiva,
  );

  function handleAcaoPedido(acao, pedidoId) {
    if (acao === "avancarStatus") {
      setPedidos((atual) =>
        atual.map((p) =>
          p.id === pedidoId ? { ...p, status: avancarStatus(p.status) } : p,
        ),
      );
    }

    if (acao === "rejeitarPedido") {
      console.log("Pedido rejeitado:", pedidoId);
    }

    if (acao === "trocaAceita") {
      setPedidos((atual) =>
        atual.map((p) =>
          p.id === pedidoId ? { ...p, status: STATUS.TROCA_ACEITA } : p,
        ),
      );
    }

    if (acao === "trocaNegada") {
      setPedidos((atual) =>
        atual.map((p) =>
          p.id === pedidoId ? { ...p, status: STATUS.TROCA_REJEITADA } : p,
        ),
      );
    }
  }

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Pedidos</h1>

      <Tabs abas={abas} abaAtiva={abaAtiva} onChange={setAbaAtiva} />

      <div className={styles.lista}>
        {pedidosFiltrados.length === 0 && (
          <p className={styles.vazio}>Nenhum pedido nesse status.</p>
        )}

        {pedidosFiltrados.map((pedido) => (
          <AdminOrderCard
            key={pedido.id}
            pedido={pedido}
            onAcao={handleAcaoPedido}
          />
        ))}
      </div>
    </div>
  );
}

export default AdminOrdersPage;
