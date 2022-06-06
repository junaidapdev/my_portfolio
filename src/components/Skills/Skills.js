import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Skills.css";
import skillsVector from './../../assets/skills_vector.png'
import SkillCard from './SkillCard';
import { skillList } from './../../assets/skillsData';

const Skills = () => {
  return (
    <div className="section-container">
        <Header heading="My Skills." details="Passionate about building products & side Projects"/>

        <div className='skill-card-container'>
                {skillList.map(({ skillName, skillUrl }) => (
                  <SkillCard skillName={skillName} skillUrl={skillUrl} />
                  ))}
            </div>
                  <Footer phrase="Go to " link="Blogs" toAddress='/blogs'/>

        <div className="skills-vector-frame">
          <img src={skillsVector} alt="skills" className="skills-vector"/>
        </div>
    </div>
  );
};

export default Skills;
