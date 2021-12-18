import { Container } from "react-bootstrap";

function Section(props) {
  return (
    <div id={props.sectionName} style={{padding: '4rem 0', backgroundColor: props.bgColor}}>
      <Container>
        <h1>{props.sectionTitle}</h1>
        <h4>{props.sectionTinyIntro}</h4>
        {props.children}
      </Container>
    </div>
  );
}

export default Section;