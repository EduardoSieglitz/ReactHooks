import React, { useEffect, useState } from "react";
import styles from "./atividade.module.css";
function Web() {
    const [nomeP, setNomeP] = useState();
    const [nomeS, setNomeS] = useState();
    const [quantidadeP, setQuantidadeP] = useState(-1);
    const [quantidadeS, setQuantidadeS] = useState(-1);
    function PrimeiroNome(event) {
        setNomeP(event.target.value);
    }
    function SegundaNome(event) {
        setNomeS(event.target.value);
    }
    useEffect(() => {
        setQuantidadeP(quantidadeP + 1)
    }, [nomeP]);
    useEffect(() => {
        setQuantidadeS(quantidadeS + 1);
    }, [nomeS]);
    return (
        <div className={styles.container}>
            <div className={styles.atividade}>
                <div>
                    <input type="text" placeholder="Digite o Primeiro Nome" name="nomeP" onChange={PrimeiroNome} />
                    <p>Quantas vezes foi digitado o Primeiro Nome: {quantidadeP}</p>
                </div>
                <div>
                    <input type="text" placeholder="Digite o Segundo Nome" name="nomeS" onChange={SegundaNome} />
                    <p>Quantas vezes foi digitado o Segundo Nome: {quantidadeS}</p>
                </div>
            </div>
            <p>Primeiro Nome: {nomeP}</p>
            <p>Segundo Nome: {nomeS}</p>
            <div className={styles.organizar}>
                <div><a href="/">Home</a></div>
            </div>
        </div>
    );
}

export default Web;
