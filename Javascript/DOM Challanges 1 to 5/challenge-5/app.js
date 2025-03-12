/**
 * Write your challenge solution here
 
 After the last image by animation its go back first element.
  
 */
// Image data
const images = [
  {
    url: "https://plus.unsplash.com/premium_photo-1666863909125-3a01f038e71f?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Beautiful Mountain Landscape",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1690576837108-3c8343a1fc83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Ocean Sunset View",
  },
  {
    url: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2041&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Autumn Forest Path",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1680466057202-4aa3c6329758?q=80&w=2138&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Urban City Skyline",
  },
];

// Reference
const carouselTrack = document.getElementById("carouselTrack");
const caption = document.getElementById("caption");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const carouselNav = document.getElementById("carouselNav");
const autoPlayButton = document.getElementById("autoPlayButton");
const timerDisplay = document.getElementById("timerDisplay");

const img = document.createElement("img");
img.classList.add("carousel-slide");

carouselTrack.appendChild(img);

const imgCaption = document.createElement("p");
imgCaption.classList.add("carousel-caption");
caption.appendChild(imgCaption);

function addImageCaption(i) {
  img.src = images[i].url;
  imgCaption.innerText = images[i].caption;
}

let i = 0;

addImageCaption(i);

nextButton.addEventListener("click", () => {
  if (i <= 3) {
    i++;
    if (i != 4) {
      addImageCaption(i);
    } else if ((i = 4)) {
      i = 0;
      addImageCaption(i);
    }
  }
});

prevButton.addEventListener("click", () => {
  console.log("click", i);
  if (i == 0) {
    i = 3;
    addImageCaption(i);
  } else {
    i--;
    addImageCaption(i);
  }
});

/* AutoPlay Functionality
/  Write down what you want to acheive
1. that small grey to blue button
*/

/*
1. we gonna create four buttons make the actionable
  */

const firstIndicator = document.createElement("button");
const secondIndicator = document.createElement("button");
const thirdIndicator = document.createElement("button");
const fourIndicator = document.createElement("button");

firstIndicator.classList.add("carousel-indicator");
secondIndicator.classList.add("carousel-indicator");
thirdIndicator.classList.add("carousel-indicator");
fourIndicator.classList.add("carousel-indicator");

carouselNav.appendChild(firstIndicator);
carouselNav.appendChild(secondIndicator);
carouselNav.appendChild(thirdIndicator);
carouselNav.appendChild(fourIndicator);

// Different approach

const allIndicators = document.querySelectorAll(".carousel-indicator");

allIndicators.forEach((indicator, index) => {
  indicator.addEventListener("click", () => {
    addImageCaption(index);

    // Problem we are not able to tackle is as images changes only that indiacator color changes
    if (index == 0) {
      indicator.classList.add("active");
    }
  });
});

// Auto play in after every 5 sec and timer will be shown on the screen.
// I have to write a code for the function jaise hi ham autoplay click hoga setintervals start ho jayega and per sec bad i ki value change hogi

autoPlayButton.addEventListener("click", autoplay);

function autoplay() {
  let slideTimer = 6;

  const timer = setInterval(() => {
    slideTimer--;
    timerDisplay.innerText = `Next slides in ${slideTimer}`;

    if (slideTimer <= 0) {
      clearInterval(timer);
      timerDisplay.innerText = ``;
      if (i <= 3) {
        i++;
        if (i != 4) {
          addImageCaption(i);
        } else if ((i = 4)) {
          i = 0;
          addImageCaption(i);
        }
      }

      autoplay();
    }
  }, 1 * 1000);

  autoPlayButton.innerText = "Stop Auto Play";

  autoPlayButton.addEventListener("click", () => {
    clearInterval(timer);
  });
}
