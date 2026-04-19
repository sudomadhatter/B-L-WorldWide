import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { news } from '../../data/news'
import styles from './NewsSection.module.css'

function NewsCard({ article }) {
  return (
    <a href={article.href} className={styles.card}>
      <div className={styles.imageWrap}>
        <img src={article.image} alt={article.title} className={styles.image} loading="lazy" />
        <span className={styles.tag} style={{ '--tag-color': article.tagColor }}>
          {article.tag}
        </span>
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{article.title}</h3>
        <p className={styles.excerpt}>{article.excerpt}</p>
        <span className={styles.readMore}>Read More →</span>
      </div>
    </a>
  )
}

export default function NewsSection() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(`.${styles.card}`, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          once: true,
        },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section className="section" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">Latest News</p>
          <h2 className="display-md">Our Purpose in <span className="text-gradient">Action</span></h2>
        </div>

        <div className={styles.grid}>
          {news.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  )
}
