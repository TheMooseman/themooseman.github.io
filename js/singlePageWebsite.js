var canvas = document.getElementById("Canvas");
var ctx = canvas.getContext("2d");

var WIDTH = canvas.width;
var HEIGHT = canvas.height;

var buttonsArray = [false, false, false, false, false, false, false, false, false];
var mousePressed = false;

document.onmousedown = function(e) {
    buttonsArray[e.button] = true;
	mousePressed = true;
	console.log("mouse pressed");
};

document.onmouseup = function(e) {
    buttonsArray[e.button] = false;
    mousePressed = false;
};

document.oncontextmenu = function() {
    return false;
}

function changeCanvasSize()
{
	ctx.canvas.width = window.innerWidth;
	ctx.canvas.height = window.innerHeight;
}



function checkKey(e) {

    e = e || window.event;

	if (e.keyCode == '38')
	{
        // up arrow
    }
	else if (e.keyCode == '40')
	{
		// down arrow
		page1 = [WIDTH, -HEIGHT];
	   	page2 = [WIDTH*4, HEIGHT];
		page3 = [WIDTH, HEIGHT];
    }
	else if (e.keyCode == '37')
	{
	   // left arrow
		page1 = [WIDTH, HEIGHT];
	   	page2 = [WIDTH*4, HEIGHT];
		page3 = [WIDTH, HEIGHT*4];
    }
	else if (e.keyCode == '39')
	{
	   // right arrow
		page1 = [-WIDTH, HEIGHT];
		page2 = [WIDTH, HEIGHT];
		page3 = [-WIDTH, HEIGHT*2];
    }

}

changeCanvasSize();
var WIDTH = canvas.width;
var HEIGHT = canvas.height;

var page1 = [WIDTH, HEIGHT];
var page2 = [WIDTH*4, HEIGHT];
var page3 = [WIDTH, HEIGHT*4];

function draw()
{
	//background
	ctx.fillStyle = 'red';
	ctx.fillRect(0, 0, WIDTH, HEIGHT);
	
	document.onkeydown = checkKey;

	//page 1 dot
	ctx.beginPath();
	ctx.fillStyle = 'blue';
	ctx.arc(page1[0]/2, page1[1]/2, 15, 0, Math.PI*2);
	ctx.fill();
	ctx.closePath();

	//page 2 dot
	ctx.beginPath();
	ctx.fillStyle = 'green';
	ctx.arc(page2[0]/2, page2[1]/2, 15, 0, Math.PI*2);
	ctx.fill();
	ctx.closePath();

	//page 3 dot
	ctx.beginPath();
	ctx.fillStyle = 'orange';
	ctx.arc(page3[0]/2, page3[1]/2, 15, 0, Math.PI*2);
	ctx.fill();
	ctx.closePath();

	window.requestAnimationFrame(draw);
}

window.requestAnimationFrame(draw);