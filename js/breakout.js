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
var brickRowCountOrig = 5;
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

for(var i = 0; i < brickColumnCount; i++)
{
	bricks[i] = [];
	for(var r = 0; r < brickRowCount; r++)
	{
		bricks[i][r] = { x: 0, y: 0, status: 1};
	}
}

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
	for(var i = 0; i < brickColumnCount; i++)
	{
		for(var r = 0; r < brickRowCount; r++)
		{
			if(bricks[i][r].status == 1)
			{
			var brickX = (i*(brickWidth+brickPadding))+brickOffsetLeft;
            var brickY = (r*(brickHeight+brickPadding))+brickOffsetTop;
            bricks[i][r].x = brickX;
            bricks[i][r].y = brickY;
            ctx.beginPath();
            ctx.rect(brickX, brickY, brickWidth, brickHeight);
            ctx.fillStyle = "#0095DD";
            ctx.fill();
			ctx.closePath();
			}
		}
	}
}

function drawPaddle()
{
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
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
	for(var i = 0; i < brickColumnCount; i++)
	{
		for(var r = 0; r < brickRowCount; r++)
		{
			var b = bricks[i][r];
			if(b.status == 1)
			{
				if(x > b.x && x < (b.x + brickWidth) && y > b.y && y < (b.y + brickHeight))
				{
					dy = -dy;
					b.status = 0;
					score++;
				}
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
	ctx.fillText("Lives: " + lives, (canvas.width/2 - 30), 20);
}

function drawLevel()
{
	ctx.font = "16px Arial";
	ctx.fillStyle = "0095DD";
	ctx.fillText("Level: " + currentLevel, 8, 20);
}

function checkWinScenario()
{
	if(score == brickRowCount*brickColumnCount)
	{
		alert("YOU WON! NEXT LEVEL");
		score = 0;
		currentLevel++;
		//prevLevel = currentLevel--;
		brickColumnCount = (brickColumnCountOrig + currentLevel);
		brickRowCount = (brickRowCountOrig + currentLevel);
		
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
	else if(y + dy > canvas.height - ballRadius)
	{
		if(x > paddleX && x < paddleX + paddleWidth) 
		{
			dy = -dy;
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
				dx = 1.5;
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

	//requestAnimationFrame(draw);

}



setInterval(draw, 6.94);