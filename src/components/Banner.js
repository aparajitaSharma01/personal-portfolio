import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-im.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  
  // CHANGED: Lowered base delay from 300 to 100 for faster typing
  const [delta, setDelta] = useState(100); 
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Developer", "Software Engineer", "Full Stack Developer" ];
  
  // CHANGED: Reduced pause before deleting from 2000ms to 1000ms (optional)
  const period = 1000; 

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text, delta]) // Added delta to dependencies for stability

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      // CHANGED: Set fixed fast speed for deleting (half of typing speed)
      // instead of dividing by 2 recursively which causes glitches
      setDelta(50); 
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period); // Pause at end of word
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(250); // CHANGED: Reset to fast typing speed
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
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Hello!!</span>
                <h1>{`I'm Aparajita Sharma `} 
                  <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Software Engineer", "Full Stack Developer" ]'><span className="wrap">{text}</span></span></h1>
                  <p>MS in Information Systems student at Northeastern University with experience developing full-stack web applications using React, JavaScript, Node.js, and Python. 
                    Strong foundation in data structures and algorithms, with hands-on project and hackathon experience building scalable,
                     user-focused solutions. Driven by a passion for clean code, thoughtful design, and technology that creates real-world impact.</p>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}