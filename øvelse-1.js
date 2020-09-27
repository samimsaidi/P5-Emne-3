function setup() { 
  createCanvas(windowWidth, windowHeight);
} 

function draw() { 
  background(255);
  noStroke();
  if(mouseX < width/2) {
    fill(0,100,200)
    ellipse(width/2,height/2,100,100);
  } else if(mouseX > width/2) {
    fill(255,0,0)
    rect(width/2-50,height/2-50,100,100)
  }
}