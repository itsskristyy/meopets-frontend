import { useEffect, useState } from "react"

export default function Goldgame(props){
   //this is just a start, it's not complete at all<!>
    function dropCoins(){
        const coins = []
        //try to add js drag and drop
        // try to add a pot to drop it in
        //when dropped set visibility to hidden
        //when dropped.. add a point to points
        for(let i=0;i<10;i++){
           
            let coin = document.createElement('img')
            coin.src =  "https://cdn-icons-png.flaticon.com/512/1292/1292744.png" 
            coin.alt="gold coin" 
            coin.className="gold-coin" 
            coin.style.position = "relative"
            coin.style.draggable = "true"
            coin.style.left = Math.floor(Math.random()*900)+"px"
            coin.style.top = Math.floor((Math.random()*600)+50)+"px"
            coins.push(coin)
            
        }
        for(let i=0; i<coins.length; i++){
            document.querySelector('.canvas').appendChild(coins[i])
           }
        let currentCoins = document.querySelectorAll("gold-coin")
        console.log(currentCoins)
        currentCoins.forEach(function(e) {
            console.log("helo")
                e.style.marginTop = "800px"
            });
            
        
        
        
        
    }
    function handleDragStart(e) {
        e.style.opacity = '0.4';
      }
    
      function handleDragEnd(e) {
        e.style.opacity = '1';
      }
    
      let items = document.querySelectorAll('.container .box');
      items.forEach(function(item) {
        item.addEventListener('dragstart', handleDragStart);
        item.addEventListener('dragend', handleDragEnd);
      });
    
    
    function playGame(){
        setInterval(dropCoins,500)
        setTimeout(function(){
            clearInterval(dropCoins)
            document.querySelector('.canvas-g').innerHTML = `<p>Game over!</button>`
               }, 30000)
    }
    return(
        <div>
            <button onClick={playGame}>Start</button>
            <div className="canvas-g" >
            <div className="canvas" >
            <div className="container">
            <div draggable="true" onDragStart={(e)=>{
        e.target.style.opacity = '0.4'}} onDragEnd={(e)=>{
            e.target.style.visibility = "hidden"
          }} className="box" 
          >A</div>
            <div draggable="true" className="box" onDragOver={(e)=>{e.target.style.background = "purple"}}>B</div>
            <div draggable="true" className="box">C</div>
            </div>
          
            </div>
            </div>
        </div>
    )
}