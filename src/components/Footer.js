import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/github-icon-2.png";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} className="logo" sm={6}>
            <h1>Arpit Mathur</h1>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div style={{width:"50%",marginTop:"5%",alignItems:"center"}} className="social-icon">
              <a href="https://www.linkedin.com/in/arpit-mathur-b57450226/" alt="" target="blank"><img style={{width:"50%",margin:"0%", padding:"0%"}}  src={navIcon1} alt="" /></a>
              <a style={{marginLeft:"5%",marginRight:"5%"}} alt="" target="blank" href="https://www.github.com/arpitmathur2412"><img style={{width:"50%",margin:"0%", padding:"0%"}} src={navIcon2} alt="" /></a>
              <a href="https://www.instagram.com/_arpit.mathur" alt="" target="blank"><img style={{width:"50%",margin:"0%", padding:"0%"}} src={navIcon3} alt="" /></a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
