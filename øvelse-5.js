function setup() {
  createCanvas(120, 120); // Canvas størrelse 120x120
  strokeWeight(30); // Stroke er weight (30) så tykkelsen på en stroke eller linje.
  } 

  function draw() { 
   background(204); // Baggrunden er RGBA farve (102,102,102)
   stroke(102); // Linjen bliver RGBA farve (102,102,102)
   line(40, 0, 70, height); // Linje der krydser canvasen fra venstre top hjørne til højre bund hjørne
   if (mouseIsPressed) { //hvor kommer denne variable fra?: Det er en variable som tjekker om mussen er klikket
    if (mouseButton == LEFT) {  // og hvad med den?: Denne tjekker om det er venstre musknap der er trykket.
     stroke(255); // Cirklen bliver hvid farve
    } 
    else { // Hvis en knap er nede og det ikke er venstre knap så bliver linjen sort
     stroke(0); 
    } 
    line(0, 70, width, 50); // Linje der krydser fra venstre bund hjørne til højre top hjørne.
    } 
  }