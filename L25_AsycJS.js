// Asynchronous Code in JS

const callBackFunction = () => {
    console.log("callback function called!");
};
const lateTimeout = 3000;
const shortTimeout = 1;
setTimeout(callBackFunction, lateTimeout);
// does not happen immediately! after a delay.

// Synchronous Code in JS
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