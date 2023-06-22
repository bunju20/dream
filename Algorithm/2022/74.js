/*
solution:

-l = 0, r = m*n - 1
-while(l <= r)
  -mid;
  -midNum = matrix[mid/n][mid%n];
  -if(target,midNum같음) return true;
  -else if(타겟이 더 작으면) r갱신
  -else l 갱신

-return false;

*/

var searchMatrix = function (matrix, target) {
  let m = matrix.length;
  let n = matrix[0].length;

  let l = 0;
  let r = n * m - 1;
  while (l <= r) {
    let mid = l + Math.floor((r - l) / 2);
    let midNum = matrix[Math.floor(mid / n)][mid % n];
    if (midNum === target) return true;
    else if (midNum < target) l = mid + 1;
    else r = mid - 1;
  }
  return false;
};

/*
5: 50 ~ 7 : 00
I: 2d array 
    - row는 정렬되어있고
    - row들의 맨 첫번째만, 위에서 아래로 정렬되어있음.
O: boolean
C: 
m == matrix.length
n == matrix[i].length
1 <= m, n <= 100
-10^4 <= matrix[i][j], target <= 10^4
E: x


ds: x
algo: binary

Input: matrix = 
[[1,3,5,7],
[10,11,16,20],
[23,30,34,60]]
target = 3
Output: true

idxL = [0,0]=> [0,0]
idxR = [0,0]=> [3,4]

solution:
main:
- idxL,idxR선언
- while(왼!==오)
    - midNum = 사이 칸 개수/2
    - midNum으로 midIdx 구함
    - if(mid값이 taget)return true;
    - else is(mid < target) l는 mid + 1
    - else  r = mid - 1;
- target있는지 확인하고 return fasle;


fuction findmidNum(num){
    row길이 - 왼
    row길이 * (오 col - 왼col - 1)
    오른쪽 row길이
}

배열크기 : N
time: O(N)
space: O(1)

내풀이:
var searchMatrix = function (matrix, target) {
  if (matrix.length === 1 && matrix.length === matrix[0].length)
    return matrix[0][0] === target ? true : false;
  let rowLen = matrix[0].length;
  let colLen = matrix.length;

  let idxL = [0, 0];
  let idxR = [colLen - 1, rowLen - 1];
  let mid = [0, 0];

  while (matrix[idxL[0]][idxL[1]] < matrix[idxR[0]][idxR[1]]) {
    let midNum = findMidNum(idxL, idxR, matrix);
    calculateMid(midNum, mid, idxL, matrix);

    if (matrix[mid[0]][mid[1]] === target) return true;
    else if (matrix[mid[0]][mid[1]] < target) {
      // 타겟이 더 큼
      if (mid[1] === rowLen - 1) {
        idxL[0] = mid[0] + 1;
        idxL[1] = 0;
      } else {
        idxL[0] = mid[0];
        idxL[1] = mid[1] + 1;
      }
    } else {
      //타겟이 더 작다.
      if (mid[1] === 0) {
        idxR[0] = mid[0] - 1;
        idxR[1] = rowLen - 1;
      } else {
        idxR[0] = mid[0];
        idxR[1] = mid[1] - 1;
      }
    }
    if (idxL[0] > colLen - 1 ||idxL[0] < 0 || idxL[1] > rowLen - 1 ||idxL[1] < 0)return false;
    if (idxR[0] > colLen - 1 ||idxR[0] < 0 ||idxR[1] > rowLen - 1 ||idxR[1] < 0)return false;
  }
  if (matrix[idxL[0]][idxL[1]] === target) return true;
  if (matrix[idxR[0]][idxR[1]] === target) return true;
  return false;
};

function findMidNum(idxL, idxR, matrix) {
  let top = matrix[0].length - idxL[1];
  let bottom = idxR[1] + 1;
  let middle = (idxR[0] - idxL[0] - 1) * matrix[0].length;
  return top + bottom + middle;
}

function calculateMid(midNum, mid, idxL, matrix) {
  let add = Math.floor(midNum / 2);
  let num = idxL[1] + add;
  mid[0] = idxL[0] + Math.floor(num / matrix[0].length);
  mid[1] = num % matrix[0].length;
}

*/
