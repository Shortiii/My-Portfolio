import "./Footer.css";
import toyinLogo from "../../assets/toyinLogo.png";
import userIcon from "../../assets/user_icon.svg";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={toyinLogo} alt="" />
          <p>
            I am a Frontend Developer from, Nigeria with 3 years experience
            building user-friendly apps.
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={userIcon} alt="" />
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
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
