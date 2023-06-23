import { Container, Row, Col, Tab} from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/resume-img-3.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Resume",
      description: "click to download",
      imgUrl: projImg1,
    }
  ];

  return (
    <section className="project" id="about">
      <Container>
        <Row>
          <Col size={6}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>About Me</h2>
                <br></br>
                <p style={{textAlign:"justify",fontSize:"120%"}}>Hello everyone, and welcome to my website.
                 My name is Arpit Mathur, and I am currently a student at PDEU, Gandhinagar pursuing a 
                 BTech degree in Computer Science and Engineering. 
                 I am enthused by the vast potential of Computer science and its disciplines in the future and I am really 
                 excited to share my knowledge and interests with you through this website.</p>

                <p style={{textAlign:"justify",fontSize:"120%"}}>I am attaching my Resume below for recruiters 
                and for people who would like to know more about my skills and expereiences. Feel free to contact me for any queries. Have a good day! :) </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                        <div style={{width:"100%",display:"flex", justifyContent:"center", marginTop:"5%"}}>
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
                <p><strong>click on the card to download my Resume</strong></p>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img alt="" className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
