import { useState } from "react";
import { Pencil, Trash2, Info } from "lucide-react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import ClienteFormModal from "../../components/ClienteFormModal/ClienteFormModal";
import styles from "./ClientesPage.module.css";

const CLIENTES_MOCK = [
  {
    id: 1,
    nome: "João Silva",
    email: "joao@gmail.com",
    contato: "(11) 9 9999-9999",
    status: "Ativo",
  },
  {
    id: 2,
    nome: "Carlos Augusto",
    email: "carlos@gmail.com",
    contato: "(21) 9 1111-1111",
    status: "Ativo",
  },
];

function ClientesPage() {
  const [modalAberto, setModalAberto] = useState(false);
  const [nomeFiltro, setNomeFiltro] = useState("");
  const [cpfFiltro, setCpfFiltro] = useState("");
  const [emailFiltro, setEmailFiltro] = useState("");

  function handleSalvarCliente(dadosCliente) {
    console.log("Cliente salvo:", dadosCliente);
    setModalAberto(false);
  }

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>Clientes</h1>
        <Button variante="primary" onClick={() => setModalAberto(true)}>
          Cadastrar cliente
        </Button>
      </div>

      <div className={styles.filters}>
        <span className={styles.filterLabel}>Filtrar por:</span>

        <div className={styles.filterRow}>
          <Input
            label="Nome"
            valor={nomeFiltro}
            onChange={(e) => setNomeFiltro(e.target.value)}
          />
          <Input
            label="CPF"
            valor={cpfFiltro}
            onChange={(e) => setCpfFiltro(e.target.value)}
          />
          <Input
            label="E-mail"
            tipo="email"
            valor={emailFiltro}
            onChange={(e) => setEmailFiltro(e.target.value)}
          />
        </div>

        <div className={styles.filterActions}>
          <Button variante="primary">Pesquisar</Button>
          <Button variante="secondary">Limpar</Button>
        </div>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>Foto</th>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Contato</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {CLIENTES_MOCK.map((cliente) => (
            <tr key={cliente.id}>
              <td>
                <div className={styles.avatar} />
              </td>
              <td>{cliente.nome}</td>
              <td>{cliente.email}</td>
              <td>{cliente.contato}</td>
              <td>
                <span className={styles.statusBadge}>{cliente.status}</span>
              </td>
              <td>
                <div className={styles.actions}>
                  <button className={styles.iconButton} aria-label="Editar">
                    <Pencil size={16} />
                  </button>
                  <button className={styles.iconButton} aria-label="Excluir">
                    <Trash2 size={16} />
                  </button>
                  <button className={styles.iconButton} aria-label="Detalhes">
                    <Info size={16} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <ClienteFormModal
        aberto={modalAberto}
        onFechar={() => setModalAberto(false)}
        onSalvar={handleSalvarCliente}
      />
    </div>
  );
}

export default ClientesPage;
