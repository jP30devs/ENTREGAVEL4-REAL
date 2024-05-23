function mdc(a, b) {
    while (b !== 0) {
        const temp = b;
    b = a % b;
    a = temp;
 }
    return a;
}
const numero1 = 24;

const numero2 = 36;

console.log("MDC de", numero1, "e", numero2, "é", mdc(numero1, numero2));

module.exports = mdc;