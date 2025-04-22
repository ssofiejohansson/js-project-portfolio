import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFile } from '@fortawesome/free-regular-svg-icons';
import profileImage from './img/footer-img.png';

export const Footer = () => {
  return (
    <>
      <div className="footerContainer">
        <img src={profileImage} alt="Profile image" />
        <div className="footerBio">
          <h3>Let's Talk!</h3>
          <p>Sofie Johansson</p>
          <p>+46(0)72 442 34 97</p>
          <p>ssofiejohansson@gmail.com</p>
          <div className="icons">
            <FontAwesomeIcon icon={faLinkedinIn} />
            <FontAwesomeIcon icon={faGithub} />
            <FontAwesomeIcon icon={faFile} />
          </div>
        </div>
      </div>
    </>
  )
}
