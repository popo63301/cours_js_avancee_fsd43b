/* 

Méthodo:
- faire un pseudocode
- environnement d'itération (live server / nodemon)
- console.log à chaque étape
- si on connait pas une ligne = internet (stack overflow)

*/

/* 

pour chaque élément
    * ✅ compter les a et les l
    * ✅ ajouter le compte à l'objet


## compter les a et les l

- ✅ mettre en minuscule le nom
- ✅ diviser le nom en liste de lettres
- ✅ filtre pour garder que les a et les l
- ✅ calculer la longueur du tableau

*/

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

const result = populations
  .map((e) => {
    let count = e.name
      .toLowerCase()
      .split("")
      .filter((letter) => letter === "a" || letter === "l").length;

    return { ...e, count };
  })
  .sort((a, b) => a.count - b.count);

console.log(result);
