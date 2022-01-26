import { useEffect, useState } from "react"

export default function Minigame(props){
    const [gamePlayed, setGamePlayed] = useState(false)
    useEffect(() => {
    if(!gamePlayed){
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
            blueFish.src =  "http://www.clker.com/cliparts/K/H/j/V/a/d/blue-fish-md.png" 
            blueFish.alt="blue fish" 
            blueFish.className="blue-fish" 
            blueFish.style.position = "absolute"
            blueFish.style.left = Math.floor(Math.random()*900)+"px"
            blueFish.style.top = Math.floor((Math.random()*400)+210)+"px"
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
             greenFish.src =  "http://www.clker.com/cliparts/v/n/f/E/3/o/green-fish-md.png" 
             greenFish.alt="green fish" 
             greenFish.className="green-fish" 
             greenFish.style.position = "absolute"
             greenFish.style.left = Math.floor(Math.random()*900)+"px"
             greenFish.style.top = Math.floor((Math.random()*400)+210)+"px"
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
                purpleFish.src =  "http://www.clker.com/cliparts/I/r/6/x/I/d/purple-fish-md.png" 
                purpleFish.alt="purple fish" 
                purpleFish.className="purple-fish" 
                purpleFish.style.position = "absolute"
                purpleFish.style.left = Math.floor(Math.random()*900)+"px"
                purpleFish.style.top = Math.floor((Math.random()*400)+210)+"px"
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
                redFish.src =  "http://www.clker.com/cliparts/o/4/q/M/a/Q/red-fish-md.png" 
                redFish.alt="red fish" 
                redFish.className="red-fish" 
                redFish.style.position = "absolute"
                redFish.style.left = Math.floor(Math.random()*900)+"px"
                redFish.style.top = Math.floor((Math.random()*400)+210)+"px"
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
           
           setInterval(changeCol,1500)
           setTimeout(function(){
               clearInterval(changeCol)
               document.querySelector('.minig-page').innerHTML = `<p>Game over! You caught ${fish} fish!</p><button onClick={window.location.reload()} style="margin-left:440px;">Click here to play again.</button>`
               //here there should be a line to the user 
               // you won this many coins!
               //then it should use the currency state that should be received in props and update that state
            }, 30000)
    
           
          
           setGamePlayed(true)
        }
       

       
      }, []);
     return(
         <div>
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