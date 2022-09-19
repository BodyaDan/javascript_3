function camelize(str) {
	var mas = str.split('-');
	for (var i = 1; i < mas.length; i++) {
		mas[i] = mas[i].charAt(0).toUpperCase() + mas[i].slice(1);
	}
	return mas.join('');
}

var string = 'my-short-string';
console.log(camelize(string));