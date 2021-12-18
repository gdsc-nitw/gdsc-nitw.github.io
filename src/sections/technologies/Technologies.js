import TechCard from "./TechCard";
import Section from "../Section";
import { Row, Col } from "react-bootstrap";
import thumbnail from "./android_thumbnail.png";

const tools = [
  {
    toolimg: thumbnail,
    toolname: "Android Development",
    toolintro: `Every year Google developers release exciting new updates to the world's most popular operating system. We always have sessions to keep you updated and mastering the latest trends in modern Android development.`,
    toolcta: "https://google.com",
  },
  {
    toolimg: thumbnail,
    toolname: "Web Development",
    toolintro: `Every year Google developers release exciting new updates to the world's most popular operating system. We always have sessions to keep you updated and mastering the latest trends in modern Android development.`,
    toolcta: "https://google.com",
  },
  {
    toolimg: thumbnail,
    toolname: "Cloud Computing",
    toolintro: `Every year Google developers release exciting new updates to the world's most popular operating system. We always have sessions to keep you updated and mastering the latest trends in modern Android development.`,
    toolcta: "https://google.com",
  },
  {
    toolimg: thumbnail,
    toolname: "Machine Intelligence",
    toolintro: `Every year Google developers release exciting new updates to the world's most popular operating system. We always have sessions to keep you updated and mastering the latest trends in modern Android development.`,
    toolcta: "https://google.com",
  },
];

const renderToolCards = () => {
  return tools.map((tool) => {
    return (
      <Col md={4} lg={3}>
        <TechCard
          toolimg={tool.toolimg}
          toolname={tool.toolname}
          toolintro={tool.toolintro}
          toolcta={tool.toolcta}></TechCard>
      </Col>
    );
  });
};

function Technologies() {
  return (
    <Section
      sectionName='technologies'
      sectionTitle='Technologies'
      sectionTinyIntro='Opportunities to learn and access deep technical content'>
      <Row>{renderToolCards()}</Row>
    </Section>
  );
}

export default Technologies;
