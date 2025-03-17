function getRandomMathProblem(minValue = 1, maxValue = 10) {
  const value = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
  return `${value} x ${value} = ?`;
}
