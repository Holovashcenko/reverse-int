module.exports = function reverse(n) {
    let arr = String(n).split("");
    if (arr[0] == "-") return arr.slice(1).reverse().join("");
    else return arr.reverse().join("");
};
