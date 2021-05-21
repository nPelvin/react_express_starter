const express = require('express');
const cors = require('cors');
const quotes = require("./quotes.json");


const app = express();

function pickFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

app.get("/api/customers", cors(), (req, res) => {
  console.log(quotes);
  const customers = [
    { id: 1, firstName: "John", lastName: "Doe" },
    { id: 2, firstName: "Brad", lastName: "Traversy" },
    { id: 3, firstName: "Mary", lastName: "Swanson" },
  ];
  res.json(customers);
});

app.get("/api/quotes", cors(), (req, res) => {
  console.log(quotes);
  res.json(quotes);
});


app.get("/api/quotesRandom", cors(), (req, res) => {
  res.json(pickFromArray(quotes));
});

function pickFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}


  app.get("/search", function (req, res) {
    let searchTerm = req.query.term;
    let newArray = quotes.filter(
      (x) =>
        x.quote.toLowerCase().includes(searchTerm.toLowerCase()) ||
        x.author.toLowerCase().includes(searchTerm.toLowerCase())
    );
    res.send(newArray);
  });

  app.get("/quotes", function (req, res) {
    res.send(quotes);
  });


const port = 5000;

app.listen(port, () => `Server running on port ${port}`);