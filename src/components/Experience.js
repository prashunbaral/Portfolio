import { useState, useEffect } from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import contactImg from '../assets/img/contact-img.svg';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Experience = () => {

    const webdev = [
        {
          title: "Frontend Developer",
          title2: "Development Platform - HCK",
          description: "Find cars with their details to rent  or buy.",
        },
      ];

      const cybersec = [
        {
          title: "CyberSecurity Enthusiast",
          title2: "Ethical Community - HCK",
          description: "Find cars with their details to rent  or buy.",
        },
        
      ];

    useEffect(() => {
        const socialIcons = gsap.utils.toArray(".social-icon");

        socialIcons.forEach((icon) => {

            gsap.from(icon, {
                scale: 1
            });

            gsap.to(icon, {
                scale: 1.1,
                duration: 0.3,
                ease: "power2.inOut",
                paused: true,
                scrollTrigger: {
                    trigger: icon,
                    start: "top 80%",
                },
            });

            icon.addEventListener("mouseenter", () => {
                gsap.to(icon, { scale: 1.1, duration: 0.3, ease: "power2.inOut" });
            });
            
            icon.addEventListener("mouseleave", () => {
                gsap.to(icon, { scale: 1, duration: 0.3, ease: "power2.inOut" });
            });
        });
    }, []);

    return (
        <section className="contact" id="experience">
            <Container>
                <Row className='align-items-center'>
                    <Col md={6}>
                        <img src={contactImg} alt="Contact Us" />
                    </Col>

                    <Col md={6}>
                        <h2>Experience</h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 " id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Web Development</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Cyber Security</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" >
                    <Tab.Pane eventKey="first">
                      <Row>
                        <h3>Frontend Developer</h3>
                        <h5>Development Platform - HCK</h5>
                        <p>As a Frontend Developer at Development Platform - HCK, I worked on developing and maintaining web applications using React, Next js, and Tailwinf. I was responsible for building responsive user interfaces and contributing to the overall web application development process</p>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        <h3>CyberSecurity Enthusiast</h3>
                        <h5>Ethical Community - HCK</h5>
                        <p>I gained experience as a Penetration Tester at Ethical HCK community, conducting penetration testing and vulnerability assessments</p>
                      </Row>
                        
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};