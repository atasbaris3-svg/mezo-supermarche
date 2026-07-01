import SectionHeader from './SectionHeader'
import styles from './About.module.css'

const highlights = [
  {
    title: 'Qualité locale',
    text: 'Sélectionner des producteurs suisses et travailler les produits avec exigence.',
  },
  {
    title: 'Design affirmé',
    text: 'Une atmosphère minimaliste, des matériaux lumineux et un parcours apaisé.',
  },
  {
    title: 'Accompagnement haut de gamme',
    text: 'Des conseils sur mesure pour chaque client, du panier quotidien à la boucherie.',
  },
]

export default function About() {
  return (
    <section className={styles.about} id="about">
      <SectionHeader
        eyebrow="À propos"
        title="MEZO SUPERMARCHÉ & BOUCHERIE"
        description="Boucherie Halal & Épicerie du Monde, une sélection soignée et un service attentif à Genève."
      />
      <div className={styles.grid}>
        <div className={styles.card}>
          <div className={styles.primary}>
            <p>Mezo propose une expérience différente : une boutique soignée, une boucherie premium et une épicerie fine saisonnière.</p>
            <p>Chaque espace a été pensé pour offrir une promenade visuelle qui célèbre la provenance suisse et le soin apporté aux produits.</p>
          </div>
        </div>
        <div className={styles.highlights}>
          {highlights.map((item) => (
            <div key={item.title} className={styles.highlight}>
              <strong>{item.title}</strong>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
