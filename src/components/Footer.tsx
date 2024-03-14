import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { Container } from 'react-bootstrap'

const Footer = () => {
  return (
    <div id="footerbg">
        <Container id="footer">
              <a href="https://www.linkedin.com/in/wenjun-x/" target="_blank">
                <FontAwesomeIcon icon={faLinkedinIn} size="lg"/>                
              </a>
              <p>Designed & Developered by Wenjun Xie</p>
        </Container>
    </div>
  )
}

export default Footer