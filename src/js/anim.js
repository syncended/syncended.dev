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
				out += '<a href="' + clazz + '">' + text.substring(from - 1, to) + "</a>";
			}
		}
	}
	out += text.substring(len, text.length);
	return out;
}