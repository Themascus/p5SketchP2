var rocketX = 200; // x position of the rocket
var rocketY = 200; // y position of the rocket
var clouds = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  
    // create clouds
  for (let i = 0; i < 20; i++) {
    clouds.push({
      x: random(width),
      y: random(height),
      size: random(0, 100),
      speed: random(1, 3)
    });
  }

  // i = number of clouds. i < 5 generates number of clouds. 
  // x random height and width spaces clouds throughout screen. 
  // size random = different random sized form min and max

}

function draw() {
  if (mouseIsPressed) {
  background(0,0,255);
  }
  else {
  background(100,255,200);
  }
   // draw clouds
  for (let i = 0; i < clouds.length; i++) {
    let cloud = clouds[i];

    // update cloud position
    cloud.x += cloud.speed;

    // wrap cloud around screen
    if (cloud.x > width + cloud.size / 2) {
      cloud.x = -cloud.size / 2;
    }

    // draw cloud
    if (mouseIsPressed) {
      fill(250, 10, 215);
    } else {
      noStroke();
       fill (250,235,215);
    }
      ellipse(cloud.x, cloud.y, cloud.size, cloud.size / 2);
      ellipse(cloud.x+10, cloud.y+15, cloud.size+10, cloud.size / 2);
      ellipse(cloud.x+20, cloud.y-10, cloud.size+50, cloud.size / 2);
    }
    // to create cloud shape, 
  
//   sun/moon
  if (mouseIsPressed){
    fill (255,235,200);
    beginShape();
    vertex(260, 55);
    bezierVertex(350, 95, 380, 120, 260, 200);
    bezierVertex(260, 200, 380, 110, 260, 55); 
    endShape();
  } else {
   fill(255,180,0)
  ellipse(300, 75, 80, 80);
// y4 = vortex y
    
  }
 
  // calculate angle between rocket and mouse
  let angle = atan2(mouseY - rocketY, mouseX - rocketX);

  // draw rocket
  push();
  translate(rocketX, rocketY);
  rotate(angle/4);
  rectMode(CENTER);
  fill(0,0,0);
  ellipse(0,-7,30,15);
  fill(120,20,20);
  ellipse(0, 0, 80, 15);
  pop();
// rotate changes positions of rocket and beam to do 360 spin. adding a divison by number reduces spin
// check if mouse is clicked
if (mouseIsPressed) {
// This creates beam and sketch inside
push();
translate(rocketX, rocketY);
rotate(angle/4 + PI);
fill(255,255,150);
quad(10, 0, -10, 0, -140, -280, 160, -260);



fill(255);
ellipse(5,-120,50,60);
ellipse(5,-110,60,40);

 // spots
fill(0);
ellipse(-16,-110,13,16);
ellipse(20,-140,13,16);
ellipse(-10,-135,10,6);
ellipse(-3,-90,5,8);
ellipse(20,-100,13,8);

 // nose
    fill(255, 180, 255);
    ellipse(5,-145, 30, 20);
    fill(0)
    ellipse(9,-145,5,10);
    ellipse(-1,-145,5,10);

    //eyes
    ellipse(-4,-120,5,10);
    ellipse(12,-120,5,10);

    //ears
    ellipse(28,-90,25,20);
    ellipse(-20,-90,25,20);

    fill(255, 180, 255);
    ellipse(25,-95,10,5);
    ellipse(-17,-95,10,5);




    pop();
   
  }

  // update rocket position to follow mouse
  rocketX += (mouseX - rocketX) * 0.08;
  rocketY += (mouseY - rocketY) * 0.08;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}