function binSearch(arr, val) {
    var upperBound = arr.length[i] - 1;
    var lowerBound = 0;
    while (lowerBound <= upperBound) {
        var mid = Math.floor((upperBound + lowerBound) / 2);
        if (arr[mid] < val) {
            lowerBound = mid + 1;
        }
        else if (arr[mid] > data) {
            upperBound = mid - 1;
        }
        else {
            return mid;
        }
    }
    return -1;
}

function insertionsort(nums) {
    for (let i = 1; i < nums.length; i++) {
        let j = i - 1
        let temp = nums[i]
        while (j >= 0 && nums[j] > temp) {
          nums[j + 1] = nums[j]
          j--
        }
        nums[j+1] = temp
      }
      return nums;

}
function dispArr(arr) {
for (var i = 0; i < arr.length; ++i) {
console.log(arr[i] + " ");
if (i % 2 == 1) {
console.log("\nnums");

}
}
if (i % 2 != 0) {
    console.log("\n");     
}
 }
 var nums = [];
 for (var i = 0; i < 10; ++i) {
     nums[i] = Math.floor(Math.random() * 11);
 }
 function run() {
    var nums = [];
    for (var i = 0; i < 10; ++i) {
        nums[i] = Math.floor(Math.random() * 11);
    }
    dispArr(nums);
    var num = parseInt(prompt("Enter a number to search for(1 and 10): "));
    console.log();
    if (seqSearch(nums, num)) {
        console.log(num + " is in the array.");
    }
    else {
        console.log(num + " is not in the array.");
    }
    console.log();
    dispArr(nums);
    var minValue = findMin(nums);
    dispArr(nums);
    console.log();
    console.log("The minimum value is: " + minValue);
    var retVal = binSearch(nums, val);
    if (retVal >= 0) {
        console.log("Found " + val + " at position " + retVal);
    }
    else {
        console.log(val + " is not in array.");
    }
    var val = parseInt(prompt("Enter a value to count: "));
    var retVal = count(nums, val);
    console.log("Found " + retVal + " occurrences of " + val + ".");
}
