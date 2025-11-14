import Styles from "./projectsStyles.module.css";
import ProjectsCard from "../../common/ProjectCard";
import BlitzVision from "../../../assets/blitz_vision.svg";
import GoNature from "../../../assets/GoNature.svg";
function Projects() {
  return (
    <section id="projects" className={Styles.container}>
      <h1 className="SectionTitle">Projects</h1>
      <div className={Styles.projectsContainer}>
        <ProjectsCard
          src={BlitzVision}
          link="https://github.com/yaniv1223/Blitz_vision"
          h3="BLITZ VISION"
          p="AI Assistant for the Blind"
        />
        <ProjectsCard
          src={GoNature}
          link="https://github.com/yaniv1223/GoNature"
          h3="GoNature"
          p="Park & Garden Management System"
        />
      </div>
    </section>
  );
}

export default Projects;
