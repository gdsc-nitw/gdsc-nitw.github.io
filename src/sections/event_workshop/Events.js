import { Tab, Tabs, ListGroup, Badge } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";
import Section from "../Section";
import EventEntry from "./EventEntry";

function Events(props) {
  return (
    <Section
      sectionName='eventsworkshop'
      sectionTitle='Events & Workshops'
      sectionTinyIntro='Come learn, share and connect with us in person'
      bgColor={props.bgColor}>
      <Tabs
        defaultActiveKey='profile'
        id='uncontrolled-tab-example'
        className='mb-3'>
        <Tab eventKey='home' title='Upcoming'>
          <ListGroup as='ol' numbered>
              <EventEntry entryTitle="30 Days of Cloud" entryDetails="Learn essentials of Google Cloud Platform in 30 days of Cloud campaign."
              tags={['cloud', 'workshop']} registrationLink="https://google.com"></EventEntry>
          </ListGroup>
        </Tab>
        <Tab eventKey='profile' title='Past'></Tab>
      </Tabs>
    </Section>
  );
}

export default Events;
