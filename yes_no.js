function yesNo(arr) {
    for (let i = 1; i < arr.length; i++)
        arr.push(arr.splice(i, 1)[0]);
    return arr;
}

console.log(yesNo([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(yesNo(['this', 'code', 'is', 'right', 'the']));
