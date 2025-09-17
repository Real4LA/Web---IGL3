{
  var a = 10;
  let b = 20;
  const c = 30;

  console.log("Dans le bloc :", a, b, c);
}

console.log("Hors du bloc :", a);
// b et c ne sont pas accessibles ici (ReferenceError)

const x = 5;
// x = 10; TypeError: Assignment to constant variable
