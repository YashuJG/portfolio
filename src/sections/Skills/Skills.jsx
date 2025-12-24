import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  return (
   <section id="skills" className={styles.container}>
  <h1 className="sectionTitle">Skills</h1>

  {/* Programming Languages */}
  <div className={styles.skillList}>
    <SkillList src={checkMarkIcon} skill="Python" />
    <SkillList src={checkMarkIcon} skill="Java" />
    <SkillList src={checkMarkIcon} skill="C" />
    <SkillList src={checkMarkIcon} skill="JavaScript" />
  </div>

  <hr />

  {/* Web & Frontend */}
  <div className={styles.skillList}>
    <SkillList src={checkMarkIcon} skill="HTML" />
    <SkillList src={checkMarkIcon} skill="CSS" />
    <SkillList src={checkMarkIcon} skill="React" />
    <SkillList src={checkMarkIcon} skill="Bootstrap" />
    <SkillList src={checkMarkIcon} skill="Tailwind CSS" />
  </div>

  <hr />

  {/* Backend & Databases */}
  <div className={styles.skillList}>
    <SkillList src={checkMarkIcon} skill="Flask" />
    <SkillList src={checkMarkIcon} skill="Django" />
    <SkillList src={checkMarkIcon} skill="MySQL" />
  </div>

  <hr />

  {/* AI / ML */}
  <div className={styles.skillList}>
    <SkillList src={checkMarkIcon} skill="Machine Learning" />
    <SkillList src={checkMarkIcon} skill="Deep Learning" />
    <SkillList src={checkMarkIcon} skill="TensorFlow" />
    <SkillList src={checkMarkIcon} skill="Scikit-learn" />
    <SkillList src={checkMarkIcon} skill="NLP" />
  </div>

  <hr />

  {/* Tools */}
  <div className={styles.skillList}>
    <SkillList src={checkMarkIcon} skill="Git" />
    <SkillList src={checkMarkIcon} skill="AWS (EC2, S3, RDS)" />
    <SkillList src={checkMarkIcon} skill="VS Code" />
  </div>
</section>


  );
}

export default Skills;
