/*

bruteforce
[1,2,3,4,5,6,7], k = 3


[5,6,7,1,2,3,4]

















var rotate = function(nums, k) {
    let j = nums.length - k % nums.length;
    let arr = [...nums];
    for(let i=0; i<nums.length; i++) {
        if(j === nums.length) {
            j = 0;
        }
        nums[i] = arr[j];
        j++;
    }
};


 [1,2,3,4,5,6,7], k = 3
  ^
   ^ 

7 6 5 4 3 2 1
5 6 7 1 2 3 4

time: O(N)
space: O(1)

*/
var rotate = function(nums, k) {
    k %= nums.length 
     
    let reverse = function(i, j){
     while(i < j){
         let temp = nums[i]
         nums[i] = nums[j]
         nums[j] = temp
         i++
         j--
     }
    } 
     reverse(0, nums.length-1); 
      reverse(0, k-1) 
    reverse(k, nums.length-1)
     
 };