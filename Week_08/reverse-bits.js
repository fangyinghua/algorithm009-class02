// 190. 颠倒二进制位
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let result = 0;
     for(let i = 0;i < 32;i++){
         result = (result << 1) + (n & 1);
         n >>= 1;
     }
     return result>>>0;//无符号右移 js 中无符号右移时，不管正数、负数都会首先将符号位替换成 0，然后再进行移位。也就是说，该运算符永远返回正整数。
 };

//  js 中，所有数字都保存为双精度浮点型。如果使用它们的话，
// js 不得不将操作数先转为整数，然后再进行运算。
// 那么 js 做位运算时，小数部分怎么处理呢  直接丢弃 小数部分不参与位运算
// js 中的 Number 类型实际上一个基于 IEEE 754 标准的双精度64位浮点数

// 但是 js 进行位运算时，会将操作数转成带符号位的 32 位比特序列（0，1），也就是补码。