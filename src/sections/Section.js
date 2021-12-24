import { Container } from "react-bootstrap";

function Section(props) {
  return (
    <div id={props.sectionName} style={{padding: '5rem 0', backgroundColor: props.bgColor}}>
      <Container>
        <h1 className="sectionTitle">{props.sectionTitle}</h1>
        <h5 className="sectionTinyIntro">{props.sectionTinyIntro}</h5>
        {props.children}
      </Container>
    </div>
  );
}

export default Section;