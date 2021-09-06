// import React from "react";
import {Switch,Route} from "react-router-dom";


import React from 'react';
// import '../src/style/App.css';

import HomePage from './components/HomePage';
import Footer from './components/Footer';
import AboutPage from './components/AboutPage';
import HistoryPage from './components/HistoryPage';
import ComparePage from "./components/ComparePage";
import Header from "./components/Header";

function App() {
  return (
    <div className="App bg-gray-800 text-gray-200 p-10 min-h-full flex-auto">
        <Header />
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
    </div>
  );
}

export default App;
