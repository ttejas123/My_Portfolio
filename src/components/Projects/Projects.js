import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Video from "../../Assets/Projects/Video.png";
import NFT from "../../Assets/Projects/NFT.jpg";
import BLOG from "../../Assets/Projects/BLOG.jpg";

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
              imgPath={BLOG}
              isBlog={false}
              title="Blog Builder"
              description="It's Really simple ready to Use template, It's using Drag - and - Drop feature. I have included Basic Components to go with but anyone can add there components and make it work as there need. It's Simple yet using many complex design ideas to build it."
              ghLink="https://github.com/ttejas123/Component_Based_DND"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={NFT}
              isBlog={false}
              title="NFT / SFT Maker (SOLANA)"
              description="This tool is Not for design your NFT but if you have degital assets and you want them to publish on SOLANA block chain, and what to set all the creazy information like suppy, name, royality, asset media and Authority than this tool is for you there is hard way too we can use metaplex write your own code and publish it but I am providing you one stop friendy UI to do that. "
              ghLink="https://github.com/ttejas123/NFT_SFT_Maker_SOLANA"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Video}
              isBlog={false}
              title="Video Conferencing Application"
              description="This is my first internship project where i build this application. This application can allow more than 20+ people in a call with many features like video call, chat, raise hand, screen-share, white-board and kick out person from call (only for admin)."
              ghLink="https://github.com/ttejas123/Video_Conferencing_V2"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
