import React, { useState, useContext } from "react";
import axios from 'axios'; 
import '../inventory.css';
export default function Inventory() {

    return(
        <div className="inventory">
        <h1> Hello, what would you like to buy? </h1>
        <div className="toys"> 
        <h2> Toys </h2>
            <img  id ="juice" src = "https://www.pinclipart.com/picdir/big/75-754610_school-apple-juice-carton-apple-juice-box-clipart.png"/>
           <ul> Ball 
               <p> 70 coins </p>
               <p> +5 Happiness </p>
               
           </ul>
        
        
           </div >

           <div className="food">
            <h2> Food </h2>
            <img  id ="juice" src = "https://www.pinclipart.com/picdir/big/75-754610_school-apple-juice-carton-apple-juice-box-clipart.png"/>
           <ul> Apple Juice 
               <p> 20 coins</p>
               
           </ul>


           <img  id ="cake" src = "http://assets.stickpng.com/thumbs/58661bba7d90850fc3ce2a6e.png"/>
           <ul> Cake
               <p> 50 coins</p>  
           </ul>

           <img  id ="water" src = ""/>
           <ul> Water
               <p> 10 coins</p>  
           </ul>
           </div>
        </div>  
    );

}