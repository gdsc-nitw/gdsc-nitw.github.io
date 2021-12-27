import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Row, Col, Button } from "react-bootstrap";
import Section from "../Section";
import settings from "../../settings";

function Footer(props) {
  return (
    <Section sectionName='footer' bgColor={props.bgColor}>
      <Row>
        <Col md={4} style={{ textAlign: "center" }}>
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
          {settings.clubAddress}
        </Col>
        <Col md={4}>
          <h5>Developers</h5>
          <ul>
            <li>
              Made with <FontAwesomeIcon icon={faHeart} style={{ color: "red" }} /> and{" "}
              <FontAwesomeIcon icon={faReact} style={{ color: "#61dafb" }} />
            </li>
            <li>
              <Button href={settings.coc} variant='link'>
                Code of Conduct
              </Button>
            </li>
            <li>
              <Button href={settings.github} variant='link'>
                Github
              </Button>
            </li>
          </ul>
        </Col>
        <Col md={4}>
          <h5>Contribute</h5>
          <ul>
            <li>
              <Button href={settings.contributors} variant='link'>
                Contributors
              </Button>
            </li>
            <li>
              <Button href={settings.sourcecode} variant='link'>
                View Source
              </Button>
            </li>
            <li>
              <Button href={`mailto:${settings.emailId}`} variant='link'>
                Contact Us
              </Button>
            </li>
          </ul>
        </Col>
      </Row>
    </Section>
  );
}

export default Footer;
