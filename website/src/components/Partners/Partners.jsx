import { partners } from '../../data/partners'
import styles from './Partners.module.css'

export default function Partners() {
  const row1 = partners.slice(0, 7)
  const row2 = partners.slice(7)
  // Double each row for seamless infinite loop
  const doubled1 = [...row1, ...row1]
  const doubled2 = [...row2, ...row2]

  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">Strategic Partnerships</p>
          <h2 className="display-md">Affiliated <span className="text-gradient">Partners</span></h2>
        </div>
      </div>

      <div className={`marquee-wrap ${styles.marqueeWrap}`}>
        <div className={`marquee-track ${styles.track}`} style={{ animationDuration: '40s' }}>
          {doubled1.map((p, i) => (
            <div key={`r1-${i}`} className={styles.logoCard}>
              <img src={p.logo} alt={p.name} className={styles.logo} loading="lazy" />
            </div>
          ))}
        </div>
      </div>

      <div className={`marquee-wrap ${styles.marqueeWrap}`}>
        <div className={`marquee-track reverse ${styles.track}`} style={{ animationDuration: '55s' }}>
          {doubled2.map((p, i) => (
            <div key={`r2-${i}`} className={styles.logoCard}>
              <img src={p.logo} alt={p.name} className={styles.logo} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
