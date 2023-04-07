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

const objPopulations = populations.reduce(
  (acc, curr) => ({ ...acc, [curr.id]: curr.name }),
  {}
);

console.log("objPopulations", objPopulations);

const relations = [
  { id: 0, relation: [1, 2, 4] },
  { id: 3, relation: [7, 8] },
  { id: 4, relation: [2, 7, 8, 11] },
  { id: 5, relation: [1, 2, 4] },
  { id: 7, relation: [2, 3, 5, 9] },
  { id: 9, relation: [1, 2, 4, 8, 11] },
  { id: 11, relation: [1, 2, 9, 10] },
];

const objRelations = relations.reduce(
  (acc, curr) => ({
    ...acc,
    [curr.id]: curr.relation.map((e) => objPopulations[e]),
  }),
  {}
);

const res = populations
  .map((e) => ({
    ...e,
    relation: objRelations[e.id] ? objRelations[e.id] : [],
  }))
  .sort((a, b) => a.relation.length - b.relation.length);

console.log("res", res);

console.log("biggest relationships", res[res.length - 1]);
