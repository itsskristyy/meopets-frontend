import React from "react";
import axios from 'axios';
import '../store.css';
import Inventory from "./Inventory";
import { useState } from "react";
import { useContext } from "react";
import { PetsContext } from "../contexts/petsContext";
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
    const pets = useContext(PetsContext).pets;
    const updatePet = useContext(PetsContext).updatePet;
    const updateUser = useContext(UserContext).updateUser;
    async function getTCoins(amount) {
        const newCurrency = {currency: user.currency - amount};
        return updateUser(newCurrency);
        }
    const loading = user.currency === 0;

    async function petUpdateHandler(pet) {
        return await updatePet(pet);
    }
    async function feedPet(pet, value) {
        const petToFeed = {...pet};
        petToFeed.hunger > 0 ? petToFeed.hunger -= value : petToFeed.hunger = 0;
        return await petUpdateHandler(petToFeed);
    }

    async function playWithPet(pet, value) {
        const petToPlay = {...pet};
        petToPlay.happiness += value;
        return await petUpdateHandler(petToPlay);
    }
    async function healPet(pet, value) {
        const petToPlay = {...pet};
        petToPlay.health += value;
        return await petUpdateHandler(petToPlay);
    }

    function insertCommas(num) {
        let str = num.toString().split('.');
        if (str[0].length >= 5) {
            str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
        }
        if (str[1] && str[1].length >= 5) {
            str[1] = str[1].replace(/(\d{3})/g, '$1 ');
        }
        return str.join('.');
    }

    return (


        <div className="storeInventory">
            <h1> Hello, what would you like to buy? </h1>

            {!loading && <div className="currency">
                            <img src="https://cdn-icons-png.flaticon.com/512/550/550638.png" alt="coin stack"
                                className="coins-img"/>
                            <p className="coins">{insertCommas(user.currency)}</p>
            </div>}

            <h2> Toys </h2>
            <div className="toys">
                <ul> Ball
                    <img  alt = "ball" id="ball" src={ball} onClick={async () => { if (window.confirm('Are you sure you want to purchase?')){
                        if(user.currency >= 150){
                            setInventory([...inventory,4]);
                            getTCoins(150);
                            const petId =  Object.keys(pets)[0];
                            await playWithPet(pets[petId], 5)
                        }else{
                            alert("Sorry, You do not have enough coins to purchase this item.")
                        }
                        
                     }}} />
                    <p> 150 coins </p>
                    <p> +5 Happiness </p>
                </ul>


                <ul> Teddy Bear
                    <img alt = "bear" id="bear" src = {bear} onClick={async () => { if (window.confirm('Are you sure you want to purchase?')){ 
                        if(user.currency >= 220){
                            setInventory([...inventory,9])
                            getTCoins(220)
                            const petId =  Object.keys(pets)[0];
                            await playWithPet(pets[petId], 6)
                        }else{
                            alert("Sorry, You do not have enough coins to purchase this item.")
                        }  }}} />
                    <p> 220 coins </p>
                    <p> +6 Happiness </p>
                </ul>


                <ul> Rubber Duck
                    <img alt = "duck" id="duck" src={duck} onClick={async () => { if (window.confirm('Are you sure you want to purchase?')){ 
                         if(user.currency >= 70){
                            setInventory([...inventory,5])
                            getTCoins(70)
                            const petId =  Object.keys(pets)[0];
                            await playWithPet(pets[petId], 5)
                        }else{
                            alert("Sorry, You do not have enough coins to purchase this item.")
                        } 
                    }}}/>
                    <p> 70 coins </p>
                    <p> +5 Happiness </p>
                </ul>
            </div >

            <h2> Food </h2>
            <div className="food">
                <ul> Apple Juice
                    <img alt = "juice" id="juice" src= {juice} onClick={async () => { if (window.confirm('Are you sure you want to purchase?')){ 
                        if(user.currency >= 20){
                            setInventory([...inventory,7])
                            getTCoins(20)
                            const petId =  Object.keys(pets)[0];
                            await feedPet(pets[petId], 1)
                        }else{
                            alert("Sorry, You do not have enough coins to purchase this item.")
                        } 
                    }}}/>
                    <p> 20 coins</p>
                    <p> -1 Hunger </p>
                </ul>

                <ul> Cupcake
                    <img alt = "cupcake" id="cake" src={cake} onClick={async () => { if (window.confirm('Are you sure you want to purchase?')){
                        if(user.currency >= 35){
                            setInventory([...inventory,6])
                            getTCoins(35)
                            const petId =  Object.keys(pets)[0];
                            await feedPet(pets[petId], 2)
                        }else{
                            alert("Sorry, You do not have enough coins to purchase this item.")
                        } 
                     }}} />
                    <p> 35 coins</p>
                    <p> -2 Hunger </p>
                </ul>

                <ul> Water
                    <img alt = "water" id="water" src={water} onClick={async () => { if (window.confirm('Are you sure you want to purchase?')){ 
                        if(user.currency >= 10){
                            setInventory([...inventory,3])
                            getTCoins(10)
                            const petId =  Object.keys(pets)[0];
                            await feedPet(pets[petId], 2)
                        }else{
                            alert("Sorry, You do not have enough coins to purchase this item.")
                        } 
                    }}}/>
                    <p> 10 coins</p>
                    <p> -2 Hunger </p>
                </ul>

                <ul> Sandwich
                    <img alt = "sandwich" id="sandwich" src={sandwich} onClick={async () => { if (window.confirm('Are you sure you want to purchase?')){ 
                        
                        if(user.currency >= 40){
                            setInventory([...inventory,2])
                            getTCoins(40)
                            const petId =  Object.keys(pets)[0];
                            await feedPet(pets[petId], 6)
                        }else{
                            alert("Sorry, You do not have enough coins to purchase this item.")
                        } 
                    }}}/>
                    <p> 40 coins</p>
                    <p> -6 Hunger </p>
                </ul>
            </div>


            <h2> Medicine </h2>
            <div className="medicine">
                <ul> Magic Candy
                    <img alt = "candy" src="https://clipart.world/wp-content/uploads/2020/08/pink-candy-transparent.png" onClick={async () => { if (window.confirm('Are you sure you want to purchase?')){ 
                        if(user.currency >= 70){
                            setInventory([...inventory,10])
                            getTCoins(70)
                            const petId =  Object.keys(pets)[0];
                            await healPet(pets[petId], 1)
                        }else{
                            alert("Sorry, You do not have enough coins to purchase this item.")
                        } 
                    }}} />
                    <p> 70 coins </p>
                    <p> +5 Health </p>
                </ul>

                <ul>   Meopkins
                    <img  alt = "napkins" id="napkins" alt="tissue" src={tissue} onClick={async () => { if (window.confirm('Are you sure you want to purchase?')){ 
                         if(user.currency >= 70){
                            setInventory([...inventory,1])
                            getTCoins(70)
                            const petId =  Object.keys(pets)[0];
                            await healPet(pets[petId], 3)
                        }else{
                            alert("Sorry, You do not have enough coins to purchase this item.")
                        } 
                    }}} />
                    <p> 70 coins </p>
                    <p> +3 Health </p>
                </ul>

                <ul>   Cough Syrup
                    <img  id="cough" src= {syrup}  
                    onClick={async () => { if (window.confirm('Are you sure you want to purchase?')){ 
                        if(user.currency >= 80){
                            setInventory([...inventory,8])
                            getTCoins(120)
                            const petId =  Object.keys(pets)[0];
                            await healPet(pets[petId], 7)
                        }else{
                            alert("Sorry, You do not have enough coins to purchase this item.")
                        } 
                    }}} />
                    <p> 120 coins </p>
                    <p> +7 Health </p>
                </ul>



            </div >
            <h1> Inventory </h1>
            <Inventory inventory={inventory} setInventory={setInventory}/>
        </div>
    );

}