import React from "react";
import axios from 'axios';
import '../store.css';
import Inventory from "./Inventory";
import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../contexts/loginContext"

/* images used in the store */
import tissue from '../tissue.png';
import sandwich from '../sandwich.png';
import water from '../water.png';
import ball from '../beachball.png';
import duck from '../duck.png';
import cake from '../cupcakee.png';
import juice from '../juice.png';
import syrup from '../coughsyrup.png';
import bear from '../bear.png';

export default function Store() {
    const[inventory, setInventory] = useState([2,2,8])
    const user = useContext(UserContext);
    const updateUser = useContext(UserContext).updateUser;
    async function getTCoins(amount) {
        const newCurrency = {currency: user.user.currency - amount};
        return updateUser(newCurrency);
        }
    return (

        // '1':tissue,
        // '2':sandwich,
        // '3':water,
        // '4':ball,
        // '5':duck,
        // '6':cake,
        // '7':juice,
        // '8':syrup,
        // '9':bear

        <div className="storeInventory">
            <h1> Hello, what would you like to buy? </h1>


            <h2> Toys </h2>
            <div className="toys">
                <ul> Ball
                    <img  alt = "ball" id="ball" src={ball} onClick={() => { if (window.confirm('Are you sure you want to purchase?')){
                        setInventory([...inventory,4])
                        getTCoins(150)
                     }}} />
                    <p> 150 coins </p>
                    <p> +5 Happiness </p>
                </ul>


                <ul> Teddy Bear
                    <img alt = "bear" id="bear" src = {bear} onClick={() => { if (window.confirm('Are you sure you want to purchase?')){ 
                        setInventory([...inventory,9])
                        getTCoins(220)
                    }}} />
                    <p> 220 coins </p>
                    <p> +6 Happiness </p>
                </ul>


                <ul> Rubber Duck
                    <img alt = "duck" id="duck" src={duck} onClick={() => { if (window.confirm('Are you sure you want to purchase?')){ 
                        setInventory([...inventory,5])
                        getTCoins(70)
                    }}}/>
                    <p> 70 coins </p>
                    <p> +5 Happiness </p>
                </ul>
            </div >

            <h2> Food </h2>
            <div className="food">
                <ul> Apple Juice
                    <img alt = "juice" id="juice" src= {juice} onClick={() => { if (window.confirm('Are you sure you want to purchase?')){ 
                        setInventory([...inventory,7])
                        getTCoins(20)
                    }}}/>
                    <p> 20 coins</p>
                    <p> +1 Hunger </p>
                </ul>

                <ul> Cupcake
                    <img alt = "cupcake" id="cake" src={cake} onClick={() => { if (window.confirm('Are you sure you want to purchase?')){
                        setInventory([...inventory,6])
                        getTCoins(35)
                     }}} />
                    <p> 35 coins</p>
                    <p> +2 Hunger </p>
                </ul>

                <ul> Water
                    <img alt = "water" id="water" src={water} onClick={() => { if (window.confirm('Are you sure you want to purchase?')){ 
                        setInventory([...inventory,3])
                        getTCoins(10)
                    }}}/>
                    <p> 10 coins</p>
                    <p> +2 Hunger </p>
                </ul>

                <ul> Sandwich
                    <img alt = "sandwich" id="sandwich" src={sandwich} onClick={() => { if (window.confirm('Are you sure you want to purchase?')){ 
                        setInventory([...inventory,2])
                        getTCoins(40)
                    }}}/>
                    <p> 40 coins</p>
                    <p> +6 Hunger </p>
                </ul>
            </div>


            <h2> Medicine </h2>
            <div className="medicine">
                <ul> Magic Candy
                    <img alt = "candy" src="https://clipart.world/wp-content/uploads/2020/08/pink-candy-transparent.png" onClick={() => { if (window.confirm('Are you sure you want to purchase?')){ }}} />
                    <p> 70 coins </p>
                    <p> +5 Health </p>
                </ul>

                <ul>   Meopkins
                    <img  alt = "napkins" id="napkins" alt="tissue" src={tissue} onClick={() => { if (window.confirm('Are you sure you want to purchase?')){ }}} />
                    <p> 70 coins </p>
                    <p> +3 Health </p>
                </ul>

                <ul>   Cough Syrup
                    <img  id="cough" src= {syrup}  
                    onClick={() => { if (window.confirm('Are you sure you want to purchase?')){ }}} />
                    <p> 120 coins </p>
                    <p> +7 Health </p>
                </ul>



            </div >
            <h1> Inventory </h1>
            <Inventory inventory={inventory} setInventory={setInventory}/>
        </div>
    );

}