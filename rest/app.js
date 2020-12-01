var express = require("express");
var app = express();

app.listen(3000, () => {
 console.log("Server running on port 3000");
});

app.get("/url", (req, res, next) => {
    res.json(["Tony","Lisa","Michael","Ginger","Food"]);
});

// Function to handle the root path
app.get('/', async function(req, res) {

    // Access the provided 'page' and 'limt' query parameters
    let page = req.query.page;
    let limit = req.query.limit;

    res.json(`This page is ${page} page(s) long and has a limit of ${limit} words`);
});