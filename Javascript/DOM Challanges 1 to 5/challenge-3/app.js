/**
 * Write your challenge solution here
 */

const nameInput = document.getElementById("nameInput");
const jobInput = document.getElementById("jobInput");
const ageInput = document.getElementById("ageInput");
const bioInput = document.getElementById("bioInput");

// Preview card refernce

const nameDisplay = document.getElementById("nameDisplay");
const jobDisplay = document.getElementById("jobDisplay");
const ageDisplay = document.getElementById("ageDisplay");
const bioDisplay = document.getElementById("bioDisplay");


nameInput.addEventListener("input",()=>{
    nameDisplay.innerText=nameInput.value
})

jobInput.addEventListener("input",()=>{
    jobDisplay.innerText=jobInput.value
})

ageInput.addEventListener("input",()=>{
    ageDisplay.innerText=ageInput.value
})

bioInput.addEventListener("input",()=>{
    bioDisplay.innerText=bioInput.value
})