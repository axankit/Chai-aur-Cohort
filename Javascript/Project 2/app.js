// alert("ha ji muskil per karna hai will power per nahi practice and training per dhayan de. and the for the next 21 days follow think school strategy to improve yourself.")

const startButton = document.getElementById("startButton");

const timeInput = document.getElementById("timeInput");

const display = document.getElementById("countdownDisplay");

let i = 1;

startButton.addEventListener("click", () => {
  let timerValue = parseInt(timeInput.value);

  if (isNaN(timerValue)) {
    display.innerText = "Please input a valid Number";
  }

  if (timerValue <= 0) {
    display.innerText = "Please input number bigger than 0.";
  }

  createButton();
  //   const seconds=(i*1000)

  const timer = setInterval(() => {
    timerValue--;
    display.innerText = `Remaining ${timerValue} seconds`;

    if (timerValue <= 0) {
      clearInterval(timer);
      display.innerText = `Time is up ⏰ `;
    }

    pauseButton.addEventListener("click", () => (i = 0));
    resumeButton.addEventListener("click", () => (i = 1));
  }, i * 1000);
});

// we have to create resume and pause button while running the timer

const container = document.querySelector(".container");

function createButton() {
  const resumeButton = document.createElement("button");
  const pauseButton = document.createElement("button");

  resumeButton.innerText = "Resume";
  pauseButton.innerText = "Pause";

  container.appendChild(resumeButton);
  container.appendChild(pauseButton);

  //   pauseButton.addEventListener("click", () => (i = 0));
  //   resumeButton.addEventListener("click", () => (i = 1));
}
