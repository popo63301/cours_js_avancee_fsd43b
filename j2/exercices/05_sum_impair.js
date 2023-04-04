/*


si curr impair ? curr + acc, sinon acc

*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(3 % 2 != 0);

const result = numbers.reduce((acc, curr) => (curr % 2 ? acc + curr : acc), 0);

console.log(result);
