import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.section}>
        <p className={styles.brandTitle}>MEZO SUPERMARCHÉ & BOUCHERIE</p>
        <p className={styles.text}>Boucherie Halal & Épicerie du Monde — Rue de l’École-de-Médecine 11, 1205 Genève.</p>
      </div>
      <div className={styles.section}>
        <p className={styles.sectionTitle}>Navigation</p>
        <p>Accueil · Notre Boucherie · Épicerie du Monde · Pourquoi choisir Mezo · Contact</p>
      </div>
      <div className={styles.section}>
        <p className={styles.sectionTitle}>Contact</p>
        <p>Rue de l'École-de-Médecine 11</p>
        <p>1205 Genève</p>
        <p>+41 78 210 69 34</p>
      </div>
      <div className={styles.bottom}>
        <span>© 2026 MEZO SUPERMARCHÉ & BOUCHERIE</span>
        <span>Mentions légales</span>
      </div>
    </footer>
  )
}
