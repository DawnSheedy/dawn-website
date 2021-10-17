import React from 'react';
import Title from './components/title'
import Socials from './components/socials'
import { Col, Row, Container } from 'react-bootstrap';
import './App.css';
import './Effects.css';
import CornerElements from './components/cornerElements';
import PageSelector from './components/pageSelector';

function App() {

  return (
    <div className="App-body">
      <div className="App-welcome crt crt-abberation">
        <PageSelector />
      </div>
    </div>
  );
}

export default App;
