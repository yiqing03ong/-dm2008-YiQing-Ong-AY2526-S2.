let cookie1;
let cookie2; 
let cookie3; 

function setup() {
  createCanvas(400, 400);
  noStroke();
  cookie1 = new Cookie("chocolate", 80, width / 2, height / 2);
  cookie2 = new Cookie("vanilla", 60, width * 1/4, height / 2);
  cookie3 = new Cookie("strawberry", 70, width * 4/5, height / 2);
}

function draw() {
  background(230);
  fill('#E66E6E');
  ellipse(30, 40, width / 10, height / 10);
  ellipse(90, 40, width / 10, height / 10);
  fill('#5E5E5E');
  rect(20, 70, width * 9/10, height * 7/10);
  fill('#A2A0A0');
  rect(20, 250, width * 9/10, 30);
  
  if (keyIsDown(LEFT_ARROW)) {
    cookie1.x -= 3;
    cookie2.x -= 3;
    cookie3.x -= 3;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    cookie1.x += 3;
    cookie2.x += 3;
    cookie3.x += 3;
  }

  if (keyIsDown(UP_ARROW)) {
    cookie1.y -= 3;
    cookie2.y -= 3;
    cookie3.y -= 3;
  }

  if (keyIsDown(DOWN_ARROW)) {
    cookie1.y += 3;
    cookie2.y += 3;
    cookie3.y += 3;
  }
  
  cookie1.show();
  cookie2.show();
  cookie3.show();
}

class Cookie {
  constructor(flavor, sz, x, y) {
    this.flavor = flavor;
    this.sz = sz;
    this.x = x;
    this.y = y;
    
    this.chips = [];

    for (let i = 0; i < 5; i++) {
      let angle = random(TWO_PI);
      let radius = random(this.sz * 0.1, this.sz * 0.35);

      this.chips.push([
        cos(angle) * radius,
        sin(angle) * radius
      ]);
    }   
  }

  show() {
    switch (this.flavor) {
      case "chocolate":
        fill(196, 146, 96);
        break;
      case "vanilla":
        fill(255, 223, 150);
        break;
      case "strawberry":
        fill(255, 180, 200);
        break;
      default:
        fill(220, 180, 120);
    }
    
    ellipse(this.x, this.y, this.sz);
    fill(80, 50, 30);
    noStroke();
    
    for (let i = 0; i < this.chips.length; i++) {
      let chip = this.chips[i];

      ellipse(
        this.x + chip[0],
        this.y + chip[1],
        this.sz * 0.1
      );
    }
  }

  move() {
    if (keyCode === LEFT_ARROW) {
      this.x -= 10;
    } else if (keyCode === RIGHT_ARROW) {
      this.x += 10;
    } else if (keyCode === UP_ARROW) {
      this.y -= 10;
    } else if (keyCode === DOWN_ARROW) {
      this.y += 10;
    }
  }

  randomFlavor() {
    let flavors = ["chocolate", "vanilla", "strawberry"];
    let i = floor(random(flavors.length));
    this.flavor = flavors[i];
  }
}

function mousePressed() {
  cookie1.randomFlavor();
  cookie2.randomFlavor();
  cookie3.randomFlavor();
}