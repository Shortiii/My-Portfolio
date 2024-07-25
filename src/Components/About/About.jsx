import "./About.css";
import themePattern from "../../assets/theme_pattern.svg";
import toyinDp from "../../assets/toyinDp.png";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={themePattern} alt="" />
      </div>

      <div className="about-sections">
        <div className="about_left">
          <img src={toyinDp} alt="" />
        </div>

        <div className="about_right">
          <div className="about-para">
            <p>
              I am a passionate Frontend Developer with over 2 years of
              experience building responsive and user-friendly web applications.
            </p>
            <p>
              My journey in web development started with a love for creating
              beautiful and functional websites
            </p>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>3+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>25+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
      </div>
    </div>
  );
};

export default About;
