import Section from "../Section";
import ProfileCard from "./ProfileCard";

const teamMembers = [
  {
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
    return <ProfileCard {...member}></ProfileCard>;
  });
}

function Team(props) {
  return (
    <Section
      sectionName='team'
      sectionTitle='Meet our Team'
      sectionTinyIntro='Passionate students driving success of the program'>
      {renderMembers(teamMembers)}
    </Section>
  );
}

export default Team;
