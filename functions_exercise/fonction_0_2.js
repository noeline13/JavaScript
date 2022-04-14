var exclaim = function(str) {
    var capitalized = str.toUpperCase();
    return capitalized + " !!";
};
var result = exclaim("potato");
console.log(result);
console.log(result.length);
console.log(result[0]);
console.log(result[result.length - 1]);