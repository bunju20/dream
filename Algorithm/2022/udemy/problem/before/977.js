/*
[-4,-1,0,3,10]
       ^
       ^
[0,1,9,16,100]

return
[,16,100]
time: O(N)
space: O(N)

*/




























var sortedSquares = function(A) {
    let result = [];
    let l = 0;
    let r = A.length - 1;
    let p = r;

    while (l <= r) {
        if (A[l] ** 2 > A[r] ** 2) {
            result[p--] = A[l++] ** 2;
        } else {
            result[p--] = A[r--] ** 2;
        }
    }
    
    return result;
};