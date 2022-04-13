function arraySum(tablo) {
    let sum = 0;
    for (i = 0; i < tablo.length; i++) {
        sum = sum + tablo[i];
    }
    return sum
}
console.log(arraySum([6, 2, 3])); // 11
console.log(arraySum([7, 6, -5, 2])); // 10
console.log(arraySum([8])); // 8
console.log(arraySum([])); // 0