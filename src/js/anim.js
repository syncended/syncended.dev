//Все элементы декорации должны быть расположены в порядке по тексту
const wrapper = function(decoration, text) {
	var out = ""
	var len = 0;
	for(var i = 0; i < decoration.length; i++) {
		var decore = decoration[i];
		var type = decore[0];
		var clazz = decore[1]; //if it's <a> it'll be href
		var from = decore[2];
		var to = decore[3];
		console.log(type, clazz, from, to);
		if(type == 's') {
			if(text.length >= from) {
				out += text.substring(len, from - 1);
				len += text.substring(len, from - 1).length + to - from + 1;
				out += '<span class="' + clazz + '">' + text.substring(from - 1, to) + "</span>";
			}
		} else if(type == 'a') {
			if(text.length >= from) {
				out += text.substring(len, from - 1);
				len += text.substring(len, from - 1).length + to - from + 1;
				out += '<a href="' + clazz + '">' + text.substring(from - 1, to) + "</span>";
			}
		}
	}
	out += text.substring(len, text.length);
	return out;
}

export {wrapper};
// wrapper([['s', 'red', 1, 3], ['s', 'blue', 5, 7], ['a', 'http://syncended.ru', 10, 15]], "Hello, It's simple, and possible big text for testing my own fucntion");