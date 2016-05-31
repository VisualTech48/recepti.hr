var Jela = [["kajgano", "sol","papar","jaja"],["kajgano_sa_spekom","sol","papar","jaja","spek"]];


function VelikoPrvoSlovo(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function Pretraga(){
	var Pojam 	 = document.getElementById("searchStr").value;
	console.log(Pojam);
//	
	document.getElementById("spisrecepata").innerHTML = "Moguæi recepti: "
	for(var i = 0; i < Jela.length; i++) {
	var Pozicija = Jela[i].indexOf(Pojam);
	console.log("Pozicija :" + Pozicija);
	if(Pozicija => 0){
		var NaslovJela = "";
		console.log(Jela[i][Pozicija - Pozicija]);
		NaslovJela = Jela[i][Pozicija - Pozicija]
		//if(NaslovJela.toLowerCase().indexOf("_") >= 0){
			
		//}
		NaslovJela = NaslovJela.replace(/_/gi, " ");	
		NaslovJela = VelikoPrvoSlovo(NaslovJela);
		document.getElementById("spisrecepata").innerHTML += NaslovJela + ", ";
	}
    //console.log(Jela[i]);

	}
	
	//console.log(Jela[Pozicija]);
}