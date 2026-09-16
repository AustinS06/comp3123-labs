const array = [1, 2, 3, 4];

const calculateSum = array.reduce((total, value) => total + value, 0);
const calculateProduct = array.reduce((total, value) => total * value, 1);

console.log(calculateSum);
console.log(calculateProduct);

// Output:
// 10
// 24
