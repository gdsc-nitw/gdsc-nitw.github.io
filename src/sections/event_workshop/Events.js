import { Tab, Tabs, ListGroup} from "react-bootstrap";
import Section from "../Section";
import EventEntry from "./EventEntry";
import eventList from "../../eventsData.json"

function renderEventListUpcoming(eventList) {
  return eventList.map((event) => {
    const eventDate = new Date(event.date);
    const today = new Date();
    if (today < eventDate) {
      return <EventEntry {...event}></EventEntry>
    }
    return undefined;
  });
}

function renderEventListPast(eventList) {
  return eventList.map((event) => {
    const eventDate = new Date(event.date);
    const today = new Date();
    if (today > eventDate) {
      return <EventEntry {...event}></EventEntry>
    }
    return undefined;
  });
}

let activeTab = "pastEvents";

function selectUpcomingTab(eventList) {
  eventList.forEach(e => {
    const eventDate = new Date(e.date);
    const today = new Date();
    if (eventDate > today) {
      activeTab = "upcomingEvents";
    }
  });
}

function Events(props) {
  selectUpcomingTab(eventList);
  return (
    <Section
      sectionName='eventsworkshop'
      sectionTitle='Events & Workshops'
      sectionTinyIntro='Come learn, share and connect with us in person'
      bgColor={props.bgColor}>
      <Tabs
        defaultActiveKey={activeTab}
        className='mb-3'>
        <Tab eventKey='upcomingEvents' title='Upcoming'>
          <ListGroup as='ol' numbered>
            {renderEventListUpcoming(eventList)} 
          </ListGroup>
        </Tab>
        <Tab eventKey='pastEvents' title='Past'>
          {renderEventListPast(eventList)}
        </Tab>
      </Tabs>
    </Section>
  );
}

export default Events;
