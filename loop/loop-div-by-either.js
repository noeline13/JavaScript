function divByEither(num1, num2, max) {
    for (var i = 1; i < max; i++) {
        if (i % num1 === 0 || i % num2 === 0)
            console.log(i);

    }
}
divByEither(4, 3, 16);