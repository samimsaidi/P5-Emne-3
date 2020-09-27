function setup() 
{ 
 createCanvas(120, 120);
} 

function draw() 
{ 
 background(204); 
 if (keyIsPressed) {  
  if ((key == 'a') || (key == 'A')) {
      line(43, 60, 77, 60);
      line(30, 90, 60, 20);

      line(90, 90, 60, 20);
    }  
  if ((key == 'v') || (key == 'V')) { 
    background(204); 
    line(30, 30, 60, 90);
    line(90, 30, 60, 90);
    } 
  } 
} 
