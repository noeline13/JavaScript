var dog = {
    nom: "Manny",
    âge: 5,
    race: "carlin",
    couleur: "fawn",
    favoriteFoods: ["bacon"],
};
console.log(dog.âge);
console.log(dog.race);
console.log(dog.favoriteFoods);
dog.âge++;
dog.breed = dog.race.toUpperCase("");
dog.favoriteFoods.push("saucisse");
console.log(dog.âge);
console.log(dog.race);
console.log(dog.favoriteFoods);
for (var property in dog) {
    console.log(property + " est " + dog[property]);
}