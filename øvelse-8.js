let a = 100;
let b = 190;

let a2 = 700;
let b2 = 190;

let d = 50;
let speed = 2.5;

function setup() { 
 createCanvas(800, 400);
} 

function draw() { 
  // Map Design
  fill(20);
  stroke(255,0,0);
  strokeWeight(7);
  rect(0,0, 800, 400); 

  noStroke();
  // End of Map Design

  player1();
  player2();
  playerSettings();
} 

function player1() {
  // Player 1 design
  fill(0,120,240);
  stroke(255)
  strokeWeight(2);
  ellipse(a, b, d);
  // End of Player 1 design

  // Border check
  if (a + d / 2>= 794) {
    a-=speed;
  }
  if (a - d / 2 <= 6) {
    a+=speed;
  }
  if (b + d / 2 >= 394) {
    b-=speed;
  }
  if (b - d / 2 < 6) {
    b+=speed
  }
  // End of border check

  // Movement
  if (keyIsDown(40)) {
    b+=speed;
  }
  if (keyIsDown(38)) {
    b-=speed;
  }
  if (keyIsDown(37)) {
    a-=speed;
  }
  if (keyIsDown(39)) {
    a+=speed;
  }
  // End of movement

    
}

function player2() {
  // Player 1 design
  fill(240,50,0);
  stroke(255)
  strokeWeight(2);
  ellipse(a2, b2, d);
  // End of Player 1 design

  // Border check
  if (a2 + d / 2>= 794) {
    a2-=speed;
  }
  if (a2 - d / 2 <= 6) {
    a2+=speed;
  }
  if (b2 + d / 2 >= 394) {
    b2-=speed;
  }
  if (b2 - d / 2 < 6) {
    b2+=speed
  }
  // End of border check

  // Movement
  if (keyIsDown(83)) {
    b2+=speed;
  }
  if (keyIsDown(87)) {
    b2-=speed;
  }
  if (keyIsDown(65)) {
    a2-=speed;
  }
  if (keyIsDown(68)) {
    a2+=speed;
  }
  // End of movement
}

function playerSettings() {
  if(a === a2) {
    a2+=1;
  }
}
