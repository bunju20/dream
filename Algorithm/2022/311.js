/*
I: 2d array 2개
O: 2d array
C:

m == mat1.length
k == mat1[i].length == mat2.length
n == mat2[i].length
1 <= m, n, k <= 100
-100 <= mat1[i][j], mat2[i][j] <= 100

E: x

time:O(NMK)
space:O()

1(7) + 0(0) + 0(0)
1(0) + 0(0) + 0(0)

*/
var multiply = function(mat1, mat2) {
    const m = mat1.length;
    const k = mat1[0].length;
    const n = mat2[0].length;
    
    const res = [];
    
    for (let i = 0; i < m; i++) {
        res[i] = new Array(n).fill(0);
    }
    
    for (let i = 0; i < m; i++) {            
        for (let l = 0; l < k; l++) {
            if (mat1[i][l] != 0) {
                for (let j = 0; j < n; j++) {
                    if (mat2[l][j] != 0) res[i][j] += mat1[i][l] * mat2[l][j];
                }
            }
        }
    }
    
    return res;
};