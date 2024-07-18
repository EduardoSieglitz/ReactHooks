import styles from "./App.module.css";
import { useEffect, useState } from "react";
import { useRef } from "react";

export default function Home() {
  const [dados, setDados] = useState(),
    h2form = useRef(''),
    h2dados = useRef(''),
    nomeP = useRef(''),
    emailP = useRef(''),
    telefoneP = useRef('');

  function getDados(evento) {
    setDados(evento.target.value)
    console.log(evento.target.value);
  }

  useEffect(() => {
    h2form.current.innerHTML = 'Cadastro';
    h2dados.current.innerHTML = 'Dados';
    nomeP.current.innerHTML = "Nome Completo"; 
    emailP.current.innerHTML = "Email";
    telefoneP.current.innerHTML = "Telefone";
  }, []);
  return (
    <body>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.control}>
            <div className={styles.controlDados}>
              <h2 ref={h2dados}></h2>
            </div>
            <div className={styles.controlDados}>
              <p ref={nomeP}></p>
            </div>
            <div className={styles.controlDados}>
              <p ref={emailP}></p>
            </div>
            <div className={styles.controlDados}>
              <p ref={telefoneP}></p>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <form>
            <div className={styles.form}>
              <h2 ref={h2form}></h2>
            </div>
            <div className={styles.form}>
              <input type="text" placeholder="Digite Nome completo" onChange={getDados} />
            </div>
            <div className={styles.form}>
              <input type="text" placeholder="Digite Email" onChange={getDados} />
            </div>
            <div className={styles.form}>
              <input type="text" placeholder="Digite Telefone" onChange={getDados} />
            </div>
            <div className={styles.form}>
              <button>Cadastrar</button>
            </div>
          </form>
        </div>
      </div>
    </body>
  )
}