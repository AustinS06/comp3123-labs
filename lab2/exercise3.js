const capitalize = (str) => {
const [first, ...rest] = str;
return first.toUpperCase() + rest.join('').toLowerCase();
};

const colors = ['red', 'green', 'blue'];

const capitalizedColors = colors.map(color => capitalize(color));

console.log(capitalizedColors);

// Output:
// [ 'Red', 'Green', 'Blue' ]

