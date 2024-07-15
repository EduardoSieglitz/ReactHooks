import styles from './atividade.module.css';
import { useState } from 'react';
var aumentar = 1;
function Web() {
    var [soma, setSoma] = useState(0);
    function Click() {
        setSoma(soma + aumentar);
        console.log(setSoma)
    }
    function Aumentar1(){
        aumentar = 1;
        console.log("Aumentando 1 em 1");
    }
    function Aumentar10(){
        aumentar = 10;
        console.log("Aumentando 10 em 10");
    }
    function Resetar(){
        setSoma(0);
        console.log("Soma voltando a 0")
    }
    return (
        <div className={styles.container}>
            <div className={styles.atividade}>
                <h1>Escolha uma opção de Soma</h1>
                <div className={styles.organizar}><button onClick={Aumentar1}>1</button></div>
                <div className={styles.organizar}><button onClick={Aumentar10}>10</button></div>
                <div className={styles.organizar}><button onClick={Resetar}>Resetar</button></div>
            </div>
            <div className={styles.atividade}>
                <h1>{soma}</h1>
                <button onClick={Click}>Click</button>
            </div>
            <div className={styles.organizar}>
                <div><a href="/">Home</a></div>
            </div>
        </div>
    )
}
export default Web;