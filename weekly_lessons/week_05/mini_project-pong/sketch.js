/* ----------------- Globals ----------------- */
let leftPaddle, rightPaddle, ball, winner;
let p1Score = 0;
let p2Score = 0;
let gameStart = false;  
let gameWin = false; 


/* ----------------- Setup & Draw ----------------- */
function setup() {
  createCanvas(640, 360);
  noStroke();
  
  // paddles: x, y, w, h
  leftPaddle  = new Paddle(30, height/2 - 30, 10, 60);
  rightPaddle = new Paddle(width - 40, height/2 - 30, 10, 60);
  
  // ball starts center
  ball = new Ball(width/2, height/2, 8); 
}

function draw() {
  background('#3C638E'); //bg color
  
  //Start text
  if (!gameStart) {
      drawCourt();
      fill('#dfff4f');
      textAlign(CENTER);
      textSize(34)
      text('Press SPACE to start!', width/2, height/2);
      return; 
      }
  
  //Win text
  if (gameWin) {
    drawCourt();
    fill('#dfff4f');
    text(winner + ' wins! \n Press SPACE for a rematch!', width/2, height/2);
    return;
  }
  
  handleInput();
  
  // 2) update world
  leftPaddle.update();
  rightPaddle.update();
  ball.update();
  
  // 3) handle collisions
  ball.checkWallBounce();                // top & bottom
  ball.checkPaddleBounce(leftPaddle);
  ball.checkPaddleBounce(rightPaddle);
  
  // 4) draw everything
  drawCourt();
  leftPaddle.show();
  rightPaddle.show();
  ball.show();
}

/* ----------------- Input ----------------- */
function keyPressed() {
  if(key == ' ' && !gameStart) {
     gameStart = true;
     }
  //Win & restart
  if (gameWin && key == ' ') {
    p1Score = 0;  
    p2Score = 0;
    gameWin = false; 
    gameStart = false; 
    ball.pos.set(width/2, height/2);
    ball.vel.set(0, 0);
  }
}

function handleInput() {
  // - Set paddle.vy to positive (down) or negative (up) values
  // Read up on keyIsDown() in the p5js Reference
  if (keyIsDown(87)) { leftPaddle.vy = -leftPaddle.speed; }  
  if (keyIsDown(83)) { leftPaddle.vy = leftPaddle.speed; }   
  if (keyIsDown(UP_ARROW)) { rightPaddle.vy = -rightPaddle.speed; }
  if (keyIsDown(DOWN_ARROW)) { rightPaddle.vy = rightPaddle.speed; }
}

function keyReleased() { //maybe delete this so the paddle continues moving after the keys are released?
  leftPaddle.vy  = 0;
  rightPaddle.vy = 0;
}

function checkWin() {
  if (p1Score >= 4) {
        winner = 'Player 1';
        gameWin = true;
        ball.vel.set(0, 0);
    } else if (p2Score >= 4) {
        winner = 'Player 2';
        gameWin = true;
        ball.vel.set(0, 0);
  }
}

/* ----------------- Classes ----------------- */
class Paddle {
  constructor(x, y, w, h) {
    this.pos = createVector(x, y);
    this.w = w;
    this.h = h;
    this.vy = 0;     // current velocity
    this.speed = 7;  // how fast the paddle moves, INCREASED SPEED
  }
  
  update() {
    // basic vertical movement; constrained to canvas
    this.pos.y += this.vy;
    this.pos.y = constrain(this.pos.y, 0, height - this.h);
  }
  
  show() {
    fill(220); //paddle color
    rect(this.pos.x, this.pos.y, this.w, this.h, 2);
  }
}

class Ball {
  constructor(x, y, r) {
    this.pos = createVector(x, y);
    this.r = r;
    
    this.speedMultiplier = 1.0;
    this.speedIncrease = 0.1;
    
    // separate speed components (easier for students to adjust)
    this.xSpeed = 3.5;  // horizontal speed (try 2-5)
    this.ySpeed = 2.0;  // vertical speed (try 1-4)
    
    this.vel = createVector(0, 0); // actual velocity vector
    
    // TODO (students): uncomment to start ball moving immediately
    this.vel.x = random([-1, 1]) * this.xSpeed;
    this.vel.y = random([-1, 1]) * this.ySpeed;
  }
  
  update() {
    this.pos.add(this.vel);
  }
  
  checkWallBounce() {
    // bounce off top/bottom walls
    if (this.pos.y - this.r <= 0 || this.pos.y + this.r >= height) {
      this.vel.y *= -1;
      this.pos.y = constrain(this.pos.y, this.r, height - this.r);
    }
    
    // Detect when ball passes left or right edge
    //Scoring
    if (this.pos.x + this.r < 0) { 
      p2Score++; 
      checkWin();
      if (!gameWin) this.reset();
      console.log("Player 2 scores");
    }
    if (this.pos.x - this.r > width) { 
      p1Score++;  
      checkWin();
      if (!gameWin) this.reset();
      console.log("Player 1 scores");
    }
  }
  
  checkPaddleBounce(paddle) {
    // Box collision detection (simple & forgiving)
    const withinY = this.pos.y > paddle.pos.y && this.pos.y < paddle.pos.y + paddle.h;
    const withinX = this.pos.x + this.r > paddle.pos.x && this.pos.x - this.r < paddle.pos.x + paddle.w;
    
    if (withinX && withinY) {
      // push ball out so it doesn't get stuck
      if (this.vel.x < 0) {
        this.pos.x = paddle.pos.x + paddle.w + this.r;
      } else {
        this.pos.x = paddle.pos.x - this.r;
      }
      this.vel.x *= -1; // reflect horizontally
      this.speedMultiplier = this.speedMultiplier + this.speedIncrease;
      this.vel.x = this.vel.x * this.speedMultiplier;  
      this.vel.y = this.vel.y * this.speedMultiplier; 
      
      this.vel.y += (this.pos.y - paddle.pos.y - paddle.h/2) * 0.1;
      
      // TODO (students): add some angle variation based on where ball hits paddle DONE
    }
  }
  
  show() {
    fill('#dfff4f'); //ball color
    circle(this.pos.x, this.pos.y, this.r * 2);
  }
  
  reset() {
    // return ball to center and give it a random direction
    this.pos.set(width/2, height/2);
    
    this.speedMultiplier = 1.0;
    
      const xDir = random([-1, 1]); // randomly left or right
      const yDir = random([-1, 1]); // randomly up or down
      this.vel.set(xDir * this.xSpeed, yDir * this.ySpeed);
  }
}

/* ----------------- UI helpers ----------------- */
function drawCourt() {
  // center line (dashed)
  stroke(220); //court line color
  strokeWeight(2);
  noFill();
  for (let y = 10; y < height; y += 18) {
    line(width/2, y, width/2, y + 8);
  }
  rect(2.5, 2.5, 635, 355); //doubles sideline
  line(0, 40, 640, 40); //top singles sideline
  line(0, 320, 640, 320); //bottom singles sideline
  line(160, 3, 160, 357); //service left
  line(480, 3, 480, 357); //service right
  line(160, 180, 480, 180); //centre service line
  line(2.5, 180, 10, 180); //left centre mark
  line(630, 180, 637.5, 180); //right centre mark
  
  stroke(20);
  fill('#dfff4f');
  text(p1Score, 160, 35);
  text(p2Score, 480, 35);
  
  noStroke();
}