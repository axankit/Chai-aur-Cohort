/**
 * Write your challenge solution here
 */

const digitalClock = document.querySelector(".digital-clock");
const date = document.querySelector(".date");

function update() {
  const clock = new Date();
  const hour = (clock.getHours() % 12).toString().padStart(2, 0);
  const minutes = clock.getMinutes();
  const seconds = clock.getSeconds().toString().padStart(2, 0);

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const dateValue = clock.toLocaleDateString(undefined, options);

  digitalClock.innerText = `${hour}:${minutes}:${seconds}`;
  date.innerText = dateValue.replace(",", " ");

}

setInterval(update, 1 * 1000);
