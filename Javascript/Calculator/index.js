/*
 1. Basic Airthmetic
 2. CE to AC
 */ 


 
//  Reference 


const calculatorScreen=document.getElementById("actualScreen")

// Reference of all Airthmetic sign
const addbtn=document.getElementById("addbtn")
const subtractbtn=document.getElementById("subtractbtn")
const multiplybtn=document.getElementById("multiplybtn")
const dividebtn=document.getElementById("dividebtn")

// Reference of ZERO, dec,equal
const equaltobtn=document.getElementById("equal-to")
const zerobtn=document.getElementById("zero")
const decimelbtn=document.getElementById("decimel")
const clearlbtn=document.getElementById("ce")

// Reference of all the numbers

const onebtn=document.getElementById("one")
const twobtn=document.getElementById("two")
const threebtn=document.getElementById("three")
const fourbtn=document.getElementById("four")
const fivebtn=document.getElementById("five")
const sixbtn=document.getElementById("six")
const sevenbtn=document.getElementById("seven")
const eightbtn=document.getElementById("eight")
const ninebtn=document.getElementById("nine")

// OG Game started from here


onebtn.addEventListener('click', ()=>{
    calculatorScreen.innerText=onebtn.innerText
})


twobtn.addEventListener('click', ()=>{
    calculatorScreen.innerText="2"
})

threebtn.addEventListener('click', ()=>{
    calculatorScreen.innerText="3"
})


fourbtn.addEventListener('click', ()=>{
    calculatorScreen.innerText="4"
})


fivebtn.addEventListener('click', ()=>{
    calculatorScreen.innerText="5"
})


sixbtn.addEventListener('click', ()=>{
    calculatorScreen.innerText="6"
})

sevenbtn.addEventListener('click', ()=>{
    calculatorScreen.innerText="7"
})


eightbtn.addEventListener('click', ()=>{
    calculatorScreen.innerText="8"
})


ninebtn.addEventListener('click', ()=>{
    calculatorScreen.innerText="9"
})

zerobtn.addEventListener('click', ()=>{
    calculatorScreen.innerText="0"
})

decimelbtn.addEventListener('click', ()=>{
    calculatorScreen.innerText="."
})


addbtn.addEventListener('click', ()=>{
    calculatorScreen.innerText="+"
})


subtractbtn.addEventListener('click', ()=>{
    calculatorScreen.innerText="-"
})

multiplybtn.addEventListener('click', ()=>{
    calculatorScreen.innerText="x"
})

dividebtn.addEventListener('click', ()=>{
    calculatorScreen.innerText="÷"
})


