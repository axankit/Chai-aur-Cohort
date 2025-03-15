const fs = require("fs");

// const fsv2 = require("fs/promises");

console.log("Starting Program");

function readFileWithPromise(filepath, encoding) {
  return new Promise((resolve, reject) => {
    fs.readFile(filepath, encoding, (err, content) => {
      if (err) {
        reject(err);
      } else {
        resolve(content);
      }
    });
  });
}

function writeFileWithPromise(filepath, content) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filepath, content, function (err) {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

function unlinkWithPromise(filepath) {
  return new Promise((resolve, reject) => {
    fs.unlink(filepath, function (e) {
      if (e) {
        reject(e);
      } else {
        resolve();
      }
    });
  });
}

// const readFileWithPromise = promisify(fs.readFile)
// readFileWithPromise().then()

// Multiple Async code is running in sync fashion

readFileWithPromise('./hello.txt', 'utf-8')
  .then((content) => writeFileWithPromise('./backup.txt', content))
  .then(() => unlinkWithPromise('./hello.txt'))
  .catch((e) => console.log('Error', e))
  .finally(() => console.log('All DOne'))




/* 
! Same Code written using Promise

fsv2
  .readFile("./hello.txt", "utf-8")
  .then((content) => fsv2.writeFile("./backup.txt", content))
  .then(() => fsv2.unlink("./hello.txt"))
  .catch((e) => console.log("Error", e))
  .finally(() => console.log("All DOne"));

*/