/**
 * Write your challenge solution here
 */

const digitalClock = document.querySelector(".digital-clock");
const date = document.querySelector(".date");

function updateDigitalClock() {
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

setInterval(updateDigitalClock, 1 * 1000);



// for every hour, the hour hand will move 360/12 and same approch for minutes and seconds hand


const handClock=document.querySelector(".clock")

function handClockUpdate(){
  let numbers=[1,2,3,4,5,6,7,8,9,10,11,12]

  numbers.forEach((n)=>{
    const create=document.createElement("div")
    create.innerText=n
    create.classList.add("number")
    handClock.appendChild(create)

  })
}

handClockUpdate()