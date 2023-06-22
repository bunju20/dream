var searchMatrix = function (matrix, target) {
    let m = matrix.length;
    let n = matrix[0].length;
  
    let l = 0;
    let r = n*m - 1;
    while(l <= r){
      let mid = l + Math.floor((r - l)/2);
      let midNum = matrix[Math.floor(mid/n)][mid%n];
      if(midNum === target)return true;
      else if(midNum < target) l = mid + 1;
      else r =  mid - 1;
    }
    return false;
  }