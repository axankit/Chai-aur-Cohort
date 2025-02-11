/*

Behaviour of "this" keyword in object

const user ={
    username: "Hitesh",
    price:999,

    WelcomeMessage: function (){
        console.log(`${this.username}, welcome to website`);
    }

}


user.WelcomeMessage()

user.username="Ankit"

user.WelcomeMessage()

*/

// Behaviour of "this" keyword in object

// function chai (){
//     let username ="Ankit Ranjan"
//     console.log (this)
// }

// chai()

// In Arrow function

// const chai =() =>{
//     let username ="Ankit Ranjan"
//     console.log (this)
// }

// chai()


// Experimentation

// const tea= function (){
//     let username ="Ankit Ranjan"
//     console.log (this)
// }

// console.log(tea)

// const tea= ()=>{
//     let username ="Ankit Ranjan"
//     console.log (this)
// }

// console.log(tea)