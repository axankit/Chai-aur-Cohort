/* 
Debouncing 

As per story jab tak koi uska call nahi karega until its executed.
agar bich me kisi ne call kiya toh delete kar dega


thora sa google kare (thora sa theory )

? Debouncing is a programming technique that limits how often a function is called. It's often used in JavaScript to improve the performance of web applications. 

How it works

* When a function is debounced, it waits a certain amount of time before executing. 
*  If the function is called again before the wait time is up, the timer resets and the     wait time starts again. 

! Debouncing is useful for handling events that happen repeatedly, like keypresses, scrolling, and resizing windows. 


Use cases
User input: Debouncing prevents the UI from becoming laggy when a user is typing. 
Autocomplete: Debouncing delays function execution until the user finishes typing, so that only API calls are made when needed. 
Form validation: Debouncing ensures that the validation function isn't triggered repeatedly for each keystroke. 


*/

function ptanhi(fn,delay){
  let myId;
  
  return function (...args){
    clearTimeout(myId);
    myId=setTimeout(()=>{
        fn.apply(this,args);
    },delay)
  }
}

function greet(name){
    console.log(`Hello ${name}`);
}

const sachMeNhipta=ptanhi(()=> greet("hitesh"),3000)
  

sachMeNhipta()
sachMeNhipta()

