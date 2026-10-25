let mic;

// Base position for Oval
let ovalX = 150;
let ovalY = 250;

// Base positions for Square
let squareX = 350;
let squareY = 250;

let shapeSize = 70;

// Boolean for spinning shapes
let ovalSpinning = false;
let squareSpinning = false;

// Rotations for spinning shapes
let ovalAngle = 0;
let squareAngle = 0;

function setup(){
  createCanvas(500, 500);
  
  mic = new p5.AudioIn();
  mic.start();
  
  rectMode(CENTER);
  angleMode(DEGREES);
}

function draw(){
  background(200);
  
  let vol = mic.getLevel();
  
  // Oval
  push();
  translate(ovalX, ovalY);
  if(ovalSpinning){
    ovalAngle += 4;
  }
  rotate(ovalAngle);
  fill(194, 150, 217);
  noStroke();
  ellipse(0, 0, shapeSize, 60);
  pop();
  
  // Square
  push();
  translate(squareX, squareY);
  if(squareSpinning){
    squareAngle += 2;
  }
  rotate(squareAngle);
  fill(148, 157, 224);
  noStroke();
  rect(0, 0, shapeSize, shapeSize);
  pop();
  
}

function mousePressed(){
  let d = dist(mouseX, mouseY, ovalX, ovalY);
  
  
  if(d < shapeSize/2){
    ovalSpinning = !ovalSpinning;
  }
  
  if((mouseX > squareX - shapeSize/2) && (mouseX < squareX + shapeSize/2) && (mouseY > squareY - shapeSize/2) && (mouseY < squareY + shapeSize/2)){
    squareSpinning = !squareSpinning;
  }
  
}