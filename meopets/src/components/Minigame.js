import { useEffect, useState } from "react"

export default function Minigame(){
    const [gamePlayed, setGamePlayed] = useState(false)
    useEffect(() => {
        if(!gamePlayed){
            let canvas = document.querySelector('.canvas')
            let ctx = canvas.getContext("2d")
            let x = canvas.width/2;
            let y = canvas.height-30;
            let dx = [2,-2]
            let dy = [2,-2]
            
            function drawBall() {
                ctx.beginPath();
                ctx.arc(x, y, 10, 0, Math.PI*2);
                ctx.arc(x-2, y-9, 10, 0, Math.PI*2);
                ctx.fillStyle = "#0095DD";
                ctx.fill();
                ctx.closePath();
            }
            function draw() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                drawBall();
                x += dx[Math.floor(Math.random()*2)];
                y += dy[Math.floor(Math.random()*2)];

            }
            setInterval(draw, 100);
        }
       
      }, []);
     return(
    <div>
        <h1>HELLO</h1>
        <canvas className="canvas"></canvas>
      
    </div>
     )
 }