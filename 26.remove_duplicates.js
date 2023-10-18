// var nums = [1,1,2,3,4,4,4,5,6,7,7,8]
var nums = [1, 1]

/**
 * @param {number[]} nums
 * @return {number}
 */
// var removeDuplicates = function (nums) {
//     let k = 1

//     for (let i = 1; i < nums.length; i++) {
//         while (nums[i] == nums[k - 1] && i < nums.length) {
//             i++
//         }
//         if (i >= nums.length) break
//         if (i - k) {
//             nums[k] = nums[i]
//         }
//         k++
//     }

//     return k
// };
var removeDuplicates = function (nums) {
    let k = 1

    for (let i = 1; i < nums.length; i++) {
        if(nums[i]!=nums[i-1]){
            nums[k] = nums[i]
            k++
        }        
    }
    
    return k
};

let k = removeDuplicates(nums)
console.log(nums, k)