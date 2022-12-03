const mysql = require('mysql');

var con = mysql.createConnection({
  host: "137.132.92.144",
  user: "fxxxxxxxxb",
  password: "Fxxxxxxxxxb",
  port: 12865,
  database: "market"
});

con.connect(function(err) {
  if (err) throw err
});

function getAllTransactions() {
  con.query("SELECT * FROM transaction;", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    var objs = [];
    for (var i = 0;i < result.length; i++) {
        objs.push({row: result[i]});
    }
    return JSON.stringify(objs);
  });
}

function getTransactionsDateTime(start_date, end_date) {
  return new Promise(function(resolve, reject) {
    var query = 'SELECT * FROM transaction WHERE transaction_datetime BETWEEN ? AND ?;'

    con.query(query, [start_date, end_date], function (err, result, fields) {
        if (err) {
            return reject(err);
        }
        var objs = [];
        for (var i = 0;i < result.length; i++) {
            objs.push({
            date: result[i].transaction_datetime,
            amount: result[i].transaction_amount,
            quantity: result[i].transaction_quantity,
            customer_id: result[i].customer_id
            });
        }
        console.log('hello3', objs)
        resolve(objs);
    });
  });
}

module.exports = {getAllTransactions, getTransactionsDateTime};
