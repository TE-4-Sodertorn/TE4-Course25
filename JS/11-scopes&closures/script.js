// Number 1
const makeMultiplier = (factor) => {
  return (number) => {
    return number * factor;
  };
};

const double = makeMultiplier(2);
console.log(double(90));

const triple = makeMultiplier(3);
console.log(triple(90));

const counter = () => {
  let count = 0;

  return {
    increment: () => {
      count++;
      return count;
    },
    reset: () => {
      count = 0;
      return count;
    },
    decrement: () => {
      count--;
      return count;
    },
  };
};

const myCounter = counter();
console.log(myCounter.increment());
console.log(myCounter.increment());
console.log(myCounter.increment());
console.log(myCounter.increment());
console.log(myCounter.increment());
console.log(myCounter.increment());
console.log(myCounter.increment());
console.log(myCounter.increment());
console.log(myCounter.decrement());
console.log(myCounter.reset());
console.log(myCounter.decrement());
