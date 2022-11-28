import React from 'react';
import './App.css';
import './Effects.css';
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
