import Container from 'react-bootstrap/Container';
import '../App.css'

const Contact = () => {
  return (
    <div id="contactbg">
    <Container id="contact">
      <h2>Get in touch</h2>
      <p>I'm currently seeking opportunities in back-end development, full-stack development, and data engineering. If you have any relevant openings, please don't hesitate to reach out to me.</p>
      <p>Additionally, if you have any interesting projects or programs and are looking for a partner to develop together, I would be excited to discuss further. Feel free to contact me.</p>
      <br/>
      <a href="mailto:juliexie8@outlook.com" rel="noopener noreferrer" target="_blank" id="contactBn">Say Hi</a>
      {/* <Button variant="outline-danger" size="lg" id="contactBn" >Say Hi</Button> */}
      <br/><br/><br/><br/><br/>
    </Container>
  </div>
  )
}

export default Contact