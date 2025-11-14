import Styles from "./projectsStyles.module.css";
import ProjectsCard from "../../common/ProjectCard";
import BlitzVision from "../../../assets/blitz_vision.svg";
import freshBurger from "../../../assets/fresh-burger.png";
function Projects() {
  return (
    <section id="projects" className={Styles.container}>
      <h1 className="SectionTitle">Projects</h1>
      <div className={Styles.projectsContainer}>
        <ProjectsCard
          src={BlitzVision}
          link="https://github.com/yaniv1223/Blitz_vision"
          h3="BLITZ VISION"
          p="AI Voice Assistant for the Visually Impaired"
        />
        <ProjectsCard
          src={freshBurger}
          link="https://github.com/"
          h3="freshBurger"
          p="Hamburger Restaurant"
        />
      </div>
    </section>
  );
}

export default Projects;
