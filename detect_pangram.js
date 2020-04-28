let isPangram = s => [...'abcdefghijklmnopqrstuvwxyz'].reduce((r, l) => r && s.toLowerCase().includes(l), true);
let isPangramAlt = s => [...'abcdefghijklmnopqrstuvwxyz'].every(l => s.toLowerCase().includes(l));
let isPangramAnother = s => [...new Set(s.toLowerCase().match(/[a-z]/g))].length === 26;

console.log(isPangram('The quick brown fox jumps over the lazy dog.'));
console.log(isPangram('This is not a pangram.'));
console.log(isPangramAlt('The quick brown fox jumps over the lazy dog.'));
console.log(isPangramAlt('This is not a pangram.'));
console.log(isPangramAnother('The quick brown fox jumps over the lazy dog.'));
console.log(isPangramAnother('This is not a pangram.'));