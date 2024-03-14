import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import '../App.css'
import Techs from './Techs';

interface Props {
  myProject: {title: string, img: string, desc: string, tech: string[], link: string, myPart: string},
}

const Project = ({ myProject }: Props) => {

  // const techs = myProject.tech.map((tech) => {
  //   return <span>{tech}</span>;
  // });

  const desc = myProject.desc.split('\n').map((desci) => {
    return <p className='mb-2 fs-5'>{desci}</p>;
  });

  const renderedtechs = myProject.tech.map((mytech)=>{
    return <Techs myTech={mytech} fontSize="1rem"></Techs>
  });

  return (
    <>
      <div id="projectbg">
        <Container>
          <Stack direction="horizontal" id="project">
            <div id="images">
              <a href={myProject.link} target="_blank">
                <img src={myProject.img} alt={myProject.title} />
              </a>
            </div>
            <div id="cardBody">
              <div id="a"><h2 >{myProject.title}</h2></div>
              <div id="b">
                <p className='mb-4'></p>
                {desc}
                <p className='mb-4 fs-5' style={{color: "#7c7c7c"}}>{myProject.myPart}</p>
                <span>Technologies:</span>
                <div style={{display:"grid", gridTemplateColumns: "repeat(auto-fit, minmax(10rem, 2fr))"}}>               
                  {renderedtechs}
                </div>
              </div>
            </div>
          </Stack>
        </Container>
      </div>
    </>
  )
}

export default Project