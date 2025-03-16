interface MathProblem {
  id: string;
  description: string;
  solution: number;
}

const mathProblems: MathProblem[] = [
  {
    id: "1",
    description: "What is the value of x in the equation 2x + 5 = 11?",
    solution: 3,
  },
  {
    id: "2",
    description: "Simplify the expression: (3x^2 + 5x - 2) / (x + 2)",
    solution: "x + 1",
  },
  {
    id: "3",
    description: "Solve for x in the equation: 2x + 5 = 11",
    solution: 3,
  },
];

export default mathProblems;
