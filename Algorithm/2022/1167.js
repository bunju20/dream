/*
I: int arr
O: 더한애들의 합
C:
1 <= sticks.length <= 10^4
1 <= sticks[i] <= 10^4
E:
if(stick.length === 1)return stick[0];

ds: x
algo: x
solution:
정렬해서 작은것들끼리 계속 더하는 식으로 품.
ds:연결리스트로 풀면 개꿀일것같은데.
time: O(NlogN)
space: O(1)

*/

var connectSticks = function(sticks) {  
    if (sticks.length === 1) {
      return 0;
    }
    
    sticks.sort((a, b) => a - b);
    
    let sum = [], result = 0;
    
    while (sticks.length || (sum.length > 1)) {
      let cur = 0;
      for (let i = 0; i < 2; i++) {
        if (sticks[0] && ( sum[0] === undefined || (sticks[0] < sum[0]))) {
          cur += sticks[0];
          sticks.shift();
        } else {
          cur += sum[0];
          sum.shift();
        }
      }
      
      sum.push(cur);
      result += cur;
    }
    
    return result;
  };