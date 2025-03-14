
const launchDate = new Date("July 1, 1999, 12:00:00");
const futureDate = new Date();

futureDate.setTime(launchDate.getTime());

// console.log(futureDate);
// Expected output: "Thu Jul 01 1999 12:00:00 GMT+0200 (CEST)"

const fiveMinutesInMillis = 5 * 60 * 1000;
futureDate.setTime(futureDate.getTime() + fiveMinutesInMillis);

// console.log(futureDate);
// Expected output: "Thu Jul 01 1999 12:05:00 GMT+0200 (CEST)"
// Note: your timezone may vary


// Since month is zero based, birthday will be January 10, 1995
// const birthday = new Date(1994, 11, 10);

const birthday = new Date(2005, 11, 27);
const copy = new Date();

console.log(copy.getTime());


const nex=copy.setTime(birthday.getTime());


console.log(nex);

