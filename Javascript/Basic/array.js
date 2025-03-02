const teas =["Lemon Tea", "Oolong Tea", "Milk Tea", "Grean Tea", "Masala Tea","Herbal Tea"]

teas.push("Chamomile Tea")

const index =teas.indexOf("Oolong Tea")

// if (index > -1){
//     teas.splice(index,1)
// }

// console.log(teas)

// console.log(teas.sort()) 

// for (let i=0; i<teas.length; i++){
//  console.log(teas[i])
// }

// let caffinatedTeas=0;

// for (let i=0; i<teas.length; i++){
 
//     if(teas[i]!=="Herbal Tea"){
//         caffinatedTeas++
//     }

    
// }

// console.log(caffinatedTeas)

// let upperCase=[];

// for (let i=0; i<teas.length; i++){
 
//     let x=teas[i].toUpperCase()
//     upperCase.push(x)
    
// }

// console.log(upperCase)

// console.log(teas.sort())

let largtea=""

for (let i=0; i<teas.length; i++){
    if (teas[i].length>largtea.length){
        largtea=teas[i]
    }
}

console.log(largtea)