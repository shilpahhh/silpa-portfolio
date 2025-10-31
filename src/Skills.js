import React from 'react';
import './Skills.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava, FaDatabase } from 'react-icons/fa';
import { SiPostgresql, SiTailwindcss } from 'react-icons/si';

function Skills() {
  return (
    <div className="skills-container" data-aos="fade-up">
     <h1 className="section-heading-skills">Skills</h1> 
      <div className="skills-grid">
        <div>
          {/* <h2 className="sub-heading">Frontend</h2> */}
          <div className="skills-icons">
            <div className="skill-item"><FaHtml5 className="icon html" />HTML5</div>
            <div className="skill-item"><FaCss3Alt className="icon css" />CSS3</div>
            <div className="skill-item"><FaJs className="icon js" />JavaScript</div>
            <div className="skill-item"><FaReact className="icon react" />React.js</div>
            <div className="skill-item"><SiTailwindcss className="icon tailwind" />Tailwind CSS</div>
          </div>
        </div>

        <div>
          {/* <h2 className="sub-heading">Backend</h2> */}
          <div className="skills-icons">
            <div className="skill-item"><FaJava className="icon java" />Java</div>
            <div className="skill-item"><FaDatabase className="icon sql" />SQL</div>
            <div className="skill-item"><SiPostgresql className="icon postgresql" />PostgreSQL</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills;
