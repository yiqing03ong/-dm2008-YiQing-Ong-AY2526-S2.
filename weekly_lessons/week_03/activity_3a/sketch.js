let palette = ['#E49BA6', '#92487A', '#FA5C5C', '#f0cd5c'];
let shapes = [];

function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background(255, 236, 192, 15);
  
  for (let i = 0; i < shapes.length; i++) {
    fill(shapes[i].col);

    if (shapes[i].type === 'circle') {
      ellipse(shapes[i].x, shapes[i].y, shapes[i].sz);
    }

    else if (shapes[i].type === 'square') {
      rectMode(CENTER);
      rect(shapes[i].x, shapes[i].y, shapes[i].sz, shapes[i].sz);
    }

    else if (shapes[i].type == 'triangle') {
      let s = shapes[i].sz;
      triangle(
        shapes[i].x, shapes[i].y - s / 2,
        shapes[i].x - s / 2, shapes[i].y + s / 2,
        shapes[i].x + s / 2, shapes[i].y + s / 2
      );
    }
  }
}

function mousePressed() {
  let shapeTypes = ['circle', 'square', 'triangle'];
  
  shapes.push({
    x: mouseX,
    y: mouseY,
    sz: random(20, 80),
    col: random(palette),
    type: random(shapeTypes)
  });
}

function keyPressed() {
  if (key == 'r') {
    shapes.splice(0, 1); 
  }
}