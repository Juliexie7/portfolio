import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import '../App.css'

interface Props {
  myProject: {title: string, img: string, desc: string, tech: string[], link: string, myPart: string},
}

const Project = ({ myProject }: Props) => {

  const techs = myProject.tech.map((tech) => {
    return <span>{tech}</span>;
  });

  return (
    // <>
    //   <Card id="cardProj" className='mt-5'>
    //     <Stack direction="horizontal" gap={5} id="project">
    //     <a href={myProject.link} target="_blank">
    //       <Card.Img src={myProject.img} alt='projectImage'/>
    //     </a>
    //       <Card.Body id="cardBody">
    //         <a href={myProject.link} className='fs-2' target="_blank" >{myProject.title}</a>
    //         <p className='mb-4'></p>
    //         {/* <Card.Title className='mb-3 fs-2'>The Metropolitan Museum of Art</Card.Title> */}
    //         <Card.Text className='mb-2 ms-4 fs-5'>
    //           {myProject.desc}
    //         </Card.Text>
    //         <p className='mb-4 ms-4 fs-5' style={{color: "#9c9c9c"}}>My contribution: {myProject.myPart}</p>
    //         <p>
    //           {techs}
    //         </p>
    //       </Card.Body>
    //     </Stack>
    //   </Card>
    // </>
    <>
      <Container>
         <Stack direction="horizontal" id="project">
         <a href={myProject.link} target="_blank">
           <img src={myProject.img} alt={myProject.title} />
         </a>
           <div id="cardBody">
             <a href={myProject.link} className='fs-2' target="_blank" >{myProject.title}</a>
             <p className='mb-4'></p>
             {/* <Card.Title className='mb-3 fs-2'>The Metropolitan Museum of Art</Card.Title> */}
             <p className='mb-2 fs-5'>
               {myProject.desc}
             </p>
             <p className='mb-4 fs-5' style={{color: "#9c9c9c"}}>{myProject.myPart}</p>
             <span>Technologies:</span>
             <div style={{display:"grid", gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))"}}>               
               {techs}
             </div>
           </div>
         </Stack>
      </Container>
    </>
  )
}

export default Project