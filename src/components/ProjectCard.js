import { Col } from "react-bootstrap";
import github from '../assets/img/github.svg'
import medium from '../assets/img/medium.svg';

export const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span><br />
          <a href={link} target="blank"><img src={link.includes("github") ? github : medium} style={{height: "30px", width: "30px"}}/></a>
          {/* <a href={link}><button className="vvd"><span>View Project</span></button></a> */}
        </div>
      </div>
    </Col>
  )
}