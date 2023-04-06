const fs = require("fs");

fs.readFile("./data/dragons.json", { encoding: "utf8" }, (err, data) => {
  // impossible de lire le fichier
  if (err) {
    console.log("File read failed:", err);
    return;
  }
  // success
  // JSON.parse permet de transformer un fichier JSON en un objet JSON JS
  const { dragons } = JSON.parse(data);

  //   const [oldestDragon, ...rest] = dragons.sort((a, b) => b.age - a.age);
  const oldestDragon = dragons.sort((a, b) => b.age - a.age)[0];
  const youngestDragon = dragons.sort((a, b) => a.age - b.age)[0];
  const sortedDragons = dragons.sort((a, b) => b.age - a.age);

  console.log(sortedDragons);
});
