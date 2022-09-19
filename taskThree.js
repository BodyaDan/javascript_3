function find(arr, value) {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] == value) return i + 1;
	}
	return -1;
}

var array = [1,2,3,4,5,6,7,8,9];
console.log(find(array, 1));
