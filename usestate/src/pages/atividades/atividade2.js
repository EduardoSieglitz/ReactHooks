import styles from "./atividade.module.css";
import { useState } from 'react';

function Web() {
    const [nome, setNome] = useState("");
    return (
        <>
            <div className={styles.container}>
                <input placeholder="Digite seu nome de usuario aqui" onChange={(evento)=>{setNome(evento.target.value)}} />
                <h2>Nome de Usuario: {nome}</h2>
            </div>
        </>
    )
}

export default Web;