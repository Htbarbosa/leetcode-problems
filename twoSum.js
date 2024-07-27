const twoSum = (nums, target) => {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [i, map.get(complement)];
        }
        map.set(nums[i], i);
        console.log("🚀 ~ twoSum ~ map:", map);
    }
    return null;
};

twoSum([2, 7, 11, 15], 9);

// console.log("🚀 ~ twoSum([2, 7, 11, 15], 9):", twoSum([2, 7, 11, 15], 9));
