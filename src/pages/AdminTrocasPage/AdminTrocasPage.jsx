import { useState } from "react";
import Tabs from "../../components/Tabs/Tabs";
import AdminOrderCard from "../../components/AdminOrderCard/AdminOrderCard";
import {
  ABAS_TROCAS,
  STATUS,
  avancarStatus,
} from "../../components/AdminOrderCard/adminOrderStatusConfig";
import styles from "./AdminTrocasPage.module.css";

import skullKingImage from "../../assets/images/skull-king.jpg";
import unoImage from "../../assets/images/uno.jpg";
import catanImage from "../../assets/images/catan.jpg";

const TROCAS_MOCK = [
  {
    id: 1,
    resumo: "1x Skull King",
    dataFormatada: "15 de Março, 2026",
    total: 10.78,
    detalhe: "Motivo: Veio faltando cartas",
    status: STATUS.TROCA_SOLICITADA,
    itens: [
      { nome: "Skull King", imagem: skullKingImage },
      { nome: "Uno", imagem: unoImage },
      { nome: "Catan", imagem: catanImage },
    ],
  },
];

function AdminTrocasPage() {
  const [abaAtiva, setAbaAtiva] = useState(STATUS.TROCA_SOLICITADA);
  const [trocas, setTrocas] = useState(TROCAS_MOCK);

  const abas = ABAS_TROCAS.map((aba) => ({
    ...aba,
    contador: trocas.filter((t) => t.status === aba.id).length,
  }));

  const trocasFiltradas = trocas.filter((troca) => troca.status === abaAtiva);

  function handleAcaoTroca(acao, trocaId) {
    if (acao === "trocaAceita") {
      setTrocas((atual) =>
        atual.map((t) =>
          t.id === trocaId ? { ...t, status: STATUS.TROCA_ACEITA } : t,
        ),
      );
    }

    if (acao === "trocaNegada") {
      setTrocas((atual) =>
        atual.map((t) =>
          t.id === trocaId ? { ...t, status: STATUS.TROCA_REJEITADA } : t,
        ),
      );
    }

    if (acao === "avancarStatus") {
      setTrocas((atual) =>
        atual.map((t) =>
          t.id === trocaId ? { ...t, status: avancarStatus(t.status) } : t,
        ),
      );
    }
  }

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Trocas</h1>

      <Tabs abas={abas} abaAtiva={abaAtiva} onChange={setAbaAtiva} />

      <div className={styles.lista}>
        {trocasFiltradas.length === 0 && (
          <p className={styles.vazio}>Nenhuma troca nesse status.</p>
        )}

        {trocasFiltradas.map((troca) => (
          <AdminOrderCard
            key={troca.id}
            pedido={troca}
            onAcao={handleAcaoTroca}
          />
        ))}
      </div>
    </div>
  );
}

export default AdminTrocasPage;
