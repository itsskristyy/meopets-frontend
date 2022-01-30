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
            let amountItems = [0,0,0,0,0,0,0,0,0,0]
            let title = ["", "", "", "", "", "","", "", "", ""]
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
                props.inventory[i] === 10 && amountItems[9]++
                props.inventory[i] === 1 && (title[0] = "Meopkins")
                props.inventory[i] === 2 && (title[1] = "Sandwich")
                props.inventory[i] === 3 && (title[2] = "Water")
                props.inventory[i] === 4 && (title[3] = "Ball")
                props.inventory[i] === 5 && (title[4] = "Rubber Duck")
                props.inventory[i] === 6 && (title[5] = "Cupcake")
                props.inventory[i] === 7 && (title[6] = "Apple Juice")
                props.inventory[i] === 8 && (title[7] = "Cough Syrup")
                props.inventory[i] === 9 && (title[8] = "Teddy Bear")
                props.inventory[i] === 10 && (title[9] = "Magic Candy")
            }
                for(let i=0; i<10;i++){
                    if(amountItems[i] !== 0){
                        console.log(i)
                        
                        console.log(props.inventory[i])
                        
                        let item = document.createElement('div')
                        item.className = "invent-el"
                        let itemText = document.createElement('h4')
                        itemText.textContent = title[i]
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
            
             <button onClick={showItems} className="invent-btn">Show Purchases</button>
            <div className='invent-items'>
            </div>
        </div>
    )

}