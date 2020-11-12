import React from 'react';
import './App.css';
import Navbar from './navbar';
import Demo from './tree';
//import Candle from './Candle_Chart';
import App1 from './tablecsv'
//import ChartComponent from './Chart/ChartComponent';
import {BrowserRouter as Router, Route} from 'react-router-dom';

const App = ()=>{
  return(
    <Router>
      <div>
        <Navbar />
        <Route exact path= "/Tree">
          <Demo />
        </Route>
        <Route exact path= "/StockChart">
        <App1/>
        </Route>
      </div>
    </Router>
  )
}

export default App;
