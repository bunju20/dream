/*
I: target, int array
O: 
C:
E:

연속된 subarray, 그리고 target보다 크거나 같은 최소의 길이.
target = 7, 
[2,3,1,2,4,3]
         ^
           ^
curSum: 7
min: 2

ds: x
algo: two pointer
solution:

- while (r < 길이)
    - curSum += r의 값
    - while(curSum이 target 보다 작아질때까지) l++ , curSum-,
    - min 갱신
    - r++;
-return result;

time: O(N)
space: O(N)

*/

var minSubArrayLen = function(s, nums) {
    let left = 0;
    let right = 0;
    let sum = 0;
    let result = 0;
    
    while(right < nums.length) {
        sum += nums[right];
        
        while(sum >= s) {
            let len = right - left +1;
            if(result === 0 || len < result) result = len;
            sum -= nums[left];
            left++
        }
        right++;
    }
    return result;
};