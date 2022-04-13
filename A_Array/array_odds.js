function arrayOdds(tablo) {
    let odd = tablo,
        i = (odd / 2) * 2 + 1;

    while (i <= tablo) {
        odd.push(i);
        i += 2;
    }

    return odd.filter(num => num % 2);
}

console.log(arrayOdds([4, 7, 2, 5, 9])); // 3
console.log(arrayOdds([11, 31, 58, 99, 21, 60])); // 4
console.log(arrayOdds([100, 40, 4])); // 0