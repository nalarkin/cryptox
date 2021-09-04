// import React from "react";
import {Switch,Route} from "react-router-dom";


import React from 'react';
import './style/App.css';
import Home from './components/HomePage';
import Footer from './components/Footer';
import About from './components/AboutPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Switch> 
        <Route path='/about'>
            <About />
        </Route>

        <Route path='/'>
            <Home />
        </Route>
      </Switch>
        
        <p>
        <Footer />
        </p>
      </header>
    </div>
  );
}

export default App;
