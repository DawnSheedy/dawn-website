import React from 'react';
import Title from './components/title'
import Socials from './components/socials'
import { Col, Row, Container } from 'react-bootstrap';
import './App.css';

function App() {

  return (
    <div className="App-body">
      <Container className="App-center">
        <Row className="justify-content-md-left">
          <Col sm={{ span: 12 }} md={{ span: 10, offset: 2 }} lg={{ span: 9, offset: 3 }}>
            <Title />
            <Socials />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
