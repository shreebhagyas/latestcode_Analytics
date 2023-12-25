import React, { useEffect } from 'react';

import "./App.css";

import { BrowserRouter as Router,Routes, Route,Link } from 'react-router-dom';
import { initGA, logPageView } from './analytics';

import {Home} from "./pages/Home"
import { Login } from "./pages/Login";
function App() {

    useEffect(() => {
        initGA(); // Initialize Google Analytics
        logPageView(); // Log initial pageview
      }, []);
    
  return (
<div className="App">
<Router>
    <div>
        <Link to="/">Home </Link>&nbsp;

        <Link to="/login">Login </Link>
      
    </div>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
    </Routes>
</Router>
</div>

  );
 
}

export default App;
