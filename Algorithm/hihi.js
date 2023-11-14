let nums = [1, 3, 4, 5, 6, 10];
let target = 7;
function searchInsert(nums, target) {
    for (let i = nums.length; i >= 0; i--) {
        if (nums[i] == target) {
            return nums.indexOf(target)
        }
        else if (nums[i] == target && target < nums[i - 1]) {
            nums.unshift(target)
        }
    }
    return nums.sort().indexOf(target)
}
console.log(searchInsert(nums, target));