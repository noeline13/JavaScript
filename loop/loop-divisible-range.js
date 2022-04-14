function divisibleRange(min, max, num) {
    console.log("imprime");
    for (i = min; i < max; i++) {

        if (i % num === 0)
            console.log(i);
    }
}
divisibleRange(17, 40, 9);
divisibleRange(10, 24, 4);

function reverseIterate(str) {
    console.log("imprime");
    for (i = str.length - 1; i >= 0; i--) {
        console.log(str[i]);

    }

}

reverseIterate("carrot");
reverseIterate("box");