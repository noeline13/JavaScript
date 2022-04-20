function keyPair(obj1, obj2, key) {
    let arr = [];
    arr.push(obj1[key]);
    arr.push(obj2[key]);
    return arr;
}

let cat1 = { name: 'jinkee', breed: 'calico' };
let cat2 = { name: 'garfield', breed: 'red tabby' };

console.log(keyPair(cat1, cat2, 'breed')); // [ 'calico', 'red tabby' ]
console.log(keyPair(cat1, cat2, 'name')); // [ 'jinkee', 'garfield ]

let sport1 = { name: "volleyball", team: true };
let sport2 = { name: "golf", team: false };
console.log(keyPair(sport1, sport2, 'team')); // [ true, false ]