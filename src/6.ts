import { random } from 'mathjs';

export function getRandomMathProblem() {
  const number1 = Math.floor(random(1, 10));
  const number2 = Math.floor(random(1, 10));
  const operator = ['+', '-', '*', '/'][Math.floor(random(0, 3))];

  let problem: string;
  if (operator === '+') {
    problem = `${number1} + ${number2}`;
  } else if (operator === '-') {
    problem = `${number1} - ${number2}`;
  } else if (operator === '*') {
    problem = `${number1} x ${number2}`;
  } else if (operator === '/') {
    problem = `${number1} / ${number2}`;
  }

  return problem;
}
