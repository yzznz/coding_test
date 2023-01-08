const fs = require("fs");
const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `2541`
).trim();

const Solution = (year) => {
  let result = year - 543;
  console.log(result);
};

Solution(input);
