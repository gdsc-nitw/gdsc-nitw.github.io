import {Row} from 'react-bootstrap';
import Section from "../Section";
import AboutCard from "./AboutCard";
import { faRocket, faLightbulb, faUsers} from '@fortawesome/free-solid-svg-icons';
import settings from "../../settings";

function About(props) {
  return (
    <Section sectionName='about' sectionTitle='About Us' bgColor={props.bgColor}>
      <Row class="d-flex justify-content-center">
        <AboutCard
          logo={faRocket}
          logoColor={settings.gColor1}
          title='Concept of DSC'
          content='The DSC program is a grassroots channel through which Google provides development, mobile & web development skills for students, towards employability.'
        />
        <AboutCard
          logo={faLightbulb}
          logoColor={settings.gColor2}
          title='Why DSC?'
          content='For students to learn development skills, solve problems through technology and inspire them to be world class developers and changemakers.'
        />
        <AboutCard
          logo={faUsers}
          logoColor={settings.gColor3}
          title='Target Audience'
          content='DSC activities are targeted at University students and any others including faculty members who want to learn development skills & work to solve real-life problems.'
        />
        </Row>
    </Section>
  );
}

export default About;
