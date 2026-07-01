import SectionHeader from './SectionHeader'
import styles from './Promotions.module.css'

const features = [
  {
    title: 'Viandes Halal Certifiées',
    detail: 'Sélectionnées auprès de fournisseurs rigoureux, préparées selon les normes halal les plus strictes.',
  },
  {
    title: 'Préparation Quotidienne',
    detail: 'Préparées chaque jour par notre équipe pour garantir fraîcheur et saveur dès l’ouverture.',
  },
  {
    title: 'Qualité Premium',
    detail: 'Des coupes tendres et des morceaux choisis pour une expérience gourmande en toute confiance.',
  },
  {
    title: 'Service Personnalisé',
    detail: 'Conseils sur mesure et commandes adaptées à vos besoins, dans un accueil chaleureux.',
  },
]

export default function Promotions() {
  return (
    <section className={styles.promotions} id="boucherie">
      <SectionHeader
        eyebrow="Notre Boucherie Halal"
        title="Un artisanat halal d’exception"
        description="Des viandes halal soigneusement sélectionnées, préparées chaque jour par notre équipe pour garantir fraîcheur, qualité et confiance."
      />
      <div className={styles.content}>
        <div className={styles.imagePanel}>
          <div className={styles.imageMask} />
        </div>
        <div className={styles.features}>
          {features.map((feature) => (
            <article key={feature.title} className={styles.featureCard}>
              <h3>{feature.title}</h3>
              <p>{feature.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
