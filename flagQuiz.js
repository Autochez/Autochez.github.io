const flagNames=['AGENDER', 'AROMANTIC', 'ASEXUAL', 'BIGENDER',
'BISEXUAL', 'DEMISEXUAL', 'GENDERFLUID', 'GENDERQUEER', 'INTERSEX',
'LESBIAN', 'NON BINARY', 'PANSEXUAL', 'POLYAMORY',
'POLYSEXUAL', 'TRANSGENDER', 'ARMENIA', 'BOTSWANA',
'CENTRAL AFRICAN REPUBLIC', 'COMOROS', 'GABON', 'THE GAMBIA',
'MAURITIUS', 'NAMIBIA', 'NIGER', 'RWANDA', 'SEYCHELLES',
'SIERRA LEONE', 'THAILAND', 'UGANDA', 'UAE'];
var rand=-1;
var chosen=[-1];
var q=1;
var points=0;
function question() {
	document.getElementById("an").disabled=false;
	document.getElementById("typeCorrect").innerHTML='';
	document.getElementById("nameCorrect").innerHTML='';
	document.getElementById("qu").disabled=true;
	document.getElementById("ans").value=''
	if (q>20) {
		done();
		return;
		console.log("error");
	} else {
		while (chosen.includes(rand)==true) {
			rand=Math.floor(Math.random()*29);
		}
		flag="FLAG_"+rand+".png";
		chosen.push(rand);
		document.getElementById("flag").src=flag;
	}
	document.getElementById("qnum").innerHTML="question:"+q+"/20";
	q++;
}
function answer() {
	document.getElementById("an").disabled=true;
	response=document.getElementById("ans").value;
	if (response.toUpperCase()==flagNames[rand]) {
		document.getElementById("nameCorrect").innerHTML=
		'Correct! (+5)';
		points=points+5;
	}
	if (rand<15) {
		if (document.getElementById("pride").checked==true) {
			points=points+1;
			document.getElementById("typeCorrect").innerHTML=
			'Correct (+1)';
		}
	} else if (rand>=15) {
		if (document.getElementById("country").checked==true) {
			points=points+1;
			document.getElementById("typeCorrect").innerHTML=
			'Correct (+1)';
		}
	}
	document.getElementById("qu").disabled=false;
	document.getElementById("info").innerHTML="Score:"+points;
}
function done() {
	document.getElementById("qu").disabled=true;
	document.getElementById("an").disabled=true;
	document.getElementById("info").innerHTML="Final Score:"+points;
}
question();