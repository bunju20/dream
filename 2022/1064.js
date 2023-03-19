/*
9:50 ~ 10 : 11

I: 정렬된 array
O: 인덱스랑 거기 값이랑 같은 index
C: 
1 <= arr.length < 104
-109 <= arr[i] <= 109

E:
if(arr.length === 1 && arr[0] !== 0)return -1 0이면 0반환
if(arr의 마지막 값 < 0)reutnr -1;

[-10,-5,0,3,7]
3

ds: x
algo: binary search

solution:
//edge case
- l, r
- while(l < r)
    - mid;
    - if(mid === arr[mid])return mid;
    - else if(mid < arr[mid]) l
    - else r
- return -1;

배열의 크기 : N
time: O(logN)
space: O(1)
*/

var fixedPoint = function (arr) {
  if (arr.length === 1) return arr[0] !== 0 ? -1 : 0;
  if (arr[arr.length - 1] < 0) return -1;

  let l = 0;
  let r = arr.length - 1;
  let min = Infinity;

  while (l <= r) {
    let mid = l + Math.floor((r - l) / 2);
    if (mid === arr[mid]) min = Math.min(min, mid);
    if (mid <= arr[mid]) r = mid - 1;
    else l = mid + 1;
  }
  return min === Infinity ? -1 : min;
};
