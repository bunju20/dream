/*
12:40~

I: 이진 array
O: 가장 빈번한 애들의 인덱스 아무거나
C: 
5 <= nums.length <= 10^5
0 <= nums[i] <= 1

E: x
ds: x
algo: x

다른애들의 개수
자기개수 정해놓고 큰거 반환.

0,0,1,0,1,1,1,1
^ ^ ^ ^
0 0 1 0 1 1 1 1

solution:
let frontIdx, backIdx
frontIdx = 0;

-for
    -a만 바꿔서 돌리고 값의변화가 없으면 같은애갯수++ 
    -else 다른애 개수++; (backIdx갱신)
-return 둘중에 

배열의 길이 : N
time: O(N)
space: O(1)
*/

var guessMajority = function(reader) {
    let frontIdx = 0;
    let backIdx = 0;
    let same = 1, diff = 0;
    let origin = reader.query(0,1,2,3);

    for(let i = 1; i < reader.length(); i++){
        let curVal = reader.query(i,1,2,3)
        if(curVal === origin)same++;
        else {
            if(!diff)backIdx = i;
            diff++;
        }
    }
    if(same === diff)return -1;
    return (same > diff) ? frontIdx : backIdx;
};