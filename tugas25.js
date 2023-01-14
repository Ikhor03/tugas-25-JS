let arr = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];
console.log(`Sebeleumnya : ${arr}`);

let arrSort = arr.sort();
console.log(`Ascending : ${arrSort}`);

let arrRev = arr.reverse();
console.log(`Descending : ${arrRev}`);

let arrFilter = arr.filter(num => num > 10);
console.log(`Filter > 10 : ${arrFilter}`);