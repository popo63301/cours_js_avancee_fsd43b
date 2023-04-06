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

// question 1

const doctorsCount = populations
  .map((e) => e.jobs)
  .filter((e) => e)
  .filter((e) => e.includes("doctor") || e.includes("dentist")).length;

// question 2

const devFullstack = populations
  .map(({ name, jobs }) => ({ name, jobs })) // pareil que .map((e) => ({ name: e.name, jobs: e.jobs }));
  .filter((e) => e.jobs)
  .filter(({ jobs }) => jobs.includes("dev fullstack"))
  .map((e) => e.name);

// question 3

const unemployed = populations
  .map(({ name, jobs }) => ({ name, jobs }))
  .filter((e) => !e.jobs)
  .map((e) => e.name);

// question 4

const countLetters = (word) =>
  word
    .toLowerCase()
    .split("")
    .reduce(
      (acc, curr) =>
        curr in acc ? { ...acc, [curr]: acc[curr] + 1 } : { ...acc, [curr]: 1 },
      {}
    );

const statPassword = populations
  .filter((e) => e.password)
  .map((e) => ({ name: e.name, stats: countLetters(e.password) }));

console.log(statPassword);
