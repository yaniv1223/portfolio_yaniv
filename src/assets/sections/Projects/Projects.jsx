import Styles from './ProjectsStyles.module.css'
import ProjectsCard from '../../common/ProjectCard'
import viberr from '../../../assets/viberr.png'
import freshBurger from '../../../assets/fresh-Burger.png'
function Projects() {
    return( 
      <section id="projects" className={Styles.container}>
        <h1 className="SectionTitle">Projects</h1>
        <div className={Styles.projectsContainer}>
         <ProjectsCard 
         src={viberr} 
         link="https://github.com/" 
         h3="viberr"
          p="Streaming App"/>
           <ProjectsCard 
         src={freshBurger} 
         link="https://github.com/" 
         h3="freshBurger"
          p="Hamburger Restaurant"/>
        </div>
      </section>
    )
}

export default Projects