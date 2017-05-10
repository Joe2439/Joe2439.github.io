function myMove() {
document.getElementById("redlight").src = "./images/greenlight.png";
  var elem = document.getElementById("bluecar");
  var pos = 0;

  var bluecar = setInterval(frame, 2);
  function frame() {
    if (pos == window.innerWidth) {
      clearInterval(bluecar);
       alert("blue car won the race!");
    } else {
      pos++;
      elem.style.left = pos + 'px';
    }

  }
}



