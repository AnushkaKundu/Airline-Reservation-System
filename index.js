const express = require("express");
const app=express();

var mysql = require('mysql');

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "anushka123",
  database: 'A6',
  insecureAuth : true
});

connection.connect(
//   function(err) {
//   if (err) {
//     console.error('error connecting: ' + err.stack);
//     connection.query("Create table flights;", function (err, result) {
//       if (err) throw err;
//       console.log(result);
//     });
//     return;
//   }

//   console.log('connected as id ' + connection.threadId);
// }
);
connection.query('SELECT * FROM Employee', function(err, rows, fields) 
{
  if (err) throw err;

  console.log(rows[1]);
});
connection.end();
// var port=3000;
app.get("/", (req, res)=> {
  res.send("hi");
});

app.listen(3000, ()=> {
    console.log(`Server started on port 3000.`);
});