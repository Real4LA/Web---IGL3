const notes = [12, 5, 17, 9, 20];
const moyenne = notes.reduce((acc, notes) => acc + notes) / notes.length;
console.log("La moyenne est: " + moyenne);
notes.sort((a, b) => b - a);
console.log("Notes triées: " + notes);
const big = notes.filter((n) => n >= 10);
console.log("Notes >= 10: " + big);
