/*
I: int 배열
O: 5000을 안넘는 최대 사과 개수
C:
1 <= weight.length <= 103
1 <= weight[i] <= 103

E: if(배열길이 === 1 && 그게 5000보다 작으면)return 1;

ds: x
algo: x

solution:
정렬하고 맨뒤에(제일큰거)갯수 감소 시키면서 갯수 갱신하고 반환

배열의 길이 : N
time: O(NlogN)
space: O(N)

*/

var maxNumberOfApples = function(weight) {
  if(weight.length === 1 && weight[0] <= 5000)return 1;
  weight.sort((a,b)=> a-b);
  let sum = 0;
  weight.map(c => sum += c);
  if(sum <= 5000)return weight.length;

  for(let i = weight.length - 1; i >= 0; i--){
      sum-= weight[i];
      if(sum <= 5000)return i;
  }
  return 0;  
};

/*

*/