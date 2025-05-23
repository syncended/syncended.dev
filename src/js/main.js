import {wrapper} from "./anim.js";

var text = "Welcome to syncended's website. You can find my git profile on follow link: https://github.com/syncended ";
var typeDuration = 50;
var cursorDuration = 500;
var logoDuration = 5;

var wrapperRules = [
	["s", "red", 12, 22], 
	["b", "", 32], 
	["a", "https://github.com/syncended", 49, 51], 
	["a", "https://github.com/syncended", 76, 104],
];

function logoAnimation() {
	var pos = 0;
	var h = document.getElementById("header");
	var logoAnim = setInterval(function() {
		h.style.color = "rgb(" + pos + "," + pos + "," + pos + ")";
		pos++;
		if(pos == 255) {
			clearInterval(logoAnim);
			typeAnimation()
		}

	}, logoDuration);
}

function typeAnimation() {
	var position = 0;
	var t = document.getElementById("text");
	var interval = setInterval(function() {
		if(position != text.length + 1) {
			t.innerHTML = wrapper(wrapperRules ,text.substring(0, position)) + '<span class="white">|</span>';
			position++;
		} else {
			clearInterval(interval);
			cursorAnimation();
		}
	}, typeDuration);
}

function cursorAnimation() {
	var cursor = false;
	var t = document.getElementById("text");
	var fText = wrapper(wrapperRules, text);
	setInterval(function() {
		if(cursor) {
			cursor = false;
			t.innerHTML = fText + '<span class="white">|</span>';
		} else {
			cursor = true;
			t.innerHTML = fText;
		}
	}, cursorDuration)
}

window.onload = logoAnimation;