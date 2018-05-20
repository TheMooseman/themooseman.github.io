var canvas = document.getElementById("breakoutCanvas");
var ctx = canvas.getContext("2d");

class brick
{
	constructor(height, width, x, y, status)
	{
	  	this.height = height;
		this.width = width;
		this.x = x;
		this.y = y;
		this.status = status;
		  
	}
}