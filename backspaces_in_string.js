const cleanString = s => [...s].reduce((result, letter) => letter === '#' ? result.slice(0, -1) : result + letter, '');

console.log(cleanString('a#bc#d'));
console.log(cleanString('abc#d##c'));
console.log(cleanString('abc####d##c#'));
console.log(cleanString('#abc'));
console.log(cleanString('###syanlxgkcvsldljwkhbzqouosewlhbdehyo#wazekawnt####igdnbhxdmpzewel#idwpyygehkkrmvwqsjwskclhiqv000000000#########'));