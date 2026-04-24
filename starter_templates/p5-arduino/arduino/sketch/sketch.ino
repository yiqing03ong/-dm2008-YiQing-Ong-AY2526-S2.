// DM2008 — Arduino → p5.js Serial Template
//
// This sketch sends a value to p5.js once per loop via Serial.
// Replace the random number with a real sensor read when you're ready.
//
// Make sure your baud rate matches Serial.begin() in p5.js
// – Both should be 9600 (or what your hardware requires).

void setup() {
  Serial.begin(9600);
}

void loop() {
  // Send one value per line — p5.js reads this as a string
  Serial.println(String(random(1024)));
  delay(100); // small pause to avoid flooding the serial port
}