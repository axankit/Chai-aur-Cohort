/* Pollyfills 

1. what is pollyfills
2. why we need pollyfills 
3. how to create pollyfills
   1. for each
   2. map
   3. filter
   4. promises


   1. Understand the signature of that particular function ( woh cheez karti kya hai) 

for each
   array.forEach(function(element, index, array) {
  code to execute
  });

"this" keyword is used for calling objects
*/

/*

const arr=[1,2,3,4,5]

if (!Array.prototype.myforEach){
    Array.prototype.myforEach=function(cb){
     for (let i=0; i<this.length; i++){
    cb(this[i],i);
     }
    }
}

arr.myforEach((index,Element)=> console.log(Element, index))

console.log(!Array.prototype.myforEach)

*/

/*

Map

const arr=[1,2,3,4,5]

if (!Array.prototype.myMap){
    Array.prototype.myMap=function(cb){
        const result=[]

       for (let i=0; i<this.length; i++){
        const value=cb(this[i],i)
        result.push(value)
       }

        return result
    }
}

const trippledArray = arr.myMap((e)=> e*3)

console.log(trippledArray)

*/

/*



const arr = [1, 20, 3, 4, 5];

if (!Array.prototype.myReduce) {
  Array.prototype.myReduce = function (cb, intialvalue) {

    console.log(intialvalue)
    let acc = intialvalue || this[0];

    const startIndex = intialvalue ? 0 : 1;

    for (let i = startIndex; i < this.length; i++) {
      acc = cb(acc, this[i]);
    }

    return acc;
  };
}

const res = arr.myReduce((abtakkivalue, currentvalue) => {
  return abtakkivalue + currentvalue;
},12);

console.log(res);

*/

const arr = [1, 2, 3, 4, 5,6,7,8];

if (!Array.prototype.myFilter) {
  Array.prototype.myFilter = function (cb) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
      if (cb(this[i])) {
        result.push(this[i]);
      }
    }
    return result;
  };
}


const res=arr.myFilter((e)=> e%2==0)
console.log(res)