function setup() 
{ 
 createCanvas(120, 120); // Laver en canvas med størrelsen 120x120
} 

function draw() 
{ 
 background(204); // Baggrunden er RGBA farve (204,204,204)
 if (keyIsPressed) {  //hvad er denne variable for en størrelse? // Den tjekker om en knap er holdt inde
  if ((key == 'h') || (key == 'H')) { line(30, 60, 90, 60); }  // Hvis knappen "h" eller stort "H" er hold inde vild en lave en linje fra de koordinater I 
                                                               // linjen efter (så der bliver dannet et H med de 2 linjer der er I bunden af koden)

  if ((key == 'n') || (key == 'N')) { line(30, 20, 90, 100); } // Hvis knappen "n" eller stort "N" er hold inde vild en lave en linje fra de koordinater I 
                                                               // linjen efter (så der bliver dannet et N med de 2 linjer der er I bunden af koden)
 } 
line(30, 20, 30, 100); // Linje der går fra punkt (30,20) til (30,100)
line(90, 20, 90, 100); // Linje der går fra punkt (90,20) til (90,100)
} 
