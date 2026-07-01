import { useEffect, useState } from 'react'
import styles from './Navbar.module.css'

const links = [
  { label: 'Accueil', href: '#hero' },
  { label: 'Notre Boucherie', href: '#boucherie' },
  { label: 'Épicerie du Monde', href: '#epicerie' },
  { label: 'Pourquoi choisir Mezo', href: '#why' },
  { label: 'Contact', href: '#contact' },
]

const topItems = [
  { label: 'Rue de l’École-de-Médecine 11' },
  { label: '1205 Genève' },
  { label: 'Ouvert tous les jours · 07:30–19:30' },
  { label: 'Parking Plainpalais · 100 mètres' },
  { label: '+41 78 210 69 34 · +41 78 890 52 62' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.topBar}>
        {topItems.map((item) => (
          <span key={item.label} className={styles.topItem}>
            {item.label}
          </span>
        ))}
      </div>
      <div className={styles.navbar}>
        <div className={styles.brand}>
          <img
            src="/mezo-logo.png"
            alt="MEZO SUPERMARCHÉ"
            className={styles.logo}
            onError={(event) => {
              event.currentTarget.style.display = 'none'
              const fallback = event.currentTarget.nextElementSibling
              if (fallback) {
                fallback.style.display = 'grid'
              }
            }}
          />
          <span className={styles.brandText} aria-label="MEZO SUPERMARCHÉ & BOUCHERIE">
            <strong>MEZO SUPERMARCHÉ & BOUCHERIE</strong>
            <span>Boucherie Halal & Épicerie du Monde</span>
          </span>
        </div>

        <nav className={styles.nav} aria-label="Navigation principale">
          <ul className={styles.navList}>
            {links.map((link) => (
              <li key={link.href}>
                <a className={styles.link} href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <label className={styles.language}>
            <span className={styles.languageLabel}>FR</span>
            <select aria-label="Choisir la langue" defaultValue="FR">
              <option value="FR">FR</option>
              <option value="EN">EN</option>
              <option value="TR">TR</option>
              <option value="PT">PT</option>
            </select>
          </label>

          <a
            className={styles.whatsapp}
            href="https://wa.me/41782106934"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  )
}
