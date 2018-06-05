var canvas = document.getElementById("gameCanvas");
var ctx = canvas.getContext("2d");

var WIDTH = canvas.width;
var HEIGHT = canvas.height;

//origins
var xOrigin = WIDTH/2;
var yOrigin = 100;

//line length
var r1 = 100;
var r2 = 100;

//mass
var m1 = 10;
var m2 = 10;

//angle
var a1 = 0;
var a2 = 0;

//new x and y pos
nX = 0;
nY = 0;

//acceleration
var a1A = 0.01;
var a2A = -0.001;

//Velocity
var a1V = 0;
var a2V = 0;

//ball position
var x1 = xOrigin + (r1 * Math.sin(a1));
var y1 = yOrigin + (r1 * Math.cos(a1));
var x2 = x1 + (r2 * Math.sin(a2));
var y2 = y1 + (r2 * Math.cos(a2));

//tail positions
var tailsX = [];
var tailsY = [];
var oldX1 = 0;
var oldY1 = 0;
var oldX2 = 0;
var oldY2 = 0;

//colors
var r = 0;
var g = 0;
var b = 0;


function drawTopPendulum()
{
	ctx.beginPath();
	ctx.moveTo(xOrigin, yOrigin);
	ctx.lineTo(x1, y1);
	ctx.arc(x1, y1, m1, 0, Math.PI*2);
	ctx.fillStyle = "#d13866";
	ctx.fill();
	ctx.closePath();
}

function drawBottomPendulum()
{
	ctx.beginPath();
	ctx.moveTo(x1, y1);
	ctx.lineTo(x2, y2);
	ctx.arc(x2, y2, m2, 0, Math.PI*2);
	ctx.fillStyle = "#d13866";
	ctx.fill();
	ctx.closePath();
}

function rotate(cX, cY, x, y, angle)
{
	/*	
		(cx,cy) is the location that the object will rotate around
		(x,y) is the location of the object that is rotating
		angle is the angle in degrees
	*/
	
	/* 
	Old version
	var radians = (Math.PI / 180) * angle;
    cos = Math.cos(radians);
    sin = Math.sin(radians);
    nx = (cos * (x - cx)) - (sin * (y - cy)) + cx;
	ny = (sin * (x - cx)) + (cos * (y - cy)) + cy; */

	//new version, easier to read, same formula
	var radians = angle * Math.PI / 180;
	cos = Math.cos(radians);
	sin = Math.sin(radians);
	dX = x - cX;
	dY = y - cY; 
	nX = cos * dX - sin * dY + cX;
	nY = sin * dX + cos * dY + cY;
	return [nX, nY];
	
	/*
		Formula of the rotating around a point function
		rotate(origin, point, angle)
		var radians = angle * Math.PI / 180.0
		cos = Math.cos(radians)
		sin = Math.sin(radians)
		dX = point.x - origin.x
		dY = point.y - origin.y
		x: cos * dX - sin * dY + origin.x
		y: sin * dX + cos * dY + origin.y
	*/
}

function resetAngle()
{
	if(a1 >= 360)
	{
	a1 = 0;
	}
	if(a2 >= 360)
	{
	a2 = 0;
	}

	//rotate pendulum one
	x1 = (rotate(xOrigin, yOrigin, x1, y1, (a1))[0]);
	y1 = (rotate(xOrigin, yOrigin, x1, y1, (a1))[1]);
	
	//rotate pendulum two
	x2 = (rotate(x1, y1, x2, y2, (a2))[0]);
	y2 = (rotate(x1, y1, x2, y2, (a2))[1]);
}

function addTail()
{
	//if there is a new position, place a new dot
	if(x1 != oldX1)
	{
	tailsX.push(x1);
	oldX1 = x1;
	}
	if(y1 != oldY1)
	{
	tailsY.push(y1);
	oldY1 = y1;
	}
	
	if(x2 != oldX2)
	{
	tailsX.push(x2);
	oldX2 = x2;
	}
	if(y2 != oldY2)
	{
	tailsY.push(y2);
	oldY2 = y2;
	}
}

function rainbow()
{
	/* for(i = 0; i < tailsX.length; i++)
	{
		z = 1;
		while(z > i/255)
		{
			r++;
			g = g + g*.5;
			b = b + b*.3;
		}
		while(z < i/255)
		{
			r--;
			g = g - g*.5;
			b = b - b*.3;
		}
	} */
}

function componentToHex(c)
{
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b)
{
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function drawTail()
{
	for(i = 0; i < tailsX.length; i++)
	{
	ctx.beginPath();
	ctx.arc(tailsX[i], tailsY[i], 4, 0, Math.PI*2);
	ctx.fillStyle = rgbToHex(r,g,b);
	ctx.fill();
	ctx.closePath();
	}
}

function drawBackground()
{
	ctx.beginPath();
	ctx.rect(0, 0, WIDTH, HEIGHT);
	ctx.fillStyle = 'white';
	ctx.fill();
	ctx.closePath();
}

function draw()
{
	
	drawBackground();

	//first pendulum acceleration formula
	a1 += a1V;
	a1V += a1A;
	var g = 0.7;
	var num1 = -g * (2 * m1 + m2) * Math.sin(a1);
	var num2 = -m2 * g * Math.sin(a1 - (2 * a2));
	var num3 = -2 * Math.sin(a1 - a2) * m2;
	var num4 = (a2V*a2V * r2) + (a1V*a1V * r1 * Math.cos(a1-a2));
	var den1 = r1 * (2 * m1 + m2 - m2 * Math.cos(2 * a1 - 2 * a2));
	a1A = (num1 + num2 + (num3 * num4)) / den1;

	

	//second pendulum acceleration formula
	a2 += a2V;
	a2V += a2A;
	var num21 = 2 * Math.sin(a1 - a2);
	var num22 = (a1V*a1V * r1 * (m1 + m2));
	var num23 = g * (m1 + m2) * Math.cos(a1);
	var num24 = a2V*a2V * r2 * m2 * Math.cos(a1-a2);
	var den2 = r2 * (2 * m1 + m2 - m2 * Math.cos(2*a1 - 2 * a2));
	a2A = (num21 * (num22 + num23 + num24)) / den2;

	resetAngle();

	addTail();
	//rainbow();
	drawTail();

	drawTopPendulum();
	drawBottomPendulum();

	//console.log([x1, y1, x2, y2]);
	
	window.requestAnimationFrame(draw);
	
}

//setInterval(draw, 6.94);
window.requestAnimationFrame(draw);