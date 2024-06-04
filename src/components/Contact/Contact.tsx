import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import linkdinIcon from "../../assets/linkedin.svg";
import github from "../../assets/github.svg";

import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Ready to get started on your project? </p>
        <p>Contact me now for a Free consultation.</p>
      </header>
      <div className="contacts">
        <div>
        <a href=""><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:raj315920@gmail.com">raj315920@gmail.com</a>
        </div>
        <div>
        <a href=""><img src={linkdinIcon} alt="Email" /></a> 
          <a href="https://www.linkedin.com/in/raj-kumar-4ab595209">linkedin</a>
        </div>
        <div>
        <a href=""><img src={github} alt="Email" /></a> 
          <a href="https://github.com/raj921">github</a>
        </div>
      </div>
      <Form></Form>
    </Container>
  )
}