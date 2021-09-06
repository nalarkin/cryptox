// import React from "react";
import {Switch,Route} from "react-router-dom";


import React from 'react';
// import '../src/style/App.css';

import HomePage from './components/HomePage';
import Footer from './features/footer/Footer';
import AboutPage from './components/AboutPage';
import HistoryPage from './components/HistoryPage';
import ComparePage from "./components/ComparePage";
import {Header} from "./features/index";

function App() {
  return (
    <div className="App bg-gray-800 text-gray-200 py-10 px-20 focus-within:min-h-full flex-auto">
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
