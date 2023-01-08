const fs = require("fs");
const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `joonas`
).trim();

const Solution = (id) => {
  let result = id + "??!";
  console.log(result);
};

Solution(input);
