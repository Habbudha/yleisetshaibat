var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Toihin6664711",
  database: "postit"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO post (otsikko, sisalto) VALUES ('Puuhöylä', 'Käyttökelpoinen pyyhöylä halvalla')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});