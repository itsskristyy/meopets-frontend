import { useEffect, useState } from "react"

export default function Minigame(){
    const [gamePlayed, setGamePlayed] = useState(false)
    useEffect(() => {
        if(!gamePlayed){
            const color = ['blue', 'green', 'red', 'orange']
       let mouseCol = color[Math.floor(Math.random()*4)]
       const allFish = []
      
           let points = 0
           for(let i=0;i<10;i++){
           // document.querySelector('.canvas-p').cursor = "url(http://www.javascriptkit.com/dhtmltutors/cursor-hand.gif), auto"
            let blueFish = document.createElement('img')
            blueFish.src =  "http://www.clker.com/cliparts/K/H/j/V/a/d/blue-fish-md.png" 
            blueFish.alt="blue fish" 
            blueFish.className="blue-fish" 
            blueFish.style.position = "absolute"
            blueFish.style.left = Math.floor(Math.random()*900)+"px"
            blueFish.style.top = Math.floor((Math.random()*400)+210)+"px"
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
           document.querySelector(".box-color").style.backgroundColor = mouseCol
           
            setInterval(function(){
                mouseCol = color[Math.floor(Math.random()*4)]
                document.querySelector(".box-color").style.backgroundColor = mouseCol
              },3000)
    
           
          
           setGamePlayed(true)
        }
       

       
      }, []);
     return(
         <div>
    <div className="minig-page">
        <div className="box-color"> </div>
        <h1 className="points">You have: 0 points</h1>
       
        <div className="canvas-p">
        <div className="canvas">
         
        </div>
        </div>
      
    </div>
    </div>
     )
 }