import { ListGroup, Badge, Button } from "react-bootstrap";

function renderBadges(badges) {
  return badges.map((badge) => {
    return (
      <Badge variant='primary' pill>
        {badge}
      </Badge>
    );
  });
}

function EventEntry(props) {
  return (
    <ListGroup.Item
      as='li'
      className='d-flex justify-content-between align-items-start'>
      <div className='ms-2 me-auto'>
        <div className='fw-bold'>{props.entryTitle}</div>
        {props.entryDetails}
        <br />
        <Button size="sm" href={props.registrationLink}>Register</Button>
      </div>
      {renderBadges(props.tags)}
    </ListGroup.Item>
  );
}

export default EventEntry;
