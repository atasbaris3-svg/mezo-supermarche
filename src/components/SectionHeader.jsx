import styles from './SectionHeader.module.css'

export default function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className={styles.header}>
      <span className={styles.eyebrow}>{eyebrow}</span>
      <h2 className={styles.title}>{title}</h2>
      {description ? <p className={styles.description}>{description}</p> : null}
    </div>
  )
}
