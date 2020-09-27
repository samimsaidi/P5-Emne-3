/*

Koden under gør at der er en cirkel der går konstant fra venstre side til højre
Cirkeln er I midten af canvasen (height/2) og bevæger sig fra venstre til højre 
og tilbage. Det er kun én cirkel, som ryger tilbage efter at have ramt væggen.
Da der er en "if statement" der gør at hvis cirklen rammer væggen vil dens
speed gå I "minus", så den vil gå den modsatte vej.

*/


let x; 
let justHitRightWall;
let xspeed = 3;

function setup() { 
  createCanvas(400, 400);
  x = width / 2;
} 

function draw() { 
  background(220);
  if (x > width - 25 || x < 0 + 25) {
    xspeed *= -1;
  }
  
  //Move
  x += xspeed;
  ellipse(x, height/2, 50, 50);
}