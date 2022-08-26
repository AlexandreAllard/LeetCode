/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
    
    const hashset = new Set();
    let test = 0;

    for(let i=0; i<nums.length; i++){
        if (hashset.has(nums[i])){
            return true
        } else {
            hashset.add(nums[i])  
        } 
    }
    return false
};