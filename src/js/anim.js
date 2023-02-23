//Все элементы декорации должны быть расположены в порядке по тексту
export const wrapper = function(decoration, text) {
	var out = ""
	var len = 0;
	for(var i = 0; i < decoration.length; i++) {
		var decore = decoration[i];
		var type = decore[0];
		var clazz = decore[1]; //if it's <a> it'll be href
		var from = decore[2];
		var to = decore[3];
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
				console.log( '<a href="' + clazz + '">' + text.substring(from - 1, to) + "</a>");
				console.log(from-1);
				console.log(to);
				out += '<a href="' + clazz + '">' + text.substring(from - 1, to) + "</a>";
			}
		} else if(type == 'b') {
			if(text.length >= from) {
				console.log(len);
				console.log(from);
				out += text.substring(len, from);
				len += 6;
				out += '<br>';
			}
		}
	}
	out += text.substring(len, text.length);
	console.log(out);
	return out;
}