let x;
let y;
let w;
let a;
let b; 
let c;
let d;

function setup() {
  createCanvas(800, 800)
  background(240);
}

function draw() {
  
  x = random(width);
  y = random(height);
  a = random(400, 800);
  b = random(80, 260); 
  c = random (0, 800);
  d= random (800, 0);
  
  stroke(0);
  strokeWeight(random(1, 2));
  point(a, b);
  point(b, a);
  point(c, d);
  point(d, c);
  
  stroke(255);
  strokeWeight(random(0.5, 1));
  point(a, b);
  point(b, a);
  point(c, d);
  point(d, c);
}

function keyPressed() {
    saveCanvas("activity1b-image", "jpg");
}