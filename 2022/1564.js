/*
12:54 ~

I: int array 2개
O: 최대로 넣을수 있는 박수의 개수
C:
n == warehouse.length
1 <= boxes.length, warehouse.length <= 105
1 <= boxes[i], warehouse[i] <= 109

E: x

무조건 작은걸 넣고 그걸 기준으로 구하면 나오는듯.

box를 정렬.
하나씩 뺴면서 확인하고
들어갈수 있는 애들의 개수를 구하는 것.


algo: x
ds: x
=> brute

solution:
-warebox를 계단형으로 만듦
-boxes를 정렬함
-for(warehouse)
    -if(되는 애면){
        count++;
        boxIdx++;
    }
-return count;

boxex = N
warehouse = M

time: O(NlogN + M)
space: O(1)

*/
var maxBoxesInWarehouse = function(boxes, warehouse) {
    let curLen = warehouse[0];
    for(let i = 0; i < warehouse.length; i++){
        if(warehouse[i] > curLen)warehouse[i] = curLen;
        else curLen = warehouse[i];
    }   

    boxes.sort((a,b) => a - b);
    let boxIdx = 0;
    let boxCount = 0;
    for(let i = warehouse.length - 1; i >= 0; i--){
        let curH = warehouse[i];
        if(curH >= boxes[boxIdx]){
            boxCount++;
            boxIdx++;
        }
    }
    return boxCount;
};