import styles from './Footer.module.scss'

function Footer() {
  return (
    <>
    <section id='footer'>
      <div className={`d-flex w-75 ${styles.footer}`}>
        <p className={styles['footer-text']}>Made and coded by <span>me</span>, <span>myself</span>, and <span>I</span>. Built with <span>React.JS</span>, <span>Bootstrap</span>, and <span>SaSS</span>, deployed with <span>Vercel</span> | Inspired by <a href="https://www.brittanychiang.com/" target="_blank">Britanny Chiang</a> portfolio template.</p>
      </div>
    </section>
    </>
  )
}

export default Footer