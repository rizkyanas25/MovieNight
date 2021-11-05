import React from 'react';

import './App.css';
import Router from "./Route";
import { Redux } from "./Store";

function App() {
  return (
    <div className="App">
      <Redux>
        <Router/>
      </Redux>
    </div>
  );
}

export default App;
