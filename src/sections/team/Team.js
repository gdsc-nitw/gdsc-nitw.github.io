import { Row, Col } from "react-bootstrap";
import Section from "../Section";
import ProfileCard from "./ProfileCard";
import amritPandey from "./amrit_pandey.jpg";

const teamMembers = [
  {
    memberPic: amritPandey,
    memberName: "Amrit Pandey",
    memberPost: "Head of PR and Social Media",
    memberBio: "2 years of web development experience",
    memberSocials: {
      linkedin: "https://linkedin.com/okape",
      github: "https://github.com/ok-ape",
      website: "https://www.okape.co.in",
    },
  },
];

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
