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
              I am a Frontend Developer, based in Lagos, Nigeria. Throughout my
              career, I have worked on different projects, each contributing to
              my growth and understanding of the web development landscape.
            </p>
            <p>
              My journey began with a deep fascination for how websites are
              built, which quickly evolved into a full-fledged career. I thrive
              on solving complex problems, collaborating with talented teams,
              and continuously learning new technologies to stay ahead in this
              ever-evolving field.
            </p>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>2+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>15+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
      </div>
    </div>
  );
};

export default About;
