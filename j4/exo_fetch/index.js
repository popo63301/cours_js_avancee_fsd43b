import fetch from "node-fetch";
import { promises as fs } from "fs";

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => res.json())
//   .then((res) => console.log(res));

async function run() {
  const req = await fetch("https://jsonplaceholder.typicode.com/users");
  const response = await req.json();

  const result = response.map(({ name, address: { geo } }) => ({ name, geo }));
  console.log(result);

  await fs.writeFile("./datas.json", JSON.stringify(result), "utf8");
}

run();
