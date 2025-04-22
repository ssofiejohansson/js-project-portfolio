import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import profileImage from './img/header-img.png';


export const Header = () => {
  return (
    <>
      <header className="headerContainer">
        <div className="headerBio">
          <h1>Frontend Developer</h1>
          <h2>+ former hospitality pro</h2>
          <p>Hi, I'm Sofie</p>
          <p>For the past decade I’ve worked in hospitality, lived in 10 different cities and soaked up all I could from life, cultures and people. But I’ve always been curious about tech and I finally decided to stop dreaming about it and just go for it.
            So now I’m deep into JavaScript, React and building very
            cool things at Technigo — and honestly, I’m loving it.
            I’m looking for a frontend role where I can keep growing, build more cool stuff and bring some positive energy to a team.</p>
          <div className="icons">
            <FontAwesomeIcon icon={faLinkedinIn} />
            <FontAwesomeIcon icon={faGithub} />
          </div>
        </div>
        <div className="headerImg">
          <img src={profileImage} alt="Profile image" />
        </div>
      </header>
    </>
  )
}
