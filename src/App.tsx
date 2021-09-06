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
      //bg-gray-800
      // grid grid-rows-3 grid-rows-auto
        <div id= 'app' className=" text-gray-200 pt-10 px-20 min-h-screen">
            <div className=''>
            <Header />
            </div>
            
            <div className=' flex-grow'>
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
            </div>
            <div className='mb-5'>
            <Footer />
            </div>
        
        
    </div>
    
  );
}

export default App;
