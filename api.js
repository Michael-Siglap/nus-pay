const express = require("express");
const tx = require("./transactionsapi.js");

let router = express.Router();

router.get("/users/all", (request, response) => {
  let users = data.get_all_users();
  response.send(users);
});

router.get("/users/by-id", (request, response) => {
  let user = data.get_user_by_user_id(parseInt(request.query.user_id));
  response.send(user);
});

router.get("/api/transactions/all", (request, response) => {
  let transactions = tx.getAllTransactions()
  console.log(transactions)
  response.send(transactions);
});

router.get("/api/transactions", async (request, response) => {
  let transactions = await tx.getTransactionsDateTime(request.query.start, request.query.end)
  console.log(transactions)
  response.send(transactions);
});

router.get('/transactions',function(req,res) {
  res.sendFile(__dirname + '/transactions.html');
});

router.get('/gettransactions.js',function(req,res) {
  res.sendFile(__dirname + '/gettransactions.js');
});

module.exports = { router };