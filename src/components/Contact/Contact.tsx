import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import linkedinIcon from "../../assets/linkedin.svg";
import githubIcon from "../../assets/github.svg"; 

import { Form } from "../Form/Form";

export function Contact() {
  return (
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Ready to get started on your project?</p>
        <p>Contact me now for a Free consultation.</p>
      </header>
      <div className="contacts">
        <div>
          <a href="mailto:raj315920@gmail.com"><img src={emailIcon} alt="Email" /></a> {/* Added mailto */}
          <a href="mailto:raj315920@gmail.com">raj315920@gmail.com</a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/raj-kumar-4ab595209"><img src={linkedinIcon} alt="LinkedIn" /></a> {/* Fixed alt text */}
          <a href="https://www.linkedin.com/in/raj-kumar-4ab595209">LinkedIn</a> {/* Fixed text */}
        </div>
        <div>
          <a href="https://github.com/raj921"><img src={githubIcon} alt="GitHub" /></a> {/* Fixed alt text */}
          <a href="https://github.com/raj921">GitHub</a> {/* Fixed text */}
        </div>
      </div>
      <Form />
    </Container>
  );
}
