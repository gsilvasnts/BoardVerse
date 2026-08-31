import { Plus, Pencil, Trash2 } from "lucide-react";
import Button from "../Button/Button";
import styles from "./AddressList.module.css";

function AddressList({ enderecos, onAdicionar, onEditar, onExcluir }) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Endereços Salvos</h2>
        <Button variante="primary" onClick={onAdicionar}>
          <Plus size={16} />
          Adicionar novo endereço
        </Button>
      </div>

      <div className={styles.lista}>
        {enderecos.map((endereco) => (
          <div key={endereco.id} className={styles.item}>
            <div className={styles.info}>
              <p className={styles.linha}>{endereco.rua}</p>
              <p className={styles.linha}>{endereco.complemento}</p>
              <p className={styles.linha}>
                {endereco.cep} {endereco.cidadeEstado}
              </p>
            </div>

            <div className={styles.actions}>
              <button
                type="button"
                className={styles.iconButton}
                onClick={() => onEditar(endereco.id)}
                aria-label="Editar endereço"
              >
                <Pencil size={16} />
              </button>
              <button
                type="button"
                className={styles.iconButton}
                onClick={() => onExcluir(endereco.id)}
                aria-label="Excluir endereço"
              >
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AddressList;
