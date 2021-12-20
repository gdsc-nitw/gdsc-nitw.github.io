import art from "./art.webp";
import Section from '../Section';
import { Button, Container, Navbar, Nav, Image} from "react-bootstrap";

function Header() {
  return (
    <Section sectionName="headerHero">
      <Navbar fixed="top" bg="light" expand="lg" className="headerNavbar">
        <Container>
          <Navbar.Brand href='/'>GDSC NITW</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <Nav.Link className="navLinkItem" href='#about'>About Us</Nav.Link>
              <Nav.Link className="navLinkItem" href='#technologies'>Technologies</Nav.Link>
              <Nav.Link className="navLinkItem" href='#eventsworkshop'>Events</Nav.Link>
              <Nav.Link className="navLinkItem" href='#team'>Team</Nav.Link>
              <Button className="navCtaButton" href="https://google.com" variant="link" size="sm">Become Member</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className='header-hero'>
        <div className='container'>
          <div className='row d-flex align-items-center'>
            <div className='col-md-6'>
              <h1 className="headerHeroTitle">Google Developer Student Clubs</h1>
              <h2 className="headerHeroSubtitle">NIT Warangal</h2>
              <p className="headerHeroContent">
                DSC NITW is a community of students which aims to connect to
                peers interested in coding and development Since it is a
                community for everyone, there is no prerequisite and is open to
                all.
              </p>
              <Button className="headerHeroBtn" href = "https://google.com/" target="_blank" variant='primary' size="lg">Become Member</Button>
            </div>
            <div className='col-md-6'>
              <Image src={art} fluid={true} />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Header;
