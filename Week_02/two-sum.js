
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) { 

    let objMap=new Map();
    for(var i=0,len=nums.length;i<len;i++){
        let key=nums[i];
        let objTar=target-key;
        if(objMap.has(objTar)){
            return [objMap.get(objTar),i]
        }
        objMap.set(key,i);
    }

    return [];
};