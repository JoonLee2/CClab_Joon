




let x = 0;


function change() {
  x += 10;

  let b = document.getElementById('box');
  b.innerHTML = "WOW!"
  //b.style.width = "200px";
  //b.style.height = "50px";
  b.style.left = x + "px";
  b.style.backgroundColor = "red";
}
