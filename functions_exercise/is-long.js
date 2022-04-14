var isLong = function(string) {
    if (string.length <= 5) {
        return false;
    } else {
        return true;
    }
};

console.log(isLong("pie")); // false
console.log(isLong("kite")); // false
console.log(isLong("kitty")); // false
console.log(isLong("telescope")); // true
console.log(isLong("thermomètre")); // true
console.log(isLong("restaurant")); // true