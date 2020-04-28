const findOdd = (A) =>
    [...new Set(A)].reduce((res, integer) =>
        A.reduce((count, element) =>
            integer === element ? count + 1 : count, 0) % 2 === 0 ? res : integer, 0);

console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]));

// Use the bitwise operator '^' (aka XOR - exclusive 'or') to compare each value to the next one and set each bit to 1 if only one of two bits is 1
// The result is that all even values will return only 0 bits (e.g: 1010 ^ 1010 = 0000), since they will 'exclude' themselves 2 by 2, only the odd value remains
// @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators
const altFindOdd = (A) => A.reduce((a, b) => a ^ b);
