/*
I: array, target
O: 타겟의 idx  or  -1
C:
1 <= secret.length <= 104
-10^4 <= secret[i], target <= 10^4
secret is sorted in a strictly increasing order.

E: x

ds: x 
algo: binary search

solution:
-l,r
-while
    -mid
    -if(mid에있는게 target보다 크면)r줄이고
    -else if(작으면)l줄이고
    -else return mid;

-return -1

time:O(logN)
space:O(1)

*/
var search = function (reader, target) {
    let l = 0, r = reader.length - 1;

    while(l < r){
        let mid = Math.floor(l+(r-l)/2);
        let curval = reader.get(mid);
        if(curval > target)r = mid - 1;
        else if(curval < target)l = mid + 1;
        else return mid;
    }
    if(target === reader.get(l))return l;
    return -1;
};
