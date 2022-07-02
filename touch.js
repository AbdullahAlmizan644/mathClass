const canvas = document.getElementById("canvas");
const ctx=canvas.getContext("2d");


canvas.width=window.innerWidth;
canvas.height=window.innerHeight;


let x;
let y;
let width;
let height;
let startX;
let startY;
let isDrawing=false;


canvas.addEventListener("touchstart", startDraw);

canvas.addEventListener("touchmove",draw);

canvas.addEventListener("touchend",endDrawing);


function draw(e){
    e.preventDefault();
    ctx.clearRect(0,0,canvas.width,canvas.height);
    if(!isDrawing){
        return;
    }
    width=e.touches[0].clientX-startX;
    height=e.touches[0].clientY-startY;
    ctx.beginPath();
    // ctx.arc(x,y,11,0,2*Math.PI);
    ctx.rect(startX,startY,width,height);
    ctx.stroke();
    ctx.closePath();
}




function startDraw(e){
    e.preventDefault();
    startX=e.touches[0].clientX;
    startY=e.touches[0].clientY;
    isDrawing=true;

    
}


function endDrawing(e){
    e.preventDefault();
    isDrawing=false;

}


function move(e){
    e.preventDefault();
    console.log(e.touches[0].radiusX);
    x=e.touches[0].clientX-width/2;
    y=e.touches[0].clientY-height/2;
    width=e.touches[0].radiusX*4;
    height=e.touches[0].radiusY*4;
    draw();
}