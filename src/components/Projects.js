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
      link: "https://github.com/prashunbaral/CarHub"
    },
    {
      title: "Expense Tracking System",
      description: "Track and manage your expenses",
      imgUrl: projImg2,
      link: "https://github.com/prashunbaral/Expense-Tracker"
    },
    {
      title: "To-Do List Application",
      description: "Keep track of your to-dos",
      imgUrl: projImg3,
      link: "https://github.com/prashunbaral/To-Do-List-App"
    },
  ];

  const projects2 = [
    {
      title: "Penetration Testing Report",
      description: "Exploiting the leading cybersecurity vulnerabilities",
      imgUrl: projImg4,
      link: "https://medium.com/@prashunbaral/penetration-testing-uncovers-web-application-weaknesses-time-to-patch-the-leaks-aa96171d7330"
    },
    {
      title: "Cross Site Scripting Report",
      description: "Delve into XSS with BeEF Framework",
      imgUrl: projImg5,
      link: "https://medium.com/@prashunbaral/cross-site-scripting-xss-exploitation-2f37c4b9010d"
    },
    {
      title: "Exploring Android Exploits",
      description: "Android Exploit with ngrok and MSFvenom",
      imgUrl: projImg6,
      link: "https://medium.com/@prashunbaral/exploring-android-exploits-f0071aa44dd4"
    },
    {
      title: "The Peril of Misconfiguration",
      description: "Report on an OWASP-10 vulnerability, Security Misconfiguration",
      imgUrl: projImg7,
      link: "https://medium.com/@prashunbaral/the-peril-of-misconfiguration-how-security-oversights-create-vulnerabilities-42a9b9af5e50"
    },
    {
      title: "Bulding a Secure Fortress",
      description: "Report on website security",
      imgUrl: projImg8,
      link: "https://medium.com/@prashunbaral/building-a-secure-fortress-essential-strategies-for-website-protection-521b224d186d"
    },
    {
      title: "3-Tier Network Architecture",
      description: "Network Architecture with Port Security using Cisco Packet Tracer",
      imgUrl: projImg9,
      link: "https://medium.com/@prashunbaral/3-tier-network-architecture-a6a458f58a3c"
    },
  ]

  const projects3 = [
    {
      title: "Game Technology Project",
      description: "3D Game with Unity comprising of missions",
      imgUrl: projImg10,
      link: "https://github.com/prashunbaral/Operation-Gearhead"
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
      <img className="background-image-right" src={colorSharp2} alt=""></img>
    </section>
  )
}