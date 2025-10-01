class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  greet(name: string, age?: number): void {
    console.log(`Hello, my name is ${name} and I am ${age} years old.`);
  }
}

class Student extends Person {
  school: string;
  constructor(name: string, age: number, school: string) {
    super(name, age);
    this.school = school;
  }
}

abstract class Shape {
  abstract area(): number;
}

class Circle extends Shape {
  radius: number;
  constructor(radius: number) {
    super();
    this.radius = radius;
  }
  area(): number {
    return Math.PI * this.radius ** 2;
  }
}

class Rectangle extends Shape {
  sideA: number;
  sideB: number;
  constructor(sideA: number, sideB: number) {
    super();
    this.sideA = sideA;
    this.sideB = sideB;
  }
  area(): number {
    return this.sideA * this.sideB;
  }
}

interface Drivable {
  drive(): void;
}

class Car implements Drivable {
  drive(): void {
    console.log("is driving...");
  }
}
