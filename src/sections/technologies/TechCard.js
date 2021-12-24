import { Card, Button } from "react-bootstrap";

function TechCard(props) {
  return (
    <Card className="techcard">
      <Card.Img variant='top' src={props.toolimg} />
      <Card.Body>
        <Card.Title className="techCardTitle">{props.toolname}</Card.Title>
        <Card.Text className="techCardContent">{props.toolintro}</Card.Text>
        <Button variant='primary' href={props.toolcta} target="_blank">
          Explore 
        </Button>
      </Card.Body>
    </Card>
  );
}

export default TechCard;
