let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 33, 44, 63];
let even = 0;
let odd = 0;
 
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        even++;
    } else {
        odd++;
    }
}
 
console.log(`Количество четных чисел: ${even}`);
console.log(`Количество нечетных чисел: ${odd}`);