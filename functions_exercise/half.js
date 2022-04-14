let half = function(number) {
    return number / 2
}
console.log(half(8)); // 4
console.log(half(15)); // 7,5
console.log(half(90)); // 45

let isLong = function(string) {
    if (string.length <= 5) {
        return false
    } else {
        return true
    }
}

console.log(isLong("pie")); // false
console.log(isLong("kite")); // false
console.log(isLong("kitty")); // false
console.log(isLong("telescope")); // true
console.log(isLong("thermomètre")); // true
console.log(isLong("restaurant")); // true