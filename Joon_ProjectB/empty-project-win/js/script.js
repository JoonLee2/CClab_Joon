let joon;
let obstacles = [];
let coins = [];



let volume = 0;

let life = 100;
let score = 0;

function setup() {
  createCanvas(500, 600);
  joon = new Joon();
  obstacles.push(new Obstacle());
  //obstaclesTop.push(new Obstacle2());
  coins.push(new Coin());

  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background(248, 243, 212);




  let vol = mic.getLevel();
  volume = map(vol, 0, 1, 0, 100);

  //ellipse(30, h - 25, 50, 50);
  if ( volume > 2) {
    joon.up();
  }
  joon.update();
  joon.show();



  //coins or score or candy
  for (let i = coins.length -1; i >= 0; i--) {
    let o2 = coins[i];
    o2.show();
    o2.update();

    if (o2.hits(joon)) {
      console.log("points");
      ++score;
        coins.splice(i,1);
      }

function mouseisPressed() {
  redraw();
}


  }
  //coin 사거리
  if (frameCount % 50 == 0) {
    coins.push(new Coin());
  }




  //장애물
  for (let i = obstacles.length - 1; i >= 0; i--) {
    let o = obstacles[i];

    o.update();
    o.show();



    if (o.hits(joon)) {
      console.log("HIT");
      life--;
      if(life == 0 ) {
        fill(20, 47, 67)
        textStyle(BOLDITALIC);
        textSize(45)
        text("GAME", 300, 400)
        text("OVER", 300, 450)
        textSize(40)
        text("Score:", 300, 520)
        text(score, 430, 520)
        joon.splice(i,1);
      }
      if (this.highlight) {
      fill(255, 0, 0);
    }

    }//큰 기둥 부딛혓을 때
    if (o.isBig && volume > 40) {
      obstacles.splice(i, 1);
    }
    if (o.offscreen()) {
      obstacles.splice(i, 1);
    }
  }
  //장애물 사이 거리
  if (frameCount % 200 == 0) {
    obstacles.push(new Obstacle());
  }


  fill(20, 47, 67);
  textStyle(BOLDITALIC);
  textSize(30)

  text("Volume",10, 30)
  text(floor(volume), 125, 30);

  text("Score",10, 70)
  text(score, 105, 70);

  text("HP", 10, 110)
  text(life, 70, 110)

}

//coin or score
class Coin {
  constructor() {
    let rnd = random(20)
    this.x = width;
    this.w = random(20, 350);
    this.speed = 2.5;
    this.highlight = false;
    this.height = rnd * rnd; //제곱
  }


// 코인에 부딛혓을 때
  hits(joon) {

    if (joon.y > this.w && joon.y < this.w + this.height) {
      if (joon.x > this.x) {
        this.highlight = true;
        return true;
      }
    }
    this.highlight = false;
    return false;
  }




  show() {
    fill(0);
    if (this.highlight) {
      fill(255, 0, 0);
    }
    fill(176, 94, 39)
    noStroke()
    circle(this.x, this.w,  50)
    fill(126, 55, 12)
    square(this.x-13, this.w-13, 25, 5);



  }

  update() {
      this.x -= this.speed;
    }

  offscreen() {
      if (this.x < -this.w) {
        return true;
      } else {
        return false;
    }
  }
}



//장애물
class Obstacle {
  constructor() {
    let rnd = random(20)
    this.w = random(20, 70);
    this.height = rnd * rnd; //제곱
    this.x = width;
    this.isBig = false;
    let chance = random();
    if (chance < 0.1) {
      // big
      this.y = 0;
      this.height = height;
      this.w = 180;
      this.isBig = true;
    } else if (chance < 0.4) {
      // top
      this.y = 0;
    } else {
      // bottom
      this.y = height - this.height;
    }
    this.speed = 3;
    this.highlight = false;
  }

  // 장애물에 부딛혓을 때
  hits(joon) {
    if (joon.y >= this.y && joon.y < this.y + this.height) {
      if (joon.x > this.x) {
        this.highlight = true;
        return true;
      }
    }
    this.highlight = false;
    return false;
  }

  show() {

    //원래색
    fill(0, 184, 169);

    //부딛 색
    if (this.highlight) {
      fill(236, 37, 90);
    }
    //bottom
    rect(this.x, this.y, this.w, this.height);

  }

  update() {
    this.x -= this.speed;
  }

  offscreen() {
    if (this.x < -this.w) {
      return true;
    } else {
      return false;
    }
  }
}

//캐릭터 위치
class Joon {
  constructor() {
    this.x = 80;
    this.y = height / 2;

    this.gravity = 0.2;
    this.lift = 1.3;
    this.velocity = 0;
  }

  //캐릭터 모습
  show() {
    let red = map(volume, 0, 100, 0, 255);
    let dia = map(volume, 0, 100, 50, 500);
    noStroke();
    fill(180, 254, 152);
    circle(this.x, this.y, dia);

    stroke(0);
    //head
    fill(246, 65, 108);
    ellipse(this.x, this.y, 50, 50);
    fill(20, 47, 67);
    ellipse(this.x, this.y, 40, 40);
    fill(255);
    ellipse(this.x, this.y - 5, 20, 20);
    fill(20, 47, 67);
    ellipse(this.x, this.y - 5, 15, 15);
    //body

    line(this.x, this.y + 15, this.x, this.y + 50);
    line(this.x, this.y + 35, this.x - 20, this.y + 25);
    line(this.x, this.y + 35, this.x + 20, this.y + 25);
    line(this.x, this.y + 50, this.x - 10, this.y + 70);
    line(this.x, this.y + 50, this.x + 10, this.y + 70);
  }
  up(amount) {
    this.velocity -= this.lift;
    //this.velocity -= -amount * 0.1;
  }
  update() {
    this.velocity += this.gravity;
    this.y += this.velocity;

    if (this.y > height - 70) {
      this.y = height - 70;
      this.velocity = 0;
    }
    if (this.y < 0) {
      this.y = 0;
      this.velocity = 0;
    }
  }
}
