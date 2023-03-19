/*
Input: length = 5, updates = 


[[1,3,2],[2,4,3],[0,2,-2]]

브루트포스 아닌걸로 접근할라면...
겹치는 부분 찾고 겹치는 부분은 따로 다 계산하는 방법?



Output: [-2,0,3,5,3]
*/

var getModifiedArray = function(length, updates) {
    let result = new Array(length+1);
    result.fill(0);
    updates.forEach(update => {
       result[update[0]] += update[2]; // all the items after this point will have this update added
       result[update[1]+1] -= update[2]; // after this current range, remove this update
    })
    
    for(let i = 1; i < length; i++) {
        result[i]+=result[i-1];
    }
    result.pop();
    return result;
};