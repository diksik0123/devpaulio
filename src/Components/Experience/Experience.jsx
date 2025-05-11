import styles from './Experience.module.scss';

function Experience() {
    return (
        <>
            <section id='experience'>
                <div className="container">
                    <h5 className='mb-3'>EXPERIENCES</h5>
                    <div className={`row pt-3 pb-3 ${styles['experience-container']}`} onClick={() => window.open('https://www.empleyado.com/', '_blank')}>
                        <div className="col-4">
                            <p className={styles['date-text']}>2024 - Present</p>
                        </div>
                        <div className="col-8">
                            <p><span className={styles['job-title']} style={styles.span}>Front-End Junior Software Engineer, Cognitif Incorporated</span>&nbsp;<i className="bi bi-arrow-up-right"></i></p>
                            <p>Responsible for developing and maintaining software applications in UI side, collaborating with API Developers, and ensuring the delivery of high-quality code.</p>
                            <div className={`d-flex gap-2 flex-wrap`}>
                                <div className={`badge bg-primary ${styles['badge-container']}`}>Angular</div>
                                <div className={`badge bg-primary ${styles['badge-container']}`}>Typescript</div>
                                <div className={`badge bg-primary ${styles['badge-container']}`}>JQuery</div>
                                <div className={`badge bg-primary ${styles['badge-container']}`}>Bootstrap</div>
                                <div className={`badge bg-primary ${styles['badge-container']}`}>HTML</div>
                                <div className={`badge bg-primary ${styles['badge-container']}`}>CSS</div>
                            </div>
                        </div>
                    </div>
                    <div className='container ps-0 mt-5'>
                        <a className={styles['resume-text']} href="../../../public/resume_paulbocalan.pdf" target="_blank" rel="noopener noreferrer"><span style={styles.span}>View Full Résumé</span>&nbsp;<i className="bi bi-arrow-up-right"></i></a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Experience;