const solve = s =>
    s.split(/[aeiou]+/).reduce((length, sequence) =>
        Math.max(length, sequence.split('').reduce((sum, letter) =>
            sum + letter.charCodeAt(0) - 96, 0)), 0);

console.log(solve('chruschtschov'));