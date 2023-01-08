const fs = require("fs");
const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `0 1 2 2 2 7`
)
  .trim()
  .split(" ");

const Solution = (ChessPieces) => {
  const OriginalChessPieces = [1, 1, 2, 2, 2, 8];
  let result = [];
  let i = 0;

  while (i < ChessPieces.length) {
    result[i] = OriginalChessPieces[i] - ChessPieces[i];
    i++;
  }

  console.log(result.join(" "));
};

Solution(input);
