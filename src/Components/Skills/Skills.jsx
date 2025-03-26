import "./Skills.css";
import themePattern from "../../assets/theme_pattern.svg";

const Skills = () => {
  return (
    <div className="skills" id="skills">
      <div className="skills-title">
        <h2>Skills</h2>
        <img src={themePattern} alt="" />
      </div>

      <div className="skills-section">
        <div className="skills-section-side">
          <div className="technical-skills-sections">
            <h3>Languages</h3>
            <div className="technical-skills-section">
              <p>HTML & CSS</p> <hr style={{ width: "95%" }} />
            </div>
            <div className="technical-skills-section">
              <p>JavaScript</p> <hr style={{ width: "65%" }} />
            </div>
            <div className="technical-skills-section">
              <p>TypeScript</p> <hr style={{ width: "50%" }} />
            </div>
          </div>
          <div className="technical-skills-sections">
            <h3>Version Control</h3>
            <div className="technical-skills-section">
              <p>Git</p> <hr style={{ width: "75%" }} />
            </div>
          </div>
        </div>
        <hr className="line" />
        <div className="skills-section-side">
          <div className="technical-skills-sections">
            <h3>Frameworks</h3>
            <div className="technical-skills-section">
              <p>Vue.js</p> <hr style={{ width: "70%" }} />
            </div>
            <div className="technical-skills-section">
              <p>React.js</p> <hr style={{ width: "65%" }} />
            </div>
            <div className="technical-skills-section">
              <p>Bootstrap</p> <hr style={{ width: "80%" }} />
            </div>
            <div className="technical-skills-section">
              <p>Tailwind</p> <hr style={{ width: "60%" }} />
            </div>
          </div>
          <div className="technical-skills-sections tools">
            <h3>Tools</h3>
            <div className="technical-skills-section">
              <p>npm</p> <hr style={{ width: "70%" }} />
            </div>
            <div className="technical-skills-section">
              <p>VSCode</p> <hr style={{ width: "95%" }} />
            </div>
            <div className="technical-skills-section">
              <p>Figma</p> <hr style={{ width: "65%" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
