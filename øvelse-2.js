function setup() { 
  createCanvas(600, 400); //  Opretter en canvas med størrelsen 600x400
} 

function draw() { 
  background(220); // Baggrunden sætes til RGB farven "220" (220,220,220)
  fill(255,0,0); // Udfylder en figur med farven RØD (R) i RGB
  noStroke(); // Fjerner "stroken" fra en figur (kanterne)
  if (mouseX < width/3) { // If statement (hvis) musen er I x-koordinat "width/3", som er 0-200, I x-aksen, da vi vores X-akse er 600 (600/3)
    rect(0, 0, width/3, height); // Konstruere en rektangel I 1/3 del af "width", som er fra 0-200 - da hele x-aksen (width) er 600
  } 
  else if (mouseX <= width*2/3) { // Else if statement (hvis ikke) musen er fra 200-400 (da det er 1/3 gange med 2 som er, 400)
    rect(width/3, 0, width/3, height); // Konstruere en rektangel I 2/3 del af "width", som er fra 200-400 - da hele x-aksen (width) er 600
  }
  else { // Else statement (ellers) musen er IKKE er fra 200-400
    rect(width*2/3, 0, width/3, height); // Konstruere en rektangel der fylder fra 400-600, hvis musen ikke er I x-aksen 0-400
  }
}