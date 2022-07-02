const canvas = document.getElementById("canvas");
const ctx=canvas.getContext("2d");


canvas.width=window.innerWidth;
canvas.height=window.innerHeight;


let x;
let y;


canvas.addEventListener("touchmove", move);


function draw(x,y){

    ctx.beginPath();
    ctx.arc(x,y,20,0,2*Math.PI);
    ctx.fillStyle="red";
    ctx.fill();
    ctx.closePath();
}


function move(e){
    e.preventDefault();
    console.log(e.touches[0].clientX);
    // ctx.clearRect(0,0,canvas.width,canvas.height);
    // x=x+2;
    // console.log(x);
    x=e.touches[0].clientX;
    y=e.touches[0].clientY;
    draw(x,y);
}