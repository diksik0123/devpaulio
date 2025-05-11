import styles from './Projects.module.scss'
import quoteImage from '../../assets/images/quote-generator.png';


function Projects() {
  return (
    <>
      <section id='projects' className={styles.projects}>
        <div className="container">
          <h5 className='mb-3'>PROJECTS</h5>
          <div className={`row pt-3 pb-3 ${styles['project-container']}`} onClick={() => window.open('https://quote-generator-one-flame.vercel.app/', '_blank')}>
            <div className='col-4'>
              <img src={quoteImage} className={`img-fluid w-100 ${styles['img-style']}`}/>
            </div>
            <div className="col-8">
                <p><span className={styles['project-title']} style={styles.span}>Quote Generator - Tribute to David Goggins</span>&nbsp;<i className="bi bi-arrow-up-right"></i></p>
                <p>A web application that randomly generates random quotes from a famous motivational speaker and author, David Goggins.</p>
                <div className={`d-flex gap-2 flex-wrap`}>
                  <div className={`badge bg-primary ${styles['badge-container']}`}>JavaScript</div>
                  <div className={`badge bg-primary ${styles['badge-container']}`}>HTML</div>
                  <div className={`badge bg-primary ${styles['badge-container']}`}>CSS</div>
                  <div className={`badge bg-primary ${styles['badge-container']}`}>Bootstrap</div>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;