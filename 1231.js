/*

13:00~
+1시간
+1시간
+1시간 30분. 포기^^!

I: 배열
O: 적당히 k 등분했을때 합이 가장 작은 그룹의 합.
C:
0 <= k < sweetness.length <= 10^4
1 <= sweetness[i] <= 10^5
E:
if(k === 0)return 다 더한 값.

ds:
algo:


배열크기 : N
k : K
time: O(NK) 
space: O(K)

*/
var maximizeSweetness = function (sweetness, k) {
  if (sweetness.length === k + 1) return findMin(sweetness);

  const index = new Array(k + 1);
  const sum = new Array(k + 1).fill(0); //해당하는 포인터까지의 합.
  let allSum = 0;
  let memo1 = [0, 0, 0]; //curSum, preSum, pnt;
  let memo2 = [0, 0, 0]; //curSum, preSum, pnt;
  for (let i = 0; i < k + 1; i++) index[i] = i;
  for (let i = 0; i < sweetness.length; i++) {
    allSum += sweetness[i];
    if (index[i] === 0 || index[i]) sum[i] = sweetness[i];
    sum[k] += sweetness[i];
  }
  console.log(sum, index);
  let mid = allSum / (k + 1);
  for (let i = sum.length - 1; i > 0; i--) {
    fixed(index, sum, mid, sweetness, memo1, endLine);
    fixed(index, sum, mid, sweetness, memo2, endLine + 1);

    let preCal = Math.abs(memo1[0] - mid) + Math.abs(sum[i + 1] - mid);
    let curCal = Math.abs(memo2[0] - mid) + Math.abs(sum[i + 1] - mid);
    //포기!
    index[i] = pnt - 1;
    console.log(sum, index);
  }

  return findMin(sum);
};;

function findMin(nums) {
  let min = Infinity;
  nums.map((a) => (min = Math.min(min, a)));
  return min;
}

function fixed(index, sum, mid, sweetness,memo,endLine){

  let pnt = index[i];
  //let endLine = i === sum.length - 1 ? sweetness.length : index[i + 1];
  let curSum = sum[i];
  let preSum = sum[i - 1];
  while (pnt < endLine) {
    let cur = Math.abs(sum[i] - mid);
    let next = Math.abs(sum[i] - sweetness[pnt] - mid);
    console.log(cur, next);
    if (cur > next) {
      curSum -= sweetness[pnt];
      preSum += sweetness[pnt];
      pnt++;
    } else break;
  }

  memo[0] = curSum;
  memo[1] = preSum;
  memo[2] = pnt;
}