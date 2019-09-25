// Your code here
let canv = document.createElement('canvas');
let ctx = canv.getContext('2d');


canv.width = window.innerWidth;
canv.height = window.innerHeight;


let a = window.innerWidth/2;
let b = window.innerHeight/2;

let x=30;
let y=30;


document.body.appendChild(canv);



init();

function init (){
loop();   
}


function loop (){
draw();
requestAnimationFrame(loop);

}

function draw (){

    ctx.clearRect(0,0,canv.width,canv.height);

    ctx.beginPath();
    ctx.fillStyle = 'rgb(100,100,100)';
    ctx.arc(x,y,10,0,Math.PI*2,false);
    ctx.fill();
    ctx.closePath();
    x+=1;
    y+=1;
    
}