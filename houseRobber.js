var rob = function(nums) {
    let evenArray= nums.filter((_, index) => index % 2 === 0);
    console.log("🚀 ~ rob ~ evenArray:", evenArray);
    let oddArray = nums.filter((_, index) => index % 2 !== 0);
    console.log("🚀 ~ rob ~ oddArray:", oddArray);
    oddArray = oddArray.reduce((a, b) => a + b, 0);
    console.log("🚀 ~ rob ~ oddArray:", oddArray);
    evenArray = evenArray.reduce((a, b) => a + b, 0);
    console.log("🚀 ~ rob ~ evenArray:", evenArray);
    return Math.max(oddArray, evenArray);
};


// rob([1,2,3,1])
// rob([2,7,9,3,1])
rob([2,1,1,2])