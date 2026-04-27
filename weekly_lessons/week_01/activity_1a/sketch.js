
let h = 0; 

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background('#98C3F8');
  
  //gradient 
  let gradient = drawingContext.createLinearGradient(200, 0, 200, 400);
  gradient.addColorStop(0, "#6FBEFF");
  gradient.addColorStop(1, "#204388");
  
  drawingContext.fillStyle = gradient; 
  
  rect(0, 0, width, height*3/4);
  
  //waves
  strokeWeight(2);
  stroke('#F0F7FF');
  noFill(); 
  arc(0, 10, 80, 60, 0, PI);
  arc(60, 10, 80, 60, PI, 0);
  arc(120, 10, 80, 60, 0, PI);
  arc(180, 10, 80, 60, PI, 0);
  arc(240, 10, 80, 60, 0, PI);
  arc(300, 10, 80, 60, PI, 0);
  arc(360, 10, 80, 60, 0, PI);
  arc(420, 10, 80, 60, PI, 0);
  
  arc(0, 110, 80, 60, 0, PI);
  arc(60, 110, 80, 60, PI, 0);
  arc(120, 110, 80, 60, 0, PI);
  arc(180, 110, 80, 60, PI, 0);
  arc(240, 110, 80, 60, 0, PI);
  arc(300, 110, 80, 60, PI, 0);
  arc(360, 110, 80, 60, 0, PI);
  arc(420, 110, 80, 60, PI, 0);

  arc(0, 210, 80, 60, 0, PI);
  arc(60, 210, 80, 60, PI, 0);
  arc(120, 210, 80, 60, 0, PI);
  arc(180, 210, 80, 60, PI, 0);
  arc(240, 210, 80, 60, 0, PI);
  arc(300, 210, 80, 60, PI, 0);
  arc(360, 210, 80, 60, 0, PI);
  arc(420, 210, 80, 60, PI, 0);
  
  arc(0, 310, 80, 60, 0, PI);
  arc(60, 310, 80, 60, PI, 0);
  arc(120, 310, 80, 60, 0, PI);
  arc(180, 310, 80, 60, PI, 0);
  arc(240, 310, 80, 60, 0, PI);
  arc(300, 310, 80, 60, PI, 0);
  arc(360, 310, 80, 60, 0, PI);
  arc(420, 310, 80, 60, PI, 0);
  
  // jellyfish
  strokeWeight(1);
 noStroke();
  fill('#E1C4FD');
  circle(200, 200, 100);
  noStroke();
  ellipse(175, 250, 20, 40);
  ellipse(200, 255, 20, 40);
  ellipse(225, 250, 20, 40);
  ellipse(155, 240, 40, 20);
  ellipse(245, 240, 40, 20);
  //shine
  fill('#F5EDFD');
  ellipse(230, 175, 10, 20);
  //eyes
  fill(255);
  circle(175, 210, 30);
  circle(225, 210, 30);
  fill('#79638F');
  circle(175, 215, 20);
  circle(225, 215, 20);
  fill('#BF80FF');
  circle(175, 220, 8);
  circle(225, 220, 8);
  fill('#F4EAFD');
  circle(170, 210, 7);
  circle(230, 210, 7);
  //smile
  stroke('#79638F');
  noFill();
  arc(200, 230, 30, 20, 0, PI);
  
  //bubble
  stroke('#C7D9FFE5');
  fill('#d8dfee91');
  circle(100, 100, 40);
  circle(80, 50, 25);
  circle(85, 20, 20);
  noStroke();
  fill('#F9F4FF8C');
  circle(105, 92, 20);
  circle(85, 45, 10);
  circle(90, 17, 10);
  
  //sand
  stroke('#634916');
  fill('#DFCAA0');
  rect(0, 300, width, height/3);
  
  noStroke();
  fill('#B99D6C');
  arc(0, 300, 40, 40, 0, PI);
  arc(40, 300, 40, 40, 0, PI);
  arc(80, 300, 40, 40, 0, PI);
  arc(120, 300, 40, 40, 0, PI);
  arc(160, 300, 40, 40, 0, PI);
  arc(200, 300, 40, 40, 0, PI);
  arc(240, 300, 40, 40, 0, PI);
  arc(280, 300, 40, 40, 0, PI);
  arc(320, 300, 40, 40, 0, PI);
  arc(360, 300, 40, 40, 0, PI);
  arc(400, 300, 40, 40, 0, PI);
  
  fill('#E4BA72');
  arc(0, 320, 40, 40, 0, PI);
  arc(40, 320, 40, 40, 0, PI);
  arc(80, 320, 40, 40, 0, PI);
  arc(120, 320, 40, 40, 0, PI);
  arc(160, 320, 40, 40, 0, PI);
  arc(200, 320, 40, 40, 0, PI);
  arc(240, 320, 40, 40, 0, PI);
  arc(280, 320, 40, 40, 0, PI);
  arc(320, 320, 40, 40, 0, PI);
  arc(360, 320, 40, 40, 0, PI);
  arc(400, 320, 40, 40, 0, PI);
  
  fill('#97763B');
  arc(0, 340, 40, 40, 0, PI);
  arc(40, 340, 40, 40, 0, PI);
  arc(80, 340, 40, 40, 0, PI);
  arc(120, 340, 40, 40, 0, PI);
  arc(160, 340, 40, 40, 0, PI);
  arc(200, 340, 40, 40, 0, PI);
  arc(240, 340, 40, 40, 0, PI);
  arc(280, 340, 40, 40, 0, PI);
  arc(320, 340, 40, 40, 0, PI);
  arc(360, 340, 40, 40, 0, PI);
  arc(400, 340, 40, 40, 0, PI);
  
  fill('#B99D6C');
  arc(0, 360, 40, 40, 0, PI);
  arc(40, 360, 40, 40, 0, PI);
  arc(80, 360, 40, 40, 0, PI);
  arc(120, 360, 40, 40, 0, PI);
  arc(160, 360, 40, 40, 0, PI);
  arc(200, 360, 40, 40, 0, PI);
  arc(240, 360, 40, 40, 0, PI);
  arc(280, 360, 40, 40, 0, PI);
  arc(320, 360, 40, 40, 0, PI);
  arc(360, 360, 40, 40, 0, PI);
  arc(400, 360, 40, 40, 0, PI);
  
  fill('#97763B');
  arc(0, 380, 40, 40, 0, PI);
  arc(40, 380, 40, 40, 0, PI);
  arc(80, 380, 40, 40, 0, PI);
  arc(120, 380, 40, 40, 0, PI);
  arc(160, 380, 40, 40, 0, PI);
  arc(200, 380, 40, 40, 0, PI);
  arc(240, 380, 40, 40, 0, PI);
  arc(280, 380, 40, 40, 0, PI);
  arc(320, 380, 40, 40, 0, PI);
  arc(360, 380, 40, 40, 0, PI);
  arc(400, 380, 40, 40, 0, PI);
  
  //rock
  noStroke();
  fill('#808080')
  rect(280, 230, 200, 70);
  fill('#A2A2A2')
  quad(290, 240, 390, 220, 400, 300, 260, 300);
  fill('#CCCCCC')
  quad(290, 230, 390, 270, 400, 300, 280, 300);
  fill('#808080')
  quad(300, 250, 390, 270, 280, 300, 400, 300);
  
  //seaweed
  stroke('#2E751F');
  fill('#8BBD81');
  arc(50, 280, 30, 40, -PI/2, PI/2);
  arc(50, 200, 30, 40, -PI/2, PI/2);
  arc(50, 120, 30, 40, -PI/2, PI/2);
  fill('#5C8D52');
  arc(50, 240, 20, 40, PI/2, -PI/2);
  arc(50, 160, 20, 40, PI/2, -PI/2);
  
  fill('#8BBD81');
  arc(80, 280, 30, 40, -PI/2, PI/2);
  arc(80, 200, 30, 40, -PI/2, PI/2);
  fill('#5C8D52');
  arc(80, 240, 20, 40, PI/2, -PI/2);
  arc(80, 160, 20, 40, PI/2, -PI/2);
  
  helperGrid(); // do not remove
}