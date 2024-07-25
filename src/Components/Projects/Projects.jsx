import "./Project.css";
import mywork_data from "../../assets/mywork_data.js";
import themePattern from "../../assets/theme_pattern.svg";
import githubDark from "../../assets/github-dark.svg";
import githubLight from "../../assets/github-light.svg";
import { useTheme } from "../../common/ThemeContext";
const Projects = () => {
  const { theme } = useTheme();
  const githubIcon = theme === "dark" ? githubDark : githubLight;
  return (
    <div className="projects" id="projects">
      <div className="project-title">
        <h1>Projects</h1>
        <img src={themePattern} alt="" />
      </div>
      <div className="project-containers">
        {mywork_data.map((work, index) => {
          return (
            <div key={index} className="project-container">
              <div className="project-img">
                <img src={work.w_img} alt="" />
              </div>

              <div className="project-info">
                <h1>{work.w_name}</h1>
                <p>{work.w_info}</p>
                <div className="project-links">
                  <a
                    href={work.w_github}
                    className="project-link"
                    target="blank"
                  >
                    <img src={githubIcon} alt="" />
                    <h5>GitHub</h5>
                  </a>
                  <a
                    href={work.w_live_mode}
                    className="project-link"
                    target="blank"
                  >
                    <img src={githubIcon} alt="" />
                    <h5>Live Demo</h5>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* <div className="project-showmore">
        <p>Show more</p>
        <img src={arrrowIcon} alt="" />
      </div> */}
    </div>
  );
};

export default Projects;
