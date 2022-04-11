/*
I:int 배열
O: 오른쪽보다 한개 작은 원소의 개수
C: 
1 <= arr.length <= 1000
0 <= arr[i] <= 1000

E: if(배열길이 === 1)return 0;
ds: map
algo: x
solution:

지나가면서 맵에다가 넣고
맵에서 키 하나씩 뽑아다가 그 키에 + 1한 값이 있으면 count++

time: O(N)
space: O(N)
*/

var countElements = function (arr) {
    let map = {};
    let count = 0;

    for(let i = 0; i < arr.length; i++){
        let curNum = arr[i];
        if(curNum in map)map[curNum]++;
        else map[curNum] = 1;
    }

    for(let [key,val] of Object.entries(map)){
        let nextNum = parseInt(key) + 1;
        if(nextNum in map)count += val;
    }
    return count;

};