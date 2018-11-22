function randomNum (num)
{
    let final = Math.round(Math.random()*(num+1));
    while (final % 20 != 0)
    {
        final = Math.round(Math.random()*(num+1));
    }
    return final;
}
let snakeX = 0;
let snakeY = 0;
let snakeSize = 20;
let appleX = randomNum(400-20+1);
let appleY = randomNum(400-20+1);
let appleSize = 20;
let eaten = false;
let loops = 0;
let appleColor = "red";
function setup()
{
    createCanvas(500,500);
}

function draw()
{
    loops++;
    background(0,0,0);
    fill(255);
    rect(snakeX, snakeY, snakeSize, 20);
    fill(appleColor);
    rect(appleX, appleY, appleSize, appleSize);
    keyboardMove();
    if (appleX == snakeX && appleY == snakeY)
    {
        eatApple();
    }
    if (eaten)
    {
        appleX = randomNum(width-appleSize+1);
        appleY = randomNum(height-appleSize+1);
        eaten = false;
    }
}

function keyboardMove()
{
    if (keyIsDown(RIGHT_ARROW) && snakeX < width- snakeSize && loops % 10 ==0)
    {
        snakeX+=20;
    }
    else if (keyIsDown(LEFT_ARROW) && snakeX > 0 && loops % 10 == 0)
    {
        snakeX-=20;
    }
    else if (keyIsDown(UP_ARROW) && snakeY > 0 && loops % 10 == 0)
    {
        snakeY-=20;
    }
    else if (keyIsDown(DOWN_ARROW) && snakeY < height - snakeSize && loops % 10 == 0)
    {
        snakeY+=20;
    }
}

function eatApple()
{
    eaten = true;
    snakeSize+=20;
}