import art from "./art.webp";
import { Button, Container, Navbar, Nav, NavDropdown } from "react-bootstrap";

function Header() {
  return (
    <div>
      <Navbar fixed='top' bg='dark' variant="dark" expand='lg'>
        <Container>
          <Navbar.Brand href='#home'>GDSC NITW</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link href='#home'>Home</Nav.Link>
              <Nav.Link href='#link'>Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className='header-hero'>
        <div className='container'>
          <div className='row d-flex align-items-center'>
            <div className='col-md-6'>
              <h1>Google Developer Student Clubs</h1>
              <h2>NIT Warangal</h2>
              <p>
                DSC NITW is a community of students which aims to connect to
                peers interested in coding and development Since it is a
                community for everyone, there is no prerequisite and is open to
                all.
              </p>
              <Button variant='primary'>Become Member</Button>
            </div>
            <div className='col-md-6'>
              <img src={art} className='img-fluid' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
