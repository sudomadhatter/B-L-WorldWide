import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ParticleCanvas from './ParticleCanvas'
import styles from './Hero.module.css'

export default function Hero() {
  const sectionRef = useRef(null)
  const headlineRef = useRef(null)
  const subRef = useRef(null)
  const ctaRef = useRef(null)
  const marqueeRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'expo.out' } })
      
      tl.fromTo(headlineRef.current, 
        { y: 80, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1.4 }, 0.3
      )
      .fromTo(subRef.current, 
        { y: 40, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1.2 }, 0.7
      )
      .fromTo(ctaRef.current, 
        { y: 30, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1 }, 1.0
      )
      .fromTo(marqueeRef.current, 
        { opacity: 0 }, 
        { opacity: 1, duration: 1 }, 1.2
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const industries = ['Aviation', 'Fintech', 'Infrastructure', 'Film & Media', 'Education', 'Logistics', 'Blockchain', 'Hospitality']
  const doubled = [...industries, ...industries]

  return (
    <section ref={sectionRef} className={styles.hero}>
      <div className={styles.canvasWrap}>
        <ParticleCanvas />
      </div>

      <div className={styles.overlay} />

      <div className={styles.content}>
        <p className={`eyebrow ${styles.eyebrow}`}>Global Investment · Six Divisions · Four Continents</p>
        
        <h1 ref={headlineRef} className={styles.headline}>
          Distribution, Logistics &<br />
          Technology that{' '}
          <span className="text-gradient">Connect</span>{' '}
          Continents
        </h1>
        
        <p ref={subRef} className={styles.sub}>
          B&L Worldwide is a diversified global investment firm and multinational
          holding company operating across the Americas, Caribbean, Africa, Europe, and Asia.
        </p>

        <div ref={ctaRef} className={styles.ctas}>
          <button className="btn btn-primary">
            Explore Our Divisions
            <span className={styles.arrow}>→</span>
          </button>
          <button className="btn btn-ghost">Meet Our Team</button>
        </div>
      </div>

      {/* Industry keyword marquee */}
      <div ref={marqueeRef} className={styles.marqueeWrap}>
        <div className={styles.marqueeFade} />
        <div className="marquee-track" style={{ animationDuration: '30s' }}>
          {doubled.map((item, i) => (
            <span key={i} className={styles.marqueeItem}>
              {item}
              <span className={styles.marqueeDot}>·</span>
            </span>
          ))}
        </div>
        <div className={`${styles.marqueeFade} ${styles.right}`} />
      </div>
    </section>
  )
}
