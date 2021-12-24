import art from "./art.webp";
import Section from "../Section";
import { Button, Container, Navbar, Nav, Image } from "react-bootstrap";
import settings from "../../settings";

function Header() {
  return (
    <Section sectionName='headerHero'>
      <Navbar
        fixed='top'
        bg='light'
        variant='light'
        expand='lg'
        className='headerNavbar'>
        <Container>
          <Navbar.Brand href='/'>
            <div className='brandContainer'>
              <Image
                className='brandLogo'
                src={settings.siteLogo}
                fluid={true}
              />
              <div className='brandInnerContainer'>
                <span>Google Developer Student Clubs</span>
                <small>NIT Warangal</small>
              </div>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <Nav.Link className='navLinkItem' href='#about'>
                About Us
              </Nav.Link>
              <Nav.Link className='navLinkItem' href='#technologies'>
                Technologies
              </Nav.Link>
              <Nav.Link className='navLinkItem' href='#eventsworkshop'>
                Events
              </Nav.Link>
              <Nav.Link className='navLinkItem' href='#team'>
                Team
              </Nav.Link>
              <Nav.Link className='navLinkItem' href='#communities'>
                Communities
              </Nav.Link>
              <Button
                className='navCtaButton'
                href={settings.officialPageLink}
                variant='link'
                size='sm'
                target='_blank'
                style={{ backgroundColor: settings.themeColor }}>
                Become Member
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className='header-hero'>
        <div className='container'>
          <div className='row d-flex align-items-center'>
            <div className='col-md-6'>
              <h1 className='headerHeroTitle'>
                Google Developer Student Clubs
              </h1>
              <h2 className='headerHeroSubtitle'>NIT Warangal</h2>
              <p className='headerHeroContent'>{settings.siteDescription}</p>
              <div className='headerBtnContainer'>
                <Button
                  className='headerHeroBtn'
                  href={settings.officialPageLink}
                  target='_blank'
                  variant='primary'
                  size='lg'
                  style={{ backgroundColor: settings.themeColor }}>
                  Become Member
                </Button>
              </div>
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
