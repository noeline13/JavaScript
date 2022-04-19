function maxObjectValue(obj) {
    var sortedEntriesByVal = Object.entries(obj).sort(([, v1], [, v2]) => v1 - v2);

    return sortedEntriesByVal[sortedEntriesByVal.length - 1];

}
console.log(maxObjectValue({ a: 5, b: 2, c: 6, d: 7, e: 4 }));
console.log(maxObjectValue({ litchi: 11, ramboutan: 13, papaye: 9 })); // ['ramboutan', 13]*/