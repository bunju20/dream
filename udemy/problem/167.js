/*
I: int 배열 , 오름차순
O: 두쌍의 +1 인덱스
C:
2 <= numbers.length <= 3 * 104
-1000 <= numbers[i] <= 1000
numbers is sorted in non-decreasing order. 0
-1000 <= target <= 1000
The tests are generated such that there is exactly one solution. (무조건 답 존재.)
E:
배열길이 < 2일때 return -1;
if(배열길이 === 2)return [1,2];

ds: 스택, 큐 , ...
algo: two pointer

solution:
l = 0
r = 배열길이 - 1

-타켓 크기 따라서 l, r 이동시킴

N : 배열의 길이
time:  O(N)
space: O(1)
*/

var twoSum = function(numbers, target) {
    if(numbers.length === 2)return [1,2];
    
    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
        let sum = numbers[left] + numbers[right];
        if (sum === target) {
            return [left + 1, right + 1];
        } else if (sum > target) {
            right--;
        } else {
            left++;
        }
    }
};




/*
var twoSum = function(numbers, target) {
    let map = {};

    for(let i = 0; i < numbers.length; i++){
        if(map[numbers[i]] == undefined){
            let di = target - numbers[i];
            map[di] = i;
        }else{
            const preIdx = map[numbers[i]];
            return [preIdx+1,i+1];
        }

    }
    return;

};
*/