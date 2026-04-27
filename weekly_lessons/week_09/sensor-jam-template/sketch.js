let port; 
let connectBtn;

let sensorVal;
let circleSize = 50;
let targetSize = 50;

function setup() {
  createCanvas(windowWidth, windowHeight);
  port = createSerial();

  connectBtn = createButton("Connect to Arduino");
  connectBtn.position(20, 20);
  connectBtn.mousePressed(connectBtnClick);
}

function draw() {
  background(100);

  ellipse(width / 2, height / 2, circleSize);

  // Receive data from Arduino
  if (port.opened()) {
    let data = port.readUntil("\n");

    if (data && data.length > 0) {
      data = trim(data); // remove spaces/newlines
      console.log(data);

      let val = float(data);

      if (!isNaN(val)) {
        targetSize = val;
        circleSize = lerp(circleSize, targetSize, 0.1);
      }
    }
  }
}

// DO NOT REMOVE THIS FUNCTION
function connectBtnClick(e) {
  if (!port.opened()) {
    port.open(9600);
    e.target.innerHTML = "Disconnect Arduino";
    e.target.classList.add("connected");
  } else {
    port.close();
    e.target.innerHTML = "Connect to Arduino";
    e.target.classList.remove("connected");
  }
}