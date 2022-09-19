function changePreLast(arr, value) {
	arr.splice(-2,1,value);
}

var styles = ['Джаз', 'Блюз'];
styles.push('Рок-н-Ролл');
console.log(styles);
changePreLast(styles, 'Класика');
console.log(styles);

console.log(styles.shift());
styles.unshift('Реп', 'Реггі');
console.log(styles);

