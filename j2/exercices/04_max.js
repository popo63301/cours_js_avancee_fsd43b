/*

si curr > précedent, garder curr, sinon précedent

*/

const numbers = [1, 2, 3, 4, 50, 6, 7, 8, 9, 10];

const result = numbers.reduce((acc, curr) => (curr > acc ? curr : acc), 0);

console.log(result);
