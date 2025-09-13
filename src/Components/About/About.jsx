import styles from './About.module.scss';

function About() {
  return (
    <>
    <section id='about'>
        <div className="container">
          <h5 className='mb-3'>ABOUT</h5>
          <div className={`row pt-3 ${styles['about-container']}`}>
            <p>I am a developer passionate about creating visually appealing, reponsive, and user-friendly websites. I have a strong foundation in <span style={styles.span}>HTML</span>, <span style={styles.span}>CSS</span>, and <span style={styles.span}>JavaScript</span>, and I am always eager to learn new technologies and frameworks to enhance my skills. I enjoy working on projects that challenge me and allow me to grow as a developer. I believe that collaboration and communication are key to successful projects, and I strive to work effectively with my team members to achieve our goals.
            <br /><br />
            Currently, I'm a Junior Software Engineer at <span style={styles.span}>Cognitif Incorporated</span>, specializing in user interface and responsive development. I mainly contribute to creating UI modules and integrating APIs.
            </p>
          </div>
        </div>
    </section>
    </>
  );
}

export default About;