function isTwin(a, b) {
    a =  a.toLowerCase().replace(/[\W_]+/g, "");
    b = b.toLowerCase().replace(/[\W_]+/g, "");

    const string1 = a.split("").sort().join("");
    const string2 = b.split("").sort().join("");

    if(string1 === string2) {
        return true
    } else {
        return false
    }
}
console.log(isTwin("Hello", "world")); // false
console.log(isTwin("acb", "bca")); // true
console.log(isTwin("acb", "ba")); // false
console.log(isTwin("Lookout", "Outlook")); // true

