import SectionHeader from './SectionHeader'
import styles from './Gallery.module.css'

const galleryItems = [
  { title: 'Intérieur boutique', label: 'Atmosphère chaleureuse' },
  { title: 'Rayon frais', label: 'Fruits et légumes' },
  { title: 'Boucherie halal', label: 'Découpe experte' },
  { title: 'Sélection du monde', label: 'Épicerie raffinée' },
]

export default function Gallery() {
  return (
    <section className={styles.gallery} id="gallery">
      <SectionHeader
        eyebrow="Galerie"
        title="Un aperçu de notre concept premium"
        description="Une mise en place élégante qui reflète la qualité, la lumière et l’attention portée à chaque détail."
      />
      <div className={styles.grid}>
        {galleryItems.map((item) => (
          <article key={item.title} className={styles.card}>
            <div className={styles.placeholder} aria-hidden="true" />
            <div className={styles.meta}>
              <strong>{item.title}</strong>
              <span>{item.label}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
