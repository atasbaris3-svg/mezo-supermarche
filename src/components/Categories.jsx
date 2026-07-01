import SectionHeader from './SectionHeader'
import styles from './Categories.module.css'

const categories = [
  'Fruits & Légumes',
  'Boucherie Halal',
  'Crèmerie',
  'Épicerie du Monde',
  'Boulangerie',
  'Produits Orientaux',
  'Produits Portugais',
  'Produits Turcs',
  'Produits des Balkans',
]

export default function Categories() {
  return (
    <section className={styles.categories} id="epicerie">
      <SectionHeader
        eyebrow="Nos Rayons"
        title="Une sélection premium pour chaque besoin"
        description="Des rayons soigneusement pensés pour offrir fraîcheur, qualité et variété, du frais à l’épicerie du monde."
      />
      <div className={styles.grid}>
        {categories.map((category) => (
          <article key={category} className={styles.card}>
            <div className={styles.top}>
              <span className={styles.dot} aria-hidden="true" />
              <h3>{category}</h3>
            </div>
            <p>Produits sélectionnés, fraîcheur garantie et saveurs du monde.</p>
          </article>
        ))}
      </div>
    </section>
  )
}
