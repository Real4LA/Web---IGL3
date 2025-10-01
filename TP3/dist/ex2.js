"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let name = "Alaa";
let age = 21;
let isAdmin = true;
let scores = [1, 2, 3, 4];
let etudiant = ["Alaa", 28];
var Role;
(function (Role) {
    Role[Role["User"] = 0] = "User";
    Role[Role["Admin"] = 1] = "Admin";
    Role[Role["SuperAdmin"] = 2] = "SuperAdmin";
})(Role || (Role = {}));
const myRole = Role.Admin;
console.log("Name:", name);
console.log("Age:", age);
console.log("Is Admin:", isAdmin);
console.log("Scores:", scores);
console.log("Etudiant tuple:", etudiant);
console.log("Role (enum value):", myRole); // Role Rank
console.log("Role (enum label):", Role[myRole]); // Actual Role
