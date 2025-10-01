import { Role } from "./Role";

export abstract class Person {
  constructor(public id: number, public name: string, public role: Role) {}
}
