/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    const max = Math.pow(2,31)-1, min = -Math.pow(2,31),num=parseInt(str);
       if(num>=max){
        return max;
    }
    if(num<=min){
        return min;
    }
    return isNaN(num)?0:num;
};