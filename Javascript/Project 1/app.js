function updateClock() {
  const time = document.getElementById("time");
  const dateElement = document.getElementById("date");

  const now = new Date();
  const hour = now.getHours() % 12 || 12;
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");

  const ampm = now.getHours() >= 12 ? "PM" : "AM";

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const date=now.toLocaleDateString(undefined,options)

  time.textContent = `${hour}:${minutes}:${seconds}:${ampm}`;
  dateElement.textContent=date;
}

setInterval(updateClock, 1000);

updateClock();
