import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <p className={styles.badge}>SUPERMARCHÉ & BOUCHERIE À GENÈVE</p>

        <h1>
          La fraîcheur, <br />
          notre promesse
        </h1>

        <p className={styles.subtitle}>
          MEZO SUPERMARCHÉ & BOUCHERIE, votre destination de confiance pour des
          produits frais, des viandes halal et des saveurs du monde.
        </p>

        <div className={styles.trust}>
          <span>🥩 Boucherie Halal</span>
          <span>🌍 Épicerie du Monde</span>
          <span>🥬 Produits frais</span>
        </div>
      </div>

      <div className={styles.infoCard}>
        <h3>MEZO</h3>
        <p>📍 Rue de l'École-de-Médecine 11, 1205 Genève</p>
        <p>🕒 Tous les jours • 07:30–19:30</p>
        <p>🚗 Parking Plainpalais à 100 m</p>
        <p>📞 +41 78 210 69 34</p>
      </div>
    </section>
  );
}