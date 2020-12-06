import { Container, Row, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Simulation } from './components/simulation.js'

function App() {
  return (
      <Container>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Mobility Intelligence Simulation</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
          </Nav>
          <Nav>
            <Nav.Link href="https://github.com/cagta">Github</Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/cagta/">Linkedin</Nav.Link>
            <Nav.Link href="https://github.com/cagta/mi-visaualization">Source Code</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
        <Row>
          <Simulation/>
        </Row>    
      </Container>
  );
}

export default App;