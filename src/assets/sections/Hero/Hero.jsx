import styles from './HeroStyles.module.css'
import heroImg from '../../hero-img.png'
import sun from '../../sun.svg'
import linkedinIconLight from '../../linkedin-light.svg'
import linkedinIconDark from '../../linkedin-dark.svg'
import githubIconLight from '../../github-light.svg'
import githubIconDark from '../../github-dark.svg'
import cv from '../../cv.pdf'
import { useTheme } from '../../common/ThemeContex'
import moon from '../../moon.svg'

function Hero() {
  const { theme, toggleTheme } = useTheme();
  const ThemeIcon = theme === 'light' ? sun : moon;
  const linkedinIcon = theme === 'light' ? linkedinIconLight : linkedinIconDark;
  const githubIcon = theme === 'light' ? githubIconLight : githubIconDark;
  return (
   <section id="hero" className={styles.container}>
     <div className={styles.colorModeContainer}>
       <img 
         className={styles.hero}
         src={heroImg} 
         alt="Profile picture" />
       <img 
         className={styles.colorMode}
         src={ThemeIcon} 
         alt="colorModeIcon"
         onClick={toggleTheme}
       />
     </div>
     <div className={styles.info}>
      <h1>
        Yaniv
        <br />
        Blitzman
      </h1>
      <h2>Fronted Developer</h2>
      <span>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
          <img 
            src={linkedinIcon} 
            alt="LinkedIn" 
          />
        </a>
        <a href="https://www.github.com/" target="_blank" rel="noopener noreferrer">
          <img 
            src={githubIcon}
            alt="GitHub"  
          />
        </a>
      </span>
      <p className={styles.description}>
        I am software engineer with a passion for creating beautiful and functional web applications. 
      </p>
      <a href={cv} download>
        <button className="hover">
          Resume
        </button>
        <br />
      </a>
     </div>
   </section>
  )
}
export default Hero