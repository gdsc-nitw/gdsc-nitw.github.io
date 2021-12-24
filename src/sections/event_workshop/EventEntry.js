import { ListGroup, Badge, Button } from "react-bootstrap";

function renderBadges(tags) {
  return tags.map((tag) => {
    if (tag === 'workshop') {
      return <Badge className="eventTag" bg="warning" text="dark" pill>{tag}</Badge>
    }
    return (
      <Badge pill className="eventTag">
        {tag}
      </Badge>
    );
  });
}

function EventEntry(props) {
  return (
    <ListGroup.Item
      className='d-flex justify-content-between align-items-start eventListItem'>
      <div className='ms-2 me-auto'>
        <h5 className='fw-bold'>{props.title}</h5>
        <p>
          Date : {(new Date(props.date)).toLocaleDateString("en-IN")}<br />
          Venue : {props.venue}<br />
          Time : {props.time}
        </p>
        <Button size="sm" target="_blank" href={props.pageLink}>Visit Event Page</Button>
      </div>
      {renderBadges(props.tags)}
    </ListGroup.Item>
  );
}

export default EventEntry;
