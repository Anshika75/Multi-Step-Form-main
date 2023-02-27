var icon = document.getElementById("icon");
var count = 0;
function themechange(){
    count++;
    if(count%2 == 0){
        //Light Theme
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
        document.documentElement.style.setProperty("--primary", "#6200ee");
        document.documentElement.style.setProperty("--primaryvariant", "#3700b3");
        document.documentElement.style.setProperty("--surface", "#ffffff");
        document.documentElement.style.setProperty("--error", "#b00020");
        document.documentElement.style.setProperty("--secondary", "#000000");
        document.documentElement.style.setProperty("--form", "#fdfdfd");
    }
    else{
        //Dark Theme
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
        document.documentElement.style.setProperty("--primary", "#bb86fc");
        document.documentElement.style.setProperty("--primaryvariant", "#6625ff");
        document.documentElement.style.setProperty("--surface", "#121212");
        document.documentElement.style.setProperty("--error", "#cf6679");
        document.documentElement.style.setProperty("--secondary", "#ffffff");
        document.documentElement.style.setProperty("--form", "#323232");
    }
}
var slider = document.querySelector(".slider");
var nxt1 = document.querySelector(".nxt1");
var prev2 = document.querySelector(".prev2");
var nxt2 = document.querySelector(".nxt2");
var prev3 = document.querySelector(".prev3");
var nxt3 = document.querySelector(".nxt3");
var prev4 = document.querySelector(".prev4");
var nxt4 = document.querySelector(".submit");
var ptext = document.querySelectorAll(".step p");
var pbar = document.querySelectorAll(".step .check");
var dot = document.querySelectorAll(".step .dot");
let temp = 1;

nxt1.addEventListener("click", function(event){
  event.preventDefault();
  slider.style.marginLeft = "-25%";
  dot[temp - 1].classList.add("active");
  pbar[temp - 1].classList.add("active");
  ptext[temp - 1].classList.add("active");
  temp += 1;
});
nxt2.addEventListener("click", function(event){
  event.preventDefault();
  slider.style.marginLeft = "-50%";
  dot[temp - 1].classList.add("active");
  pbar[temp - 1].classList.add("active");
  ptext[temp - 1].classList.add("active");
  temp += 1;
});
prev2.addEventListener("click", function(event){
  event.preventDefault();
  slider.style.marginLeft = "0%";
  dot[temp - 2].classList.remove("active");
  pbar[temp - 2].classList.remove("active");
  ptext[temp - 2].classList.remove("active");
  temp -= 1;
});
nxt3.addEventListener("click", function(event){
  event.preventDefault();
  slider.style.marginLeft = "-75%";
  dot[temp - 1].classList.add("active");
  pbar[temp - 1].classList.add("active");
  ptext[temp - 1].classList.add("active");
  temp += 1;
});
prev3.addEventListener("click", function(event){
  event.preventDefault();
  slider.style.marginLeft = "-25%";
  dot[temp - 2].classList.remove("active");
  pbar[temp - 2].classList.remove("active");
  ptext[temp - 2].classList.remove("active");
  temp -= 1;
});
nxt4.addEventListener("click", function(){
  dot[temp - 1].classList.add("active");
  pbar[temp - 1].classList.add("active");
  ptext[temp - 1].classList.add("active");
  temp += 1;
  setTimeout(function(){
    alert("You have successfully submitted the form");
    location.reload();
  },800);
});
prev4.addEventListener("click", function(event){
  event.preventDefault();
  slider.style.marginLeft = "-50%";
  dot[temp - 2].classList.remove("active");
  pbar[temp - 2].classList.remove("active");
  ptext[temp - 2].classList.remove("active");
  temp -= 1;
});
