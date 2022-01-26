import React from "react";
import {  Link } from "react-router-dom";


export default function Home(){
    //usenavigate => Userprofile
    return(
        <div className="login">
          <h1>Welcome to Meopets</h1>
          <label htmlFor="userName"> Username: </label>
             <input type="text" id="fname" name="firstname" placeholder="Username"/>
             <br/>
             <label htmlFor="password"> Password: </label>
             <input type="text" id="lname" name="lastname" placeholder="Password"/>
             <br/>
             <button onClick={event =>  window.location.href='/UserProfile'}> Login </button>
       
       
             <h1> Dont have an account? 
             <Link to = "/Signup" onClick={() => window.location.reload()}> Sign Up Here</Link> </h1>
        </div>
        
    )
}