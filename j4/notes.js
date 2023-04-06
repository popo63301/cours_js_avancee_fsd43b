const wait = (time) => new Promise((resolve) => setTimeout(resolve, time));

async function run() {
  console.log("Start");

  await wait(3000);

  console.log("End");

  await wait(2000);

  console.log("end end");
}

run();
