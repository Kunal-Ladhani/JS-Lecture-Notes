// Importing required libraries 
const cron = require("node-cron");
const express = require("express");

app = express(); // Initializing app 


// TODO: write your own async function

/*
cron (linux functionality), node-cron, cron.js, or AWS eventBridge - schedules tasks to run on the server in background.

node-cron

cron.schedule"* * * * * *", callbackFn);
              | | | | | |
              | | | | | |
              | | | | | day of week 0-7 (0 and 7 are sunday)
              | | | | month 1-12
              | | | day 1-31
              | | hour 0-23
              | minute 0-59
              seconds (optional) 0-59

callbackFn => is the function that you want to be called when the cron runs as per the schedule.

*/

const getTime = () => {
    return `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`;
}

const getDate = () => {
    return `${new Date().getDate()}-${new Date().getMonth() + 1}-${new Date().getFullYear()}`;
}

const getDateTime = () => {
    return `
    Time = ${getTime()}
    Date = ${getDate()}
    `;
}

// Creating a cron job which runs on every 2 second 
cron.schedule("*/2 * * * * *", function () {
    // console.log("running a task every 2 second");
    console.log(getDateTime());
});

app.listen(3000); 
