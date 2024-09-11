let x1 = 100;     // x position of the ball
let y1 = 0;       // y position of the ball
let xSpeed1 = 3;  // speed in X direction
let ySpeed1 = 7; // speed in Y direction
let d1 = 60;      // diameter of the ball

let x2 = 0;     
let y2 = 100;       
let xSpeed2 = 7;  
let ySpeed2 = 3;
let d2 = 40;  

let x3 = 0;
let y3 = 100;
let xSpeed3 = 10;
let ySpeed3 = 10;
let d3 = 50

let value = 0;
let a = 0;
let b = 0;
let c = 0;



function setup() {
  createCanvas(550, 700);
}

function draw() {
  background(a, b, c); // try commenting this out!



 
  // if x hits the right side or the left side of the canvas,
  // switch directions...
  if (x1 > width || x1 < 0) {
    xSpeed1 = xSpeed1 * -1;  
  }
  x1 = x1 + -xSpeed1; // adding a negative xSpeed *decreases* x, right?

  ////negative to xSpeed didn't decrease x as far as i can tel??
  
  // same as above, but for the top and bottom of the canvas
  if (y1 > height || y1 < 0) { ////had to change y1> width to height because ball wouldnt bounce down the extended canvas
    ySpeed1 = ySpeed1 * -1;  
  }
  y1 = y1 + -ySpeed1;

  ellipse(x1, y1, random([0], [100]));
  
stroke("red");
strokeWeight(random([10], [20])); 
//without this added, both circles are green outlines


  if (x2 > width || x2 < 0) {
    xSpeed2 = xSpeed2 * -1;
  }
  x2 = x2 + xSpeed2;



  if (y2 > height || y2 < 0) {
    ySpeed2 = ySpeed2 * -1
  }
y2 = y2 + ySpeed2;

ellipse(x2, y2, random([0], [100]));

stroke("palegreen");
strokeWeight(random([10], [20]));




fill(value);


//trying to make the mouse move so the circle gradients
//lighten up and then cyle through again


}

function mouseMoved(fxn) {
  value += 5;

if (value > 255){
  value = 0;
}
//IT WORKED LETS GOOOOOOOOOOOOOOOOO found 
//it on the references of p5

}

function mouseClicked(fxn){
  xSpeed1 = xSpeed1 * 3;

  xSpeed2 = xSpeed2 * 5;

  //if (xSpeed1 > 200){
    //xSpeed1 = 7;
  //}
  //if (xSpeed2 > 200){
    //xSpeed2 = 3;
  //}
  //if (ySpeed1 > 200){
    //ySpeed1 = 3;
  //}
  //if (ySpeed2 > 200){
    //ySpeed2 = 7;
  //}

  //tried to reset the speed but I don't think this worked at all
  //i"ve tweaked the max numbers but alas.
}

//the above makes the circles obliterate 
//after a few clicks at different rates LOL

function keyPressed(){
  c += 15.2;
  if (c > 255){
    c = 0;
  }

  b += 8.3;
  if (b > 255){
    b = 0;
  }

  a += 2;
  if (a > 255){
    a =0;
  }
}

//function keyTyped(){
  //if(key === a) {
    //if (x3 > width || x3 < 0) {
      //xSpeed3 = xSpeed3 * -1;
    //}
    //x3 = x3 + xSpeed3;
  
  
  
    //if (y3 > height || y3 < 0) {
      //ySpeed3 = ySpeed3 * -1
    //}
  //y3 = y3 + ySpeed3;
  
  //rect(x3, y3, 50, 50, [20], [20], [20], [20]);

 /// stroke("cyanblue");
  //strokeWeight(random([10], [20]));  
 // }
//}


//above didn't work because pressing any key = color change
//did not spawn my rectangle :(

