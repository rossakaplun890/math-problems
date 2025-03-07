  function getRandomMathProblem() {
   const num1 = Math.floor(Math.random() * 10 + 1);
    const num2 = Math.floor(Math.random() * 10 + 1);
    const operator = ['+', '-', '*', '/'][Math.floor(Math.random() * 3)];
    let answer;

    switch (operator) {
      case '+':
        answer = num1 + num2;
        break;
      case '-':
        answer = num1 - num2;
        break;
      case '*':
        answer = num1 * num2;
        break;
      case '/':
        if (num2 !== 0) {
          answer = num1 / num2;
        } else {
          return getRandomMathProblem(); // This is a recursive function, it will keep generating new problems until it gets an answer that is not 0.
        }
    }

    return `${num1} ${operator} ${num2} = ${answer}`;
  }