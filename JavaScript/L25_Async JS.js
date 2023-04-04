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


/**
 *
 *
 * Note
 *
 * set up a alarm (alarm set for 6am)
 * reboot - 2 things
 *  carcadian rythme -
 *  after i wake up, i will was my face
 *  after i wash my face, i will take a walk at the terrace and see sunlight.
 *  after that i will excercise for 10 min - functional excercise.
 *  after excercise i will take a bath.
 *
 *  evening -
 *  control caffine - only take caffine before 12pm.
 *  control bluelight - use lamp at night and turn off main tubelight.
 *  lower body temp - use table fan/ac/shower
 *
 *  i will take a shower at 8:30pm and sleep at 10:30pm.
 *  at 10:30, close off all lights
 *  do not look at any screen or light, phone. throw it away.
 *  listen to podcast, white noise anything but no phone in bed.
 *  sleep.
 */


// callback
// promise
// async await



// you dont want to wait till the code is done execution.
// you can do other things while its processing
// after its done, you 