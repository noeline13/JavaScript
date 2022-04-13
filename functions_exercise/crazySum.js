let crazySum = function(num1, num2) {
    if (num1 === num2) {
        return (num1 + num2) * 3
    } else {
        return (num1 + num2);
    }
}
console.log(crazySum(1, 2))
console.log(crazySum(2, 2))

let avarage = function(a, b, c) {
    return (a + b + c) / 3;
};
console.log(avarage(3, 10, 8)); // 7
console.log(avarage(10, 5, 12)); // 9
console.log(avarage(6, 20, 40)); // 22