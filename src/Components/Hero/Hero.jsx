import "./Hero.css";
import toyinDp from "../../assets/toyinDp.png";
import moon from "../../assets/moon.svg";
import sun from "../../assets/sun.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import twitterLight from "../../assets/twitter-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import githubDark from "../../assets/github-dark.svg";
import githubLight from "../../assets/github-light.svg";
import { useTheme } from "../../common/ThemeContext";
import cv from "../../assets/my-resume.pdf";

const Hero = () => {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === "dark" ? moon : sun;
  const twitterIcon = theme === "dark" ? twitterDark : twitterLight;
  const linkedinIcon = theme === "dark" ? linkedinDark : linkedinLight;
  const githubIcon = theme === "dark" ? githubDark : githubLight;

  return (
    <div className="hero" id="hero">
      <div className="hero-image">
        <img src={toyinDp} alt="" className="profile-img" />
        <img
          src={themeIcon}
          alt=""
          className="theme-icon"
          onClick={toggleTheme}
        />
      </div>

      <h1>
        <span> Hello! I'm Oyelade Oluwatoyin,</span> Frontend Developer from
        Nigeria.
      </h1>
      <p>
        I am a passionate frontend developer with over 2 years of experience
        building responsive and user-friendly web applications. I specialize in
        HTML, CSS, JavaScript, and various frontend frameworks. I am constantly
        learning and evolving to stay up-to-date with the latest technologies.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <a
            href="https://x.com/___Oluwatoyin__"
            target="blank"
            className="connect-link"
          >
            <img src={twitterIcon} alt="Twitter-icon" />
          </a>
          <a
            href="https://github.com/Shortiii"
            target="blank"
            className="connect-link"
          >
            <img src={githubIcon} alt="Linkedin-icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/oluwatoyin-oyelade-40274623a/"
            target="blank"
            className="connect-link"
          >
            <img src={linkedinIcon} alt="Linkedin-icon" />
          </a>
        </div>
        <a href={cv} className="hero-resume" download>
          <div>My Résumé</div>
        </a>
      </div>
    </div>
  );
};

export default Hero;
