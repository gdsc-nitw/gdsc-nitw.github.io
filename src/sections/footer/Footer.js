import {Row, Col, Button} from 'react-bootstrap';
import Section from "../Section";

function Footer(props) {
  return <Section sectionName='footer' bgColor={props.bgColor}>
      <Row>
          <Col md={4}>
              Copyright&copy; 2021. All rights reserved.
          </Col>
          <Col md={4}>
              <b>Join Communities</b><br />
              <Button href = 'https://google.com'>Discord</Button>
              <Button href = 'https://google.com'>WhatsApp</Button>
          </Col>
          <Col md={4}>
              Partners
          </Col>
      </Row>
  </Section>;
}

export default Footer;
