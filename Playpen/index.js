const canvas = document.querySelector('.mycanvas');
const container = canvas.parentNode.getBoundingClientRect();
const width = canvas.width = container.width;
const height = canvas.height = container.height;
const ctx = canvas.getContext("2d");
ctx.fillStyle = "rgb(0,254,0)";
ctx.fillRect(0,0,width,height);

ctx.fillStyle = "rgb(255,0,0)";
ctx.fillRect(50,50,100, 150);

ctx.fillStyle = "rgb(0,0,255,0.5)";
ctx.fillRect(75,75,100,100);

ctx.strokeStyle = "rgb(255,255,255)";
ctx.strokeRect(25,25,175,200);

ctx.fillStyle = "rgb(0,0,0)";
ctx.lineWidth = 5;
ctx.beginPath();
ctx.moveTo(150,150);
ctx.moveTo(200,200);
ctx.fill();