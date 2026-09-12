function max(a, b, c) {
  let largest = a;

  if (b > largest) {
    largest = b;
  }
  if (c > largest) {
    largest = c;
  }

  return largest;
}

console.log(max(1, 0, 1));
console.log(max(0, -10, -20));
console.log(max(1000, 510, 440));