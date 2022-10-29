const express = require('express');
const app1 = express();
const app2 = express();
const port1 = 3000;
const port2 = 8000;

app1.get("/", (request, response) => {
    try {
        response.set("Content-type", "text/html");
        response.status(200);
        response.send("<h1>This is a server running on Port 3000</h1>");
    }
    catch (e) {
        console.log(e);
    }
})

app2.get("/", (request, response) => {
    try {
        response.set("Content-type", "text/html");
        response.status(200);
        response.send("<h1>This is a server running on Port 8000</h1>");
    }
    catch (e) {
        console.log(e);
    }
})

app1.listen(port1, (error) => {
    if (!error) {
        console.log(`Server is running on port ${port1}`);
    } else {
        console.log('Error occured', error);
    }
})

app2.listen(port2, (error) => {
    if (!error) {
        console.log(`Server is running on port ${port2}`);
    } else {
        console.log('Error occured', error);
    }
})