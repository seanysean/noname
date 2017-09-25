var box = document.getElementsByClassName("box")[0];
var button = document.getElementById("test");
button.addEventListener("click",function() {
  sessionStorage.setItem("color", "#888");
});
setInterval(function() {
  box.style.background = sessionStorage.getItem("color");
}, 500);
