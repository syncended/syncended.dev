import {wrapper} from "./anim.js";

var text = "Welcome to syncended's website. You can find my git profile on follow link: https://github.com/syncended If you want, you can look at my projects here.";
var typeDuration = 50;
var cursorDuration = 500;
var logoDuration = 5;

var wrapperRules = [["s", "red", 12, 22], ["b", "", 32], ["a", "https://github.com/syncended", 48, 51]];

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
	var fText = wrapper(text);
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



function formatText(txt) {
	var out = "";
	for(var i = 0; i < txt.length; i++) {
		if(i == 72 || i == 101) {
			out += '<br>';
		}
		if(i >= 11 && i < 23) {
			out += '<span class="red">' + txt[i] + '</span>'
		} else if((i > 72 && i < 101) || (i > 44 && i < 48)) {
			out += '<a href="https://github.com/syncended">' + txt[i] + "</a>";
		} else if(i > 142 && i < 148) {
			out += '<a href="projects.html">' + txt[i] + "</a>";
		} else {
			out += txt[i];
		}
	}
	return out;
}

window.onload = logoAnimation;