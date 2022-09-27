function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function sleepTime(x) {
  if (x <= 0) {
    console.warn(
      "Inputed time is 0 or less. Will result in sleep being instantly completed."
    );
  }
  for (let i = 0; i < x; i++) {
    console.log(`Waiting ${i} seconds...`);
    await sleep(i * 1000);
  }
  console.log("Sleep is done");
}

module.exports = { sleep, sleepTime };
