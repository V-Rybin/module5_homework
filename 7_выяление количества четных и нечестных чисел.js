let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 33, 44, 63];


function isAllElementsSame(arr) {
for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[0]) {
      return false;
    }
  }
  return true;
}

console.log(isAllElementsSame(arr));