const fs = require("fs");
const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `1 2`
)
  .trim()
  .split(" ");

const [A, B] = input;
Solution(A, B);

function Solution(a, b) {
  let result = Number(a) + Number(b);
  console.log(result);
}
