import { Row, Col } from 'reactstrap';
import './App.css';
import Header from './component/Header';
import { PetList } from './component/PetList';

function App() {
  return (
    <div className="App">
        <Header />
        <Row>
          <Col lg="2"></Col>
          <Col lg="8">
            <PetList />
          </Col>
          <Col lg="2"></Col>
        </Row>
    </div>
  );
}

export default App;
