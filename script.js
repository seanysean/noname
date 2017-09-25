var box = document.getElementsByClassName("box")[0];
var button = document.getElementById("test");
var clicked = 0;
button.addEventListener("click",function() {
  clicked = 1;
});
setInterval(function() {
  if (clicked === 1) {
    box.style.background = "#888";
  }
}, 500);
