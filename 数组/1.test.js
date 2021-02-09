const removeDuplicates = require('./1.删除排序数组中的重复项')

const tests = [
  [1, 1, 2]
]

tests.forEach(arr => {
  console.log(arr, removeDuplicates(arr))
})
