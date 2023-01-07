const fs = require("fs");
const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `1 2`
)
  .trim()
  .split(" ");

const [A, B] = input;

const Solution = (a, b) => {
  let result = a * b;
  console.log(result);
};

Solution(A, B);
