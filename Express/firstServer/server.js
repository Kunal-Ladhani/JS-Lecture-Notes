const express = require('express');
const app = express();

let port = 8080;

app.get(`/hello`, (req, res) => {
    // console.log("-----------------------------REQUEST----------------------------")
    // console.log(req.body);

    res.send(`<h1>Hello World!</h1>`);

    // console.log("-----------------------------RESPONSE----------------------------")
    // console.log(res.status());
});


app.listen(port, () => {
    console.log(`Server started on port number: ${port}`);
});
