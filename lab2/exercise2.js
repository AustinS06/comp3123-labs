const capitalize = (str) => {
const [first, ...rest] = str;
return first.toUpperCase() + rest.join('').toLowerCase();
};

console.log(capitalize('fooBar'));
console.log(capitalize('nodeJs'));

// Output:
// Foobar
// Nodejs
