import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Row, Col, Button } from "react-bootstrap";
import Section from "../Section";
import settings from "../../settings";

function Footer(props) {
  return (
    <Section sectionName='footer' bgColor={props.bgColor}>
      <Row>
        <Col md={4}>
          Copyright&copy; 2021. All rights reserved.
          <div className='footerSocialIcons'>
            <Button href={settings.socialHandles.linkedin} variant='link'>
              <FontAwesomeIcon icon={faLinkedin} />
            </Button>
            <Button href={settings.socialHandles.instagram} variant='link'>
              <FontAwesomeIcon icon={faInstagram} />
            </Button>
            <Button href={settings.socialHandles.twitter} variant='link'>
              <FontAwesomeIcon icon={faTwitter} />
            </Button>
            <Button href={settings.socialHandles.facebook} variant='link'>
              <FontAwesomeIcon icon={faFacebook} />
            </Button>
            <Button href={settings.socialHandles.youtube} variant='link'>
              <FontAwesomeIcon icon={faYoutube} />
            </Button>
          </div>
        </Col>
        <Col md={4}></Col>
        <Col md={4}>
          <h5>Partners</h5>
        </Col>
      </Row>
    </Section>
  );
}

export default Footer;
