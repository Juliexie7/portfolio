import Container from 'react-bootstrap/Container';
import '../App.css'
import Stack from 'react-bootstrap/Stack';
import cartoon from '../assets/computer.png'
import Techs from './Techs';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faJava, faJs, faPhp, faPython, faReact, faLaravel, faCss3, faHtml5, faAws } from '@fortawesome/free-brands-svg-icons'
// import { SiMicrosoftazure, SiDotnet, SiMysql, SiMicrosoftsqlserver } from "react-icons/si";
// import { BiLogoSpringBoot } from "react-icons/bi";

const About = () => {
  let myTechs = ["Java", "JavaScript", "C#", "PHP", "Python", "MySql", "SQL Server", "React", "Spring Boot", "Laravel", "CSS", "HTML", "AWS", "Azure"];
  const renderedtechs = myTechs.map((tech)=>{
    return <Techs myTech={tech} fontSize="2rem"></Techs>
  });

  return (
    <div id='aboutbg'>
      <Container id="about">
        <Stack direction="horizontal">
          <div>
            <br />
            <h2>About Me</h2>
            <p>
            Hi, I'm Wenjun Xie. If you've noticed, the logo of this website is the initials of my last name. 
            </p>
            <p>
            I'm passionate about software development. In May 2023, I embarked on a journey into full-stack development. I've honed my skills and learned various front-end and back-end technologies. On the Projects page, you'll find a showcase of the projects I've developed during this learning experience.
            </p>
            <p>
            As a strong team player, I thrive in collaborative environments. I also pride myself on paying attention to detail. I firmly believe that my skills and dedication will bring value to your company or project.
            </p>
            <p>Experience with:</p>
            <div style={{display:"grid", alignItems: "end", gridTemplateColumns: "repeat(auto-fit, minmax(10rem, 2fr))", gap: "1fr", gridAutoRows: "1.3fr"}} > 
              {renderedtechs}
              {/* <div><FontAwesomeIcon icon={faJava} size="2x"/><span>Java</span></div>
              <div><FontAwesomeIcon icon={faJs} size="2x"/><span>JavaScript</span></div>
              <div><SiDotnet size="2rem"/><span>C#</span></div>
              <div><FontAwesomeIcon icon={faPhp} size="2x"/><span>PHP</span></div>
              <div><FontAwesomeIcon icon={faPython} size="2x"/><span>Python</span></div>
              <div><SiMysql size="2rem"/><span>MySql</span></div>
              <div><SiMicrosoftsqlserver size="2rem"/><span>SQL Server</span></div>
              <div><FontAwesomeIcon icon={faReact} size="2x"/><span>React</span></div>
              <div><BiLogoSpringBoot size="2rem"/><span>Spring Boot</span></div>
              <div><FontAwesomeIcon icon={faLaravel} size="2x"/><span>Laravel</span></div>
              <div><FontAwesomeIcon icon={faCss3} size="2x"/><span>CSS</span></div>
              <div><FontAwesomeIcon icon={faHtml5} size="2x"/><span>HTML</span></div>
              <div><FontAwesomeIcon icon={faAws} size="2x"/><span>AWS</span></div>
              <div><SiMicrosoftazure size="2rem"/><span>Azure</span></div> */} 
          </div>
          </div>
          <img src={cartoon} alt="cartoon" width={500} id="cartoon"/>
        </Stack>
      </Container>
    </div>
  )
}

export default About