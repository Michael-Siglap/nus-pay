const mysql = require("mysql");
require ('dotenv').config();

var properties = {
    host : process.env.DBHOST,
    user : process.env.DBUSER,
    password : process.env.DBPASSWD,
    port : process.env.DBPORT,
    database: process.env.DBNAME
};

var connection = mysql.createConnection(properties);

connection.connect((errors) => {
    if (errors) {
        console.log("Could NOT connect to the SQL server!")
    } else {
        console.log("Connected to SQL server successfully.");
    }
});

connection.query(`select * from transaction`, (error, results) => {
    if (error) {
      console.log(error);
    } else {
      console.log(results);
    }
  });

  module.exports = { connection };