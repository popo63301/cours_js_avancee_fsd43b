const sentence = "Bonjour tout le monde, vous aimez JS ?";

// question 1

const inverse = sentence.split("").reverse().join("");

// question 2 + 3

/*

phrase

* capter chaque mot
* pour chaque mot
  longueur du mot


* capter chaque mot
  * filtrer les ponctuations
  * splitter en fonction des espaces

*/
const punctuation = [",", "?", "."];

// function countLengthWords(phrase) {
//   const result = phrase
//     .split("")
//     .filter((l) => !punctuation.includes(l))
//     .join("")
//     .trim()
//     .split(" ")
//     .map((e) => ({ word: e, length: e.length }));

//   return result;
// }

const countLengthWords = (phrase) =>
  phrase
    .split("")
    .filter((l) => !punctuation.includes(l))
    .join("")
    .trim()
    .split(" ")
    .map((e) => ({ word: e, length: e.length }));

console.log(countLengthWords(sentence));
