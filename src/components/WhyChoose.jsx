import SectionHeader from './SectionHeader'
import styles from './WhyChoose.module.css'

const points = [
  {
    icon: '🕒',
    title: 'Ouvert tous les jours',
    description: '07:30 – 19:30, un service constant pour vos courses et votre boucherie halal.',
  },
  {
    icon: '🌿',
    title: 'Produits frais',
    description: 'Un assortiment choisi chaque matin pour offrir fraîcheur, couleurs et goût.',
  },
  {
    icon: '✨',
    title: 'Qualité premium',
    description: 'Une sélection de marques et d’ingrédients qui reflètent le meilleur du marché.',
  },
  {
    icon: '🛒',
    title: 'Boucherie Halal',
    description: 'Une découpe experte et un service attentif pour des commandes sur mesure.',
  },
  {
    icon: '📍',
    title: 'À 100 m du parking',
    description: 'Parking Plainpalais à deux pas pour un passage rapide et agréable.',
  },
  {
    icon: '🤝',
    title: 'Service chaleureux',
    description: 'Un accueil personnalisé avec des conseils clairs et bienveillants.',
  },
]

export default function WhyChoose() {
  return (
    <section className={styles.why} id="why">
      <SectionHeader
        eyebrow="Pourquoi choisir Mezo"
        title="La promesse d’un service premium"
        description="Une offre généreuse, un accueil chaleureux et une sélection pointue pour vos courses et votre boucherie halal."
      />
      <div className={styles.grid}>
        {points.map((item) => (
          <article key={item.title} className={styles.card}>
            <div className={styles.icon}>{item.icon}</div>
            <div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
