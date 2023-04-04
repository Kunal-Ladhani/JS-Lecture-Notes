/* Asynchronous Code in JS */

// callback
// promise
// async await

// you dont want to wait till the code is done execution.
// you can do other things while its processing
// after its done, you come back to the results.

const callBackFunction = () => {
    console.log("callback function called!");
};
const lateTimeout = 3000;
const shortTimeout = 1;
setTimeout(callBackFunction, lateTimeout);
// does not happen immediately! after a delay.

/* Synchronous Code in JS */

// you wait till one execution is done.
// then only you move on to next piece of code for execution.


const normalFunction = () => {
    console.log("normal function called in Synchronous manner!");
};

normalFunction();
// happens immediately! no delay other than that due to machine hardware.
// NodeJS has a non-blocking IO nature, means it does not block the IO 
// unless we explicitly specify - like in case above.

// JS compiler will move on to execute your sync code first
// will wait till lateTimeout is over
// and then literally call back the callback function.



// callback were use until ES6

// After ES6 -> Promises were introduced. better way to do Async.

// ES7 - async await -> promise under the hood. still better syntax.
