import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, githubUrl, liveUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div className="proj-links">
            {githubUrl && (
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <button>GitHub</button>
              </a>
            )}
            {liveUrl && (
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <button>Live Demo</button>
              </a>
            )}
          </div>
        </div>
      </div>
    </Col>
  )
}