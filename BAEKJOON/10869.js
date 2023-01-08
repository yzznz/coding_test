const fs = require("fs");
const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `7 3`
)
  .trim()
  .split(" ");

const [A, B] = input;

const Add = function (a, b) {
  let result = Number(a) + Number(b);
  console.log(result);
};
const Sub = function (a, b) {
  let result = a - b;
  console.log(result);
};
const Mul = function (a, b) {
  let result = a * b;
  console.log(result);
};
const Quo = function (a, b) {
  let result = Math.floor(a / b);
  console.log(result);
};
const Rem = function (a, b) {
  let result = a % b;
  console.log(result);
};

Solution(A, B);

function Solution(a, b) {
  Add(a, b);
  Sub(a, b);
  Mul(a, b);
  Quo(a, b);
  Rem(a, b);
}
