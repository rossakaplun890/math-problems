  const getRandomProblem = () => {
    let num1 = Math.floor(Math.random() * 10) + 1;
    let num2 = Math.floor(Math.random() * 10) + 1;
    let problem = `${num1} x ${num2}`;
    return `console.log(${problem})`;
  };
  