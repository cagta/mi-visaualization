import { Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Simulation } from './components/simulation.js'

function App() {
  return (
      <Container>
        <Row>
          <h1 className="header">Welcome To Mobility Intelligence Simulation</h1>
        </Row>
        <Row>
          <Simulation/>
        </Row>    
      </Container>
  );
}

export default App;