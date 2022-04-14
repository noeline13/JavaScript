function stringSize(str) {
    let size = ("");
    if (str.length < 5) {
        size = ("small")
    }
    if (str.length === 5) {
        size = ("avarage")
    }
    if (str.length > 5) {
        size = ("large")
    }
    return size
}
console.log(stringSize("cat")); // 'small' (petit)
console.log(stringSize("bell")); // 'small' (petit)
console.log(stringSize("ready")); // 'medium' (moyen)
console.log(stringSize("shirt")); // 'medium' (moyen)
console.log(stringSize("shallow")); // 'large' (grand)
console.log(stringSize("intelligence")); // 'large' (grand