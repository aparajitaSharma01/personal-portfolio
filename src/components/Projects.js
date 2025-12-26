import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import crypto from "../assets/img/crypto.png";
import rag from "../assets/img/rag.png";
import ott from "../assets/img/ott.png";
import city from "../assets/img/city.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Crypto Trading Platform",
      description: "Full-stack cryptocurrency trading platform with React, Spring Boot, AI chatbot, and real-time market analytics",
      imgUrl: crypto,
    },
    {
      title: "RAG Pipeline for Local QA",
      description: "Offline RAG pipeline with LangChain, ChromaDB, and LLaMA 3 achieving 90% accuracy in context-aware QA",
      imgUrl: rag,
    },
    {
      title: "OTT Streaming Platform",
      description: "Netflix-clone streaming platform with AWS S3/CloudFront, serving 500+ concurrent users with 30% faster delivery",
      imgUrl: ott,
    },
     {
      title: "Seattle City Security",
      description: "",
      imgUrl: city,
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Explore my portfolio of full-stack applications, AI-powered solutions, and scalable cloud-based platforms. Each project demonstrates my expertise in modern web technologies, secure authentication systems, and delivering high-performance user experiences.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Personal Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Hackathons</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Group Projects</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.filter((_, index) => index === 0|| index === 2 || index === 1).map((project, index) => {
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
                          projects.filter((_, index) => index === 3).map((project, index) => {
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
                          projects.filter((_, index) => index === 3).map((project, index) => {
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