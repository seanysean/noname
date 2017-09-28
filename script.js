var box = document.getElementsByClassName("box")[0];
var button = document.getElementById("test");
var on = false;
button.addEventListener("click",function() {
  if (!on) {
    sessionStorage.setItem("color", "#888");
    on = true;
  }
  else {
    sessionStorage.setItem("color", "#000");
    on = false;
  }
});
setInterval(function() {
  box.style.background = sessionStorage.getItem("color");
}, 500);
