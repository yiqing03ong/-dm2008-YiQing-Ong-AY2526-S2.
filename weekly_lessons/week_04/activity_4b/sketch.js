let agents = [];
const NUM_START = 100; 

function setup() {
  createCanvas(600, 400);
  noStroke();
  
  for (let i = 0; i < NUM_START; i++) {
    let x = random(width);
    let y = random(height);
    let sz = random(12, 36);
    let speedX = random(-2, 2);
    let speedY = random(-2, 2);
    // TODO: pass any extra properties you plan to use
    agents.push(new Agent(x, y, sz, speedX, speedY));
  }
}

function draw() {
  background(0, 0, 0, 50);

  for (let i = agents.length - 1; i >= 0; i--) {
    agents[i].update();
    agents[i].shrink();
    agents[i].show();
  }
}

function mousePressed() {
  let sz = random(16, 40);
  let speedX = random(-2, 2);
  let speedY = random(-2, 2);
  agents.push(new Agent(mouseX, mouseY, sz, speedX, speedY));
}

function keyPressed() {
  if (key === "c") {
    agents = [];
  }
}

class Agent {
  constructor(x, y, sz, speedX, speedY) {
    this.x = x;
    this.y = y;
    this.sz = sz;

    this.dx = speedX;
    this.dy = speedY;

    this.h = random(360);
    this.a = 200;
    this.isGrowing = true;
    this.growth = random(1, 4);

  }
  
  shrink()  {
    this.sz = sin(frameCount * 0.01 * this.growth) * 40;
  }

  update() {
    this.x += this.dx;
    this.y += this.dy;

    if (this.x > width) {
      this.x = 0;
    }
    if (this.x < 0) {
      this.x = width;
    }
    if (this.y > height) {
      this.y = 0;
    }
    if (this.y < 0) {
      this.y = height;
    }

    if (this.x < 0 || this.x > width) {
      this.dx *= -1;
    }
    if (this.y < 0 || this.y > height) {
      this.dy *= -1;
    }

    this.life -= 1;
    
    let d = dist(this.x, this.y, mouseX, mouseY);
if (d < 80) {
  let angle = atan2(this.y - mouseY, this.x - mouseX);
  this.dx += cos(angle) * 0.5;
  this.dy += sin(angle) * 0.5;
}
  }

  show() {
    fill(50 + (this.h % 150), 80, 200, this.a);
    ellipse(this.x, this.y, this.sz);
  }
}
