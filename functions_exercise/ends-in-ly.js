function endsInLy(str) {
    return (str.endsWith("ly"))

}


console.log(endsInLy("pretty")); // false
console.log(endsInLy("instant")); // false
console.log(endsInLy("analytic")); // false
console.log(endsInLy("timidement")); // vrai
console.log(endsInLy("fly")); // true
console.log(endsInLy("gallantly")); // true