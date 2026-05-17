import styles from './Skills.module.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3Alt, faJsSquare, faBootstrap, faSass, faAngular ,faGitAlt, faGithub, faGitlab} from '@fortawesome/free-brands-svg-icons';
import { SiTypescript, SiPostman, SiTailwindcss, SiDotnet, SiMysql } from "react-icons/si";

function Skills() {
  return (
    <>
      <section id='skills' className={`${[styles.skills]} fade-up`}>
        <div className={`row pt-4 pb-4 ${styles['skills-wrapper']}`}>
          <h5 className='mb-5'>SKILLS</h5>
          <div className={`${styles['skills-container']} d-flex gap-4 flex-wrap ps-0`}>
            <div className={`${styles.skill}`}>
              <FontAwesomeIcon icon={faHtml5} className={`${styles.icons} ${styles["icon-html"]}`} title="HTML5" /> <span>HTML</span>
            </div>
            <div className={`${styles.skill}`}>
              <FontAwesomeIcon icon={faCss3Alt} className={`${styles.icons} ${styles["icon-css"]}`} title="CSS3" /> <span>CSS</span>
            </div>
            <div className={`${styles.skill}`}>
              <FontAwesomeIcon icon={faBootstrap} className={`${styles.icons} ${styles["icon-bootstrap"]}`} title="Bootstrap" /> <span>Bootstrap</span>
            </div>
            <div className={`${styles.skill}`}>
              <FontAwesomeIcon icon={faSass} className={`${styles.icons} ${styles["icon-sass"]}`} title="SaSS" /> <span>SaSS</span>
            </div>
            <div className={`${styles.skill}`}>
              <SiTailwindcss className={`${styles.icons} ${styles["icon-tailwind"]}`} title="Tailwind CSS"/> <span>Tailwind CSS</span>
            </div>
            <div className={`${styles.skill}`}>
              <FontAwesomeIcon icon={faJsSquare} className={`${styles.icons} ${styles["icon-js"]}`} title="JavaScript" /> <span>JavaScript</span>
            </div>
            <div className={`${styles.skill}`}>
              <SiTypescript className={`${styles.icons} ${styles["icon-typescript"]}`} title="TypeScript"/> <span>TypeScript</span>
            </div>
            <div className={`${styles.skill}`}>
              <FontAwesomeIcon icon={faAngular} className={`${styles.icons} ${styles["icon-angular"]}`} title="Angular" /> <span>Angular</span>
            </div>
            <div className={`${styles.skill}`}>
              <FontAwesomeIcon icon={faGitAlt} className={`${styles.icons} ${styles["icon-git"]}`} title="Git" /> <span>Git</span>
            </div>
            <div className={`${styles.skill}`}>
              <FontAwesomeIcon icon={faGithub} className={`${styles.icons} ${styles["icon-github"]}`} title="GitHub" /> <span>GitHub</span>
            </div>
            <div className={`${styles.skill}`}>
              <FontAwesomeIcon icon={faGitlab} className={`${styles.icons} ${styles["icon-gitlab"]}`} title="GitLab" /> <span>GitLab</span>
            </div>
            <div className={`${styles.skill}`}>
                <SiDotnet  className={`${styles.icons} ${styles["icon-dotnet"]}`} title="DotNet"/> <span>ASP.NET</span>
            </div>
             <div className={`${styles.skill}`}>
                <SiMysql className={`${styles.icons} ${styles["icon-sql"]}`} title="SQL"/> <span>SQL</span>
            </div>
            <div className={`${styles.skill}`}>
              <SiPostman className={`${styles.icons} ${styles["icon-postman"]}`} title="Postman"/> <span>Postman</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;