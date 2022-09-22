function filterRange(array, a, b) {
	return array.splice(a, (b - a));
}

let mas = [1,2,3,4,5,6,7,8,9];
let fMax = filterRange(mas, 2,6);
console.log(fMax);
