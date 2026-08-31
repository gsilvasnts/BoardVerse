import { useState } from "react";
import Modal from "../Modal/Modal";
import Input from "../Input/Input";
import Button from "../Button/Button";
import styles from "./ClienteFormModal.module.css";

function ClienteFormModal({ aberto, onFechar, onSalvar }) {
  const [nome, setNome] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");

  function handleSalvar() {
    onSalvar({ nome, dataNascimento, cpf, email });
  }

  return (
    <Modal aberto={aberto} onFechar={onFechar} titulo="Cadastrar Cliente">
      <h4 className={styles.sectionTitle}>Informações pessoais</h4>

      <div className={styles.row}>
        <Input label="Nome" valor={nome} onChange={(e) => setNome(e.target.value)} obrigatorio />
        <Input label="Data de nascimento" tipo="date" valor={dataNascimento} onChange={(e) => setDataNascimento(e.target.value)} />
      </div>

      <div className={styles.row}>
        <Input label="CPF" valor={cpf} onChange={(e) => setCpf(e.target.value)} />
        <Input label="Email" tipo="email" valor={email} onChange={(e) => setEmail(e.target.value)} />
      </div>

      <Button variante="primary" onClick={handleSalvar}>
        Salvar cliente
      </Button>
    </Modal>
  );
}

export default ClienteFormModal;