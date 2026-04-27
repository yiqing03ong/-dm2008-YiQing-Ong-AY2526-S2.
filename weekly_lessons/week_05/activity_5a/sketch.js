let balls = [];

function setup() {
  createCanvas(400, 400);

  balls.push(new Ball(100, 200));
  balls.push(new Ball(300, 200));
}

function draw() {
  background(20, 15);

  let dx = balls[0].pos.x - balls[1].pos.x;
  let dy = balls[0].pos.y - balls[1].pos.y;

  let scaledDx = dx / 120;
  let scaledDy = dy / 40;

  let d = sqrt(scaledDx * scaledDx + scaledDy * scaledDy);

  let colliding = d < 1;

  for (let i = 0; i < balls.length; i++) {
    balls[i].move();
    balls[i].show(colliding);
  }
}

class Ball {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(random(-2, 2), random(-2, 2));
    this.r = 30;
  }

 move() {
  this.pos.add(this.vel);

  // bounce off left/right walls
  if (this.pos.x > width - this.r) {
    this.pos.x = width - this.r;
    this.vel.x *= -1;
  }
  if (this.pos.x < this.r) {
    this.pos.x = this.r;
    this.vel.x *= -1;
  }

  // bounce off top/bottom walls
  if (this.pos.y > height - this.r) {
    this.pos.y = height - this.r;
    this.vel.y *= -1;
  }
  if (this.pos.y < this.r) {
    this.pos.y = this.r;
    this.vel.y *= -1;
  }
}

  show(colliding) {
    if (colliding) {
      fill(255, 80, 80); // red when touch
    } else {
      fill(100, 180, 220); // normal color
    }

    noStroke();
    ellipse(this.pos.x, this.pos.y, 120, 40);
  }
}