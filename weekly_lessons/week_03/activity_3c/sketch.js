const palette = ['#F04995', '#0EC9B4', '#F07020', '#F1E95D', '#946ECE'];

let colorIndex = 0;
let sizeVal = 20;
let col; 

const brushes = [brushCircle, brushSquare, brushStreak, brushTriangle];
let currentBrush = 0; 

function setup() {
  createCanvas(600, 600);
  background(240);
  rectMode(CENTER);
}

function draw() {
  if (keyIsDown(67) && colorIndex !== -1) {
      colorIndex = (colorIndex + 0.02) % palette.length;
    }

    if (colorIndex === -1) {
      col = color(240); 
    } else {
      col = palette[floor(colorIndex)];
    }
    
    //mirroring
    brushes[currentBrush](mouseX, mouseY, col, sizeVal);
    brushes[currentBrush](width - mouseX, mouseY, col, sizeVal);
}

// 3) Brush functions (students can customize/extend)
function brushCircle(x, y, c, s) {
  noStroke();
  fill(c);
  drawingContext.globalAlpha = 0.3;
  ellipse(x, y, s);
}

function brushSquare(x, y, c, s) {
  push();
  translate(x, y);
  rotate(frameCount * 0.05);
  noStroke();
  fill(c);
  drawingContext.globalAlpha = 0.3;
  rect(0, 0, s, s);
  pop();
}

function brushStreak(x, y, c, s) {
  stroke(c);
  strokeWeight(max(2, s / 8));
  point(x,y);
}

function brushTriangle(x, y, c, s) {
  noStroke();
  fill(c); 
  drawingContext.globalAlpha = 0.3;
  push();
  translate(x, y);
  rotate(frameCount * 0.05);
  triangle(0, -s, s, s, -s, s);
  pop();
}

// 4) Brush UI: select brush, cycle color, change size, clear
function keyPressed() {
  switch (key) {
    case '1':
      currentBrush = 0; // circle
      break;
    case '2':
      currentBrush = 1; // square
      break; 
    case '3':
      currentBrush = 2; // streak
      break;
    case '4':
      currentBrush = 3; // triangle
      break;
  }
  if (key == 'C' || key == 'c') {
    colorIndex = (colorIndex + 1) % palette.length; 
  }
  if (key == 'E'|| key == 'e') {
    colorIndex = -1;
  }
  if (key == '+' || key == '=') {
    sizeVal += 4;
  }
  if (key == '-' || key == '_') {
    sizeVal = max(4, sizeVal - 4);
  } 
  if (key == 'X' || key == 'x') {
    background(240); 
  } 
}