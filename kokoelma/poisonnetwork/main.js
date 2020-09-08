
const mysql = require('mysql');
const express = require('express');
const multer = require('multer');
const bodyparser = require('body-parser');
const cors = require('cors');
const path = require('path');
var app = express();
var fs = require('fs');

//Configuring express server
app.use(bodyparser.json());
app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/kuvat')));
app.use(express.static(__dirname, {index: 'etusivu.html'}));

const DIR = './kuvat'

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


//Establish the server connection/
//PORT ENVIRONMENT VARIABLE
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}..`));

//Kuvauploadin tiedot
let storage = multer.diskStorage({
	destination: function(req, file, callback){
		callback(null, DIR);
	},
	filename: function(req, file,cb){
		console.log(file.fieldname);
		console.log(Date.now());
		console.log(path.extname(file.originalname));
		cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
	}
});
//Miten varastoidaan
let upload = multer({storage: storage});

//TÄSTÄ ETEENPÄIN APIn METODEITA
//Hakee postien lukumäärän
app.get('/luku' , (req, res) => {
con.query('SELECT COUNT(id) FROM post', (err, rows, fields) => {
if (!err)
res.send(rows);
else
console.log(err);
})
} );
//Hakee kaikki postit
app.get('/postit' , (req, res) => {
con.query('SELECT * FROM post', (err, rows, fields) => {
if (!err)
res.send(rows);
else
console.log(err);
})
} );
//Hakee postin id:llä otsikon
app.get('/sisalto/otsikko/:id', (req, res) => {
con.query('SELECT otsikko FROM post WHERE id = ?',[req.params.id], (err, result) => {
if (!err)
res.send(result);
else
console.log(err);})
});
//Hakee postin id:llä tekstin
app.get('/sisalto/teksti/:id', (req, res) => {
con.query('SELECT sisalto FROM post WHERE id = ?',[req.params.id], (err, result) => {
if (!err)
res.send(result);
else
console.log(err);})
});

//Router to GET specific learner detail from the MySQL database
app.get('/postit/:id' , (req, res) => {
con.query('SELECT * FROM post WHERE id = ?',[req.params.id], (err, result) => {
if (!err)
res.send(result);
else
console.log(err);
})
} );
//GET methodi kuville
app.get('/kuvat/:id', (req, res) => {
	con.query('SELECT imgkuvat FROM kuvat WHERE idkuvat = ?', [req.params.id], (err, result) => {
		if(!err){
		res.send(result);}
		else{
		console.log(err);}
	})
});

//Insert/post metodi muista lisäyksessä käyttää id = 0

app.post('/postit', (req, res) => {
let posti = req.body;
var sql = "SET @id = ?; SET @otsikko = ?;SET @sisalto = ?; CALL poistataimuokkaa(@id,@otsikko,@sisalto);";
con.query(sql, [posti.id, posti.otsikko, posti.sisalto], (err, rows, fields) => {
if (!err)
rows.forEach(element => {
if(element.constructor == Array)
res.send('New post id : '+ element[0].id);
});
else console.log(err);
})
});

//Kuvien uploadaus
app.post('/upload', upload.single('photo'), (req, res) =>{
	if(req.file) {
		console.log("Tiedosto vastaanotettu");
		//console.log(req);
		console.log(req.file.filename);
		var sql = "INSERT INTO `postit`.`kuvat`(`imgkuvat`) VALUES ('"+req.file.filename+"')";
		
			var query = con.query(sql, function(err, result) {
				console.log('inserted data');
			});
	res.send ("Onnistunut uploadi");
	}
	else console.log("Ei tiedostoa");
});

//PUT metodi postin päivittämiseksi
app.put('/postit', (req, res) => {
let posti = req.body;
var sql = "SET @id = ?;SET @otsikko = ?;SET @sisalto = ?; CALL poistataimuokkaa(@id,@otsikko,@sisalto);";
con.query(sql, [posti.id, posti.otsikko, posti.sisalto], (err, rows, fields) => {
if (!err)
res.send('Updated Successfully');
else
console.log(err);
})
});
//Poisto postin ID:llä
app.delete('/postit/:id', (req, res) => {
con.query('DELETE FROM post WHERE id = ?', [req.params.id], (err, rows, fields) => {
if (!err)
res.send('Post deleted successfully.');
else
console.log(err);
})
});

