function startsWithR(str) {
    return (str[0] === "R" || str[0] === "r")
}
console.log(startsWithR("roger that")); // vrai
console.log(startsWithR("Row, Row, row your boat")); // true
console.log(startsWithR("slip")); // false
console.log(startsWithR("Taxicab")); // false