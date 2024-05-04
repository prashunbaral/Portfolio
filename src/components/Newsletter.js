import { Col, Row, Alert } from "react-bootstrap";
import facebook from '../assets/img/facebook.svg';
import instagram from '../assets/img/instagram.svg';
import linkedin from '../assets/img/linkedin.svg';
import medium from '../assets/img/medium.svg';
import email from '../assets/img/envelope-fill.svg';
import github from '../assets/img/github.svg'

export const Newsletter = ({ onValidated, status, message }) => {
  return (
    <Col lg={12} id="connect">
      <div className="newsletter-bx">
        <Row>
          <Col>
            <h1 style={{ fontSize: "60px" }}>Let's <br/>Connect</h1> {/* Increased font size */}
          </Col>
        </Row>

        <Row className="connect-icons"> 
          <Col lg={2} md={2} xl={2} >
            <a href="https://www.linkedin.com/in/prashun-baral-66aa67249/" target="blank"><img src={linkedin} style={{ width: "94px", height: "94px" }} /></a><br/><h5 style={{textAlign:"center"}}>LinkedIn</h5>
          </Col>

          <Col lg={2} md={2} xl={2} >
            <a href="https://github.com/prashunbaral" target="blank"><img src={github} style={{ width: "94px", height: "94px" }} /></a><br/><h5 style={{textAlign:"center"}}>GitHub</h5>
          </Col>

          <Col lg={2} md={2} xl={2} >
            <a href="https://medium.com/@prashunbaral/" target="blank"><img src={medium} style={{ width: "94px", height: "94px" }} /></a><br/><h5 style={{textAlign:"center"}}>Medium</h5>
          </Col>

          <Col lg={2} md={2} xl={2} >
            <a href="https://mail.google.com/mail/prashunbaral32@gmail.com" target="blank"><img src={email} style={{ width: "94px", height: "94px" }} /></a><br/><h5 style={{textAlign:"center"}}>Gmail</h5>
          </Col>

          <Col lg={2} md={2} xl={2} >
            <a href="https://www.instagram.com/prashun.it.izz" target="blank"><img src={instagram} style={{ width: "94px", height: "94px" }} /></a><br/><h5 style={{textAlign:"center"}}>Instagram</h5>
          </Col>

          <Col lg={2} md={2} xl={2} >
            <a href="https://www.facebook.com/prashun.baral.9/" target="blank"><img src={facebook} style={{ width: "94px", height: "94px" }} /></a><br/><h5 style={{textAlign:"center"}}>Facebook</h5>
          </Col>
          
        </Row>
      </div>
    </Col>
  );
};
