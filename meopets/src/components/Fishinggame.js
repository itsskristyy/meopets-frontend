import { useEffect, useState } from "react"
import { useContext } from "react";
import { UserContext } from "../contexts/loginContext"
export default function Fishinggame(props){
    const user = useContext(UserContext);
    const updateUser = useContext(UserContext).updateUser;
    const [gamePlayed, setGamePlayed] = useState(false)
    async function getTCoins(amount) {
        const newCurrency = {currency: user.currency + amount};
        return updateUser(newCurrency);
    }
   function gamePlay(){
    if(!gamePlayed){
       document.querySelector('.start-btn').style.visibility = "hidden"
       const color = ['blue', 'green', 'purple', 'red']
       let mouseCol = color[Math.floor(Math.random()*4)]
       const allFish = []
       let fish = 0
       function changeCol(){
        mouseCol = color[Math.floor(Math.random()*4)]
        document.querySelector(".box-color").style.backgroundColor = mouseCol
      }
       for(let i=0;i<10;i++){
           
            let blueFish = document.createElement('img')
            blueFish.src =  "https://i.imgur.com/tD91ybW.png" 
            blueFish.alt="blue fish" 
            blueFish.className="blue-fish" 
            blueFish.style.position = "absolute"
            blueFish.style.left = Math.floor(Math.random()*1100)+"px"
            blueFish.style.top = Math.floor((Math.random()*400)+295)+"px"
            blueFish.onmouseover=() =>{
             if(mouseCol === 'blue'){
                 blueFish.style.visibility = "hidden"
                 fish++
                 document.querySelector('.points').textContent = `You caught ${fish}/40 fish`
               
             }
             }
            allFish.push(blueFish)
           }    
        for(let i=0;i<10;i++){
           
             let greenFish = document.createElement('img')
             greenFish.src =  "https://i.imgur.com/dUARus2.png" 
             greenFish.alt="green fish" 
             greenFish.className="green-fish" 
             greenFish.style.position = "absolute"
             greenFish.style.left = Math.floor(Math.random()*1100)+"px"
             greenFish.style.top = Math.floor((Math.random()*400)+295)+"px"
             greenFish.onmouseover=() =>{
              if(mouseCol === 'green'){
                greenFish.style.visibility = "hidden"
                  fish++
                  document.querySelector('.points').textContent = `You caught ${fish}/40 fish`
                
              }
              }
             allFish.push(greenFish)
            }   
            for(let i=0;i<10;i++){
           
                let purpleFish = document.createElement('img')
                purpleFish.src =  "https://i.imgur.com/ZtOYZGz.png" 
                purpleFish.alt="purple fish" 
                purpleFish.className="purple-fish" 
                purpleFish.style.position = "absolute"
                purpleFish.style.left = Math.floor(Math.random()*1100)+"px"
                purpleFish.style.top = Math.floor((Math.random()*400)+295)+"px"
                purpleFish.onmouseover=() =>{
                 if(mouseCol === 'purple'){
                    purpleFish.style.visibility = "hidden"
                     fish++
                     document.querySelector('.points').textContent = `You caught ${fish}/40 fish`
                   
                 }
                 }
                allFish.push(purpleFish)
               }   
               for(let i=0;i<10;i++){
           
                let redFish = document.createElement('img')
                redFish.src =  "https://i.imgur.com/oUv3f2I.png" 
                redFish.alt="red fish" 
                redFish.className="red-fish" 
                redFish.style.position = "absolute"
                redFish.style.left = Math.floor(Math.random()*1100)+"px"
                redFish.style.top = Math.floor((Math.random()*400)+295)+"px"
                redFish.onmouseover=() =>{
                 if(mouseCol === 'red'){
                    redFish.style.visibility = "hidden"
                     fish++
                     document.querySelector('.points').textContent = `You caught ${fish}/40 fish`
                   
                 }
                 }
                allFish.push(redFish)
               }   
           for(let i=0; i<allFish.length; i++){
            document.querySelector('.canvas').appendChild(allFish[i])
           }
           document.querySelector(".box-color").style.backgroundColor = mouseCol
           async function getC(fish){
               await getTCoins(fish)
            }
           let intID =  setInterval(changeCol,1500)
           setTimeout(function(){
               clearInterval(intID)
               getC(fish)
               document.querySelector('.minig-page').innerHTML = `<p>Game over! You caught ${fish} fish and won ${fish} coins!<button onClick={window.location.reload()} style="margin-left:440px;  background-color: #FFF4AA; border: 2px solid #c9c5b0;
               width: 125px; height: 40px; border-radius: 5px; " className="start-btn">Click here to play again.</button>`
               //here there should be a line to the user 
               // you won this many coins!
               //then it should use the currency state that should be received in props and update that state
            }, 30000)
    
           
          
           setGamePlayed(true)
        }
       

       
      }
     return(
         <div>
             <button onClick={gamePlay} className="start-btn">START</button>
    <div className="minig-page">
        <div className="game-row">
        <h1 className="points">You caught 0 fish</h1>
        <div className="box-color"> </div>
        <p className="game-inst">You have 30 seconds to catch as many fish as you can! 
            You can only catch fish when the box is displaying the color of that fish!</p>
        </div>
        <div className="canvas-p">
        <div className="canvas">
         
        </div>
        </div>
      
    </div>
    </div>
     )
 }