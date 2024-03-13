import Project from "./Project"
import Container from 'react-bootstrap/Container';
import Klibrary from "../assets/Klibrary.svg";
import theMet from "../assets/theMET.svg";
import CHotel from "../assets/CHotel.svg";



const ProjectList = () => {
  let myProjects: { title: string, img: string, desc: string, tech: string[], link: string, myPart: string }[] = [
    { "title": "Knowledge Library"
        , "img": Klibrary
        , "desc": "Manage books with CRUD operations and authority management for distinct user roles. Try with users: Susan (USER), John(EMPLOYEE), Mary(MANAGER), password: ab"
        , "tech": ["Java", "SpringBoot", "Thymeleaf", "MySQL", "JavaScript", "Azure"]
        , "link": "https://knowledgelibrary.azurewebsites.net"
        , "myPart":""},  //My contribution: developing, testing, and deploying the entire website.
    { "title": "The Metropolitan Museum of Art"
        , "img": theMet
        , "desc": "Showcase Metropolitan Museum artworks. Enable user comments."
        , "tech": ["TypeScript", "React", "Node.js", "Chakra", "MySQL"]
        , "link": "https://met-museum-kv74.vercel.app/"
        , "myPart":"My contribution: Details page, Color Mode"},
    { "title": "Cozy Haven Hotel"
        , "img": CHotel
        , "desc": "Show hotel information, room details, local weather, and enable reservations."
        , "tech": ["PHP", "Laravel", "Bootstrap", "JavaScript", "MySQL", "Azure"]
        , "link": "https://cozyhavenhotel.azurewebsites.net"
        , "myPart":""}
];

  // const projects = ["CHotel", "Klibrary", "museam"];
  const renderedProjects = myProjects.map((myProject, index) => {
    return <Project key={index} myProject={myProject} />;
  });
  return (
    <>
      <Container id="projects" >
        <h2>What I Have Built</h2>
        {renderedProjects}
      </Container>
    </>
  )
}

export default ProjectList