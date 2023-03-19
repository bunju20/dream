/*
I: 배열
O: 타겟있는 인덱스 or -1
C:
E: if(배열길이 === 1)타겟에 따라 인덱스||-1

ds:x
algo:binary search

solution:

time: O(logN)
space:O(1)
*/

var search = function(nums, target) {
    if(nums.length === 1)  return (nums[0] === target) ?  0 : -1;

    let l = 0;
    let r = nums.length-1;

    while(l <= r){
        let mid = l + Math.floor((r-l)/2);
        if(nums[mid] === target)return mid;
        else if(nums[mid] < target)l = mid + 1;
        else r = mid - 1;
    }
    return -1;

};
