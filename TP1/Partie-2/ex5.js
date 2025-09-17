livre = {
  titre: "Le Petit Prince",
  auteur: "Antoine de Saint-Exupéry",
  année: 1943,
};
const getInfo = (book) =>
  "Le livre " +
  book.titre +
  " a été écrit par " +
  book.auteur +
  " en " +
  book.année +
  ".";
console.log(getInfo(livre));
