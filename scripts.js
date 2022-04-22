function isChecked() {
	"use strict";
	let status = document.querySelector('#chbxStatus');
	let spans = document.getElementsByClassName("mnth");
	
	if(status.checked === true) {
		document.getElementById("yearly").style.color = "#FFF";
		document.getElementById("monthly").style.color = "#ADADAD";
		document.getElementById("f-price").innerHTML = "$86.4"
		document.getElementById("s-price").innerHTML = "$216"
		document.getElementById("t-price").innerHTML = "$518.4"
		for(var i=0; i < spans.length; i++) {
			spans[i].innerHTML = "Year";
		}
	}
	else {
		document.getElementById("yearly").style.color = "#ADADAD";
		document.getElementById("monthly").style.color = "#FFF";
		document.getElementById("f-price").innerHTML = "$8"
		document.getElementById("s-price").innerHTML = "$20"
		document.getElementById("t-price").innerHTML = "$48"
		for(var i=0; i < spans.length; i++) {
			spans[i].innerHTML = "Month";
		}
	}
}

function showMenu() {
	document.getElementById("menu").style.right = 0;
	document.getElementById("menu").style.display = "flex";
	document.getElementById("header").style.background = "#000";
	
	document.getElementById("bars").style.cssText = "display: none !important";
	document.getElementById("close").style.cssText = "display: block !important";
}

function closeMenu() {
	document.getElementById("menu").style.display = "none";
	document.getElementById("header").style.background = "transparent";

	document.getElementById("bars").style.cssText = "display: block !important";
	document.getElementById("close").style.cssText = "display: none !important";
}