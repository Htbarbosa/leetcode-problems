function removeDuplicates (nums = []) {
    const length = nums.length;
    let left = 0;
    let right = 1;

    while (right < length) {
        if (nums[left] != nums[right]) {
            nums[++left] = nums[right];
        } else {
            right++;
        }
    }

    return left + 1;
}

removeDuplicates([1, 1, 2]);
removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
console.log("🚀 ~ removeDuplicates([1, 1, 2]);:", removeDuplicates([1, 1, 2]));
console.log("🚀 ~ removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);:", removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
// console.log("🚀 ~ removeDuplicates([1, 1, 2, 2, 3, 4, 4, 5, 5, 5, 5, 5]):", removeDuplicates([1, 1, 2]));
