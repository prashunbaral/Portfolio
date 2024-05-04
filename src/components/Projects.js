import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from  "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import projImg8 from "../assets/img/project-img8.png";
import projImg9 from "../assets/img/project-img9.png";
import projImg10 from "../assets/img/project-img10.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
//import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "CarHub",
      description: "Find cars with their details to rent  or buy.",
      imgUrl: projImg1,
    },
    {
      title: "Expense Tracking System",
      description: "Track and manage your expenses",
      imgUrl: projImg2,
    },
    {
      title: "To-Do List Application",
      description: "Keep track of your to-dos",
      imgUrl: projImg3,
    },
  ];

  const projects2 = [
    {
      title: "Penetration Testing Report",
      description: "Exploiting the leading cybersecurity vulnerabilities",
      imgUrl: projImg4,
    },
    {
      title: "Cross Site Scripting Report",
      description: "Delve into XSS with BeEF Framework",
      imgUrl: projImg5,
    },
    {
      title: "Exploring Android Exploits",
      description: "Android Exploit with ngrok and MSFvenom",
      imgUrl: projImg6,
    },
    {
      title: "Security Misconfiguration",
      description: "Report on an OWASP-10 vulnerability, Security Misconfiguration",
      imgUrl: projImg7,
    },
    {
      title: "Website Security",
      description: "Report on securing a website",
      imgUrl: projImg8,
    },
    {
      title: "3-Tier Network Architecture",
      description: "Network Architecture with Port Security using Cisco Packet Tracer",
      imgUrl: projImg9,
    },
  ]

  const projects3 = [
    {
      title: "Game Technology Project",
      description: "3D Game with Unity comprising of missions",
      imgUrl: projImg10,
    },
  ]

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>My project experience spans across web development, cybersecurity, and other areas. I've tackled web development projects, showcasing my frontend skills. Additionally, I've delved into cybersecurity, participating in penetration testing and vulnerability analysis projects. My diverse experience extends beyond these areas, further demonstrating my adaptability and willingness to explore new challenges.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Web Development</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Cyber Security</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Other projects</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          projects2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                        </Row>
                        
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        {
                          projects3.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                        
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}