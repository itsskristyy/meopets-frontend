import React from "react";
import axios from 'axios';
import '../store.css';

/* images used in the store */
import tissue from '../tissue.png';
import sandwich from '../sandwich.png';
import water from '../water.png';
import ball from '../beachball.png';
import duck from '../duck.png';
import cake from '../cupcakee.png';
import juice from '../juice.png';

export default function Store() {
  

    return (

        <div className="storeInventory">
            <h1> Hello, what would you like to buy? </h1>


            <h2> Toys </h2>
            <div className="toys">
                <ul> Ball
                    <img  alt = "ball" id="ball" src={ball} onClick={() => { if (window.confirm('Are you sure you want to purchase?')){ }}} />
                    <p> 150 coins </p>
                    <p> +5 Happiness </p>
                </ul>


                <ul> Ball
                    <img alt = "ball" id="ball" src={ball} onClick={() => { if (window.confirm('Are you sure you want to purchase?')){ }}} />
                    <p> 150 coins </p>
                    <p> +5 Happiness </p>
                </ul>


                <ul> Rubber Duck
                    <img alt = "duck" id="duck" src={duck} onClick={() => { if (window.confirm('Are you sure you want to purchase?')){ }}}/>
                    <p> 70 coins </p>
                    <p> +5 Happiness </p>
                </ul>
            </div >

            <h2> Food </h2>
            <div className="food">
                <ul> Apple Juice
                    <img alt = "juice" id="juice" src= {juice} onClick={() => { if (window.confirm('Are you sure you want to purchase?')){ }}}/>
                    <p> 20 coins</p>
                    <p> +1 Hunger </p>
                </ul>

                <ul> Cupcake
                    <img alt = "cupcake" id="cake" src={cake} onClick={() => { if (window.confirm('Are you sure you want to purchase?')){ }}} />
                    <p> 35 coins</p>
                    <p> +2 Hunger </p>
                </ul>

                <ul> Water
                    <img alt = "water" id="water" src={water} onClick={() => { if (window.confirm('Are you sure you want to purchase?')){ }}}/>
                    <p> 10 coins</p>
                    <p> +2 Hunger </p>
                </ul>

                <ul> Sandwich
                    <img alt = "sandwich" id="sandwich" src={sandwich} onClick={() => { if (window.confirm('Are you sure you want to purchase?')){ }}}/>
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
                    <img  id="cough" src= ""   
                    onClick={() => { if (window.confirm('Are you sure you want to purchase?')){ }}} />
                    <p> 70 coins </p>
                    <p> +3 Health </p>
                </ul>



            </div >
        </div>
    );

}