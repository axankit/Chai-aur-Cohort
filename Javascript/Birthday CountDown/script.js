const birthday = new Date(new Date().getFullYear(), 2, 15).getTime();

document.body.style.overflow = "auto";
document.body.style.background = "linear-gradient(to right, #ff7eb3, #ff758c)";
document.body.style.textAlign = "center";
document.body.style.fontFamily = "Arial, sans-serif";

document.addEventListener("DOMContentLoaded", () => {
    updateCountdown();
    setInterval(updateCountdown, 1000);
    changeImage();
    setInterval(changeImage, 3000);
});

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = birthday - now;
    const countdownElement = document.getElementById("countdown");

    countdownElement.style.fontSize = "2rem";
    countdownElement.style.fontWeight = "bold";
    countdownElement.style.color = "white";
    countdownElement.style.padding = "20px";
    countdownElement.style.borderRadius = "10px";
    countdownElement.style.background = "rgba(0, 0, 0, 0.2)";
    countdownElement.style.display = "inline-block";
    countdownElement.style.marginTop = "20px";

    if (timeLeft <= 0) {
        countdownElement.classList.add("hidden");
        document.getElementById("birthday-message").classList.remove("hidden");
        startCelebration();
    } else {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
}

const images = ["photo1.jpg", "photo2.jpg", "photo3.jpg"];
let currentImage = 0;
function changeImage() {
    const slider = document.getElementById("photo-slider");
    slider.src = images[currentImage];
    slider.style.width = "80%";
    slider.style.height = "auto";
    slider.style.borderRadius = "10px";
    slider.style.boxShadow = "0px 4px 10px rgba(0,0,0,0.2)";
    slider.style.marginTop = "20px";
    currentImage = (currentImage + 1) % images.length;
}

function startCelebration() {
    particlesJS("celebration", {
        particles: {
            number: { value: 200 },
            shape: { type: "star" },
            size: { value: 5 },
            move: { speed: 5 }
        }
    });
}
