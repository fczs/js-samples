const moreZeros = (s) => [...new Set(s)].reduce((arr, letter) => {
    let bin = letter.charCodeAt(0).toString(2);
    (bin.match(/1/g) || []).length >= (bin.match(/0/g) || []).length || arr.push(letter);
    return arr;
}, []);

console.log(moreZeros('abcde'));
console.log(moreZeros('Great job!'));
console.log(moreZeros('DIGEST'));
console.log(moreZeros('abcdeabcde'));
