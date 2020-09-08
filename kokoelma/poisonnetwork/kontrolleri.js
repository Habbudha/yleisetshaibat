var exports = module.exports();

exports.laskeMaara = function(myString){
	myString = myString.replace(/\D/g,'');
return myString };


function haeMaara(){
	var xmlHttpRequest = new XMLHttpRequest();
	var maara = 0;
	
	xmlHttpRequest.onreadystatechange = function(){
		if (xmlHttpRequest.readyState == XMLHttpRequest.DONE && xmlHttpRequest.status == 200){
			let numero = "";
			numero = xmlHttpRequest.responseText;
			numero = numero.replace(/\D/g,'');
			maara = parseInt(numero);
			document.getElementById("testi").innerHTML = maara;
			
			
			for (var i = 0; i < maara; i++){
				var plus = i.toString()
				var ele = document.createElement("DIV"+plus);
				var txt = document.createTextNode(haeMaara2(i));
				ele.setAttribute("style", " display: block; margin-left: 2px; margin-right: 2px; padding-top: 0.35em; padding-bottom: 0.625em; padding-left: 0.75em; padding-right: 0.75em;border: 2px groove;");
				ele.appendChild(txt);
				document.body.appendChild(txt)
			
			
		}
	}};
	
	xmlHttpRequest.open('GET', 'http://localhost:8080/luku', true);
	xmlHttpRequest.send();
	console.log(maara);
}
	
	
function haeMaara2(){
	var xmlHttpRequest = new XMLHttpRequest();
	xmlHttpRequest.onload = function(){
		if(xmlHttpRequest.readyState == XMLHttpRequest.done && xmlHttpRequest.status == 200){
			let response = xmlHttpRequest.responseText;
			return response;
	}; }
	xmlHttpRequest.open('GET', 'http://localhost:8080/postit/' + id, true);
	xmlHttpRequest.send();
}
async function haeMaara3(){
	let maara = await fetch('http://localhost:8080/luku');
	let luku = await maara.text();
	return luku;

	}
function testiTaulukko(){
	
}
				
function kopio() {
		
		var teksti = document.getElementById("posti").value;
		var otsikko = document.getElementById("otsikko").value;
		
		document.getElementById("posti1").innerHTML = teksti;
		document.getElementById("otul1").innerHTML = otsikko;
	}
	function teePosti(){
		var otsikko = document.getElementById("otsikko").value;
		var teksti = document.getElementById("posti").value;
		var tekstiyhdessa = otsikko.concat( "\n" + teksti);
		var x = document.createElement("DIV");
		var t = document.createTextNode(tekstiyhdessa);
		x.setAttribute("style", " display: block; margin-left: 2px; margin-right: 2px; padding-top: 0.35em; padding-bottom: 0.625em; padding-left: 0.75em; padding-right: 0.75em;border: 2px groove;");
		
		
		x.appendChild(t);
		document.body.appendChild(x)
	
		
	
	}
function yhteydet() {
  var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Toihin6664711",
  database: "postit",
  multipleStatements: true
  });
 
}
function yhdista() { 
var con = yhteydet();
con.connect((err)=> {
if(!err)
console.log('Connection Established Successfully');
else
console.log('Connection Failed!'+ JSON.stringify(err,undefined,2));
});}


function getTiedot(){
	
 //Yhteys
 var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Toihin6664711",
  database: "postit",
  multipleStatements: true
  });
	//Yhdistäminen
	con.connect((err)=> {
	if(!err)
	console.log('Connection Established Successfully');
	else
	console.log('Connection Failed!'+ JSON.stringify(err,undefined,2));
	});

	//query ja elementin lisääminen sivun perään
	var maara = con.query("SELECT COUNT(id) AS maara FROM postit.post", function (err,rows,fields){
		if(rows[0].maara != null){
			var postit = [rows[0].maara];
			var otsikot = [rows[0].maara];
			var idt = [rows[0].maara];
			var i = 0;
			//tehdään käsiteltävät 
			for (i = 0; postit.length < i; i++){
				postit[i] = con.query("SELECT sisalto FROM post WHERE id = i");
				otsikot[i] = con.query("SELECT otsikko FROM post where id = i");
				idt[i] = i; 
			}
		}
	});


	var x = document.createElement("DIV");
		
		x.setAttribute("style", " display: block; margin-left: 2px; margin-right: 2px; padding-top: 0.35em; padding-bottom: 0.625em; padding-left: 0.75em; padding-right: 0.75()em;border: 2px groove;");
		
		
		x.appendChild(maara);
		document.body.appendChild(x)


	}
	function httpGet() {
		var xmlHttp = new XMLHttpRequest();
		xmlHttp.open("GET", "http://localhost:8080/postit");
		xmlHttp.send(null);
		console.log(xmlHttp.responseText);
		return xmlHttp.responseText;
		
	}

	



	
	// kuvien lataus        var loadFile = function(event) {
		//var image = document.getElementById('output');
		//image.src = URL.createObjectURL(event.target.files[0]);
	//}
	