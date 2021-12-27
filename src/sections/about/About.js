import { Row } from "react-bootstrap";
import Section from "../Section";
import AboutCard from "./AboutCard";
import {
  faRocket,
  faLightbulb,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import settings from "../../settings";

function About(props) {
  return (
    <Section
      sectionName='about'
      sectionTitle='About Us'
      sectionTinyIntro='Get to know us'
      bgColor={props.bgColor}>
      <Row class='d-flex justify-content-center'>
        <AboutCard
          logo={faRocket}
          logoColor={settings.gColor1}
          title='What is DSC?'
          content='Developer Student Clubs is an initiative launched by Google to bring together students interested in Google Developer Technologies and associated skills in a peer-to-peer learning environment.'
        />
        <AboutCard
          logo={faLightbulb}
          logoColor={settings.gColor2}
          title='Why DSC?'
          content='Each DSC have their own vision for the community. Our vision is to bring together programming and development enthusiast irrespective of academic background and hone their development skills.'
        />
        <AboutCard
          logo={faUsers}
          logoColor={settings.gColor3}
          title='Who is it for?'
          content='GDSC NITW is open to all the students. Undergrads, Postgrads and Phds from any university can join. The only pre-requisite to join us is enthusiasm towards coding and development or atleast curiosity towards it.'
        />
      </Row>
    </Section>
  );
}

export default About;
