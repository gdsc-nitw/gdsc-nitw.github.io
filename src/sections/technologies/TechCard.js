import { Card, Button } from "react-bootstrap";

function TechCard(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant='top' src={props.toolimg} />
      <Card.Body>
        <Card.Title className="techCardTitle">{props.toolname}</Card.Title>
        <Card.Text>{props.toolintro}</Card.Text>
        <Button variant='primary' href={props.toolcta} target="_blank">
          Learn More
        </Button>
      </Card.Body>
    </Card>
  );
}

export default TechCard;
