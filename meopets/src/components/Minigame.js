import { useEffect, useState } from "react"

export default function Minigame(){
    const [gamePlayed, setGamePlayed] = useState(false)
    useEffect(() => {
       const color = ['blue', 'green', 'red', 'orange']
       const mouseCol = color[Math.floor(Math.random()*4)]
       const allFish = []
      
           let points = 0
           for(let i=0;i<10;i++){
            let blueFish = document.createElement('img')
            blueFish.src =  "http://www.clker.com/cliparts/K/H/j/V/a/d/blue-fish-md.png" 
            blueFish.alt="blue fish" 
            blueFish.className="blue-fish" 
            blueFish.style.position = "absolute"
            blueFish.style.left = Math.floor(Math.random()*900)+"px"
            blueFish.style.top = "200px"
            blueFish.onmouseover=() =>{
             if(mouseCol === 'blue'){
                 blueFish.style.visibility = "hidden"
                 points++
                 document.querySelector('.points').textContent = `You have: ${points} points`
               
             }
             }
            allFish.push(blueFish)
           }    
           for(let i=0; i<allFish.length; i++){
            document.querySelector('.canvas').appendChild(allFish[i])
           }
      

       
      }, []);
     return(
    <div>
        <h1 className="points">You have: 0 points</h1>
        <div className="canvas">
         
        </div>
      
    </div>
     )
 }