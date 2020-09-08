function palautaLupaus(){
	let lupaus = fetch('http://localhost:8080/luku');
return lupaus; 
}

async function haeLuku(){
	let luku = await palautaLupaus();
	luku = luku.text();
	return luku;
}

async function muokkaaLuku(){
	let lopullinen = await haeLuku();
	lopullinen = lopullinen.replace(/\D/g,'');
	lopullinen = parseInt(lopullinen);
	document.getElementById("testi").innerHTML = lopullinen;
	return lopullinen
	}

async function haePosti(i){
	const response = await fetch('http://localhost:8080/postit/'+i);
	if (!response.ok){
		throw new Error("HTTP error" + response.status);
	}
		return response.text();
}

async function haeOtsikko(i){
	const response = await fetch('http://localhost:8080/sisalto/otsikko/'+i);
	if (!response.ok){
		throw new Error("HTTP error" + response.status);
	}
		return response.text();
}

async function haeTeksti(i){
	const response = await fetch('http://localhost:8080/sisalto/teksti/'+i);
	if (!response.ok){
		throw new Error("HTTP error" + response.status);
	}
		return response.text();
}
async function haeKuva(i){
	const response = await fetch('http://localhost:8080/kuvat/'+i);
	if (!response.ok) {
		throw new Error("HTTP error" + response.status);
	}
	return response.text();
}
async function yhteenMennaan(){
	const luku = await muokkaaLuku(); 
	var otsikot = [];
	var sisallot = [];
	var kuvat = [];
	var i = 0;
	for (i=1; i <= luku; i++){
		
		kuvat.push(haeKuva(i));
		otsikot.push(haeOtsikko(i));
		sisallot.push(haeTeksti(i));
	}
	var po = await Promise.all(otsikot);
	var ps = await Promise.all(sisallot);
	var pk = await Promise.all(kuvat);
	
	po = po.map(text => text.replace(/[^A-Za-z]+/g, ' '));
	ps = ps.map(text => text.replace(/[^A-Za-z]+/g, ' '));
	pk = pk.map(text => text.replace(/[^A-Za-z0-9-.]+/g, ''));
	

	for (var i = 0; i < luku; i++){
				
				po[i] = po[i].slice(8);
				ps[i] = ps[i].slice(8);
				pk[i] = pk[i].slice(8);
				
				//kuva 
				var img = new Image();
				img.src = ("C:/Users/Taneli/Desktop/verkkosivut/poisonnetwork/kuvat/" +pk[i]);
				img.style.height = '100px';
				img.style.width = '140px';
				
				var eleimg = document.createElement("DI"+i);
				
				
				
				//tekstit
				var ele = document.createElement("DIV"+i);
				var ele2 = document.createElement("DV"+i);
				var eleimg = document.createElement("D"+i);
				var txt = document.createTextNode(ps[i]);
				var otsikko = document.createTextNode(po[i]);
				ele.setAttribute("style", " display: block; margin-left: 2px; margin-right: 2px; padding-top: 0.35em; padding-bottom: 0.625em; padding-left: 0.75em; padding-right: 0.75em;border: 2px groove ; height: 160px;  ");
				ele2.setAttribute("style", " display: block; margin-left: 2px; margin-right: 2px; padding-top: 0.35em; padding-bottom: 0.625em; padding-left: 0.75em; padding-right: 0.75em;border: 2px groove; height: 120px;font-style: italic; " );
				eleimg.setAttribute("style", "float: left;");
				console.log(pk[i]);
				console.log(typeof ps[i]);
				console.log(typeof po[i]);
				eleimg.appendChild(img);
				ele.appendChild(otsikko);
				ele.appendChild(ele2);
				eleimg.appendChild(img);
				ele2.appendChild(txt);
				ele2.appendChild(eleimg);
				document.body.appendChild(ele)
	}
	return ps;
}
	
	//Laittaa taulukkoon koko SQL listauksen
async function tekstiPosti(){
	const luku = await muokkaaLuku();
	var lupaukset = [];
	var i = 0;
	for (i = 1; i < luku; i++){
		lupaukset.push(haePosti(i));
	}
	
	const postit = await Promise.all(lupaukset);
	
	for (i = 0; i < postit.length; i++){
		console.log(postit[i]);
	}
	return postit.map(text =>text.replace(/[^A-Za-z]+/g, ''));
	
	}
	
	//Postaa kuvan sekä tekstin yhdestä napista
	submitForms = function(){
	var tiedosto = document.getElementById("file");
	var otsikko = document.getElementById("otsikko").value;
	var teksti = document.getElementById("sisalto").value;
	
	//Tarkista tyhjät kentät
	if (!otsikko || !teksti){
		alert("Täytä otsikko ja tekstikenttä");
		return false;
	}
	//Tarkista tiedoston koko
	else if (tiedosto.files.length > 0) {
			var tiedostoraw = tiedosto.files.item(0).size;
			var tiedostokoko = Math.round((tiedostoraw / 1024));
			if(tiedostokoko >= 4096){
				alert("4mb on maksimi tiedostokoko");
				return false;
			}
			else{
				handleSubmit();
			}
	}
	//Varmista postaus ilman tiedostoa
	else if (tiedosto.files.length == 0) {
		let konfirmaatio = confirm("Oletko varma että haluat postata ilman tiedostoa?");
			if(konfirmaatio == false){
				return false
			}	
			else {
				handleSubmit();
			}
	}
	}
	//Formien uploadaus
async function handleSubmit(event){
	
	let formi1 = document.getElementById('kuvaupload');
	let formi2 = document.getElementById('tekstiupload');
	
	let data1 = new FormData(formi1);
	let data2 = new FormData(formi2);
	

	const data11 = new URLSearchParams(new FormData(kuvaupload));
	const data22 = new URLSearchParams(new FormData(tekstiupload));
	let testidata = [...data11.entries];
	 const asString = testidata
      .map(x => `${encodeURIComponent(x[0])}=${encodeURIComponent(x[1])}`)
      .join('&');
  console.log(asString);
	console.log(testidata);
	console.log(data1);
	console.log(data2);
	var tsek1 = false;
	var tsek2 = false;
	
	const resp1 = await fetch('http://localhost:8080/postit', {
		method: 'POST',
		body: data1,
	});
		
	const resp2 = await fetch('http://localhost:8080/upload', {
		method: 'POST',
		body: data2,
	});
	if(!resp1.ok) tsek1 = false;
	else tsek1 = true;
	
	if(!resp2.ok) tsek2 = false;
	else tsek2 = true;
	if(tsek1 && tsek2 == true){
		alert("Postattu onnistuneesti");
	}
		else{
		alert("Jotain meni pieleen");
	}
	
	
	
	


	}
	
	



