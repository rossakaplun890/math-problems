const generateRandomMathProblem = () => {
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;
  let operation: string | undefined;

  if (Math.random() < 0.5) {
    operation = 'addition';
  } else if (Math.random() < 0.5) {
    operation = 'subtraction';
  } else if (Math.random() < 0.5) {
    operation = 'multiplication';
  } else {
    operation = 'division';
  }

  const problem: string[] = [];

  switch (operation) {
    case 'addition':
      problem.push(`${num1} + ${num2}`);
      break;
    case 'subtraction':
      problem.push(`${num1} - ${num2}`);
      break;
    case 'multiplication':
      problem.push(`${num1} x ${num2}`);
      break;
    case 'division':
      problem.push(`${num1} ÷ ${num2}`);
      break;
  }

  return { problem, num1, num2 };
};
