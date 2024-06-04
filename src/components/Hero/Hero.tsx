import { BrowserRouter } from "react-router-dom";
import { Container } from "./styles";
import { Fade } from "react-awesome-reveal";
import Illustration from "../../assets/illustration.svg";
import { NavHashLink } from "react-router-hash-link";
import linkedin from '../../assets/linkedin.svg';
import githubIcon from '../../assets/github.svg';
import Hello from '../../assets/Hello.gif';

export function Hero() {
  return (
    <Container id="home">
      <div className="hero-text">
        <Fade cascade damping={0.2}>
          <p>Hello <img src={Hello} alt="Hello" width="20px"/>, I'm</p>
          <h1>Guthala Rajkumar</h1>
          <h3>Full Stack Developer</h3>
          <p className="small-resume">1 Year of Experience</p>
          <BrowserRouter>
            <NavHashLink smooth to="#contact" className="button">Contact</NavHashLink>
          </BrowserRouter>
          <div className="social-media">
            <a
              href="https://www.linkedin.com/in/raj-kumar-4ab595209/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedin} alt="Linkedin" />
            </a>
            <a
              href="https://www.linkedin.com/in/raj-kumar-4ab595209/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={githubIcon} alt="GitHub" />
            </a>
            <a
              href="https://github.com/raj921/"
              target="_blank"
              rel="noreferrer"
            ></a>
          </div>
        </Fade>
      </div>
      <div className="hero-image">
        <Fade direction="right" delay={1000}>
          <img src={Illustration} alt="Illustration" />
        </Fade>
      </div>
    </Container>
  );
}
