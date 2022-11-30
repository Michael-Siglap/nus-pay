const { response } = require("express");
const express = require("express");
const database = require("./mockdata");

let router = express.Router();

router.get("/transaction/all", (request, response) => {
 database.connection.query(`select * from transaction`, (errors, results) => {
  if (errors){
    console.log(errors);
    response.status(500).send("Internal Server Error");
  }else{
    response.send(results);
  }
 });
});

// router.get("/transaction/transaction_id", (request, response) => {
//   // 1. make sure user_id is a number
//   if (isNaN(parseInt(request.query.transaction_id))) {
//     console.log(
//       "Invalid transaction_id passed in the request. transaction_id: " + request.query.transaction_id
//     );
//     response.status(400).send("Invalid transaction_id passed in the request.");
//   }

  // database.connection.query(
  //   `select * from transaction where id = ${request.query.transaction_id}`,
  //   (errors,results)=>{
  //     if (errors){
  //       console.log(errors);
  //       response.status(500).send("Internal Server Error");
  //     }else{
  //       response.send(results);
  //     }
  //   }
  // );
  // });

  module.exports = {router};