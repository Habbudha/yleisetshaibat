
const mysql = require('mysql');
const express = require('express');
const bodyparser = require('body-parser');
var app = express();
//Configuring express server
app.use(bodyparser.json());

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Toihin6664711",
  database: "postit",
  multipleStatements: true
  });
  
con.connect((err)=> {
if(!err)
console.log('Connection Established Successfully');
else
console.log('Connection Failed!'+ JSON.stringify(err,undefined,2));
});

//Establish the server connection
//PORT ENVIRONMENT VARIABLE
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}..`));

app.get('/postit' , (req, res) => {
con.query('SELECT * FROM post', (err, rows, fields) => {
if (!err)
res.send(rows);
else
console.log(err);
})
} );


//Router to GET specific learner detail from the MySQL database
app.get('/postit/:id' , (req, res) => {
con.query('SELECT * FROM postit WHERE id = ?',[req.params.id], (err, rows, fields) => {
if (!err)
res.send(rows);
else
console.log(err);
})
} );
//Router to INSERT/POST a learner's detail

app.post('/postit', (req, res) => {
let posti = req.body;
var sql = "SET @otsikko = ?;SET @sisalto = ?; CALL poistataimuokkaa(@otsikko,@sisalto);";
con.query(sql, [posti.otsikko, posti.sisalto], (err, rows, fields) => {
if (!err)
rows.forEach(element => {
if(element.constructor == Array)
res.send('New post id : '+ element[0].id);
});
else
console.log(err);
})
});
