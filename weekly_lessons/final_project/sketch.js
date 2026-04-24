let stars = [];
let connections = [];

let draggedStar = null;
let startStar = null;

let clickColors = [
  [255, 120, 120],
  [120, 200, 255],
  [180, 120, 255],
  [255, 220, 120],
  [120, 255, 180]
];

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < 150; i++) {
    stars.push(new Star(random(width), random(height)));
  }
}

function getStarAt(x, y, ignoreStar = null) {
  for (let s of stars) {
    if (s !== ignoreStar && dist(x, y, s.x, s.y) < 6) {
      return s;
    }
  }
  return null;
}

function mousePressed() {
  let s = getStarAt(mouseX, mouseY);

  if (s) {
    draggedStar = s;
    startStar = s;

    s.t = 0.01;
    s.clickColor = random(clickColors);
  }
}

function mouseDragged() {
  if (draggedStar) {
    draggedStar.x = mouseX;
    draggedStar.y = mouseY;
  }
}

function mouseReleased() {
  if (!startStar) {
    draggedStar = null;
    return;
  }

  let endStar = null;
  let minDist = 999;

  // find nearest star after release 
  for (let s of stars) {
    if (s === startStar) continue;

    let d = dist(mouseX, mouseY, s.x, s.y);

    if (d < 80 && d < minDist) {
      minDist = d;
      endStar = s;
    }
  }

  if (endStar) {
    connections.push([startStar, endStar]);
  }

  draggedStar = null;
  startStar = null;
}

class Star {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.base = random(1, 3);
    this.t = 0;
  }

  update() {
    if (this !== draggedStar) {
      this.x = (this.x + random(-0.05, 0.05) + width) % width;
      this.y = (this.y + random(-0.05, 0.05) + height) % height;
    }

    if (this.t === 0 && random(1) < 0.0002) {
      this.t = 0.01;
    }

    if (this.t > 0) {
      this.t += 0.15;

      if (this.t > TWO_PI) {
        this.t = 0;
      }
    }
  }

  show() {
    let pulse = this.t > 0 ? sin(this.t) : 0;

    let size = this.base + pulse * 3;
    let brightness = 150 + pulse * 100;
    let col = this.clickColor || [255, 255, 255];

    noStroke();

    fill(col[0], col[1], col[2], brightness * 0.25);
    ellipse(this.x, this.y, size * 4);

    fill(col[0], col[1], col[2], brightness);
    ellipse(this.x, this.y, size);

    fill(col[0], col[1], col[2], brightness);
    ellipse(this.x, this.y, size * 0.5);
  }
}

function draw() {
  background(5, 10, 25);

  for (let s of stars) {
    s.update();
    s.show();
  }

  stroke(255, 150);
  strokeWeight(1);

  for (let c of connections) {
    line(c[0].x, c[0].y, c[1].x, c[1].y);
  }
}

function keyPressed() {
  if (keyCode === ESCAPE) {
    connections = [];
  }
}