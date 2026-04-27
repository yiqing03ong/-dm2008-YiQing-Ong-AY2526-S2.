let colorBtn, sizeSlider, shapeSelect, patternSlider, resetBtn;
let shapeColor;

function setup() {
  createCanvas(640, 400);
  noStroke();
  textFont("Helvetica, Arial, sans-serif");

  controlPanel = createDiv();
  controlPanel.position(16, 16);

  colorBtn = createButton('Random Color');
  sizeSlider = createSlider(20, 120, 60, 1);
  patternSlider = createSlider(1, 30, 8, 1);
  shapeSelect = createSelect();

  shapeSelect.option("ellipse");
  shapeSelect.option("rect");
  shapeSelect.option("triangle");

  colorBtn.parent(controlPanel);
  sizeSlider.parent(controlPanel);
  patternSlider.parent(controlPanel);
  shapeSelect.parent(controlPanel);

  colorBtn.position(10, 0);
  sizeSlider.position(10, 50);
  patternSlider.position(10, 80);
  shapeSelect.position(10, 110);

  colorBtn.mousePressed(randomShapeColor);

  shapeColor = color(random(255), random(255), random(255));
  
  resetBtn = createButton('Reset');
  resetBtn.parent(controlPanel);
  resetBtn.position(10, 140);

  resetBtn.mousePressed(resetAll);
}

function randomShapeColor() {
  shapeColor = color(random(255), random(255), random(255));
}

function resetAll() {
  sizeSlider.value(60);
  patternSlider.value(8);
  shapeSelect.value("ellipse");
  
  shapeColor = color(50);
}

function draw() {
  background(240);

  let s = sizeSlider.value();
  let count = patternSlider.value();
  let choice = shapeSelect.value();

  push();
  translate(width * 0.65, height * 0.5);

  for (let i = 0; i < count; i++) {
    push();

    rotate(TWO_PI * i / count);
    translate(0, -80);

    fill(shapeColor);

    if (choice === "ellipse") {
      ellipse(0, 0, s, s);
    } else if (choice === "rect") {
      rectMode(CENTER);
      rect(0, 0, s, s);
    } else if (choice === "triangle") {
      triangle(
        -s * 0.6, s * 0.5,
        0, -s * 0.6,
        s * 0.6, s * 0.5
      );
    }

    pop();
  }

  pop();

  fill(0);
  textSize(14);
  text("Size", 30, 62);
  text("Pattern amount", 30, 92);
  text("Shape", 30, 122);
}