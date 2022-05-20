//two sum
let nums = [2,7,11,15];


const twoSum = (nums, target) => {
    let storage = {};
    for (let [index, num] of nums.entries()){
        if(storage[num] !== undefined) 
        return [storage[num], index];
        
        storage[target-num] = index;
    }
};
console.log(twoSum(nums,9));
//console.log(twoSum(numbers,9));