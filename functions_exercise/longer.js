function longer(str1, str2) {
    max = 0;
    if (str1.length > str2.length || str1.length == str2.length) {
        max = str1;
    } else {
        max = str2;
    }
    return max;
}
console.log(longer("drum", "piranha")); // 'piranha'.
console.log(longer("basket", "fork")); // 'basket' (panier)
console.log(longer("flanelle", "durable")); // "durable".
console.log(longer("disrupt", "ability")); // "disrupt".
console.log(longer("bird", "shoe")); // 'bird' (oiseau)