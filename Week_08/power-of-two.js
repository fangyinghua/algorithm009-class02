/** 2 的幂在二进制中是有一个 1 后跟一些 0
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    return (n>0 && (n & (n-1))===0);
}