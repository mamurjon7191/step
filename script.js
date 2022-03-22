"use strict";

let prev = document.querySelector(".btn1");
let next = document.querySelector(".btn2");
let kok = document.querySelector(".stickTiniq");

let num = document.querySelectorAll(".num");
console.log(num);

let a = 0;
let b = 0;

next.addEventListener("click", function (h) {
  h.preventDefault();
  a += 180;
  b += 1;

  if (b <= 3) {
    num[b].style.setProperty("--color", `rgb(88, 93, 165)`);
  }

  if (a <= 540) {
    kok.style.setProperty("--fill", a);
  } else if (a >= 540) {
    a = 540;
  }
});

let x = 4;
prev.addEventListener("click", function (h) {
  h.preventDefault();
  x -= 1;
  num[x].style.setProperty("--color", `hsl(36, 100%, 90%)`);

  a -= 180;
  if (a < 720) {
    kok.style.setProperty("--fill", a);
  }
});
