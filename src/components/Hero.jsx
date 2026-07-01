import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.overlay} aria-hidden="true" />
      <div className={styles.inner}>
        <div className={styles.copy}>
          <span className={styles.badge}>BIENVENUE CHEZ MEZO</span>
          <h1 className={styles.title}>Bienvenue chez Mezo</h1>
          <p className={styles.subtitle}>Boucherie Halal &amp; Épicerie du Monde</p>
          <div className={styles.actions}>
            <a className={`${styles.button} ${styles.primary}`} href="#boucherie">
              Découvrir nos rayons
            </a>
            <a className={`${styles.button} ${styles.secondary}`} href="#contact">
              Nous contacter
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
