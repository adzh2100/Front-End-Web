let nums=[10,5,13,18,51];

function print_single(num) {
    console.log(num);
}

function print(nums) {
    nums.forEach(print_single);
}

print(nums);
