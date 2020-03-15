var text = "Welcome to syncended's page. You can find my git repository on follow link: https://github.com/syncended";
var typeDuration = 50;
var cursorDuration = 500;

function startAnimation() {
	var position = 0;
	var first = text.substring(0, 11);
	var nick = '<span class="red">syncended\'s</span>';
	var t = document.getElementById("text");
	var interval = setInterval(function() {
		if(position != text.length + 1) {
			t.innerHTML = formatText(text.substring(0, position)) + '<span class="white">|</span>';
			position++;
		} else {
			clearInterval(interval);
			cursorAnimation();
			formatText(text);
		}
	}, typeDuration);
}

function cursorAnimation() {
	var cursor = false;
	var t = document.getElementById("text");
	var fText = formatText(text);
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
		if(i >= 11 && i < 23) {
			out += '<span class="red">' + txt[i] + '</span>'
		} else {
			out += txt[i];
		}
	}
	return out;
}

window.onload = startAnimation;