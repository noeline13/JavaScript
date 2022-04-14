function fizzBuzz(max) {
    console.log("imprime");
    for (var i = 1; i <= max; i++) {
        if (i % 3 === 0 || i % 5 === 0)
            console.log(i);
    }

}
fizzBuzz(18);
fizzBuzz(33);