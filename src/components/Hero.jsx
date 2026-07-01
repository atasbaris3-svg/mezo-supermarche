import styles from './Hero.module.css'

const infoItems = [
  { label: 'Horaires', value: 'Tous les jours 07:30–19:30' },
  { label: 'Adresse', value: "Rue de l'École-de-Médecine 11, 1205 Genève" },
  { label: 'Téléphone', value: '+41 78 210 69 34 / +41 78 890 52 62' },
]

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.inner}>
        <div className={styles.content}>
          <span className={styles.badge}>Supermarché &amp; Boucherie à Genève</span>
          <h1 className={styles.title}>SUPERMARCHÉ &amp; BOUCHERIE À GENÈVE</h1>
          <p className={styles.lead}>La fraîcheur, notre promesse</p>
          <p className={styles.description}>
            Mezo Supermarché &amp; Boucherie, votre destination de confiance pour des produits frais,
            des viandes halal et des saveurs du monde.
          </p>
          <div className={styles.actions}>
            <a className={`${styles.button} ${styles.primary}`} href="#epicerie">
              Découvrir nos rayons
            </a>
            <a className={`${styles.button} ${styles.secondary}`} href="#boucherie">
              Nos promotions
            </a>
          </div>
        </div>

        <aside className={styles.infoCard}>
          <h2 className={styles.infoTitle}>Nous trouver</h2>
          <ul className={styles.infoList}>
            {infoItems.map((item) => (
              <li key={item.label}>
                <strong>{item.label}</strong>
                <span>{item.value}</span>
              </li>
            ))}
          </ul>
          <a className={styles.link} href="https://wa.me/41782106934" target="_blank" rel="noreferrer">
            WhatsApp
          </a>
        </aside>
      </div>
    </section>
  )
}