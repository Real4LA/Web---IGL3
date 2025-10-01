function add(a: number, b: number): number {
  return a + b;
}

function greet(name: string, age?: number): void {
  if (age) {
    console.log(`Hello, my name is ${name} and I am ${age} years old.`);
  } else {
    console.log(`Hello, my name is ${name}`);
  }
}

function power(base: number, exp: number = 2): number {
  return base ** exp;
}

function combine(a: number, b: number): number;
function combine(a: string, b: string): string;

function combine(a: number | string, b: number | string) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b; // addition
  }
  if (typeof a === "string" && typeof b === "string") {
    return a + b; // concaténation
  }
  throw new Error(
    "Les types doivent être tous deux 'number' ou tous deux 'string'."
  );
}
