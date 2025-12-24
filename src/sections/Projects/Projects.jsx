import styles from './ProjectsStyles.module.css';
import MediCore from '../../assets/MediCore.png';
import VeriFact from '../../assets/VeriFact.png';
import ExplainNet from '../../assets/ExplainNet.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={MediCore}
          link="https://github.com/YashuJG/company-landing-page-2"
          h3="MediCore"
          p="HMS App"
        />
        <ProjectCard
          src={VeriFact}
          link="https://github.com/YashuJG/company-landing-page-2"
          h3="VeriFact"
          p="Fake News"
        />
        <ProjectCard
          src={ExplainNet}
          link="https://github.com/YashuJG/company-landing-page-2"
          h3="ExplainNet"
          p="Knowledge Distillation"
        />
      </div>
    </section>
  );
}

export default Projects;
