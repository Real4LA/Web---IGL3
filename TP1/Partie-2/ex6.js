class Etudiant {
  constructor(nom, note) {
    this.nom = nom;
    this.note = note;
  }

  getMention() {
    if (this.note >= 16) {
      return "Trés bien";
    } else if (this.note >= 14) {
      return "Bien";
    } else if (this.note >= 10) {
      return "Passable";
    } else {
      return "Echec";
    }
  }
}

const et1 = new Etudiant("Alaa", 18);
const et2 = new Etudiant("Yassin", 12);
const et3 = new Etudiant("Melek", 9);

console.log(`${et1.nom} a la mention: ${et1.getMention()}`);
console.log(`${et2.nom} a la mention: ${et2.getMention()}`);
console.log(`${et3.nom} a la mention: ${et3.getMention()}`);
