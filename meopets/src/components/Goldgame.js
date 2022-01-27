import { useEffect, useState } from "react"

export default function Goldgame(props){
   //this is just a start, it's not complete at all<!>

   let draggedOver = false
   let points = 0 
    function dropCoins(){
        const coins = []
        //try to add js drag and drop
        // try to add a pot to drop it in
        //when dropped set visibility to hidden
        //when dropped.. add a point to points
        for(let i=0;i<25;i++){
            // <div draggable="true" onDragStart={(e)=>{
            //     e.target.style.opacity = '0.4'}} onDragEnd={handleDragEnd} className="box" 
            //       >A</div>
            let coin = document.createElement('img')
            coin.src =  "https://cdn-icons-png.flaticon.com/512/1292/1292744.png" 
            coin.alt="gold coin" 
            coin.className="gold-coin" 
            coin.style.position = "relative"
            coin.style.draggable = "true"
            coin.addEventListener('dragstart',handleDragStart)
            coin.addEventListener('dragend',handleDragEnd)
            // coin.onDragEnd = (e) => handleDragEnd(e);
            // console.log(coin.onDragStart)
            // console.log(coin.onDragEnd)
            coin.style.left = Math.floor(Math.random()*900)+"px"
            coin.style.top = Math.floor((Math.random()*260))+"px"
            coins.push(coin)
            
        }
        for(let i=0; i<coins.length; i++){
            document.querySelector('.canvas').appendChild(coins[i])
            console.log(coins[i].onDragEnd)
           }
        // let currentCoins = document.querySelectorAll("gold-coin")
        // console.log(currentCoins)
        // currentCoins.forEach(function(e) {
        //     console.log("helo")
        //         e.style.marginTop = "800px"
        //     });
        
    }
    function handleDragStart(e){

        console.log("drag start")
        e.target.style.opacity = '1'
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

    //   let items = document.querySelectorAll('.container .box');
    //   items.forEach(function(item) {
    //     item.addEventListener('dragstart', handleDragStart);
    //     item.addEventListener('dragend', handleDragEnd);
    //   });
    
    
    function playGame(){
        dropCoins()
        setTimeout(function(){
           
            document.querySelector('.gold-page').innerHTML = `<p>Game over!</p><button onClick={window.location.reload()} style="margin-left:440px;">Click here to play again.</button>`
               }, 30000)
    }
    return(
        <div className="gold-page">
            <button onClick={playGame} className="start-btn">Start</button>
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