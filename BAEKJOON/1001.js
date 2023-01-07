const fs = require("fs");
const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `3 2`
)
  .trim()
  .split(" ");

const [A, B] = input;
Solution(A, B);

function Solution(a, b) {
  let result = a - b;
  console.log(result);
}
