import styles from './Navigation.module.scss'
import React, { useEffect, useState } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';


function Navigation() {

    //active state 
    const [active, setActive] = useState('about');

    const handleClick = (pages) => {
        setActive(pages);
    }

    //scrollspy
    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            let scrollPosition = window.scrollY + window.innerHeight / 2;
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    setActive(section.getAttribute('id'));
                }
            });
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        
        <>
            <section id='navigation'>
                <div> 
                    <header className="mb-5">
                        <h1>Paul Bocalan</h1>
                        <p>Front End Developer</p>
                        <p>I build reponsive and user-friendly website.</p>
                    </header> 
                    
                    <nav className="mb-5">
                        <div className='d-flex flex-column'>
                            <ul>
                                <li><a href="#about" onClick={()=>handleClick('about')} className={active === 'about' ? styles.active : '' }>ABOUT</a></li>
                                <li><a href="#experience" onClick={()=>handleClick('experience')} className={active === 'experience' ? styles.active : '' }>EXPERIENCE</a></li>
                                <li><a href="#skills" onClick={()=>handleClick('skills')} className={active === 'skills' ? styles.active : '' }>SKILLS</a></li>
                            </ul>
                        </div>
                    </nav>
                    <footer className='d-flex'>
                        <a href="https://github.com/diksik0123" target='_blank'><FontAwesomeIcon icon={faGithub} className={`${styles.icons} ${styles["icon-github"]}`} title="GitHub" /></a>
                        <a href="https://www.linkedin.com/in/paul-gabriel-bocalan-b715462b7" target='_blank'><FontAwesomeIcon icon={faLinkedin} className={`${styles.icons} ${styles["icon-linkedin"]}`} title="LinkedIn" /></a>
                        <a href="https://x.com/itsme_paulg" target='_blank'><FontAwesomeIcon icon={faTwitter} className={`${styles.icons} ${styles["icon-twitter"]}`} title="Twitter" /></a>
                        <a href="https://www.instagram.com/bocalanpaulg_" target='_blank'><FontAwesomeIcon icon={faInstagram} className={`${styles.icons} ${styles["icon-instagram"]}`} title="Instagram" /></a>
                        <a href="https://www.facebook.com/paul.bocalan.3" target='_blank'><FontAwesomeIcon icon={faFacebook} className={`${styles.icons} ${styles["icon-facebook"]}`} title="Facebook" /></a>
                    </footer>
                </div>
            </section>
        </>
    )
}

export default Navigation;