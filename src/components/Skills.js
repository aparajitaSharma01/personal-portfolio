import { SiJavascript, SiPython, SiReact, SiNodedotjs, SiSpring, SiMongodb, SiPostgresql, SiAmazonwebservices, SiDocker, SiGit, SiRedux, SiExpress, SiNextdotjs, SiTailwindcss } from 'react-icons/si';
import { FaServer, FaJava } from 'react-icons/fa';


export const Skills = () => {
  const skills = [
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "Python", icon: <SiPython /> },
    { name: "Java", icon: <FaJava /> },
    { name: "React.js", icon: <SiReact /> },
    { name: "Node.js", icon: <SiNodedotjs /> },
    { name: "Spring Boot", icon: <SiSpring /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "AWS", icon: <SiAmazonwebservices /> },
    { name: "Docker", icon: <SiDocker /> },
   
    { name: "Redux", icon: <SiRedux /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "REST APIs", icon: <FaServer /> },
  ];

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p className=''>Experienced in full-stack development with expertise in backend systems, cloud infrastructure, and emerging AI technologies.<br></br>Passionate about building scalable, reliable solutions.</p>
                        <div className="skills-grid">
                          {skills.map((skill, index) => (
                            <div className="skill-item" key={index}>
                              <div className="skill-icon">{skill.icon}</div>
                              <h5>{skill.name}</h5>
                            </div>
                          ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
    </section>
  )
}