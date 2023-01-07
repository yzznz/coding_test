const fs = require("fs");
const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `1 3`
)
  .trim()
  .split(" ");

const [A, B] = input;

const Solution = function (a, b) {
  let result = a / b;
  console.log(result);
};

Solution(A, B);
