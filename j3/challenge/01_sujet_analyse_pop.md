# Sujet 01 Population intérêts et analyse de données

En utilisant les données ci-dessous dans la variable populations.

1. Comptez tous les docteurs.

2. Récupérez les noms des développeurs fullstack.

3. Récupérez les noms des personnes qui n'ont jamais travaillés.

4. Etudiez les mots de passe de chaque personne, comptez leurs occurences pour chaque lettre distincte.

5. (Facultatif) Sélectionnez les personnes qui ont des mots de passe avec un nombre de lettre très différents, chaque mot de passe fait exactement 9 caractères. Puis, repérez les/le mot(s) de passe qui contiennent/contient un double 00. Y-a-t-il des mots de passe identique ? Si oui précisez le nom des personnes possédant ces mots de passe.

```js
const populations = [
  {
    id: 0,
    name: "Alan",
    jobs: ["dev junior", "dev fullstack"],
    password: "tyeedsa00",
  },
  { id: 1, name: "Albert", jobs: ["doctor"], password: "tyeidii00" },
  {
    id: 2,
    name: "Jhon",
    jobs: ["mathematician", "doctor"],
    password: "xyuuuoi00",
  },
  { id: 3, name: "Brice", jobs: ["dev fullstack"], password: "xytoiab00" },
  { id: 4, name: "Alexendra", jobs: ["dentist"], password: "aaaoiab33" },
  { id: 5, name: "Brad" },
  { id: 6, name: "Carl", jobs: ["lead dev", "dev fullstack"] },
  { id: 7, name: "Dallas", jobs: ["dev fullstack"] },
  { id: 8, name: "Dennis", jobs: ["integrator", "dev fullstack"] },
  { id: 9, name: "Edgar", jobs: ["mathematician"] },
  { id: 10, name: "Erika", jobs: ["computer scientist", "mathematician"] },
  { id: 11, name: "Isaac", jobs: ["doctor"], password: "Axgkj22Kl" },
  { id: 12, name: "Ian", password: "Axgkj00Kl" },
];
```
