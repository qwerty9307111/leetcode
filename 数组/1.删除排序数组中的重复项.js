// 删除排序数组中的重复项

/**
 * * 给定一个排序数组，你需要在 原地 删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。
 * * 不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。
 */

/**
 * 给定数组 nums = [1,1,2],
 * 函数应该返回新的长度 2, 并且原数组 nums 的前两个元素被修改为 1, 2。
 * 你不需要考虑数组中超出新长度后面的元素。
 */

const removeDuplicates = (nums) => {
  if (!nums || !nums.length) { return false }
  let len = 0
  for (let i = 1; i < nums.length; i++) {
    nums[len] = nums[i]
    len++
  }
  return nums
}

module.exports = removeDuplicates
