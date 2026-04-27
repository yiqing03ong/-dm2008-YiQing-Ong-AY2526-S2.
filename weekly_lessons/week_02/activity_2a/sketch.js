let x = 0;
let y = 0;

let size = 150; 

let bgColor;
let shapeColor; 
let shapeStroke;

let mode = 0; 

let speed; 

function setup() {
  createCanvas(400, 400);
  
  bgColor = color('#F5AFAF');
  
  shapeColor = '#FCF8F8';
  shapeStroke = '#F9DFDF';
  
  speed = 2;
}

function draw() {
  background(bgColor);
  
  fill(shapeColor);
  stroke(shapeStroke);
  strokeWeight(5);
  
  if (mode == 0) {
    ellipse(x, y + 200, size); 
  }
  
  if (mode == 1) {
    rect(x, y + 130, size);
    rect(x + 200, y + 130, size);
  }
  
  if (mode == 2) {
    triangle(x, y + 150, x - 50, y + 210, x + 50, y + 210);
    triangle(x + 150, y + 150, x + 100, y + 210, x + 200, y + 210);
    triangle(x + 300, y + 150, x + 350, y + 210, x + 250, y + 210);
  }
  
  if (mode == 3) {
    arc(x, 150, 100, 100, PI, TWO_PI); //top
    arc(x, 250, 100, 100, 0, PI); //bottom
    arc(x - 50, 200, 100, 100, HALF_PI, PI + HALF_PI); //left
    arc(x + 50, 200, 100, 100, PI + HALF_PI, HALF_PI); //right
    noStroke();
    rect(x - 50, y + 150, 100, 100);
  }
  
  x += speed;
  
  // wrap
  if (x > width + size / 2) {
    x = 0;
  }
    if (x < 0 - size / 2) {
      x = width + size / 2;
    }
}

function keyPressed() {
  switch (key) {
    case '1':
      bgColor = color('#99AD7A');
      shapeColor = '#546B41';
      shapeStroke = '#FFF8EC';
      mode = 1;
      speed = -2; 
      break;
      
    case '2':
      bgColor = color('#6367FF');
      shapeColor = '#8494FF';
      shapeStroke = '#C9BEFF';
      mode = 2; 
      speed = 4; 
      break;
      
    case '3':
      bgColor = color('#FFC300');
      shapeColor = '#FF8C00';
      shapeStroke = '#FF5F00';
      mode = 3; 
      speed = -4;
      break;
      
    default:
      bgColor = color('#F5AFAF');
      shapeColor = '#FCF8F8';
      shapeStroke = '#F9DFDF';
      mode = 0; 
      speed = 2; 
  }
}