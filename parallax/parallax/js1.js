'use strict';

function myFunction(e) {
  let x = e.clientX;
  let y = e.clientY;
  let coor = "Coordinates: (" + x + "," + y + ")";
  document.getElementById("coord").innerHTML = coor;
}

document.addEventListener('mousemove', (evt) => {

  let mouseX = evt.clientX,
      mouseY = evt.clientY;

  let coor = "From the top left<br> X: " + mouseX + ", Y: " + mouseY;
  mouse.innerHTML = coor;

  let from_center_x = cx - mouseX;
  let from_center_y = cy - mouseY;

  let coor2 = "From the center<br> X: " + from_center_x + ", Y: " + from_center_y;
  mouse_center.innerHTML = coor2;

  football.style.transform = 'translateX(' + from_center_x/100 + '%) translateY(' + from_center_y/100 + '%)';
});

