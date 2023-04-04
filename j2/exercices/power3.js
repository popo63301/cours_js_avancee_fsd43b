const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const power3 = numbers.map((e) => (e % 2 == 0 ? e ** 3 : e));

// const power3_2 = numbers.map((e) => {
//   return e % 2 == 0 ? e ** 3 : e;
// });

// const power3 = numbers.map((e) => {
//   if (e % 2 == 0) {
//     return e ** 3;
//   }

//   return e;
// });

console.log(power3);
