/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */

var myPow = function(x, n) {
    ans = 1;
    let flag = false;
    if (n < 0) {
        n = -n;
        flag = true;
    }
    while (n > 0) {
        if (n & 1 === 1) ans = ans * x;
        x = x * x;
        n /= 2;
    }
    if (flag === true) return 1.0 / ans;
    else return ans;
};