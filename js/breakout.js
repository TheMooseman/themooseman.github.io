var canvas = document.getElementById("breakoutCanvas");
var ctx = canvas.getContext("2d");
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 1.5;
var dy = -1.5;
var ballRadius = 10;
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width-paddleWidth)/2;
var rightPressed = false;
var leftPressed = false;
var brickRowCount = 3;
var brickColumnCount = 5;
var brickRowCountOrig = 3;
var brickColumnCountOrig = 5;
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft = 30;
var bricks = [];
var score = 0;
var lives = 3;
var currentLevel = 1;
var prevLevel = 1;


function generateLevel()
{
	
	bricks = [];
	paddleX = ((canvas.width - paddleWidth)/2);
	dx = .5;
	dy = -1.5;

	for(var i = 0; i < brickColumnCount; i++)
	{
		for(var r = 0; r < brickRowCount; r++)
		{
			var newBrick = new brick
			( 
			( ((canvas.height/2) / brickRowCount)/2), 
			( (canvas.width / brickColumnCount) * 5/6),
			( (8 + (canvas.width / brickColumnCount) * i)), 
			( 30+((canvas.height / 2) / brickRowCount) * r), 
			true 
			);
			bricks.push(newBrick);
		}
	}
}

generateLevel();

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e)
{
	if(e.keyCode == 39)
	{
		rightPressed = true;
	}
	else if(e.keyCode == 37)
	{
		leftPressed = true;
	}
}

function keyUpHandler(e)
{
	if(e.keyCode == 39)
	{
		rightPressed = false;
	}
	else if(e.keyCode == 37)
	{
		leftPressed = false;
	}
}

function drawBricks()
{
	for(var i = 0; i < bricks.length; i++)
	{
		if(bricks[i].status == true)
		{
		var currentBrick = bricks[i];
        ctx.beginPath();
        ctx.rect(currentBrick.x, currentBrick.y, currentBrick.width, currentBrick.height);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
		ctx.closePath();
		}
	}
}

function drawPaddle()
{
    ctx.beginPath();
    ctx.rect(paddleX, (canvas.height-paddleHeight - 10), paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function drawBall()
{
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#83b1fc";
    ctx.fill();
    ctx.closePath();
}

function collisionDetection()
{
	for(var i = 0; i < bricks.length; i++)
	{
		var b = bricks[i];
		if(b.status == true)
		{
			if(x > b.x && x < (b.x + b.width) && y > b.y && y < (b.y + b.height))
			{
				dy = (-dy * 1.04) ;
				b.status = false;
				score++;
			}
		}
	}
}

function drawScore()
{
	ctx.font = "16px Arial";
	ctx.fillStyle = "0095DD";
	ctx.fillText("Score: " + score, 380, 20);
}

function drawLives()
{
	ctx.font = "16px Arial";
	ctx.fillStyle = "0095DD";
	ctx.fillText("Lives: " + (lives - 1), 210, 20);
}

function drawLevel()
{
	ctx.font = "16px Arial";
	ctx.fillStyle = "0095DD";
	ctx.fillText("Level: " + currentLevel, 8, 20);
}

function checkWinScenario()
{
	if(score == bricks.length)
	{
		alert("YOU WON! ONTO LEVEL " + (currentLevel + 1) +"!");
		score = 0;
		currentLevel++;
		prevLevel = --currentLevel;
		brickColumnCount = (brickColumnCountOrig + currentLevel);
		brickRowCount = (brickRowCountOrig + currentLevel);
		generateLevel();	
	}
}

function drawBackground()
{
	ctx.beginPath();
	ctx.rect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#C0C0C0";
    ctx.fill();
	ctx.closePath();
}

function draw()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
	
	drawBackground();
	drawBall();
	drawBricks();
	drawPaddle();
	drawScore();
	drawLevel();
	drawLives();
	collisionDetection();
	checkWinScenario();
	
    
	if((x + dx) > (canvas.width - ballRadius) || (x + dx) < ballRadius)
	{
		dx = -dx;
	}
	if(y + dy < ballRadius)
	{
		dy = -dy;
	}
	else if(y + dy > canvas.height - ballRadius - 10)
	{
		if(x > paddleX && x < paddleX + paddleWidth) 
		{
			dy = (-dy - .1);
		}
		else
		{
			lives--;
			if(!lives)
			{
				alert("Game Over");
				var alert1 = 1;
				if(alert1 == 1)
				{
				document.location.reload();
				}
			}
			else
			{
				x = canvas.width/2;
				y = canvas.height/2;
				dx = .5;
				dy = -1.5;
				paddleX = ((canvas.width - paddleWidth)/2);
			}
		}
	}
	if(rightPressed && paddleX < canvas.width-paddleWidth)
	{
        paddleX += 4;
    }
	else if(leftPressed && paddleX > 0)
	{
        paddleX -= 4;
    }

	x += dx;
	y += dy;

}



setInterval(draw, 6.94);