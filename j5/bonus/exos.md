# Bonus

Implémenter ces fonctions en JS.
Il faut que les appels de fonctions en exemple puissent fonctionner.
Privilégier les fonctions map et reduce.

(indication)

- faire un plan détaillé en pseudo-code pour décrire chaque étape qu'on doit réaliser avant de se lancer directement dans le code
- s'assurer que le plan est logique dans notre tête
- traduire étape par étape chaque ligne de notre plan en testant le comportement de l'algo (à l'aide de console.log)

---

1. all = vérifie si tout les éléments respectent la condition passée en argument

   `all([2,4,6], (e) => e % 2 === 0) -> true`

   `all([2,3,4], (e) => e % 2 === 0) -> false`

2. withIndex = ajoute l'index au côté de chaque élément

   `withIndex(["a", "b", "c"]) -> [[0, "a"], [1, "b"], [2, "c"]]`

3. chunkEvery (avec un reduce seulement) = découpe la liste en liste de sous-liste avec la même longueur qu'on a passé en argument

   `chunkEvery([1, 2, 3, 4, 5, 6], 2) -> [[1, 2], [3, 4], [5, 6]]`
