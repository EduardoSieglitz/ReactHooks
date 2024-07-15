import styles from './Home.module.css';

export default function Web() {
  return (
    <div className={styles.container}>
      <div className={styles.atividade}><a href="/atividade1">Atividade 1</a></div>
      <div className={styles.atividade}><a href="/atividade2">Atividade 2</a></div>
    </div>
  )
}

