let dancer;


let bgR = 100;
let bgG = 100;
let bgB = 100;


let sliderR, sliderG, sliderB;
let sliderR2, sliderG2, sliderB2;
let sliderR3, sliderG3, sliderB3;
let sliderR4, sliderG4, sliderB4;
let sliderR5, sliderG5, sliderB5;
let sliderR6, sliderG6, sliderB6;

function setup() {
  createCanvas(600, 600);
  background(bgR, bgG, bgB);

  dancer = new Digda(random()*width, random()*height);


  sliderR = document.getElementById("slider-r");
  sliderG = document.getElementById("slider-g");
  sliderB = document.getElementById("slider-b");
    let bgR1 = sliderR.value;
    let bgG1 = sliderG.value;
    let bgB1 = sliderB.value;

  sliderR2 = document.getElementById("slider-r2");
  sliderG2 = document.getElementById("slider-g2");
  sliderB2 = document.getElementById("slider-b2");
    let bgR2 = sliderR2.value;
    let bgG2 = sliderG2.value;
    let bgB2 = sliderB2.value;

  sliderR3 = document.getElementById("slider-r3");
  sliderG3 = document.getElementById("slider-g3");
  sliderB3 = document.getElementById("slider-b3");
    let bgR3 = sliderR3.value;
    let bgG3 = sliderG3.value;
    let bgB3 = sliderB3.value;

  sliderR4 = document.getElementById("slider-r4");
  sliderG4 = document.getElementById("slider-g4");
  sliderB4 = document.getElementById("slider-b4");
    let bgR4 = sliderR4.value;
    let bgG4 = sliderG4.value;
    let bgB4 = sliderB4.value;

  sliderR5 = document.getElementById("slider-r5");
  sliderG5 = document.getElementById("slider-g5");
  sliderB5 = document.getElementById("slider-b5");
    let bgR5 = sliderR5.value;
    let bgG5 = sliderG5.value;
    let bgB5 = sliderB5.value;


}

function draw() {
  background(bgR, bgG, bgB);

  dancer.update();
  dancer.display();






}
function changeBGColor() {
  bgR = random(255);
  bgG = random(255);
  bgB = random(255);
}

class Digda {
  constructor(startX,startY) {
    this.x = startX ;
    this.y = startY;
    this.xSpd = random(-1, 1);
    this.ySpd = random(-1, 1);



    this.rotAngle = 0;
    this.rotFreq = random(0.05, 0.08);
    this.rotAmp = random(0.15, 0.1);
  }
  update() {

    this.move();
    this.bounce();

  }
  display() {
    push();
    translate(this.x, this.y);
    rotate(this.rotAngle);
    this.drawHead();
    this.drawBody();
    this.drawLeftfoot();
    this.drawRightfoot();
    this.drawArms();
    pop();



  }
  swing() {
    this.rotAngle = sin(frameCount * this.rotFreq) * this.rotAmp;
  }




  move() {
    this.x += this.xSpd;
    this.y += this.ySpd;
  }
  bounce() {
    if (this.x < 0 || this.x > width) {
      this.xSpd *= -1;
    }
    if (this.y < 0 || this.y > height) {
      this.ySpd *= -1;
    }

  }


  drawHead() {
    push();
    noStroke()
    fill(sliderR.value,sliderG.value, sliderB.value );
    rect(70,-100,5,80,20,20)
    rect(95,-100,5,80,20,20)
    rect(120,-100,5,80,20,20)

    fill(sliderR2.value, sliderG2.value, sliderB2.value)
    noStroke()
    rect(10,140,180,250,30,40,40);
    noStroke()
    ellipse(100, 100, 200, 300);
    fill(0)
    ellipse(65,30, 20,40)
    ellipse(130,30, 20,40)
    fill(255)
    ellipse(65,20, 15,20)
    ellipse(130,20, 15,20)



    fill(sliderR3.value, sliderG3.value, sliderB3.value)
    noStroke()
    ellipse(100,70, 80, 40)
    pop();


  }

  drawBody() {
    push();
    pop();


  }
  drawLeftfoot() {
    push();
    fill( sliderR4.value,  sliderG4.value,  sliderB4.value);
    rotate(this.rotAngle = cos(frameCount * this.rotFreq) * 0.02);
    noStroke()
    ellipse(20,390,100,50)
    pop();

  }
  drawRightfoot() {
    push();
    fill( sliderR4.value,  sliderG4.value,  sliderB4.value);
    rotate(this.rotAngle = cos(frameCount * this.rotFreq) * 0.02);
    noStroke()
    ellipse(180,390,100,50)
    pop();
  }
  drawArms() {
    push();
    rotate(this.rotAngle = sin(frameCount * this.rotFreq) * 0.02);
    noStroke();
    fill(sliderR5.value,sliderG5.value,sliderB5.value)
    ellipse(15,210,50,120)
    ellipse(185,210,50,120)
    pop();
  }


}
