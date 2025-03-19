interface MathProblem {
  readonly prompt: string;
  readonly answer: number;
}

function generateMathProblem(): MathProblem {
  const operator = ["+", "-", "*", "/"][Math.floor(Math.random() * 4)];
  const left = Math.floor(Math.random() * 10);
  const right = Math.floor(Math.random() * 10);

  switch (operator) {
    case "+":
      return {
        prompt: `${left} + ${right}`,
        answer: left + right,
      };
    case "-":
      return {
        prompt: `${left} - ${right}`,
        answer: left - right,
      };
    case "*":
      return {
        prompt: `${left} * ${right}`,
        answer: left * right,
      };
    case "/":
      return {
        prompt: `${left} / ${right}`,
        answer: Math.floor(left / right),
      };
  }
}
