function persistence(num) {
    for (var i = 0; num > 9; i++)
        num = [...num + ''].reduce((res, digit) => res * digit);
    return i;
}

console.log(persistence(39));
console.log(persistence(4));
console.log(persistence(25));
console.log(persistence(999));
