import SectionHeader from './SectionHeader'
import styles from './Categories.module.css'

const categories = [
  {
    title: 'Notre Boucherie Halal',
    subtitle: 'Viandes rigoureusement sélectionnées',
    image:
      'https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1600&q=80',
  },
  {
    title: 'Fruits & Légumes',
    subtitle: 'Fraîcheur directe du marché',
    image:
      'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1600&q=80',
  },
  {
    title: 'Boulangerie',
    subtitle: 'Pains et viennoiseries dorées',
    image:
      'https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=1600&q=80',
  },
  {
    title: 'Produits Laitiers',
    subtitle: 'Fromages et produits frais',
    image:
      'https://images.unsplash.com/photo-1527515637460-3f2b2c3bdf4e?auto=format&fit=crop&w=1600&q=80',
  },
  {
    title: 'Épicerie du Monde',
    subtitle: 'Un voyage gourmand en un seul lieu',
    image:
      'https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=1600&q=80',
    details: [
      'Produits Turcs',
      'Produits Portugais',
      'Produits des Balkans',
      'Produits Orientaux',
      'Produits Internationaux',
    ],
  },
]

export default function Categories() {
  return (
    <section className={styles.categories} id="epicerie">
      <SectionHeader
        eyebrow="Nos Rayons"
        title="Sélections premium du marché"
        description="Chaque rayon est pensé pour offrir des produits frais, halal et des saveurs du monde dans un espace chaleureux et élégant."
      />
      <div className={styles.grid}>
        {categories.map((category) => (
          <article key={category.title} className={styles.card}>
            <div className={styles.media} style={{ backgroundImage: `url(${category.image})` }} />
            <div className={styles.info}>
              <h3 className={styles.title}>{category.title}</h3>
              <p className={styles.subtitle}>{category.subtitle}</p>
              {category.details ? (
                <ul className={styles.details}>
                  {category.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
