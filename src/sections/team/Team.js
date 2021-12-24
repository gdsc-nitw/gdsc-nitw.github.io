import { Row, Col } from "react-bootstrap";
import Section from "../Section";
import ProfileCard from "./ProfileCard";
import teamMembers from "./teamMembers";

function renderMembers(teamMembers) {
  return teamMembers.map((member) => {
    return (
      <Col md={4} sm={6} lg={3}>
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
      sectionTinyIntro='Core members who are making this happen'>
      <Row>{renderMembers(teamMembers)}</Row>
    </Section>
  );
}

export default Team;
