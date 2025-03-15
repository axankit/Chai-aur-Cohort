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











function wait(seconds) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), seconds * 1000);
  });
}

async function doTasks() {
  try {
    const fileContent = await readFileWithPromise('./hello.txt', 'utf-8');
    console.log('All DOne');
    await writeFileWithPromise('./backup.txt', fileContent);
    await wait(10);
    await unlinkWithPromise('./hello.txt');
  } catch (e) {
    console.log('Error', e);
  } 
}
console.log('Starting Program');

doTasks().then(() => console.log('All Done'));

console.log('End Of Program');