/*

- avoir liste des lettres (uniques)
- créer une variable resultat
- pour chaque lettre du mot
  - si clé existe dans resultat
    + 1
  - sinon
    1

*/

// const countLetters = (word) => {
//   let mot = word.toLowerCase();

//   const result = mot.split("").reduce((acc, curr) => {
//     return curr in acc
//       ? { ...acc, [curr]: acc[curr] + 1 }
//       : { ...acc, [curr]: 1 };
//   }, {});

//   return result;
// };

const countLetters = (word) =>
  word
    .toLowerCase()
    .split("")
    .reduce(
      (acc, curr) =>
        curr in acc ? { ...acc, [curr]: acc[curr] + 1 } : { ...acc, [curr]: 1 },
      {}
    );

console.log(countLetters("Mississipi"));
