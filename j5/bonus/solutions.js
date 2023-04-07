const all = (arr, condition) =>
  arr.map(condition).reduce((acc, curr) => acc && curr, true);

console.log(all([2, 4, 6], (e) => e % 2 === 0)); // true
console.log(all([2, 3, 4], (e) => e % 2 === 0)); // false

const withIndex = (arr) => arr.map((elem, index) => [index, elem]);
console.log(withIndex(["a", "b", "c"])); // [[0, "a"], [1, "b"], [2, "c"]]

// const chunkEvery = (arr, size) =>
//   arr.reduce((acc, curr, i) => {
//     console.log("acc", acc);
//     console.log("curr", curr);
//     const subIndex = Math.floor(i / size);
//     console.log("subIndex", subIndex);
//     console.log("----------");
//     if (!acc[subIndex]) {
//       acc[subIndex] = [];
//     }
//     acc[subIndex].push(curr);
//     return acc;
//   }, []);
const chunkEvery = (arr, size) =>
  arr.reduce(
    (acc, curr, i) => {
      let newChunk;
      let newResult;

      // cas = dernière valeur
      if (i === arr.length - 1) {
        if (acc.currentChunk && acc.currentChunk.length < size) {
          newChunk = [...acc.currentChunk, curr];
          return [...acc.result, newChunk];
        } else {
          newChunk = [curr];
          return [...acc.result, acc.currentChunk, newChunk];
        }
      }

      // cas autre valeur
      if (acc.currentChunk.length < size) {
        newChunk = [...acc.currentChunk, curr];
        return { ...acc, currentChunk: newChunk };
      } else {
        newResult = [...acc.result, acc.currentChunk];
        newChunk = [curr];
        return { result: newResult, currentChunk: newChunk };
      }
    },
    { result: [], currentChunk: [] }
  );

console.log(chunkEvery([1, 2, 3, 4, 5, 6], 2)); // [[1, 2], [3, 4], [5, 6]]
console.log(chunkEvery([1, 2, 3, 4, 5, 6, 7], 2)); // [[1, 2], [3, 4], [5, 6], [7]]
console.log(chunkEvery([1], 2)); // [[1]]

/*

traverser le tableau (avec reduce)
être capable de récupérer l'index actuel (avec le "i", en 3ème position de la signature)
à chaque élément
  - si dernier élément: retourner notre accumulation avec élém
    - cas chunk en cours = ajouter élément et retourner résultat
    - cas longueur chunk fini = créer chunk avec elem et retourner résultat
  - si premier élément: construire le premier chunk avec notre premier élément []
    - on gère ça dans le initValue du reduce
  - si entre les 2:
    - si longueur de notre chunk pas complet
        - ajouter élément à notre chunk en cours
    - si longueur de notre chunk complet
        - ajouter le nouveau chunk à notre accumulation

élément à stocker progressivement (dans notre accumulation):
- resultat
- chunk en cours
*/
