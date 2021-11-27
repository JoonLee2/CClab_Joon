let cam;
let sliderR, sliderG, sliderB;

function setup() {
  createCanvas(640, 480);
  background(220);

  cam = createCapture(VIDEO); // 640 * 480
  cam.hide();


  sliderR = document.getElementById("slider-r");
  sliderG = document.getElementById("slider-g");
  sliderB = document.getElementById("slider-b");
    let bgR1 = sliderR.value;
    let bgG1 = sliderG.value;
    let bgB1 = sliderB.value;


}

function draw() {
  background(0);

  cam.loadPixels();
  let size = 13;
  for (let y = 0; y < cam.height; y += size) {
    for (let x = 0; x < cam.width; x += size) {
      let index = (x + y * cam.width) * 4;
      // cam
      let r = cam.pixels[index + 0];
      let g = cam.pixels[index + 1];
      let b = cam.pixels[index + 2];
      let avg = (r + g + b) / 3;
      //
      noStroke();
      fill(sliderR.value,sliderG.value, sliderB.value )
      let dia = map(avg, 0, 255, 3, size);
      rect(x, y, dia, dia);
    }
  }
}
