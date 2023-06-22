import { Container, Row, Col, Tab} from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/resume-image.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Resume",
      description: "",
      imgUrl: projImg1,
    }
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={6}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>About Me</h2>
                <br></br>
                <p style={{fontSize:"120%"}}>Hello everyone, and welcome to my website.
                 My name is Arpit Mathur, and I am currently a student at [university name] pursuing a 
                 BTech degree in Computer Science and Engineering. 
                 I have a strong passion for this field, and I am particularly interested in data science
                  and web development. I am excited to share my knowledge and interests with you through this website
                  , and I hope you will enjoy exploring it.</p>

                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                        <div style={{display:"flex", justifyContent:"center", marginTop:"5%"}}>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard key={index}{...project}/>
                            )
                          })
                        }
                        </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
                <p><strong>Above is the link to download my Resume</strong></p>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img alt="" className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
