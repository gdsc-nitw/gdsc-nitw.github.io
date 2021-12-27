import TechCard from "./TechCard";
import Section from "../Section";
import { Row, Col } from "react-bootstrap";
import androidLogo from "./android_thumbnail.png";
import cloudLogo from "./cloud_thumbnail.png";
import machineLearningLogo from "./machine_learning_thumbnail.jpg";
import webdevLogo from "./webdev_thumbnail.jpg";

const tools = [
  {
    toolimg: androidLogo,
    toolname: "Android Development",
    toolintro: `Learn the most in demand mobile development skill using Google sponsored Study Jams and exclusive learning resources and labs.`,
    toolcta: "https://codelabs.developers.google.com/?cat=Android&product=android",
  },
  {
    toolimg: webdevLogo,
    toolname: "Web Development",
    toolintro: `Get hands on experience with the latest and emerging web technologies by Google via coding workshops and labs.`,
    toolcta: "https://codelabs.developers.google.com/?cat=Web",
  },
  {
    toolimg: cloudLogo,
    toolname: "Cloud Computing",
    toolintro: `Participate in one of the biggest Cloud Campaigns hosted by Google exclusively through DSC clubs and get hands on experience over GCP tools and infrastructure.`,
    toolcta: "https://gdsc.community.dev/events/details/developer-student-clubs-national-institute-of-technology-nit-warangal-presents-30-days-of-cloud-info-session/",
  },
  {
    toolimg: machineLearningLogo,
    toolname: "AI Machine Learning",
    toolintro: `Learn to create and understand intelligent apps using Google's Machine Learning and AI tools such as Tensorflow, Fairness Indicators and numerous other APIs.`,
    toolcta: "https://codelabs.developers.google.com/?cat=TensorFlow",
  },
];

const renderToolCards = () => {
  return tools.map((tool) => {
    return (
      <Col sm={6} md={4} lg={3}>
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
      sectionTinyIntro='Learn and Explore via exclusive technical content by Google'>
      <Row>{renderToolCards()}</Row>
    </Section>
  );
}

export default Technologies;
