import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Section from "../Section";
import settings from "../../settings";

function Communities(props) {
  return (
    <Section
      sectionName='communities'
      sectionTitle='Communities'
      sectionTinyIntro='Connect with fellow community members by joining us through the links mentiond below.'
      bgColor={props.bgColor}>
      <div className="comBtnGroup">
        <Button className="comBtn" href={settings.socialHandles.discord} target='_blank' size="lg" variant="dark">
          Discord <FontAwesomeIcon icon={faDiscord} />
        </Button>
        <Button className="comBtn" href={settings.socialHandles.whatsapp} target='_blank' size="lg" variant="success">
          WhatsApp <FontAwesomeIcon icon={faWhatsapp} />
        </Button>
      </div>
    </Section>
  );
}

export default Communities;
