// Node.js provides us with only a handful of functionality
// that we can use globally without importing anything
// core modules
// fs, path, http, https, os ... and many more core packages.

// generally others are provided inside modules
// to not pollute our global namespace by these reserved keywords and
// to make it obvious on which dependencies this file depends

// we can import other bundled modules.
// create our own modules.
// import 3rd party modules also via a package manager - npm, yarn etc.

// http helps us is making a server, and sending requests etc.
// https - launching a https encoded server (secure).

import http from 'http';
import fs from 'fs';

// event driven architechture of node.js 
// if x happends do y
// if request comes, execute this anonymous callback (callback function).

http.createServer((myHttpReq, myHttpRes) => {
    // console.log(myHttpReq);
});

// we have created a server but did not use it! (catch it in a variable)
// we dont know where is the server?
// how to reach it?
// what address does it have?

const mySimpleServer = http.createServer((myHttpReq, myHttpRes) => {
    console.log(myHttpReq);
    // process.exit(); used to quit that listening process (on event loop).

    console.log(myHttpReq.headers);
    // headers are meta data that provides some info about the req. / resp.

    console.log(myHttpReq.url);
    // url on which the request was sent

    console.log(myHttpReq.method);
    // method of the request - GET/ PUT / POST / PATCH / DELETE
});

const myFirstServer = http.createServer((myHttpReq, myHttpRes) => {
    myHttpRes.setHeader('Content-Type', 'text/html');
    myHttpRes.write("<html>");
    myHttpRes.write("<head>");
    myHttpRes.write("<title>First server page.</title>");
    myHttpRes.write("</head>");
    myHttpRes.write("<body>");
    myHttpRes.write("<h1>This is my first server page.</h1>");
    myHttpRes.write("</body>");
    myHttpRes.write("</html>");
    myHttpRes.end();
});


// listen will start a process where node will not immediately exit from script
// but keep the prog running for incoming requests.
const myPortNum = 3400;
// myFirstServer.listen(myPortNum);


const requestHandler = (myHttpReq, myHttpRes) => {
    const url = myHttpReq.url;
    const method = myHttpReq.method;
    // incoming data inside request is sent as a stream of bytes

    if (url === '/' && method === 'GET') {
        myHttpRes.write("<html>");
        myHttpRes.write("<head>");
        myHttpRes.write("<title>Server Home</title>");
        myHttpRes.write("</head>");
        myHttpRes.write("<body>");
        myHttpRes.write("<h1>Welocome</h1>");
        myHttpRes.write(`
        <form action="/message" method="POST" >
            <input type="text" name="message" placeholder="send message from here">
            <button type="submit">SEND MESSAGE</button>
        </form>
        `);
        myHttpRes.write("</body>");
        myHttpRes.write("</html>");
        return myHttpRes.end();
        // due to this return we come out of this function.
    }

    if (url === '/message' && method === 'POST') {
        const reqBody = [];
        myHttpReq.on('data', (chunk) => {
            // this will be fired when it parses the incoming data stream
            console.log(chunk);
            reqBody.push(chunk);
        });

        myHttpReq.on('end', () => {
            // fired once its done parsing the incoming data stream
            const parsedBody = Buffer.concat(reqBody).toString();
            console.log(parsedBody);
            //fs.writeFileSync('message.txt', parsedBody.split("=")[1], { encoding: 'utf-8' });
            fs.writeFile('message.txt', parsedBody.split("=")[1], { encoding: 'utf-8' }, () => {
                myHttpRes.statusCode = 302;
                myHttpRes.setHeader('Location', '/');
                return myHttpRes.end();
            });
            // callback function is registered by nodejs
            // once the execution is complete it calls that
            // this is event driven architechture of node
            // allows for non blocking i/o

        });
    }

    myHttpRes.setHeader('Content-Type', 'text/html');
    myHttpRes.write("<html>");
    myHttpRes.write("<head>");
    myHttpRes.write("<title>Message page.</title>");
    myHttpRes.write("</head>");
    myHttpRes.write("<body>");
    myHttpRes.write("<h1>This is second first server page.</h1>");

    const message = fs.readFileSync('message.txt', { encoding: 'utf-8' });
    myHttpRes.write(`<h1>${message}</h1>`);

    myHttpRes.write("</body>");
    myHttpRes.write("</html>");
    myHttpRes.end();
}
const mySecondServer = http.createServer(requestHandler);
mySecondServer.listen(myPortNum);
