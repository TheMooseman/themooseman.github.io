var canvas = document.getElementById("Canvas");
var ctx = canvas.getContext("2d");

var WIDTH = canvas.width;
var HEIGHT = canvas.height;

function draw()
{
	ctx.beginPath();
	ctx.rect(WIDTH/2, HEIGHT/2, WIDTH, HEIGHT);
	ctx.fillstyle = "#4c6a9b";
	ctx.fill();
	ctx.closePath();
}
