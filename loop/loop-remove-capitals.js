function removeCapitals(str) {
    console.log("imprime");
    var removeCapitals = str.replace(/[A-Z]/g, '');
    return removeCapitals;

}
console.log(removeCapitals("fOrEver")); // 'frver'.
console.log(removeCapitals("raiNCoat")); // "raioat".
console.log(removeCapitals("clr Door")); // "clr oor