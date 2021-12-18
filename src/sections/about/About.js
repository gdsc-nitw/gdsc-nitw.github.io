import Section from "../Section";
import AboutCard from "./AboutCard";

function About(props) {
  return (
    <Section sectionName='about' sectionTitle='About Us' bgColor={props.bgColor}>
      <div className='row'>
        <AboutCard
          logo='fa-coffee'
          title='Concept of DSC'
          content='The DSC program is a grassroots channel through which Google provides development, mobile & web development skills for students, towards employability.'
        />
        <AboutCard
          logo='fa-coffee'
          title='Why DSC?'
          content='For students to learn development skills, solve problems through technology and inspire them to be world class developers and changemakers.'
        />
        <AboutCard
          logo='fa-coffee'
          title='Target Audience'
          content='DSC activities are targeted at University students and any others including faculty members who want to learn development skills & work to solve real-life problems.'
        />
      </div>
    </Section>
  );
}

export default About;
