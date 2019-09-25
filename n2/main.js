// Your code here
let canv = document.createElement('canvas');
let ctx = canv.getContext('2d');


canv.width = window.innerWidth;
canv.height = window.innerHeight;


let a = window.innerWidth/2;
let b = window.innerHeight/2;


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
    ctx.strokeStyle= 'blue';
    
    ctx.strokeRect(a-(100),b-(100),200,200);
}