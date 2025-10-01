console.log("Hello, World!");
const a: number = 5;
const b: number = 10;

console.log(`Fifteen is ${a + b} and\nnot ${2 * a + b}.`);

function greet(name: string): string {
  return `Hello, ${name}!`;
}

console.log(greet("Alice"));
