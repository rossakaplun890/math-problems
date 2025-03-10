function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const problemSet = [
  {
    question: "What is the value of x in the equation 2x + 5 = 11?",
    answer: getRandomInt(0, 10)
  },
  {
    question: "What is the value of x in the equation x + 3 = 7?",
    answer: getRandomInt(0, 10)
  },
  {
    question: "What is the value of x in the equation x - 2 = 5?",
    answer: getRandomInt(0, 10)
  }
];
