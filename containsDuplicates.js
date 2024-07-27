var containsDuplicate = function (nums) {
    let duplicates = [];
    let uniqueNums = new Set();
    nums.forEach(num => {
        if (uniqueNums.has(num)) {
            duplicates.push(num);
        } else {
            uniqueNums.add(num);
        }
    });
    return duplicates.length > 0 ? true : false;
};

containsDuplicate([1, 2, 3, 1]);
