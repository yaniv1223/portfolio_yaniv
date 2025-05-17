import styles from './SkillsStyles.module.css'
import checkMarkLight from '../../checkmark-light.svg'
import checkMarkDark from '../../checkmark-dark.svg'
import { useTheme } from '../../common/ThemeContex'
import SkillList from '../../common/SkillList';

function Skills() {
    const { theme } = useTheme();
    const checkMark = theme === 'light' ? checkMarkLight : checkMarkDark;
    return (
        <section id='skills' className={styles.container}>
            <h1 ClassName="sectionTitle">Skills</h1>
            <h2 >Programming Languages</h2>
            <div className={styles.SkillList}>
                <SkillList src={checkMark} skill="Python" />
                <SkillList src={checkMark} skill="Java" />
                <SkillList src={checkMark} skill="c++" />
                <SkillList src={checkMark} skill="c" />
            </div>
            <hr />
            <div className={styles.SkillList}>
                <h2>Web Development</h2>
                <SkillList src={checkMark} skill="HTML" />
                <SkillList src={checkMark} skill="CSS" />
                <SkillList src={checkMark} skill="JaveScript" />
                <SkillList src={checkMark} skill="React" />
                <SkillList src={checkMark} skill="Node" />
                <SkillList src={checkMark} skill="Tailwind" />
            </div>
            <hr />
            <div className={styles.SkillList}>
                <h2>Database Management</h2>
                <SkillList src={checkMark} skill="MySQL" />
                <SkillList src={checkMark} skill="MongoDB" />
                <SkillList src={checkMark} skill="Firebase" />
            </div>

        </section>
    )
}

export default Skills