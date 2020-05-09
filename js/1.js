const log = (g) => { console.log(g) };

let canvas = document.createElement('canvas'),
    ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

canvas.style.position = 'absolute';
canvas.style.left = 0;
canvas.style.top = 0;
canvas.style.zIndex = 1;
canvas.style.backgroundColor = 'rgba(0,0,0,0.85)';
document.body.appendChild(canvas);

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

let recAnimFrame, anim = true,
    i;
let numStars = 200,
    stars = [];

let star = new Stars(numStars);
star.initStars(stars);


window.addEventListener('load', () => { start() });
window.addEventListener('dblclick', () => { cancelAnimationFrame(recAnimFrame) });
let stop = document.getElementById('stopCanvas');
stop.addEventListener('click', () => { cancelAnimationFrame(recAnimFrame) });


function start() {
    upDate();
    draw();
    recAnimFrame = requestAnimationFrame(start);
}

function upDate() {
    star.move(stars);
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    star.drawArcStroke(stars);

}