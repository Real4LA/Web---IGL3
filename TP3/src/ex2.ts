let name: string = "Alaa";
let age: number = 21;
let isAdmin: boolean = true;

let scores: number[] = [1, 2, 3, 4];
let etudiant: [string, number] = ["Alaa", 28];
enum Role {
  User,
  Admin,
  SuperAdmin,
}
const myRole: Role = Role.Admin;

console.log("Name:", name);
console.log("Age:", age);
console.log("Is Admin:", isAdmin);

console.log("Scores:", scores);
console.log("Etudiant tuple:", etudiant);

console.log("Role (enum value):", myRole); // Role Rank
console.log("Role (enum label):", Role[myRole]); // Actual Role
