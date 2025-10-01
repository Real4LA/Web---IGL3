import { Person } from "./Person";

export class Admin extends Person {
  constructor(id: number, name: string) {
    super(id, name, "Admin");
  }
}
