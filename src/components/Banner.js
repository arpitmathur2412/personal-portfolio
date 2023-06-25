import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index,setIndex] = useState(1);
  const toRotate = [ "Web Developer", "Data Science explorer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, [delta]);
    return () => { clearInterval(ticker) };
  })

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div style={{color:'#D4ADFC'}} className="animate__animated animate__fadeIn">
                <h1>{`Hi! I'm Arpit,`}<br></br> <span className="txt-rotate" dataperiod="2000" data-rotate='[ "Web Developer", "Data Science Explorer" ]'><span className="wrap">{text}</span></span></h1>
                  <p></p>
                <a style={{textDecoration:"none"}} href="#connect"><button onClick={() => console.log('connect')}>Let's Connect<ArrowRightCircle size={25} /></button></a>  
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={4} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div style={{marginTop:"2%"}} className="animate__animated animate__zoomIn">
                  <img style={{width:"100%"}} src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
