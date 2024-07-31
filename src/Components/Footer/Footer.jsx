import "./Footer.css";
import twitterDark from "../../assets/twitter-dark.svg";
import twitterLight from "../../assets/twitter-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import githubDark from "../../assets/github-dark.svg";
import githubLight from "../../assets/github-light.svg";
import { useTheme } from "../../common/ThemeContext";
const Footer = () => {
  const { theme } = useTheme();
  const twitterIcon = theme === "dark" ? twitterDark : twitterLight;
  const linkedinIcon = theme === "dark" ? linkedinDark : linkedinLight;
  const githubIcon = theme === "dark" ? githubDark : githubLight;

  return (
    <div className="footer" id="footer">
      <div className="footer-top">
        <div className="footer-connect">
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
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          © 2024 Oyelade Oluwatoyin. All right reserved.
        </p>
        <div className="footer-bottom-right">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
