String.prototype.toCapCase = function () {
    return this.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};

console.log("How can mirrors be real if our eyes aren't real".toCapCase());