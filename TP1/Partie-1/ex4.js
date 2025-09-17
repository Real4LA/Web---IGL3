const a = [1, 2, 3];
const b = [4, 5, 6];
const c = [...a, ...b];
console.log("c: " + c);

let d = [...a];
d[0] = 10;
console.log("d: " + d);
