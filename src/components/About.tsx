import Container from 'react-bootstrap/Container';
import '../App.css'
import Stack from 'react-bootstrap/Stack';
import cartoon from '../assets/computer.png'

const About = () => {
  return (
    <div>
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
          </div>
          <img src={cartoon} alt="cartoon" width={500} id="cartoon"/>
        </Stack>
      </Container>
    </div>
  )
}

export default About