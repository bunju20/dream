/*
I: int array, int k
O: int (k보다 작은 두 수의 합 max)
C:
1 <= nums.length <= 100
1 <= nums[i] <= 1000
1 <= k <= 2000 
E:
if(nums.length === 1)return -1;

[34,23,  1,   24,75,33,54,8], k = 60

brute => O(N^2)
optimal => O(NlogN + N)

ds: x
algo: twopointer

solution:
-정렬
-let max
-while
    -curNum
    -if(크면은)r갱신
    -else 작으면 l갱신
    -else return 그값
-return curNum (없으면 -1);

배열의 길이: N
time: O(NlogN + N)
space: O(1)
*/

var twoSumLessThanK = function(nums, k) {
    if(nums.length == 1)return -1;  
    let max = 0;
  
    nums.sort((a,b) => a - b);
    let l = 0, r = nums.length - 1;
    while(l < r){
        let curNum = nums[l] + nums[r];
        console.log(curNum)
        if(curNum < k) max = Math.max(max,curNum);
        
        if(curNum < k)l++;
        else if(curNum >= k)r--;
    }
    return max === 0 ? -1 : max;
    
  };
