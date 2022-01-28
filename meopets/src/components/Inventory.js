import React from "react";
import { useState } from "react";
import inventoryInfo from "./inventorymapper";
export default function Inventory(props) {
    let gottenItems = ""
    //okay so here's how it will work, we have 9 items, this below for loop with make a div with each item
    //before that we should have a loop to find how many times each item is in the list... i guess it can
    //be a object with 9 key-value pairs where the values are the numbers of time each number comes up. 
    //it could just return an array in order with arr[0] being the exact amount of times item 1 comes up. okay hmm
    function showItems(){ 

            document.querySelector('.invent-btn').textContent = "Refresh Inventory"
            document.querySelector('.invent-items').innerHTML = ""
            let amountItems = [0,0,0,0,0,0,0,0,0]
            for(let i=0; i<props.inventory.length; i++){
                props.inventory[i] === 1 && amountItems[0]++
                props.inventory[i] === 2 && amountItems[1]++
                props.inventory[i] === 3 && amountItems[2]++
                props.inventory[i] === 4 && amountItems[3]++
                props.inventory[i] === 5 && amountItems[4]++
                props.inventory[i] === 6 && amountItems[5]++
                props.inventory[i] === 7 && amountItems[6]++
                props.inventory[i] === 8 && amountItems[7]++
                props.inventory[i] === 9 && amountItems[8]++
            }
                for(let i=0; i<9;i++){
                    if(amountItems[i] !== 0){
                        let title = ""
                        props.inventory[i] === 1 && (title = "Meopkins")
                        props.inventory[i] === 2 && (title = "Sandwich")
                        props.inventory[i] === 3 && (title = "Water")
                        props.inventory[i] === 4 && (title = "Ball")
                        props.inventory[i] === 5 && (title = "Rubber Duck")
                        props.inventory[i] === 6 && (title = "Cupcake")
                        props.inventory[i] === 7 && (title = "Apple Juice")
                        props.inventory[i] === 8 && (title = "Cough Syrup")
                        props.inventory[i] === 9 && (title = "Teddy Bear")
                        let item = document.createElement('div')
                        item.className = "invent-el"
                        let itemText = document.createElement('h4')
                        itemText.textContent = title
                        let itemImg = document.createElement('img')
                        let itemAmount = document.createElement('p')
                        itemAmount.textContent = "Amount: " + amountItems[i]
                        itemImg.src = inventoryInfo[i+1]
                        item.appendChild(itemText)
                        item.appendChild(itemImg)
                        item.appendChild(itemAmount)
                        document.querySelector('.invent-items').appendChild(item)
                    }

                }
                

    }

    return (
        <div className="invent-page">
            
             <button onClick={showItems} className="invent-btn">Show Items in Inventory</button>
            <div className='invent-items'>
            </div>
        </div>
    )

}