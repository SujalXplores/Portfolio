import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import Particle from '../Particle';

import chessgame from '../../assets/project_images/chess-game.jpg';
import footballscore from '../../assets/project_images/football-scores.png';
import videochat from '../../assets/project_images/private-video-chat-app.png';
import whiteboard from '../../assets/project_images/white-board.png';
import expresswifi from '../../assets/project_images/working-demo.png';

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: 'white' }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chessgame}
              isBlog={false}
              title="Chess Game ♟️"
              description="A simple chess game built with Flutter in just 10 lines of code. It's a fun way to learn the basics of the flutter. Check out youtube video for full explaination."
              link="https://github.com/SujalShah3234/ChessGame"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={whiteboard}
              isBlog={false}
              title="White Board 🚀"
              description="A minimal white board app with 100% lighthouse score made with Angular12 framework and material UI. The app is powered by canvas API and Konva.js. It is inspired by canvas.chrome.app"
              link="https://github.com/SujalShah3234/White-Board"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={footballscore}
              isBlog={false}
              title="Football Scoreboard ⚽"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              link="https://github.com/SujalShah3234/Football_scoreBoard"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={videochat}
              isBlog={false}
              title="Private Video Chat web app 🎥"
              description="Simple video chat app built with VanillaJS. It is a private peer-to-peer video chat app which is powered by WebRTC API."
              link="https://github.com/SujalShah3234/video-chat-app-javascript"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={expresswifi}
              isBlog={false}
              title="Express Wi-Fi automation script 📶"
              description="A express wi-fi automation script powered by node.js and selenium web driver to automate the manual tasks to earn approx 8GB of free internet in single shot."
              link="https://github.com/SujalShah3234/express-wifi-automation-script"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
