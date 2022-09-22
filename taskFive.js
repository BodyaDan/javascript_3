function camelize(str) {
	let mas = str.split('-');
	for (let i = 1; i < mas.length; i++) {
		mas[i] = mas[i].charAt(0).toUpperCase() + mas[i].slice(1);
	}
	return mas.join('');
}

let string = 'my-short-string';
console.log(camelize(string));
