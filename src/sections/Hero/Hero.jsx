import styles from './HeroStyles.module.css';
import heroImg from '../../assets/Design uten navn.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Yasaswini Sri Tamanampudi"
          loading="lazy"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Toggle color mode"
          onClick={toggleTheme}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && toggleTheme()}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Yasaswini Sri 
          <br />
          Tamanampudi
        </h1>
        <h2>Aspiring Software Engineer</h2>
        <span>
          <a 
            href="https://github.com/YashuJG/" 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit GitHub profile"
          >
            <img src={githubIcon} alt="GitHub icon" />
          </a>
          <a 
            href="https://www.linkedin.com/in/yasaswini-sri-tamanampudi/" 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit LinkedIn profile"
          >
            <img src={linkedinIcon} alt="LinkedIn icon" />
          </a>
        </span>
        <p className={styles.description}>
          Final-year Computer Science student who blends full-stack development with machine learning
          to build secure, intelligent, and real-world applications.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;