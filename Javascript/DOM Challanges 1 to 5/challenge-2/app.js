/**
 * Write your challenge solution here
 */

const mainHeading = document.getElementById("mainHeading");

const redBtn = document.getElementById("redButton");
const greenBtn = document.getElementById("greenButton");
const blueBtn = document.getElementById("blueButton");
const purpleBtn = document.getElementById("purpleButton");
const resetBtn = document.getElementById("resetButton");



function changeHeadingColor(color) {
  mainHeading.style.color = color;
}

redBtn.addEventListener("click", () => changeHeadingColor("red"));

resetBtn.addEventListener("click", () => changeHeadingColor("black"));

greenBtn.addEventListener("click", () => changeHeadingColor("green"));

blueBtn.addEventListener("click", () => changeHeadingColor("blue"));

purpleBtn.addEventListener("click", () => changeHeadingColor("purple"));
