// Promises 

// const thenable = {
//   then: function(callback) {
//     setTimeout(() => callback(2), 100);
//   }
// };

// const value = await thenable;
// console.log(value);

// const promise = new Promise((resolve, reject) => {
//   reject(Error('Some error occurred'));
// })
// promise.catch(error => console.log(error.message));
// promise.catch(error => console.log(error.message));

// const test = new Promise((resolve,reject) => {
//   return  resolve(4)
// })
// function trev() {
//   console.log('hello Trev')
// }

// test.then(msg => console.log(msg)).finally(trev())

// Closures

// function getCount() {
//   let count = 11;
//   console.log(count)
// }

// getCount()
// console.log(count);


const foo = () => console.log("First");
const bar = () => setTimeout(() => console.log("Second"), 500);
const baz = () => console.log("Third");

bar();
foo();
baz();