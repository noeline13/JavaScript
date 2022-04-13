function stringsToNum(tablo) {
    let results = [];
    for (let i = 0; i < tablo.length; i++) {
        results[i] = tablo[i].length
    }
    return results;
}

console.log(stringsToNum(["orange", "game", "movie", "beau"])); // [6, 4, 5, 9]
console.log(stringsToNum(["he", "off", "handmade"])); // [2, 3, 8]