function sumUpTo(max) {
    var sum = 0;
    for (var i = 1; i <= max; i++) {
        sum += i;
    }
    return sum;
}
console.log(sumUpTo(4)); // 10
console.log(sumUpTo(5)); // 15
console.log(sumUpTo(2)); // 3