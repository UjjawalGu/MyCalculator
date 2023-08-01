const dark = document.querySelector(".dark");
const body = document.querySelector(".body");
const output = document.querySelector(".output");
const container = document.querySelector(".container");
const btn = document.querySelectorAll(".btn");
const light = document.querySelector(".light");
const sun = document.querySelector(".sun");
const moon = document.querySelector(".moon");
const operation = document.querySelector(".operation");
let prevstr = "";
let nextstr = "";
let newstr = "";

dark.addEventListener("click", function () {
  body.style.backgroundColor = "#000";
  output.style.color = "#fff";
  container.style.backgroundColor = "rgba(0,4,8,0.7)";
  container.style.backdropFilter = "blur(7rem)";
  btn.forEach((el) => (el.style.backgroundColor = "rgba(48,49,54,0.2)"));
  btn.forEach((el) => (el.style.color = "#1095f2"));
  btn.forEach((el) => (el.style.border = "none"));
  btn.forEach((el) => (el.style.backdropFilter = "blur(8px)"));
  dark.classList.add("display");
  light.classList.remove("display");
  sun.style.color = "#fff";
});

light.addEventListener("click", function () {
  body.style.backgroundColor = "#daf0ff";
  output.style.color = "#2e2d2d";
  container.style.backgroundColor = "#a4c4dc8a";
  btn.forEach((el) => (el.style.backgroundColor = "#9cc7eb"));
  btn.forEach((el) => (el.style.color = "#fff"));
  btn.forEach((el) => (el.style.border = "1px solid #ffffff9f"));
  btn.forEach((el) => (el.style.backdropFilter = "blur(8px)"));
  dark.classList.remove("display");
  light.classList.add("display");
  moon.style.color = "#000";
});

Array.from(btn).forEach((el) => {
  el.addEventListener("click", function (e) {
    if (e.target.innerHTML == "=") {
      if (newstr.includes("+")) {
        const splitedArr = newstr.split("+");
        const first = parseInt(splitedArr[0]);
        const second = parseInt(splitedArr[1]);
        newstr = first + second;
        output.innerHTML = newstr;
      } else if (newstr.includes("-")) {
        const minus = newstr.split("-");
        const minus1 = parseInt(minus[0]);
        const minus2 = parseInt(minus[1]);
        newstr = minus1 - minus2;
        output.innerHTML = newstr;
      } else if (newstr.includes("/")) {
        const divide = newstr.split("/");
        const divide1 = parseInt(divide[0]);
        const divide2 = parseInt(divide[1]);
        newstr = divide1 / divide2;
        output.innerHTML = newstr;
      } else if (newstr.includes("*")) {
        const multiply = newstr.split("*");
        const multiply1 = parseInt(multiply[0]);
        const multiply2 = parseInt(multiply[1]);
        newstr = multiply1 * multiply2;
        output.innerHTML = newstr;
      }
    } else if (e.target.innerHTML == "Ac") {
      newstr = "";
      operation.value = newstr;
      output.innerHTML = newstr;
    } else if ((e.target.innerHTML == '<i class="fa-solid fa-delete-left"></i>')) {
      newstr = newstr.substring(0, newstr.length - 1);
      operation.value = newstr;
    } else {
      newstr = newstr + e.target.innerHTML;
      operation.value = newstr;
    }
  });
});

