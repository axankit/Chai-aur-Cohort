/**
 * Write your challenge solution here
 * 
 * Step 1 : Take the reference and make sure you choose good variable name.
 
what I learn

1.functions make code cleaner and easier.

there is no output value we see
console.log(document.body.style)

 */

const lightBulb = document.getElementById("bulb");

const toggleButton = document.getElementById("toggleButton");

const switchStatus = document.getElementById("status");

function changeEffect(color, button, status) {
  lightBulb.style.background = color;
  toggleButton.innerText = button;
  switchStatus.innerText = status;
}

function darkmode(backgroundColor, fontColor) {
  document.body.style.background = backgroundColor;
  document.body.style.color = fontColor;
}

darkmode("black", "white");

toggleButton.addEventListener("click", () => {
  const currentColor = lightBulb.style.background;

  if (!currentColor || currentColor === "grey") {
    changeEffect("#FFD700", "Turn Off", "Status: On");
    darkmode("black", "white");
    lightBulb.style.boxShadow = "yellow 0px 0px 100px";
  } else if (currentColor !== "") {
    changeEffect("grey", "Turn On", "Status: Off");
    darkmode("white", "black");
  }
});
