function solve(n) {
    let str = n.toString();
    let suffix = [
        [0, 0], [2, 5], [5, 0], [7, 5]
    ];

    suffix.forEach(d => {
        console.log(str.indexOf(d[1]));
    });

    return -1;
}

solve(100)
// console.log(solve(521));
// console.log(solve(100));
// console.log(solve(1));
