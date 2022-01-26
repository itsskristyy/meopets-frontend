import React from 'react';
import { Link } from "react-router-dom";
import {Outlet} from 'react-router-dom';
import '../App.css';
import Home from './Home';

function App() {
    return (
      <><nav
        style={{
          backgroundColor: "pink",
          paddingBottom: "15px",
          paddingTop: "15px",
          marginBottom: 30

        }}
        
      >
       
        <Link to = "/Home" onClick={() => window.location.reload()}> Meopets</Link>
        
      </nav>
      
      <Home/></>
    );
}

export default App;