import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.overlay} aria-hidden="true" />
      <div className={styles.inner}>
        <div className={styles.copyWrapper}>
          <div className={styles.copy}>
            <span className={styles.eyebrow}>Bienvenue chez</span>
            <h1 className={styles.title}>MEZO SUPERMARCHÉ & BOUCHERIE</h1>
            <p className={styles.subtitle}>Boucherie Halal & Épicerie du Monde</p>
            <p className={styles.meta}>Votre destination de confiance à Genève pour des viandes halal de qualité, des produits frais et des saveurs du monde.</p>
            <div className={styles.actions}>
              <a className={`${styles.button} ${styles.primary}`} href="#boucherie">
                Découvrir nos rayons
              </a>
              <a className={`${styles.button} ${styles.secondary}`} href="#contact">
                Nous contacter
              </a>
            </div>
            <div className={styles.trustRow}>
              <span className={styles.trustItem}>✓ Viandes Halal</span>
              <span className={styles.trustItem}>✓ Produits frais</span>
              <span className={styles.trustItem}>✓ Saveurs du Monde</span>
              <span className={styles.trustItem}>✓ Genève</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
