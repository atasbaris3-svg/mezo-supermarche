import SectionHeader from './SectionHeader'
import styles from './Promotions.module.css'

const promos = [
  {
    title: 'Viande fraîche',
    detail: 'Des pièces de boucherie sélectionnées avec soin, prêtes à cuisiner chaque jour.',
  },
  {
    title: 'Fruits & Légumes',
    detail: 'Une offre vivante de produits du marché, soigneusement choisis pour leur fraîcheur.',
  },
  {
    title: 'Pain chaud',
    detail: 'Boulangerie de proximité et pains dorés, servis frais toute la journée.',
  },
]

export default function Promotions() {
  return (
    <section className={styles.promotions} id="boucherie">
      <SectionHeader
        eyebrow="Nos promotions"
        title="Des incontournables à chaque visite"
        description="Découvrez les produits qui font la différence chez Mezo : fraîcheur, qualité et une sélection pensée pour votre quotidien."
      />
      <div className={styles.grid}>
        {promos.map((promo) => (
          <article key={promo.title} className={styles.card}>
            <div className={styles.icon} aria-hidden="true" />
            <h3>{promo.title}</h3>
            <p>{promo.detail}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
