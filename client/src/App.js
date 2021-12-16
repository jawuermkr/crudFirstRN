import './App.css';

import React, {useState, useEffect, Fragment} from 'react';
import {BrowserRouter, Route}from 'react-router-dom'
 
import User from './page/User'

function App() {
  return (
    <div className="App">
      <div className="main-panel">
        <div className="content">
          <BrowserRouter>
          <Route exact path="/" component={() => <User/>} />

          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default App;
