function partialKeys(obj) {
    return Object.keys(obj).sort().reduce((obj, key) => {
        [...key].reduce((prop, letter) => {
            prop += letter;
            if (!obj.hasOwnProperty(prop)) Object.defineProperty(obj, prop, {value: obj[key]});
            return prop;
        }, '');

        return obj;
    }, obj);
}

let o = partialKeys({
    undefined: 6, abc: 2, aaa: 1, dfg: 3, def: 4, dfgh: 5
});

console.log(o.un);
