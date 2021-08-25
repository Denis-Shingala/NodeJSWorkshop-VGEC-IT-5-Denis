const twoSum = (nums, target) => {
    var sum = target;
    var i = 0;
    const index = [],
        temp = [];
    nums.forEach((value, index) => {
        temp[index] = value;
    });
    temp.sort((a, b) => {
        return b - a;
    });
    while (i < temp.length) {
        if (temp[i] <= sum) {
            sum -= temp[i];
            index.push(nums.indexOf(temp[i]));
        }
        i++;
    }
    if (sum != 0) {
        console.log("Not possible");
    } else {
        index.sort((a, b) => {
            return a - b;
        });
        return index;
    }
};
console.log(twoSum([2, 7, 11, 15], 9));
