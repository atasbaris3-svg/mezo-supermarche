import styles from './App.module.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Promotions from './components/Promotions'
import Categories from './components/Categories'
import WhyChoose from './components/WhyChoose'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className={styles.page}>
      <Navbar />
      <Hero />
      <main className={styles.main}>
        <Promotions />
        <Categories />
        <WhyChoose />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}