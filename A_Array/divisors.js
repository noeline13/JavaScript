function divisors(n) {
    let num = [],
        i;
    for (let i = 1; i <= Math.floor(Math.sqrt(n)); i += 1) {
        if (n % i === 0) {
            num.push(i);
            if (n / i !== i)
                num.push(n / i);
        }
        num.sort(function(x, y) {
            return x - y
        });
    }
    return num;
}
console.log(divisors(15)); // [1, 3, 5, 15].
console.log(divisors(7)); // [1, 7] (en anglais)
console.log(divisors(24)); // [1, 2, 3, 4, 6, 8, 12, 24]