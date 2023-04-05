const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function countNumbers(number) {
//   if (number === -10) return;
//   console.log(number);

//   return countNumbers(number - 1);
// }

// countNumbers(10);

//--------

// function accumulator(numbers, acc = 0) {
//   if (numbers.length === 0) return acc;

//   const newAcc = acc + numbers.shift();

//   return accumulator(numbers, newAcc);
// }

// console.log("avant", list);
// console.log(accumulator(list));
// console.log("après", list);

//------------------

function accumulator(numbers, acc = 0) {
  if (numbers.length === 0) return acc;

  const [head, ...rest] = numbers;
  const newAcc = acc + head;

  return accumulator(rest, newAcc);
}

console.log("avant", list);
console.log(accumulator(list));
console.log("après", list);
