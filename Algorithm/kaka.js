let nums = [1, 4];
let target = 4;

function searchInsert(nums, target) {
    if (nums.length !== 0) {
        for (let i = 0; i < nums.length; i++) {
            if (nums.indexOf(target) == nums.length) {
                return [nums.indexOf(target), nums.indexOf(target)];
            }
            if (nums.includes(target)) {
                if (nums[i + 1] == target) {
                    {
                        return [nums.indexOf(target), nums.indexOf(target) + 1]
                    }
                }
                if (nums[i + 1] > target) {
                    return [0, nums.indexOf(target)]
                }
            }
            else {
                return nums = [-1, -1]
            }
        }
    }
    if (nums.length == 1) {
        return nums = [0, 0]
    }
    else {
        return nums = [-1, -1]
    }
}

console.log(searchInsert(nums, target));
