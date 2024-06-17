import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import LiveCodeEditor from "../../Assets/Projects/LiveCodeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import Nextxen from "../../Assets/Projects/Nextxen.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Nextxen}
              isBlog={false}
              title="Nextxen Learning"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={LiveCodeEditor}
              isBlog={false}
              title="Live Code Editor"
              description="Live Code Editor is a web-based code editor that allows users to write, edit, and preview HTML, CSS, and JavaScript code in real-time.It allows a Developer to write error-free code more efficiently. They come equipped with features that facilitate the coding process. These features include syntax highlighting, automatic indentation, error-checking, autocomplete, and code snippets."
              ghLink="https://github.com/skyasinbux/Live-Code-Editor/"
              demoLink="https://codeeditorbyyasin.netlify.app/"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
