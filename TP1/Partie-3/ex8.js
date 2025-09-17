const wait = (ms) => new Promise((res) => setTimeout(res, ms));
async function run() {
  console.log("Début");
  await wait(2000); // pause for 2s
  console.log("Fin");
}

run();
