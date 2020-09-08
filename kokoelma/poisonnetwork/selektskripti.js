var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Toihin6664711",
  database: "postit"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM post", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});