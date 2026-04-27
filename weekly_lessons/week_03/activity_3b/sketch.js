function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
}

function draw() {
  background(random(['#CCCED1', '#787D85']));
  fill('#D9EAFD');
  for (let x = 25; x < width; x += 50) {
  for (let y = 25; y < height; y += 50) {
    snowflake(x, y, random(20, 40));
    }
  }
}

function snowflake(x, y, size){
  fill(random(['#D9EAFD', '#75A8E0', '#C9D2DB']));
  noStroke();
  rect(x, y, size); 
  
  push();
  translate(x, y);
  rotate(radians(45));
  rect(0, 0, size);
  pop();
}
