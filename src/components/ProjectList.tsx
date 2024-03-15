import Project from "./Project"
import Container from 'react-bootstrap/Container';
import Klibrary from "../assets/Klibrary1.jpg";
import theMet from "../assets/theMET.jpg";
import CHotel from "../assets/CHotel1.jpg";
import WPF from "../assets/WPF1.jpg";

const ProjectList = () => {
  let myProjects: { title: string, img: string, desc: string, tech: string[], github: string, link: string, myPart: string }[] = [
    { "title": "Java: Knowledge Library"
        , "img": Klibrary
        , "desc": `Manage books with CRUD operations and authority management for distinct user roles. \n Try with users: Susan (USER), John(EMPLOYEE), Mary(MANAGER), password: ab`
        , "tech": ["Java", "Spring Boot", "Thymeleaf", "MySql", "JavaScript", "Azure"]
        , "github": "https://github.com/Juliexie7/program3"
        , "link": "https://knowledgelibrary.azurewebsites.net"
        , "myPart":""},  //"": developing, testing, and deploying the entire website.
    { "title": "React: The Metropolitan Museum of Art"
        , "img": theMet
        , "desc": "Showcase Metropolitan Museum artworks. Enable user comments."
        , "tech": ["TypeScript", "React", "Node.js", "Chakra", "MySql"]
        , "github": "https://github.com/Juliexie7/MetMuseum"
        , "link": "https://met-museum-kv74.vercel.app/"
        , "myPart":"My contribution: Details page, Color Mode"},
    { "title": "PHP: Cozy Haven Hotel"
        , "img": CHotel
        , "desc": "Show hotel information, room details, local weather, and enable reservations."
        , "tech": ["PHP", "Laravel", "Bootstrap", "JavaScript", "MySql", "Azure"]
        , "github": "https://github.com/Juliexie7/phpProjHotel"
        , "link": "https://cozyhavenhotel.azurewebsites.net"
        , "myPart":""},
    { "title": "WPF: Some Windows Applications"
    , "img": WPF
    , "desc": "Practice related to WPF(Windows Presentation Foundation) involving Entity Framework and various WPF controls such as ListView, Slider, DatePicker, ComboBox, and more."
    , "tech": ["C#", "SQL Server"]
    , "github": "https://github.com/Juliexie7/WPF"
    , "link": ""
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
        <p>Below are the projects I developed during the Full Stack Learning course. </p>
        <p>I've showcased only the components I <b>developed independently</b>. The one where my work relied heavily on collaboration with others, I've provided a brief summary of my contribution.</p>
        <p>Please be aware of <b>potential high latency</b> when accessing websites hosted on Azure. Due to the use of a free account, the application server is unloaded after 20 minutes without any incoming requests, resulting in warm-up time for new requests.</p>
      </Container>
      {renderedProjects}  
    </>
  )
}

export default ProjectList