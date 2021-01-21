import React from 'react';
import {Route} from "react-router-dom";
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Home from "./Component/";
import Resume from "./Component/Resume"
import Portfolio from "./Component/Portfolio"


function App() {
  return (
    <>
      <CssBaseline/>
      <Route exact path="/" component= {Home}/>
      <Route path="/resume" component= {Resume}/>
      <Route path="/portfolio" component= {Portfolio}/>
    </>
  );
}

export default App;
