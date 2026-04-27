let cols = 15;
let rows = 15;
let invert = false; 

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(38, 60, 176);

  for (let x = 0; x < cols; x++) {
    for (let y = 0; y < rows; y++) {
      let w = width / cols;
      let h = height / rows;
      
      if (((x + y) % 3 == 0) !== invert) {
        fill(random(161, 255), random(173, 255), random(235, 255));
      } else {
        fill(161, 173, 235);
      }
      
      noStroke();
      
      if ((x + y) % 2 == 0) {
        ellipse(x * w + w / 2, y * h + h / 2, w, h);
      } else {
        rect(x * w, y * h, w, h);
      }
    }
  }
}

function mousePressed() {
  invert = !invert;
}