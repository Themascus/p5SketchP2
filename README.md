# p5SketchP2
Project 2 spaceship


// Original code for rocket and clouds created by ChatGPT:

// This code is for the rocket. Asked Chatgpt to create code for a rocket that follows mouse and fires when clicked. 
// The changes I made to the code include changing 'let' to variables,  canvas size to window width, and window height, modified
// the sketch from blocks and triangle shapes to look more like a spaceship with a beam. Rotate i learned will flip both 
// ship and beam. By dividing rotate by 4 I was able to reduce the spin to a have the beam and and ship stay upright. 


let rocketX = 200; // x position of the rocket
let rocketY = 200; // y position of the rocket

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  // calculate angle between rocket and mouse
  let angle = atan2(mouseY - rocketY, mouseX - rocketX);

  // draw rocket
  push();
  translate(rocketX, rocketY);
  rotate(angle);
  rectMode(CENTER);
  fill(255);
  rect(0, 0, 50, 10);
  rect(0, -15, 20, 20);
  pop();

  // check if mouse is clicked
  if (mouseIsPressed) {
    // draw rocket fire
    push();
    translate(rocketX, rocketY);
    rotate(angle + PI);
    fill('orange');
    triangle(-10, -15, 10, -15, 0, -30);
    pop();
  }

  // update rocket position to follow mouse
  rocketX += (mouseX - rocketX) * 0.1;
  rocketY += (mouseY - rocketY) * 0.1;
}



// This code creates clouds on screen. Asked ChatGPT to create clouds that move on screen. 
 // i = number of clouds. i < 5 runs the number of clouds at once on screen. 
// x random height and width spaces clouds throughout screen. 
// // size random = different random sized form min and max


let clouds = [];

function setup() {
  createCanvas(400, 400);

  // create clouds
  for (let i = 0; i < 5; i++) {
    clouds.push({
      x: random(width),
      y: random(height / 2),
      size: random(50, 100),
      speed: random(1, 3)
    });
  }
}

function draw() {
  background(220);

  // draw clouds
  for (let i = 0; i < clouds.length; i++) {
    let cloud = clouds[i];




    // update cloud position
    cloud.x += cloud.speed;

    // wrap cloud around screen
    if (cloud.x > width + cloud.size / 2) {
      cloud.x = -cloud.size / 2;
    }

    // draw cloud. to create cloud shape, and color. 
    noStroke();
    fill(255);
    ellipse(cloud.x, cloud.y, cloud.size, cloud.size / 2);
  }
}
