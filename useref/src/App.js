import styles from "./App.module.css";
import { useEffect, useState } from "react";
import { useRef } from "react";

export default function Home() {
  const [nome, setNome] = useState(),
    [email, setEmail] = useState(),
    [telefone, setTelefone] = useState(),
    h2form = useRef(''),
    h2dados = useRef(''),
    nomeP = useRef(''),
    emailP = useRef(''),
    telefoneP = useRef('');

    function getNome(evento){
      setNome(evento.target.value);
    }
    function getEmail(evento){
      setEmail(evento.target.value);
    }
    function getTelefone(evento){
      setTelefone(evento.target.value);
    }
  useEffect(() => {
    h2form.current.innerHTML = 'Cadastro:';
    h2dados.current.innerHTML = 'Dados:';
    nomeP.current.innerHTML = "Nome Completo:";
    emailP.current.innerHTML = "Email:";
    telefoneP.current.innerHTML = "Telefone:";
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
              <p>{nome}</p>
            </div>
            <div className={styles.controlDados}>
              <p ref={emailP}></p>
              <p>{email}</p>
            </div>
            <div className={styles.controlDados}>
              <p ref={telefoneP}></p>
              <p>{telefone}</p>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <form>
            <div className={styles.form}>
              <h2 ref={h2form}></h2>
            </div>
            <div className={styles.form}>
              <input type="text" name="nome" placeholder="Digite Nome completo" onChange={getNome} />
            </div>
            <div className={styles.form}>
              <input type="text" name="email" placeholder="Digite Email" onChange={getEmail} />
            </div>
            <div className={styles.form}>
              <input type="text" name="telefone" placeholder="Digite Telefone" onChange={getTelefone} />
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