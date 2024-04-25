const powerByLoop = (number, toPower) => {
  if (number === 0) return 0;
  if (toPower === 0) return 1;
  let result = 1;
  for (let i = 1; i <= toPower; i++) {
    result = result * number;
  }
  return result;
};

powerByLoop(2, 5);

const recursivePower = (num, toPower) => {
  if (num === 0) return 0;
  if (toPower === 0 || num === 1) return 1;
  return num * recursivePower(num, toPower - 1);
};

console.log(recursivePower(2, 5));