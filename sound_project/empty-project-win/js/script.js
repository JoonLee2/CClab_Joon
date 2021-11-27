
let sound;


function preload() {

  sound = loadSound("assets/beat.mp3")
}


function mousePressed() {
  sound.play();
}

function setup() {
  createCanvas(400, 500);
  background(220);
}

function draw() {
  background(220);
}
