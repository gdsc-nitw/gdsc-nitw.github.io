import { Row, Col } from "react-bootstrap";
import Section from "../Section";
import ProfileCard from "./ProfileCard";
import teamMembers from "./teamMembers";

function renderMembers(teamMembers) {
  return teamMembers.map((member) => {
    return (
      <Col md={3}>
        <ProfileCard {...member}></ProfileCard>
      </Col>
    );
  });
}

function Team(props) {
  return (
    <Section
      sectionName='team'
      sectionTitle='Meet our Team'
      sectionTinyIntro='Passionate students driving success of the program'>
      <Row>{renderMembers(teamMembers)}</Row>
    </Section>
  );
}

export default Team;
