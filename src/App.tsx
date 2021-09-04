// import React from "react";
import {Switch,Route} from "react-router-dom";


import React from 'react';
import './style/App.css';
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import AboutPage from './components/AboutPage';
import HistoryPage from './components/HistoryPage';
import ComparePage from "./components/ComparePage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Switch> 
        <Route path='/about'>
            <AboutPage />
        </Route>
        <Route path='/history'>
            <HistoryPage />
        </Route>
        <Route path='/compare'>
            <ComparePage />
        </Route>

        <Route path='/'>
            <HomePage />
        </Route>
      </Switch>
        
        
        <Footer />
        
      </header>
    </div>
  );
}

export default App;
