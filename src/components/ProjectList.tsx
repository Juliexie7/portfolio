import Project from "./Project"
import Container from 'react-bootstrap/Container';
import Klibrary from "../assets/Klibrary1.jpg";
import theMet from "../assets/theMET.jpg";
import CHotel from "../assets/CHotel1.jpg";

const ProjectList = () => {
  let myProjects: { title: string, img: string, desc: string, tech: string[], link: string, myPart: string }[] = [
    { "title": "Knowledge Library"
        , "img": Klibrary
        , "desc": `Manage books with CRUD operations and authority management for distinct user roles. \n Try with users: Susan (USER), John(EMPLOYEE), Mary(MANAGER), password: ab`
        , "tech": ["Java", "Spring Boot", "Thymeleaf", "MySql", "JavaScript", "Azure"]
        , "link": "https://knowledgelibrary.azurewebsites.net"
        , "myPart":""},  //My contribution: developing, testing, and deploying the entire website.
    { "title": "The Metropolitan Museum of Art"
        , "img": theMet
        , "desc": "Showcase Metropolitan Museum artworks. Enable user comments."
        , "tech": ["TypeScript", "React", "Node.js", "Chakra", "MySql"]
        , "link": "https://met-museum-kv74.vercel.app/"
        , "myPart":"My contribution: Details page, Color Mode"},
    { "title": "Cozy Haven Hotel"
        , "img": CHotel
        , "desc": "Show hotel information, room details, local weather, and enable reservations."
        , "tech": ["PHP", "Laravel", "Bootstrap", "JavaScript", "MySql", "Azure"]
        , "link": "https://cozyhavenhotel.azurewebsites.net"
        , "myPart":""}
];

  // const projects = ["CHotel", "Klibrary", "museam"];
  const renderedProjects = myProjects.map((myProject, index) => {
    return <Project key={index} myProject={myProject} />;
  });
  return (
    <>
      <Container id="projects">
        <h2>What I Have Built</h2>         
      </Container>
      {renderedProjects}  
    </>
  )
}

export default ProjectList