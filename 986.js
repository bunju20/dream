/*
solution:
투포인터로 두개를 쓰는데.
가장 뒤에있는 시작점, 가장 앞에있는 끝점을 구해서 
범위에 해당하면 넣고.

if(두포인터의 끝점중 B가 더 크면)A++
else B++;

time: O(N+M)
space: O(N+M)

*/
var intervalIntersection = function (A, B) {
  let Ai = 0;
  let Bi = 0;
  let res = [];

  while (Ai < A.length && Bi < B.length) {
    let maxStart = Math.max(A[Ai][0], B[Bi][0]);
    let minEnd = Math.min(A[Ai][1], B[Bi][1]);

    if (maxStart <= minEnd) res.push([maxStart, minEnd]); // overlap found

    if (A[Ai][1] < B[Bi][1]) Ai++;
    else Bi++;
  }
  return res;
};
