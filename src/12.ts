// Generate a random math problem using TypeScript
function getRandomMathProblem(): string {
  const type = Math.random() > 0.5 ? "addition" : "subtraction";
  let numbers: number[] = [];
  for (let i = 0; i < 2; i++) {
    numbers[i] = Math.floor(Math.random() * 10) + 1;
  }
  if (type === "addition") {
    return `${numbers[0]} + ${numbers[1]} = ?`;
  } else {
    return `${numbers[0]} - ${numbers[1]} = ?`;
  }
}
