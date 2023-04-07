const populations = [
  { id: 0, name: "Alan" },
  { id: 1, name: "Albert" },
  { id: 2, name: "Jhon" },
  { id: 3, name: "Brice" },
  { id: 4, name: "Alexendra" },
  { id: 5, name: "Brad" },
  { id: 6, name: "Carl" },
  { id: 7, name: "Dallas" },
  { id: 8, name: "Dennis" },
  { id: 9, name: "Edgar" },
  { id: 10, name: "Erika" },
  { id: 11, name: "Isaac" },
  { id: 12, name: "Ian" },
];

// const quest1 = [...populations].sort((a, b) => a.name.length - b.name.length);
const quest1 = populations.sort((a, b) => a.name.length - b.name.length);

const quest2 = populations.map((e) => ({ ...e, lenName: e.name.length }));

console.log(quest2);

/*
dégager l'ensemble des longueurs
pour chaque longueur
    - filtrer la liste pour avoir que les personnes qui ont la bonne longueur de nom
*/

const lenNames = new Set(quest2.map((e) => e.lenName));
const longueurs = Array.from(lenNames).map((e) =>
  quest2.filter((p) => p.lenName === e)
);

console.log(longueurs);

// console.log(Array.from(new Set([1, 1, 1, 4, 4, 4, 4, 2])));
