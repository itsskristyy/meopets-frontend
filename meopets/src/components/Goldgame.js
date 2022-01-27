import { useEffect, useState } from "react"

export default function Goldgame(props){
   let draggedOver = false
   let points = 0 
    function dropCoins(){
        const coins = []
        for(let i=0;i<25;i++){
            let coin = document.createElement('img')
            coin.src =  "https://cdn-icons-png.flaticon.com/512/1292/1292744.png" 
            coin.alt="gold coin" 
            coin.className="gold-coin" 
            coin.style.position = "relative"
            coin.style.draggable = "true"
            coin.addEventListener('dragstart',handleDragStart)
            coin.addEventListener('dragend',handleDragEnd)
            coin.style.left = Math.floor(Math.random()*900)+"px"
            coin.style.top = Math.floor((Math.random()*220))+"px"
            coins.push(coin)
            
        }
        for(let i=0; i<coins.length; i++){
            document.querySelector('.canvas').appendChild(coins[i])
            console.log(coins[i].onDragEnd)
           }
    }
    function playGame(){
        document.querySelector('.start-btn').style.visibility = "hidden"
        dropCoins()
        setTimeout(function(){
           
            document.querySelector('.gold-page').innerHTML = `<p>Game over!</p><button onClick={window.location.reload()} style="margin-left:400px;  background-color: #FFF4AA; border: 2px solid #c9c5b0;
            width: 125px; height: 40px; " className="start-btn">Click here to play again.</button>`
               }, 30000)
    }
    function handleDragStart(e){

        console.log("drag start")
        e.target.style.opacity = '0'
    }

    function handleDragEnd(e){
            console.log('dragend')
            if(draggedOver){
            e.target.style.visibility = "hidden"
            points++
            document.querySelector('.points-g').textContent = `You got ${points} coins!`
            draggedOver = false
          }
    }
    
    function handleDragOver(e){
                 draggedOver = true
        }

    
    
    return(
        <div className="gold-page">
            <button onClick={playGame} className="start-btn">START</button>
            <div className="game-row">
            <h1 className="points-g">You got 0 coins!</h1>
            <p className="game-inst">You have 30 seconds to add coins to the pot. 
            Drag the coins to the pot to add them! 
                </p>
            </div>
            
            <div className="canvas-g" >
           
            <img src="https://freesvg.org/img/pot-of-gold.png" alt="pot" draggable="true" className="pot" onDragOver={handleDragOver}/>
     
            <div className="canvas" >
            <div className="container">
            {/* <div draggable="true" onDragStart={(e)=>{
        e.target.style.opacity = '0.4'}} onDragEnd={handleDragEnd} className="box" 
          >A</div> */}
                   </div>
          
            </div>
            </div>
        </div>
    )
}