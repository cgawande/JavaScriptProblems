let twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (i == j)  continue;
            if (nums[i] + nums[j] == target) {
                return [i, j]
            }
        }
    }
};

console.log(twoSum([2,4,7,8,10],9))