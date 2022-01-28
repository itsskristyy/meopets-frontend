import React, { useState } from "react";
import { View, StyleSheet, Button, Alert } from "react-native";
import axios from 'axios'; 
import '../inventory.css';

/* images used in the store */
import tissue from '../tissue.png';
import sandwich from '../sandwich.png';
import water from '../water.png';
import ball from '../beachball.png';
import duck from '../duck.png';
import cake from '../cupcakee.png';

export default function Inventory() {
    function callFun() {

      //  alert(");

    }

    return(
        
        <div className="inventory">
        <h1> Hello, what would you like to buy? </h1>
        <h2> Toys </h2> 
        <div className="toys"> 
        
            
        <ul> Ball 
           <img id ="ball" src = {ball} />
           
               <p> 150 coins </p>
               <p> +5 Happiness </p>
            
            </ul>

            <ul> Rubber Duck 
           <img id ="ball" src = {duck} />
           
               <p> 70 coins </p>
               <p> +5 Happiness </p>
              
               
           
               
           </ul>
        
        
           </div >
           <h2> Food </h2>

           <div className="food">
           
           <ul> Apple Juice 
            <img  id ="juice" src = "https://www.pinclipart.com/picdir/big/75-754610_school-apple-juice-carton-apple-juice-box-clipart.png"/>
               <p> 20 coins</p>
               <p> +1 Hunger </p>
           </ul>

           <ul> Cake
           <img  id ="cake" src = {cake}/> 
               <p> 35 coins</p>  
               <p> +2 Hunger </p>
           </ul>

           <ul> Water
           <img  id ="water" src = {water}/>
               <p> 10 coins</p>  
               <p> +2 Hunger </p>
           </ul>

           <ul> Sandwich
           <img  id ="sandwich" src = {sandwich}/>
               <p> 40 coins</p>  
               <p> +6 Hunger </p>
           </ul>


           </div>


           <h2> Medicine </h2>
           <div className="medicine"> 
         
           <ul> Magic Candy 
           <img src = "https://clipart.world/wp-content/uploads/2020/08/pink-candy-transparent.png"/>
           
               <p> 70 coins </p>
               <p> +5 Health </p>
               </ul>
             
               <ul>   Meopkins 
           <img id ="napkins" alt = "tissue" src ={tissue}/>
               <p> 70 coins </p>
               <p> +3 Health </p>
               </ul>
        
           </div >


        </div>  
    );

}