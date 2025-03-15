// const fs = require("fs");

// const fsv2 = require("fs/promises");

console.log("Starting Program");



/* 
! Same Code written using Promise

fsv2
  .readFile("./hello.txt", "utf-8")
  .then((content) => fsv2.writeFile("./backup.txt", content))
  .then(() => fsv2.unlink("./hello.txt"))
  .catch((e) => console.log("Error", e))
  .finally(() => console.log("All DOne"));

*/


 
/*
? ------------- Legacy Code -------------

fs.readFile("./hello.txt", "utf-8", function (err, content) {
  if (err) {
    console.log("Error in file reading", err);
  } else {
    console.log("File Reading Success", content);
    fs.writeFile("backup.txt", content, function (err) {
      if (err) {
        console.log(`Error in writing backup.txt`, err);
      } else {
        fs.unlink("./hello.txt", function (e) {
          if (e) {
            console.log("Error deleteing file", e);
          } else {
            console.log("File delete success");
          }
        });
      }
    });
  }
});
*/
console.log("End Of Program");
