let id: number | string;
type A = String;
type B = Number;
type C = A & B;
type Status = "pending" | "done" | "canceled";
let variable: unknown;

variable = "aaa";

if (typeof variable === "string") {
  console.log(variable.length);
} else {
  console.log("Not a string");
}
