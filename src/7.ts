const getRandomNumber = () => {
  const min = 0;
  const max = 10;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Example usage:
console.log(getRandomNumber()); // Outputs a random number between 0 and 10
