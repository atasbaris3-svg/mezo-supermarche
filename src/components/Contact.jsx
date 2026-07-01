import SectionHeader from './SectionHeader'
import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section className={styles.contact} id="contact">
      <SectionHeader
        eyebrow="Contact"
        title="MEZO SUPERMARCHÉ & BOUCHERIE"
        description="Boucherie Halal & Épicerie du Monde — contactez-nous pour commandes, conseils et visites en magasin."
      />
      <article className={styles.card}>
        <div className={styles.panel}>
          <h3 className={styles.headline}>Un accueil attentif pour vos courses et votre boucherie halal</h3>
          <p className={styles.text}>
            Mezo propose un accompagnement sur mesure, des commandes de viande halal aux conseils pour la meilleure sélection de produits.
          </p>
          <a className={styles.cta} href="https://wa.me/41782106934" target="_blank" rel="noreferrer">
            Contacter WhatsApp
          </a>
        </div>
        <div className={styles.details}>
          <div className={styles.detailBlock}>
            <p className={styles.detailLabel}>Adresse</p>
            <p className={styles.detailValue}>Rue de l'École-de-Médecine 11<br />1205 Genève</p>
          </div>
          <div className={styles.detailBlock}>
            <p className={styles.detailLabel}>Téléphone</p>
            <p className={styles.detailValue}>+41 78 210 69 34<br />+41 78 890 52 62</p>
          </div>
          <div className={styles.detailBlock}>
            <p className={styles.detailLabel}>Email</p>
            <p className={styles.detailValue}>contact@mezomarket.ch</p>
          </div>
          <div className={styles.detailBlock}>
            <p className={styles.detailLabel}>Horaires</p>
            <p className={styles.detailValue}>Open every day<br />07:30 – 19:30</p>
          </div>
          <div className={styles.detailBlock}>
            <p className={styles.detailLabel}>Parking</p>
            <p className={styles.detailValue}>Parking Plainpalais · 100 metres</p>
          </div>
        </div>
      </article>
    </section>
  )
}
