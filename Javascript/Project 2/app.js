const startButton = document.getElementById("startButton");
const timeInput = document.getElementById("timeInput");
const display = document.getElementById("countdownDisplay");

const resumeButton = document.getElementById("resume");
const pauseButton = document.getElementById("pause");

let i = 1;

startButton.addEventListener("click", () => {
  let timerValue = parseInt(timeInput.value);

  if (isNaN(timerValue)) {
    display.innerText = "Please input a valid Number";
  }

  if (timerValue <= 0) {
    display.innerText = "Please input number bigger than 0.";
  }

  resumeButton.style.display = "block";
  pauseButton.style.display = "block";

  resumeButton.addEventListener("click", resumeTimer);
  pauseButton.addEventListener("click", pauseTimer);

  function pauseTimer() {
    console.log(timerValue);
    clearInterval(timer);
  }

  function resumeTimer() {
    const timer = setInterval(() => {
      timerValue--;
      display.innerText = `Remaining ${timerValue} seconds`;

      if (timerValue <= 0) {
        clearInterval(timer);
        display.innerText = `Time is up ⏰ `;
      }
    }, i * 1000);
  }

  const timer = setInterval(() => {
    timerValue--;
    display.innerText = `Remaining ${timerValue} seconds`;

    if (timerValue <= 0) {
      clearInterval(timer);
      display.innerText = `Time is up ⏰ `;
    }
  }, i * 1000);
});

// we have to create resume and pause button while running the timer

// const container = document.querySelector(".container");
