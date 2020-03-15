var text = "Welcome to syncended's page.\n";
var forattedText = "Welcome to <span class=\"red\">syncended's</span> page."
var typeDuration = 50;
var cursorDuration = 500;

function startAnimation() {
	var position = 0;
	var first = text.substring(0, 11);
	var nick = '<span class="red">syncended\'s</span>';
	var t = document.getElementById("text");
	var interval = setInterval(function() {
		if(position != text.length + 1) {
			if(position > 11 && position < 23) {
				t.innerHTML = first + '<span class="red">' + text.substring(11, position) + '</span>' + '<span class="white">|</span>';
			} else if (position < 12) {
				t.innerHTML = text.substring(0, position) + '<span class="white">|</span>';
			} else {
				t.innerHTML = first + nick + text.substring(22, position) + '<span class="white">|</span>';
			}
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
	setInterval(function() {
		if(cursor) {
			cursor = false;
			t.innerHTML = forattedText + '<span class="white">|</span>';
		} else {
			cursor = true;
			t.innerHTML = forattedText;
		}
	}, cursorDuration)
}

window.onload = startAnimation;