/*
I:
O:
C:
E:

ds:
algo:
solution:
root : 1

0 - 1(1) - 2 (2) - 3(3)
          - 4(2) - 5(3)
0,3,5

time:
space:
*/

var treeDiameter = function (edges) {
    let leaf = [];
    let map = {};
    for(let[x,y] of edges){
        if(x in map)map[x]++;
        else map[x] = 1;
        if (y in map) map[y]++;
        else map[y] = 1;
    }

    for(let [key, val] of Object.entries(map)){
        let pushNum = parseInt(key);
        if(val === 2)leaf.push(pushNum);
    }
    
};